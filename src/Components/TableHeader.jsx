function TableHeader() {
  const titles = [
    "Year",
    "Investment Value",
    "Interest(Year)",
    "Total Interest",
    "Invested Capital",
  ];

  return (
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index} scope="col">
            {title}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
