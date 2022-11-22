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

      
      document.querySelector('.yearg1').value = dados['data_graf1'][0]
      document.querySelector('.monthg1').value = dados['data_graf1'][1]
      document.querySelector('.year2g1').value = dados['data_graf1'][2]
      document.querySelector('.month2g1').value = dados['data_graf1'][3]
    
      var titulo1 =[];
      var primeiro =[];
  
      for(let i=0;i < dados['consulta1g1'].length;i++){
        titulo1.push(dados['consulta1g1'][i]['Data']) 
        primeiro.push(dados['consulta1g1'][i]['total']) 
      }      
    
    
      var titulo2 = [];
      var segundo = [];
      for(let i=0;i < dados['consulta2g1'].length;i++){
        titulo2.push(dados['consulta2g1'][i]['Data']) 
        segundo.push(dados['consulta2g1'][i]['total']) 
      }     

      var yValues2= dados['consulta2g1'];
      console.log(yValues2)
      

      var titulo;
      if(titulo1.length>titulo2.length){
        titulo=titulo1
      }else if(titulo1.length<titulo2.length){
        titulo=titulo2
      }else{
        titulo=titulo1
      }


      let canvas = document.createElement('canvas');      
      canvas.classList.add('grafico');
      canvas.id = 'canvas1';   
     
    
        new Chart(canvas, {
          type: 'bar',
          data: {
            labels:titulo,
            datasets: [
              {
                label: "Últimos 7 dias",
                backgroundColor:["#8C4AF4"],
                data: primeiro
              }, {
                label: "Últimos 15 dias",
                backgroundColor: ["#E6E8EC"],
                data: segundo,
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
      document.querySelector('#grafico1').innerHTML = ""
      document.querySelector('#grafico1').appendChild(canvas);
      
    }
  ); 
  
}


renderizarGrafico("11","2018","12","2018");