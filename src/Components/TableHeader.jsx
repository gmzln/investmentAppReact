const tableHeader = [
  "Year",
  "Investment Value",
  "Interest (Year)",
  "Total interest",
  "invested capital",
];

function TableHeader() {
  return (
    <thead>
      <tr>
        {tableHeader.map((header, index) => {
          return (
            <th key={index} scope="col">
              {header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TableHeader;
