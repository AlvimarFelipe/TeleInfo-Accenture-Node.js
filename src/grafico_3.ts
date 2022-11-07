import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';


//Gráfico circular
//Gráfico 3

var xValues1 = ['manhã','tarde','noite'];
var yValues1 = [20,25,55];
var ctx = ;

new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels:xValues1,
      datasets: [
        {
          label:"",
          backgroundColor:["#c1c2c7","#cbacfc","#8c4af4"],
          data: yValues1
        }
      ]
    },
    options: 
    {
      plugins: {
        legend: {
            position: 'bottom',
        }
      }
    }
});