import SSSComputation from "./SSS";
import PhilHealthComputation from "./PhilHealth";
import PagIBIGComputation from "./PagIBIG";

interface propsTotalContributionsComputation {
  incomeValue: number | null;
}

export default function TotalContributionsComputation({ incomeValue }: propsTotalContributionsComputation) {
  const calculateTotalContributions = (incomeValue: number | null): string => {
    if (!incomeValue || isNaN(incomeValue)) {
      return "";
    }

    const resultSSS = SSSComputation({ incomeValue });
    const resultPhilHealth = PhilHealthComputation({ incomeValue });
    const resultPagIBIG = PagIBIGComputation({ incomeValue });

    // Check for undefined and replace commas
    const numericResultSSS = typeof resultSSS === 'string' ? parseFloat(resultSSS.replace(/,/g, '')) : 0;
    const numericResultPhilHealth = typeof resultPhilHealth === 'string' ? parseFloat(resultPhilHealth.replace(/,/g, '')) : 0;
    const numericResultPagIBIG = typeof resultPagIBIG === 'string' ? parseFloat(resultPagIBIG.replace(/,/g, '')) : 0;

    const totalContributions = numericResultSSS + numericResultPhilHealth + numericResultPagIBIG;

    return totalContributions.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return calculateTotalContributions(incomeValue);
}
