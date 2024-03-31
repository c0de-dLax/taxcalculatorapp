import TaxableIncomeComputation from "./TaxableIncome";

interface propsIncomeTaxComputation {
  incomeValue: number | null;
}

export default function IncomeTaxComputation ({ incomeValue }: propsIncomeTaxComputation) {
  const calculateIncomeTax = (incomeValue: number | null): string => {
    if (!incomeValue || isNaN(incomeValue)) {
      return "";
    }

    const resultTaxableIncome = parseFloat(TaxableIncomeComputation({ incomeValue }).replace(/,/g, ''));

    if (resultTaxableIncome < 20833) {
      return "0.00 - Exempted";
    } else if (resultTaxableIncome >= 20833 && resultTaxableIncome <= 33332) {
      const taxableIncomeCL = (resultTaxableIncome - 20833) * 0.15;
      return taxableIncomeCL.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else if (resultTaxableIncome >= 33333 && resultTaxableIncome <= 66666) {
      const taxableIncomeCL = 1875 + (resultTaxableIncome - 33333) * 0.2;
      return taxableIncomeCL.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else if (resultTaxableIncome >= 66667 && resultTaxableIncome <= 166666) {
      const taxableIncomeCL = 8541.8 + (resultTaxableIncome - 66667) * 0.25;
      return taxableIncomeCL.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else if (resultTaxableIncome >= 166667 && resultTaxableIncome <= 666666) {
      const taxableIncomeCL = 33541.8 + (resultTaxableIncome - 166667) * 0.3;
      return taxableIncomeCL.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
      const taxableIncomeCL = 183541.8 + (resultTaxableIncome - 666667) * 0.35;
      return taxableIncomeCL.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  };

  return calculateIncomeTax(incomeValue);
};