import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';




var xValues1 = ["05/9", "06/9", "07/9", "08/9", "09/9", "10/9", "11/9", "12/9"];
var yValues1 = [25, 35, 20, 15, 18, 14, 35, 40];
var yValues2 = [18, 10, 10, 18, 14, 17, 20, 7];


const ctx =;


new Chart(ctx, {
  type: 'bar',
  data: {
    labels: xValues1,
    datasets: [
      {
        label: "Últimos 7 dias",
        backgroundColor: ["#8C4AF4"],
        data: yValues1
      }, {
        label: "Últimos 15 dias",
        backgroundColor: ["#E6E8EC"],
        data: yValues2,
      }
    ]
  },
  options:
  {
    plugins: {
      legend: {
        position: 'bottom',
        align: 'start'
      }
    }
  }
});
