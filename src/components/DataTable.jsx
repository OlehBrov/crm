import { useEffect, useMemo, useState } from "react";
import { getCustomersData } from "../service/fetchAPI";
import { useTable } from "react-table";

export const DataTable = () => {
  const [customersData, setCustomersData] = useState();
  const data = useMemo(
    () => (!customersData ? [] : customersData),
    [customersData]
  );
  useEffect(() => {
    getCustomersData().then((response) => {
      console.log("response then", response);
      setCustomersData(response.data);
    });
  }, []);
  const columns = useMemo(
    () => [
      {
        Header: "Customer Name",
        accessor: "name",
      },
      {
        Header: "Company",
        accessor: "company",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "E-mail",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );
  console.log("customersData1", customersData);
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  console.log("customersData2", customersData);
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {// Loop over the header rows
       headerGroups.map(headerGroup => (
         // Apply the header row props
         <tr {...headerGroup.getHeaderGroupProps()}>
           {// Loop over the headers in each row
           headerGroup.headers.map(column => (
             // Apply the header cell props
             <th {...column.getHeaderProps()}>
               {// Render the header
               column.render('Header')}
             </th>
           ))}
         </tr>
       ))}
        </thead>
        <tbody  {...getTableBodyProps()}>
          {// Loop over the table rows
       rows.map(row => {
         // Prepare the row for display
         prepareRow(row)
         return (
           // Apply the row props
           <tr {...row.getRowProps()}>
             {// Loop over the rows cells
             row.cells.map(cell => {
               // Apply the cell props
               return (
                 <td {...cell.getCellProps()}>
                   {// Render the cell contents
                   cell.render('Cell')}
                 </td>
               )
             })}
           </tr>
         )
       })}
        </tbody>
      </table>
    </>
  );
};
