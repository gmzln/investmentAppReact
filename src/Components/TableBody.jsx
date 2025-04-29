import { calculateInvestmentResults } from "../util/investment";

function TableBody({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const investmentResults = calculateInvestmentResults(
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  );

  return (
    <tbody>
      <tr>
        <td></td>
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  );
}

export default TableBody;
