import TotalContributionsComputation from "./TotalConstributions";
import IncomeTaxComputation from "./IncomeTax";

interface propsTotalContributionsComputation {
  incomeValue: number | null;
}

export default function TotalDeductionsComputation ({ incomeValue }: propsTotalContributionsComputation) {
  const calculateTotalDeductions = (incomeValue: number | null): string => {
    if (!incomeValue || isNaN(incomeValue)) {
      return "";
    }

    const resultTotalContribution = parseFloat(TotalContributionsComputation({ incomeValue }).replace(/,/g, ''));
    const resultIncomeTax = parseFloat(IncomeTaxComputation({ incomeValue }).replace(/,/g, ''));

    const totalDeductionsValue = resultTotalContribution + resultIncomeTax;

    return totalDeductionsValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return calculateTotalDeductions(incomeValue);
};
