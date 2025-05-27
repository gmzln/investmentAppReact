function TableHeader({ inputTitle }) {
  return (
    <thead>
      <tr>
        {inputTitle.map((header, index) => {
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
