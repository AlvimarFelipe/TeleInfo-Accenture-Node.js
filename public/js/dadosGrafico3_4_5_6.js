//Gráfico de piza : Horário de Pico
//Gráfico 3        
const g3 = document.getElementsByClassName('g3');
const year3 = document.getElementsByClassName('monthg3');

for (const grafico of year3) {    
  grafico.addEventListener('change', () => {   
    renderizarGrafico3(g3[0].value,g3[1].value)
  })
}

function renderizarGrafico3(mes,ano){  
          
  fetch("http://localhost:2000/dadosgraficos3?mes="+mes+"&ano="+ ano)
  .then((response) => {
  return response.json();
  })
  .then((data) => {
    let dados = data;

    let madrugadaBaixa = dados['madrugadas'][0][0]['valor'];
    let madrugadaMedia = dados['madrugadas'][1][0]['valor'];
    let madrugadaAlta  = dados['madrugadas'][2][0]['valor'] ;
    
    let manhaBaixa =  dados['manhas'][0][0]['valor'];
    let manhaMedia =  dados['manhas'][1][0]['valor'];
    let manhaAlta  =  dados['manhas'][2][0]['valor'];

    let tardeBaixa = dados['tardes'][0][0]['valor'];
    let tardeMedia = dados['tardes'][1][0]['valor'];
    let tardeAlta  = dados['tardes'][2][0]['valor'];

    let noiteBaixa = dados['noites'][0][0]['valor'];
    let noiteMedia = dados['noites'][1][0]['valor'];
    let noiteAlta  = dados['noites'][2][0]['valor'];

  var yvalues = [[madrugadaBaixa,madrugadaMedia,madrugadaAlta],[manhaBaixa,manhaMedia,manhaAlta],[tardeBaixa,tardeMedia,tardeAlta],[noiteBaixa,noiteMedia,noiteAlta]];

  document.querySelector('.box3').innerHTML = ''
  for (let i=0;i<yvalues.length;i++){
  

      let canvas = document.createElement('canvas');  
      let div = document.createElement('div');  
     
    
      canvas.classList.add('tamanho');
      let num = 2
      num++

      canvas.id = 'canvas'+num; 
      div.appendChild(canvas);
      
     
      document.querySelector('.box3').appendChild(div);
      new Chart(canvas, {
          type: 'pie',
          data: {
            labels: ['Baixa Prioridade','Media Prioridade','Alta Prioridade'],
            datasets: [
              {
                backgroundColor:['rgba(131, 130, 222)','rgba(249, 166, 68)','rgba(252, 103, 104)'],
                data:yvalues[i],
              }
            ] 
          },
          options: 
          {
            legend: { display: true ,
              position:'bottom' 
            },
            title: {
              display: true,
              text: 'Predicted world population (millions) in 2050'
            },
            interaction: {
              intersect: false,
              mode: 'dataset',
            }, 
            plugins: {
              title: {
                display: true
              },
              legend: {
                position: 'bottom',
                align:'center'
              }
            }
            
          }
      });
    }


      
    }
  ); 
}


// --------------------------- //
//  INICIO DO TERCEIRO SELECT  //
// --------------------------- // 

const selectsAno3 = document.getElementsByClassName('year3');
 
for (const selectAno of selectsAno3) { 
  carregarSelect3(selectAno)  
  selectAno.addEventListener('change', function(){
    carregarSelect3(selectAno)      
  } )    
}

function carregarSelect3(selectAno){  
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
      let  ano = document.querySelector('.year3').value;
      let  mes = document.querySelector('.monthg3').value;

      renderizarGrafico3(mes,ano);

    }) 
}
    
