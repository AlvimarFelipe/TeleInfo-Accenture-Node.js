import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';


//Gráfico de Linha
//Gráfico 2

var xValues1= ["6h","8h","10h","12h","14h","16h","18h","20h","22h","0h"];
var yValues1 = [5,6,7,7,6,6,8,9,10,10];
var yValues2 = [3,6.5,7,9,8,6,6,5,4,4];
var yValues3 = [2,3,3,5,5,6,6,5,3,3];
var ctx =;

const gradiant=ctx.createLinearGradient(0, 0, 0, 600);
gradiant.addColorStop(0,'rgba(161, 98, 247, 0.4)');
gradiant.addColorStop(1,'rgba(131, 130, 222, 0)');

const gradiant1=ctx.createLinearGradient(0, 0, 0, 600);
gradiant1.addColorStop(0,'rgba(249, 166, 68, 0.36)');
gradiant1.addColorStop(1,'rgba(249, 166, 68, 0)');

const gradiant2=ctx.createLinearGradient(0, 0, 0, 600);
gradiant2.addColorStop(0,'rgba(252, 103, 104, 0.56)');
gradiant2.addColorStop(1,'rgba(252, 103, 104, 0)');

new Chart(ctx, {
    type: 'line',
    data: {
      labels:xValues1,
      datasets: [
        {
          label: "Baixa Prioridade",
          backgroundColor:gradiant,
          borderColor:'rgba(131, 130, 222)',
          data: yValues1,
          tension: 0.5,
          fill: true,

        }, {
          label: "Media Prioridade",
          backgroundColor: gradiant1,
          borderColor:'rgba(249, 166, 68)',
          data: yValues2,
          tension: 0.5,
          fill: true,

        }, {
          label: "Alta Prioridade",
          backgroundColor: gradiant2,
          borderColor:'rgba(252, 103, 104)',
          data: yValues3,
          tension: 0.5,
          fill: true,

        }
      ]
    },
    options: 
    {
      plugins: {
        legend: {
            position: 'bottom',
        }
      },
      interaction: {
        intersect: false
      }
    }
});
