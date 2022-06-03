import {
  useTable as useReactTable,
  useSortBy,
  useGlobalFilter,
  useAsyncDebounce,
} from 'react-table';

export const useTable = (columns, data) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    preGlobalFilteredRows,
  } = useReactTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const onChangeFilter = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined);
  }, 200);

  return {
    tableProps: {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      setGlobalFilter,
    },
    filter: {
      onChangeFilter,
      preGlobalFilteredRows,
    },
  };
};
