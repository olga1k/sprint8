import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart, registerables } from "chart.js";
import { selectDailyExpenses } from "../features/expenses/dailyExpensesSlice";
import { useSelector } from "react-redux";
Chart.register(...registerables);
Chart.register(CategoryScale);

const Graph = () => {
  const expensesData = useSelector(selectDailyExpenses);
  const expensesAmounts = expensesData.map((expense) => expense.amount);
  const expensesLabels = expensesData.map((expense) => expense.day);
  const data = {
    labels: expensesLabels,
    datasets: [
      {
        label: "",
        data: expensesAmounts,
        backgroundColor: [
          "#ec765c",
          "#ec765c",
          "#ec765c",
          "#ec765c",
          "#ec765c",
          "#ec765c",
          "#75b5be",
        ],
        borderRadius: 3,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        type: "category",
        position: "bottom",
      },
      y: {
        type: "linear",
        position: "left",
      },
    },
    responsive: false,
  };

  return (
    <div className="graph-wrapper">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;
