interface propsSSSComputation {
  incomeValue: number | null;
}

export default function SSSComputation ({ incomeValue }: propsSSSComputation) {
  const calculateSSS = (incomeValue: number | null) => {
    if (!incomeValue || isNaN(incomeValue) || undefined) {
      return "";
    }

    if (incomeValue <= 4250) {
      return "180.00";
    } else if (incomeValue >= 29750) {
      return "1,350.00";
    } else {
      let baseAmount = 202.5;
      let increment = 22.5;

      for (let threshold = 4750; threshold <= 29750; threshold += 500) {
        if (incomeValue >= threshold && incomeValue < threshold + 500) {
          return (baseAmount + increment).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        baseAmount += increment;
      }
    };
  };

  return calculateSSS(incomeValue);
};