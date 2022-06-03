var SessionVariables = (function() {
  var token = "";
  var sessionContestId = "";
  var referrerId ="";
  var coolId = "";

  var getToken = function() {
    
    let token = sessionStorage.getItem('token');
    
    return token;    // Or pull this from cookie/localStorage
  };
  var getSessionContestId = function() {
    let sessionContestId = sessionStorage.getItem('sessionContestId');
    sessionContestId = sessionContestId.replaceAll('"','');
    return sessionContestId;    // Or pull this from cookie/localStorage
  };
  var getReferrerId = function() {
    let referrerId = sessionStorage.getItem('referrerId');
    if (referrerId)
    referrerId = referrerId.replaceAll('"','');
    return referrerId;    // Or pull this from cookie/localStorage
  };
  
  var getCoolId = function() {
    let coolId = sessionStorage.getItem('coolId');
    if (coolId)
    coolId = coolId.replaceAll('"','');
    return coolId;    // Or pull this from cookie/localStorage
  };
  
  var setReferrerId = function(referrerId1) {
         
    sessionStorage.setItem("referrerId", JSON.stringify(referrerId1));
    referrerId = referrerId1;
    // Also set this in cookie/localStorage
  };
  var setToken = function(token1) {
         
    sessionStorage.setItem("token", JSON.stringify(token1));
    token = token1;
    // Also set this in cookie/localStorage
  };
  var setSessionContestId = function(sessionContestIdTemp) {
    sessionStorage.setItem("sessionContestId", JSON.stringify(sessionContestIdTemp));
    sessionContestId = sessionContestIdTemp;     
    // Also set this in cookie/localStorage
  };
    var setCoolId = function(coolIdTemp) {
    sessionStorage.setItem("coolId", JSON.stringify(coolIdTemp));
    coolId = coolIdTemp;     
    // Also set this in cookie/localStorage
  };

  return {
    getToken: getToken,
    getSessionContestId: getSessionContestId,
    getReferrerId: getReferrerId,
    setToken: setToken,
    setSessionContestId: setSessionContestId,
    setReferrerId: setReferrerId,
    setCoolId: setCoolId
  }

})();
export default SessionVariables;