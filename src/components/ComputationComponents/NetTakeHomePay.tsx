import TotalDeductionsComputation from "./TotalDeductions";

interface propsNetTakeHomePayComputation {
  incomeValue: number | null;
}

export default function NetTakeHomePayComputation ({incomeValue}: propsNetTakeHomePayComputation) {
  const calculateTotalTakeHomePay = (incomeValue: number | null): string => {
    if (incomeValue === null || incomeValue <=0 || isNaN(incomeValue)) {
      return "";
    }

    const resultToTalDeductions = parseFloat(TotalDeductionsComputation({ incomeValue }).replace(/,/g, ''));

    const totalTakeHomePayValue = incomeValue - resultToTalDeductions;

    if (totalTakeHomePayValue <= 0) {
    return incomeValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping:true,});
    } else {
      return totalTakeHomePayValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
  }

  return calculateTotalTakeHomePay(incomeValue);
};