interface propsPagIBIGComputation {
  incomeValue: number | null;
}

export default function PagIBIGComputation ({ incomeValue }: propsPagIBIGComputation) {
  
  const calculatePagIBIG = (incomeValue: number | null): string => {
    if (!incomeValue || isNaN(incomeValue)) {
      return "";
    }

    if (incomeValue <= 1500) {
      const incomeValuePagIBIG = incomeValue * 0.01;
      return Math.min(incomeValuePagIBIG, 200.00).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
      const incomeValuePagIBIG = incomeValue * 0.02;
      return Math.min(incomeValuePagIBIG, 200.00).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  };

  return calculatePagIBIG(incomeValue);
};
