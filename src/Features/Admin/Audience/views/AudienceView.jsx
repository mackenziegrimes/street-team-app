/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Papa from 'papaparse';
import { Icon, Spinner } from '../../../../Components/UI';
import { useTable } from '../../../../Hooks/useTable';
import { useQuery } from '@apollo/react-hooks';
import { NavBar } from '../../CreateActions/NavBar';
import { RootContainer } from '../../CreateActions/views/CreateActionPage';
import { useCurrentAuthUser } from '../../CreateActions/hooks/useCurrentAuthUser';
import { getAllSubscribersFromArtistUser } from '../queries';
import { useGradient } from '../../../../Hooks/useGradient';
import { Row, Col, Button } from 'react-bootstrap';
import Color from 'color';
import { ToastContainer, toast } from 'react-toastify';
import { getBackendApiUrl } from '../../../../utils/sharedUtils';
import { formatPhoneNumberIntl } from 'react-phone-number-input'

const BACKGROUND_COLOR = '#6850ea';

const TableContainer = styled.div`
  background-color: #dddddd;
  border-radius: 5px;
  padding: 2rem;

  table {
    background-color: white;
    border-radius: 5px;
    border-spacing: 0;
    padding: 10px;
    width: 100%;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    td {
      margin: 0;
      padding: 0.5rem 10px;
    }

    th {
      padding: 15px 10px;
      position: relative;
      text-decoration: ${props => (props.isSorted ? 'underline' : 'none')};
    }
  }

  thead {
    border-bottom: 1px solid #ebebeb;
    color: #6850ea;
    padding: 15px 0;
  }

  tbody {
    tr:nth-child(odd) {
      background-color: #f2f2f2;
    }
  }
`;

const SortIndicator = styled.span`
  position: absolute;
  top: 13px;
  left: 0;
`;

const TableHeaderText = styled.span`
  margin-left: 10px;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

const SearchLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 25px;
  font-weight: semi-bold;
  svg {
    margin: 0px 10px;
  }
`;

const ExportButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: semi-bold;
  background: none;
  border: none;
  svg {
    margin-left: 10px;
  }
`;

// Top banner styles
const AudienceCountContainer = styled.div({
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: ({ color }) => color,
  width: '25%',
  color: 'inherit',
  fontSize: ({ theme }) => theme.fontSizes.sm,
  // minHeight: '100%',
  padding: 10,
});

const TopBarContainer = styled.div(({ color, textColor, theme }) => {
  const fontColor = Color(textColor);
  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderRadius: '5px',
    background: useGradient({
      color,
      customLighten: 0.05,
      customDarken: 0.4,
    }),
    border: 'none',
    height: '85px',
    color: fontColor.hex(),
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
    // paddingTop: 30,
    // paddingBottom: 30
  };
});

const ContentContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  padding: '15px',
  minHeight: '100%',
});

const BottomBarContainer = styled.div(({ color, textColor, theme }) => {
  const fontColor = Color(textColor);
  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '35%',
    borderRadius: '5px',
    background: useGradient({
      color,
      customLighten: 0.01,
      customDarken: 0.1,
    }),
    border: 'none',
    height: '71px',
    color: 'fontColor.hex()',
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  };
});

const FacebookCustomAudienceDiv = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  padding: '15px',
  minHeight: '100%',
  fontSize: '20px',
});

const PrimaryButton = styled.button({
  backgroundColor: 'red',
});

const Points = styled.p(({ theme }) => {
  return {
    fontFamily: theme.fonts.primary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.xxl,
    margin: 0,
    lineHeight: '100%',
    color: 'inherit',
  };
});
const Title = styled.p(({ theme }) => {
  return {
    textAlign: 'left',
    wordWrap: 'break-word',
    fontSize: 30,
    fontWeight: theme.fontWeights.bold,
    margin: 0,
    marginLeft: '25px',
    color: 'inherit',
    fontFamily: 'Oswald',
  };
});

const formatTableData = data => {
  const endUserData =
    data.getArtistUser.artist.actionPages.items[0].subscribers.items.map(
      item => {
        const firstName = item?.enduser?.firstName || '';
        const lastName = item?.enduser?.lastName || '';

        return {
          email: item?.enduser?.email,
          createdAt: item?.createdAt,
          firstName,
          lastName,
          name: `${firstName} ${lastName}`,
          phone: item?.enduser?.phone || '',
          tags: item?.enduser?.tags || '',
          points: item?.enduserPageSubscriptionCompletedActions?.items.reduce(
            (a, b) => {
              const value = b?.action?.pointValue || 0;
              return value + a;
            },
            0
          ),
        };
      }
    );

  // console.log('All Enduser Data: ' + JSON.stringify(data.getArtistUser.artist.actionPages.items[0].subscribers.items));

  // arr[i].ranking = i / arr.length;
  // sort the enduser data by point values & assign rankings
  endUserData.sort((a, b) => (a.points < b.points ? 1 : -1));
  const enduserDataLength = endUserData.length;
  for (let i = 0; i < enduserDataLength; i++) {
    const rank = (i + 1) / enduserDataLength;
    endUserData[i].ranking = rank;
    endUserData[i].rankLabel =
      rank <= 0.05
        ? 'Diamond'
        : rank <= 0.1
        ? 'Platinum'
        : rank <= 0.25
        ? 'Gold'
        : rank <= 0.5
        ? 'Silver'
        : rank <= 0.75
        ? 'Bronze'
        : 'None';
  }
  console.log('All Enduser Data: ' + JSON.stringify(endUserData));
  return endUserData;
};

function Table({ tableProps }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableProps;

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isSorted={column.isSorted}
              >
                <SortIndicator>
                  <Icon name="FaSort" color="black" size={20} />
                </SortIndicator>
                <TableHeaderText>{column.render('Header')}</TableHeaderText>
                {/* Add a sort direction indicator */}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  tableProps: PropTypes.shape({
    getTableProps: PropTypes.func,
    getTableBodyProps: PropTypes.func,
    headerGroups: PropTypes.arrayOf(PropTypes.shape({})),
    rows: PropTypes.arrayOf(PropTypes.shape({})),
    prepareRow: PropTypes.func,
  }).isRequired,
};

export const AudienceView = () => {
  const [searchValue, setSearchValue] = useState('');
  const [tableData, setTableData] = useState([]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
        // assumes US no country code is provided
        Cell: props => <div> {props.value ? formatPhoneNumberIntl(props.value) || formatPhoneNumberIntl(`+1${props.value}`) : '' } </div>
      },
      // {
      //   Header: 'Tags',
      //   accessor: 'tags',
      // },
      {
        Header: 'Points',
        accessor: 'points',
      },
      {
        Header: 'Rank',
        accessor: 'rankLabel',
      },
      {
        Header: 'Join Date',
        accessor: 'createdAt',
        Cell: props => <div> {props.value ? new Date(props.value).toISOString().split("T")[0] : '' } </div>
      }
    ],
    []
  );

  const {
    tableProps,
    filter: { onChangeFilter },
  } = useTable(columns, tableData);

  const { userId, idToken } = useCurrentAuthUser();
  const { data, error, loading } = useQuery(getAllSubscribersFromArtistUser, {
    variables: {
      id: userId,
    },
  });

  useEffect(() => {
    console.log('tableData', tableData);
    if (data && !tableData.length) {
      const formattedData = formatTableData(data);
      setTableData(formattedData);
    }
  }, [data]);

  const onChangeSearch = e => {
    const value = e?.target?.value;
    setSearchValue(value);
    onChangeFilter(value);
  };

  const createLookAlikeAudience = async () => {
    console.log(`user id is`, userId);
    const apiUrl = getBackendApiUrl();
    const artistId = data?.getArtistUser?.artist.id;
    if (userId && idToken && artistId) {
      const fetchUrl = `${apiUrl}/create-facebook-audience`;
      const postBody = {
        userId,
        token: idToken,
        artistId,
      };
      try {
        console.log(`calling fetch with`, fetchUrl);
        await fetch(fetchUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postBody),
        })
          .then(rsp => rsp.json())
          .then(json => {
            if (json.error && json.error.message) {
              console.error(json.error.message);
            } else {
              console.log(`create-custom-audience response is`, json);
              toast.success('Created Custom Audience in Facebook!');
            }
          });
      } catch (err) {
        console.error(err);
        toast.error('Unable to create custom audience');
      }
    } else {
      toast.warn('Something went wrong, please try refreshing the page');
    }
  };

  const onExport = () => {
    const csv = Papa.unparse(tableData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    const today = new Date();

    link.setAttribute('href', url);
    link.setAttribute(
      'download',
      `Audience-${today.toLocaleDateString('en-US')}`
    );
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  let statusInfo = <h2>Something went wrong... try refreshing the page</h2>;
  if (loading) {
    statusInfo = <Spinner animation="border" role="status" variant="light" />;
  } else if (error || !data || !tableData.length) {
    statusInfo = <h2>No data found yet. Try visiting your fan page.</h2>;
  }
  return (
    <React.Fragment>
      <ToastContainer autoClose={3000} />
      <NavBar
        headerText="Your Audience"
        artistId={data?.getArtistUser?.artist.id}
        integrations={data?.getArtistUser?.artist.integrations.items}
      />
      <RootContainer fluid>
        <Row>
          <Col>
            <TopBarContainer color={BACKGROUND_COLOR} textColor="#ffffff">
              <div />
              <ContentContainer>
                <Title>All Fans</Title>
              </ContentContainer>
              <AudienceCountContainer color={BACKGROUND_COLOR}>
                <Icon name="FaUsers" />
                <Points>{tableData?.length || 0}</Points>
              </AudienceCountContainer>
            </TopBarContainer>
          </Col>
        </Row>
        {tableData?.length ? (
          <Row>
            <Col>
              <TableContainer>
                <ActionContainer>
                  <ExportButton type="button" onClick={onExport}>
                    Export{' '}
                    <Icon name="FaExternalLinkAlt" color="black" size={20} />
                  </ExportButton>
                  <FacebookCustomAudienceDiv>
                    <Button onClick={createLookAlikeAudience}>
                      Create StreetTeam Facebook Custom Audience
                      <Icon name="HiUsers" color="5e30b8" size={20} />
                    </Button>
                  </FacebookCustomAudienceDiv>
                  <SearchLabel>
                    Search <Icon name="FaSearch" color="black" size={20} />
                    <input
                      type="text"
                      value={searchValue}
                      onChange={onChangeSearch}
                    />
                  </SearchLabel>
                </ActionContainer>
                <Table tableProps={tableProps} />
              </TableContainer>
            </Col>
          </Row>
        ) : (
          statusInfo
        )}
      </RootContainer>
    </React.Fragment>
  );
};
