import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

function ChartComponent({ chart, term, type }) {
  const data = {
    labels: chart,
    datasets: [
      {
        type: type,
        data: term,
        label: 'Dataset 1',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
      },
      {
        type: type,
        data: term,
        label: 'Dataset 2',
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'white',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <Chart type="line" data={data} />
    </div>
  );
}

export default ChartComponent;
