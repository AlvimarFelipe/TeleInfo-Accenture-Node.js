

//Gráfico de Barra
//Gráfico 1


let url = "http://localhost:2000/noticias"
          
fetch(url)
.then((response) => {
return response.json();
})
.then((data) => {
    dados = data;
    console.log(data)


  
    var xValues1= data['data'];
    var yValues1= data['valor'];
    var yValues2= data['valor2'];
    
    new Chart(document.getElementById("grafico0"), {
        type: 'bar',
        data: {
          labels:xValues1,
          datasets: [
            {
              label: "Últimos 7 dias",
              backgroundColor:["#8C4AF4"],
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
          legend: { display: false},
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
          },
          plugins: {
            legend: {
                position: 'bottom',
                align:'start'
            }
          }
        }
    });
  }
);




//Gráfico de Linha
//Gráfico 2

var xValues1= ["6h","8h","10h","12h","14h","16h","18h","20h","22h","0h"];
var yValues1 = [5,6,7,7,6,6,8,9,10,10];
var yValues2 = [3,6.5,7,9,8,6,6,5,4,4];
var yValues3 = [2,3,3,5,5,6,6,5,3,3];


var ctx =document.getElementById('grafico1').getContext('2d');
const gradiant=ctx.createLinearGradient(0, 0, 0, 600);
gradiant.addColorStop(0,'rgba(161, 98, 247, 0.4)');
gradiant.addColorStop(1,'rgba(131, 130, 222, 0)');

const gradiant1=ctx.createLinearGradient(0, 0, 0, 600);
gradiant1.addColorStop(0,'rgba(249, 166, 68, 0.36)');
gradiant1.addColorStop(1,'rgba(249, 166, 68, 0)');

const gradiant2=ctx.createLinearGradient(0, 0, 0, 600);
gradiant2.addColorStop(0,'rgba(252, 103, 104, 0.56)');
gradiant2.addColorStop(1,'rgba(252, 103, 104, 0)');

new Chart(document.getElementById("grafico1"), {
    type: 'line',
    data: {
      labels:xValues1,
      datasets: [
        {
          label: "Baixa Prioridade",
          backgroundColor:gradiant,
          borderColor:'rgba(131, 130, 222)',
          data: yValues1,
          radius:5,
          hoverRadius:10,
          tension: 0.5,
          fill: true,

        }, {
          label: "Media Prioridade",
          backgroundColor: gradiant1,
          borderColor:'rgba(249, 166, 68)',
          data: yValues2,
          radius:5,
          hoverRadius:10,
          tension: 0.5,
          fill: true,

        }, {
          label: "Alta Prioridade",
          backgroundColor: gradiant2,
          borderColor:'rgba(252, 103, 104)',
          data: yValues3,
          radius:5,
          hoverRadius:10,
          tension: 0.5,
          fill: true,

        }
      ]
    },
    options: 
    {
      legend: { display: false ,position:'botton' },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      },
    
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


//Gráfico 
//Gráfico 3

var xValues1 = ['manhã','tarde','noite'];
var yValues1 = [20,25,55];

new Chart(document.getElementById("grafico2"), {
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
      legend: { display: false},
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      },
      plugins: {
        legend: {
            position: 'bottom',
        }
      }
    }
});
//Gráfico
//
var xValues1= ["Jose","Ana","Matheus","Davi","Rodrigo","Anthony","Lucas","Daniela","Sandra","Jessica"];
var yValues1 = [2,2,3,3,2,3,4,3,1,5];
var yValues2 = [3,4,4,5,3,4,6,4,3,6];
var yValues3 = [5,4,4,7,3,6,7,4,4,8];



new Chart(document.getElementById("grafico3"), {
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
      legend: { display: false ,position:'botton' },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      },
    
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


