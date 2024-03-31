import IncomeTaxComputation from "./IncomeTax";

interface propsNetPayAfterTaxComputation {
  incomeValue: number | null;
}

export default function NetPayAfterTaxComputation ({ incomeValue }: propsNetPayAfterTaxComputation) {
  const calculateNetPayAfterTax = (incomeValue: number | null): string => {
    if (!incomeValue || isNaN(incomeValue)) {
      return "";
    }

    const resultIncomeTax = parseFloat(IncomeTaxComputation({ incomeValue }).replace(/,/g, ''));

    const netPayAfterTaxValue = incomeValue - resultIncomeTax;

    return netPayAfterTaxValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return calculateNetPayAfterTax(incomeValue);
};