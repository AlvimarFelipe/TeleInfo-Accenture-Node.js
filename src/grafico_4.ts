import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

//Gráfico em barra
//Gráfico 4
var xValues1= ["Jose","Ana","Matheus","Davi","Rodrigo","Anthony","Lucas","Daniela","Sandra","Jessica"];
var yValues1 = [2,2,3,3,2,3,4,3,1,5];
var yValues2 = [3,4,4,5,3,4,6,4,3,6];
var yValues3 = [5,4,4,7,3,6,7,4,4,8];
var ctx = ;


new Chart(ctx, {
    type: 'bar',
    data: {
      labels:xValues1,
      datasets: [
        {
          label: "Baixa Prioridade",
          backgroundColor:'rgba(131, 130, 222)',
          data: yValues1,
        }, {
          label: "Media Prioridade",
          backgroundColor: 'rgba(249, 166, 68)',
          data: yValues2,
        }, {
          label: "Alta Prioridade",
          backgroundColor: 'rgba(252, 103, 104)',
          data: yValues3,
        }
      ]
    },
    options: 
    {
      plugins: {
      title: {
        display: true
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
    }
});