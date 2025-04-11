function TableBody({ count, investmentValue, year, totalInterest, capital }) {
  return (
    <tbody>
      <tr>
        <th scope="row">{count}</th>
        <td>{investmentValue}</td>
        <td>{year}</td>
        <td>{totalInterest}</td>
        <td>{capital}</td>
      </tr>
    </tbody>
  );
}

export default TableBody;
