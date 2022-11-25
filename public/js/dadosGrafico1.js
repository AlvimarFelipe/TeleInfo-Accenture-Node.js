//Gráfico de Barra
//Gráfico 1
const zeroFormat = n => {
  return ('0' + n).slice(-2) 
}

const graficos_1 = document.getElementsByClassName('g1');
const graficos_meses = document.getElementsByClassName('meses');
 
for (const grafico of graficos_meses) {    
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
      
      // document.querySelector('.yearg1').value = dados['data_graf1'][0]
      // document.querySelector('.monthg1').value = dados['data_graf1'][1]
      // document.querySelector('.year2g1').value = dados['data_graf1'][2]
      // document.querySelector('.month2g1').value = dados['data_graf1'][3]
    
      var titulo1 =[];
      var primeiro =[];
   
      let dataChamada = dados['consulta1g1'][0]['data']
      dataChamada = dataChamada.substring(dataChamada.length-2, dataChamada.length)
     
      if (Number(dataChamada) > 1){
        for(let j=1 ; j<Number(dataChamada);j++){
          titulo1.push(zeroFormat(j))
          primeiro.push(0)
        }       
      }
   
      for(let i=0;i < dados['consulta1g1'].length;i++){       
        titulo1.push(dados['consulta1g1'][i]['data']) 
        primeiro.push(dados['consulta1g1'][i]['total']) 
      }        
      
    
      var titulo2 = [];
      var segundo = [];

      let dataChamada2 = dados['consulta2g1'][0]['data']
      dataChamada2 = dataChamada2.substring(dataChamada2.length-2, dataChamada2.length)
     
      if (Number(dataChamada2) > 1){
        for(let h=1 ; h<Number(dataChamada2);h++){
          titulo2.push(zeroFormat(h))
          segundo.push(0)    
        }            
      }

      for(let i=0;i < dados['consulta2g1'].length;i++){
        titulo2.push(dados['consulta2g1'][i]['data']) 
        segundo.push(dados['consulta2g1'][i]['total']) 
      }     

      var yValues2= dados['consulta2g1'];    

      var titulo;
      
      if(titulo1.length>=titulo2.length){
        titulo=titulo1
      }else{
        titulo=titulo2
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
                label: "",
                backgroundColor:["#8C4AF4"],
                data: primeiro
              }, {
                label: "",
                backgroundColor: ["rgba(249, 166, 68)"],
                data: segundo,
              }
            ]
          },
          options: 
          {
            legend: { display: false},
            title: {
              display: true
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

// --------------------------- //
//  INICIO DO PRIMEIRO SELECT  //
// --------------------------- // 

let nomesMeses = ['Janeiro', 'Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro', 'Dezembro']

const selectsAno = document.getElementsByClassName('year');
 
for (const selectAno of selectsAno) { 
  carregarSelect(selectAno)  
  selectAno.addEventListener('change', function(){
    carregarSelect(selectAno)      
  })   
}

function carregarSelect(selectAno){  
  fetch("http://localhost:2000/selectdata?ano="+selectAno.value,)
  .then((response) => {
    return response.json();
    })
    .then(res => {
      let meses = res;      

      let organizado = meses['selectdata'];
      let select = document.querySelector(selectAno.name)
      select.innerHTML = ""
      for(let i=0;i<organizado.length;i++){     
        
        let opcao = document.createElement('option');
      
        opcao.value = organizado[i]['mes'];
        opcao.innerHTML = nomesMeses[Number(organizado[i]['mes'])-1];
        opcao.selected = true;

        select.appendChild(opcao);  
    
      }
      let mes =  document.querySelector('.monthg1').value ;
      let ano = document.querySelector('.yearg1').value ;
      let mes2 =   document.querySelector('.month2g1').value;
      let ano2 =  document.querySelector('.year2g1').value;          
  
      renderizarGrafico(mes,ano,mes2,ano2);  

    })
 
}
    


