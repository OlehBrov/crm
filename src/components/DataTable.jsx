import { useMemo } from "react";
import { useFlexLayout, useResizeColumns, useTable } from "react-table";
import styled from "styled-components";

export const DataTable = ({ props }) => {
  const data = useMemo(() => (!props ? [] : props), [props]);
  const defaultColumn = useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 30, // width is used for both the flex-basis and flex-grow
      maxWidth: 200, // maxWidth is only used as a limit for resizing
      overflowWrap: "anywhere",
    }),
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Customer Name",
        accessor: "name",
        justify: "start",
        paddingLeft: 0,
      },
      {
        Header: "Company",
        accessor: "company",
        justify: "start",
      },
      {
        Header: "Country",
        accessor: "country",
        justify: "start",
      },
      {
        Header: "E-mail",
        accessor: "email",
        justify: "start",
      },
      {
        Header: "Phone",
        accessor: "phone",
        justify: "start",
      },
      {
        Header: "Status",
        accessor: "status",
        justify: "center",
        width: "50",
        paddingRight: 0,

        Cell: (props) => {
          return props.cellValue ? (
            <StatusIconActive>ACTIVE</StatusIconActive>
          ) : (
            <StatusIconInactive>INACTIVE</StatusIconInactive>
          );
        },
      },
    ],
    []
  );
  const tableInstance = useTable(
    { columns, data, defaultColumn },
    useResizeColumns,
    useFlexLayout
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const headerProps = (props, { column }) =>
    getStyles(props, column.align, column.justify, column.paddingLeft,);

  const cellProps = (props, { cell }) =>
    getStyles(
      props,
      cell.column.align,
      cell.column.justify,
      cell.column.overflowWrap,
      cell.column.textDecoration
    );

  const getStyles = (
    props,

    align = "start",
    justify = "flex-start",
        overflowWrap = "anywhere",
    display = "flex"
  ) => [
    props,
    {
      style: {
        justifyContent: justify,
        alignItems: align,
        display: display,
        overflowWrap: overflowWrap,
      },
    },
  ];

  console.log("getTableProps", getTableProps());
  return (
    <>
      <TableStyled {...getTableProps()}>
        <THeadStyled>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <TableHeaderRow {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <ThStyled {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </ThStyled>
                  ))
                }
              </TableHeaderRow>
            ))
          }
        </THeadStyled>
        <TBodyStyled {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <RowStyled {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      const value = cell.value;
                      
                      return (
                        <TDataStyled {...cell.getCellProps(cellProps)}>
                          {
                            // Render the cell contents
                            cell.render("Cell", { cellValue: value })
                          }
                        </TDataStyled>
                      );
                    })
                  }
                </RowStyled>
              );
            })
          }
        </TBodyStyled>
      </TableStyled>
    </>
  );
};

export const TableStyled = styled.table`
  max-width: 100%;
  border-collapse: collapse;
  /* padding-left: 30px;
  padding-right: 40px; */
`;
export const THeadStyled = styled.thead`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  letter-spacing: -0.01em;

  color: #b5b7c0;
  border-collapse: collapse;
  /* border: 3px solid grey; */
  &::after {
    content: "";
    position: absolute;
    border-bottom: 1px solid #eee;
    width: 100%;
    transform: translateX(-50%);
    top: 166px;
    left: 50%;
  }
    @media screen and (max-width: 1400px) {
     padding: 0 10px 15px;
  }
`;
export const TBodyStyled = styled.tbody`
  padding-left: 30px;
  padding-right: 45px;
`;
export const RowStyled = styled.tr`
  border-collapse: collapse;
  border-bottom: 1px solid #eee;
`;

export const TableHeaderRow = styled.tr`
  margin-bottom: 25px;
`
export const TDataStyled = styled.td`
       /* padding: 10px 15px;
  @media screen and (min-width: 1024px) {

     padding: 20px 30px;
  } */
`;
export const ThStyled = styled.th`
  /* padding: 0px 30px 20px; */
  text-align: start;
`;

export const StatusIconActive = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  width: 80px;
  height: 29px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #008767;
  background: rgba(22, 192, 152, 0.38);
  border: 1px solid #00b087;
  border-radius: 4px;
`;

export const StatusIconInactive = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  width: 80px;
  height: 29px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #df0404;
  background: #ffc5c5;
  border: 1px solid #df0404;
  border-radius: 4px;
`;
