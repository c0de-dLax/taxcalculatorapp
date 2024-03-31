import TotalContributionsComputation from "./TotalConstributions";

interface propsTaxableIncomeComputation {
  incomeValue: number | null;
}

export default function TaxableIncomeComputation ({ incomeValue }: propsTaxableIncomeComputation) {
  const calculateTaxableIncome = (incomeValue: number | null): string => {
    if (!incomeValue || isNaN(incomeValue)) {
      return "";
    }
    
    const totalConstributionsResult = parseFloat(TotalContributionsComputation({ incomeValue }).replace(/,/g, ''));

    const taxableIncome = Math.max(incomeValue - totalConstributionsResult, 0);

    return taxableIncome.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return calculateTaxableIncome(incomeValue);
};