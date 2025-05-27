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

  let totalInterest = 0;

  return (
    <tbody>
      {investmentResults.map((data) => {
        totalInterest += data.interest;

        return (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{data.valueEndOfYear}</td>
            <td>{data.interest}</td>
            <td>{totalInterest}</td>
            <td>{data.annualInvestment}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
