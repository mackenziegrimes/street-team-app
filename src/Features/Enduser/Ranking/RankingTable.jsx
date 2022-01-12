import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useTable } from '../../../Hooks/useTable';

const TableContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  background-color: #dddddd;
  border-radius: 5px;
  padding: 5px;
  width: 100%;

  table {
    background-color: white;
    border-radius: 5px;
    border-spacing: 0;
    padding: 10px;
    width: 100%;
    color: ${({ theme }) => theme.colors.gray};

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    td {
      margin: 0;
      padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    }
  }

  tbody {
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  }
`;

export const RankingTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Rank',
        accessor: 'rank',
      },
      {
        Header: 'Avatar',
        accessor: 'avatar',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Total Points',
        accessor: 'points',
      },
    ],
    []
  );

  const {
    tableProps: { getTableProps, getTableBodyProps, rows, prepareRow },
  } = useTable(columns, data);

  if (!data.length) return null;

  return (
    <TableContainer>
      <table {...getTableProps()}>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
};

RankingTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};
RankingTable.defaultProps = {
  data: [],
};
