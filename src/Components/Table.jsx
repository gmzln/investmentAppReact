import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table({ investmentResults }) {
  return (
    <table id="result">
      <TableHeader />
      <TableBody investmentResults={investmentResults} />
    </table>
  );
}

export default Table;
