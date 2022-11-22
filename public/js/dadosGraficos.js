//Gráfico de Barra
//Gráfico 1




const graficos_1 = document.getElementsByClassName('g1');
 
for (const grafico of graficos_1) {    
  grafico.addEventListener('change', (e) => {   
    renderizarGrafico(graficos_1[0].value,graficos_1[1].value,graficos_1[2].value,graficos_1[3].value )
  })
}

function renderizarGrafico(mes,ano,mes2,ano2){  
          
  fetch("http://localhost:2000/dadosgraficos?mes="+mes+"&ano="+ ano + "&mes2="+mes2+"&ano2="+ ano2)
  .then((response) => {
  return response.json();
  })
  .then((data) => {
      dados = data;  

      
      document.querySelector('.year').value = dados['data_graf'][0]
      document.querySelector('.month').value = dados['data_graf'][1]
      document.querySelector('.year2').value = dados['data_graf'][2]
      document.querySelector('.month2').value = dados['data_graf'][3]
    
      var primeiros =[];
      var segundo =[];
  
      for(let i=0;i < dados['funcionarios'].length;i++){
        primeiros.push(dados['funcionarios'][i]['Data']) 
        segundo.push(dados['funcionarios'][i]['total']) 
      }      
    
    
      var yValues2= dados['funcionarios2'];
      var valores2 = []
      for(let i=0;i < dados['funcionarios2'].length;i++){
        valores2.push(dados['funcionarios2'][i]['total']) 
       
      }     
      console.log(yValues2)
      
      let canvas = document.createElement('canvas');      
      canvas.classList.add('grafico');
      canvas.id = 'grafico0';   
     
    
        new Chart(canvas, {
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
                data: valores2,
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
      document.querySelector('#canvaGG').innerHTML = ""
      document.querySelector('#canvaGG').appendChild(canvas);
      
    }
  ); 
  
}


renderizarGrafico("11","2018","12","2018");



//Gráfico de Linha
//Gráfico 2

const url = "http://localhost:2000/dadosgraficos"
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
