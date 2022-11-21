//Gráfico de Barra
//Gráfico 1




const url = "http://localhost:2000/dadosgraficos"
          
fetch(url)
.then((response) => {
return response.json();
})
.then((data) => {
    dados = data;
    console.log(dados['data_graf'])

    document.querySelector('.year').value = dados['data_graf'][0]
    document.querySelector('.month').value = dados['data_graf'][1]
 

    var primeiros =[];
    var segundo =[];

    for(let i=0;i < dados['funcionarios'].length;i++){
      primeiros.push(dados['funcionarios'][i]['Data']) 
      segundo.push(dados['funcionarios'][i]['total']) 
    }
    
  console.log(dados['funcionarios'].length)
  
    var yValues2= data['grafico1_yValues2'];
    
    new Chart(document.getElementById("grafico0"), {
        type: 'bar',
        data: {
          labels:primeiros,
          datasets: [
            {
              label: "Últimos 7 dias",
              backgroundColor:["#8C4AF4"],
              data: segundo
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


fetch(url)
.then((response) => {
return response.json();
})
.then((data) => {
    dados = data;

    var xValues1= data['grafico2_xValues1'];
    var yValues1 = data[ 'grafico2_yValues1'];
    var yValues2 = data['grafico2_yValues2'];
    var yValues3 = data['grafico2_yValues3'];


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
  }
);




//Gráfico 
//Gráfico 3



          
fetch(url)
.then((response) => {
return response.json();
})
.then((data) => {
    dados = data;


    var xValues = data['gradico3_xValues1'];
    var yValues = data['grafico3_yValues1'];

    var ctx =document.getElementById('grafico2').getContext('2d');
    new Chart(document.getElementById("grafico2"), {
        type: 'doughnut',
        data: {
          labels:xValues,
          datasets: [
            {
              label:"",
              backgroundColor:["#c1c2c7","#cbacfc","#8c4af4"],
              data: yValues
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


}
);



//Gráfico4
//



          
fetch(url)
.then((response) => {
return response.json();
})
.then((data) => {
    dados = data;




    var xValues1= data['grafico4_xValues1'];
    var yValues1 = data['grafico4_yValues1'];
    var yValues2 =data['grafico4_yValues2'];
    var yValues3 = data['grafico4_yValues3'];


    var ctx =document.getElementById('grafico3').getContext('2d');
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

}
);
