export const getHeadersForIamAuth = async (
  { credentials, region, url },
  operation
) => {
  const service = SERVICE;

  const creds =
    typeof credentials === 'function' ? credentials.call() : credentials || {};

  if (creds && typeof creds.getPromise === 'function') {
    await creds.getPromise();
  }

  const { accessKeyId, secretAccessKey, sessionToken } = await creds;

  const { host, path } = Url.parse(url);

  const formatted = {
    ...formatAsRequest(operation, {}),
    service,
    region,
    url,
    host,
    path,
  };

  const { headers } = Signer.sign(formatted, {
    access_key: accessKeyId,
    secret_key: secretAccessKey,
    session_token: sessionToken,
  });

  return {
    ...headers,
    [USER_AGENT_HEADER]: USER_AGENT,
  };
};
