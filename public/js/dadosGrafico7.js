


//Gráfico4
//
let url = "http://localhost:2000/dadosgraficos3"


const g4 = document.getElementsByClassName('g4');
const year4 = document.getElementsByClassName('monthg4');

for (const grafico of year4) {    
  grafico.addEventListener('change', () => {   
    renderizarNome(g4[0].value,g4[1].value)
  })
}

function renderizarGrafico4(mes,ano){   
 

  fetch("http://localhost:2000/dadosgraficos4?mes="+mes+"&ano="+ ano)
  .then((response) => {
  return response.json();
  })
  .then((data) => {
      dados = data;

      console.log(dados)



      var xValues1= data['grafico4_xValues1'];
      var yValues1 = data['grafico4_yValues1'];
      var yValues2 =data['grafico4_yValues2'];
      var yValues3 = data['grafico4_yValues3'];

      let canvas = document.createElement('canvas');      
      canvas.classList.add('grafico');
      canvas.id = 'canvas7'; 


      var ctx =canvas.getContext('2d');
      new Chart(document.getElementById("grafico4"), {
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
}



// --------------------------- //
//  INICIO DO QUARTO SELECT  //
// --------------------------- // 

const selectsAno4 = document.getElementsByClassName('year4');
 
for (const selectAno of selectsAno4) { 
  carregarSelect4(selectAno)  
  selectAno.addEventListener('change', function(){
    carregarSelect4(selectAno)      
  } )    
}

function carregarSelect4(selectAno){  
  fetch("http://localhost:2000/selectdata?ano="+selectAno.value,)
  .then((response) => {
    return response.json();
    })
    
    .then(res => {
      let dados = res;      
        
      let organizado = dados['selectdata'];
      let select = document.querySelector(selectAno.name)
      select.innerHTML = ""
      for(let i=0;i<organizado.length;i++){   
        
        let opcao = document.createElement('option');      
        opcao.value = organizado[i]['mes'];
        opcao.innerHTML = nomesMeses[Number(organizado[i]['mes'])-1];
        if (i==0){
            opcao.selected = true;
        }
       
        select.appendChild(opcao);  
    
      }



      
      let  ano = document.querySelector('.year4').value;
      let  mes = document.querySelector('.monthg4').value;

      renderizarNome(mes,ano);

    }) 
}
    
function renderizarNome(mes,ano){
   
  fetch("http://localhost:2000/selectname?mes="+mes+"&ano="+ ano,)
  .then((response) => {
    return response.json();
  })
  .then(res => {
    let dados = res;      
   

    let nome = dados['nome']
    console.log(nome)
    let select = document.querySelector(".nameg4")
    select.innerHTML = ""
    for(let i=0;i<nome.length;i++){   
      
      let opcao = document.createElement('option');      
      opcao.value = nome[i]['id'];
      opcao.innerHTML = nome[i]['nome'];
      if (i==0){
        opcao.selected = true;
    }
      select.appendChild(opcao);  
  
    }
  })
  let  nome = document.querySelector('.nameg4').value;
  renderizarGrafico4(nome,mes,ano);
}