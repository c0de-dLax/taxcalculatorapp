interface propsPhilHealthComputation {
  incomeValue: number | null;
}

export default function PhilHealthComputation ({ incomeValue }: propsPhilHealthComputation) {
  const calculatePhilHealth = (incomeValue: number | null): string => {
    if (!incomeValue || isNaN(incomeValue)) {
      return "";
    }

    if (incomeValue <= 10000) {
      return "500.00";
    } else if (
      incomeValue > 10000 &&
      incomeValue < 100000
    ) {
      const incomeValuePhilHealth = incomeValue * 0.025;
      return incomeValuePhilHealth.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
      return "5,000.00";
    }
  };

  return calculatePhilHealth(incomeValue);
};