//Gráfico de Linha : Prioriadade de Atendimento
//Gráfico 2
const g2 = document.getElementsByClassName('g2');
const year2 = document.getElementsByClassName('monthg2');

for (const grafico of year2) {    
  grafico.addEventListener('change', () => {   
    renderizarGrafico2(g2[0].value,g2[1].value)
  })
}

function renderizarGrafico2(mes,ano){  
          
  fetch("http://localhost:2000/dadosgraficos2?mes="+mes+"&ano="+ ano)
  .then((response) => {
  return response.json();
  })
  .then((data) => {
      let dados = data;  


      let id1 = [];
      let id2 = [];
      let id3 = [];
      let data1 = [];
      for (const dado of dados['records1']) {
        id1.push(dado['id'])  
        data1.push(dado['data'])            
      }

      for (const dado of dados['records2']) {
        id2.push(dado['id'])         
      }
      for (const dado of dados['records3']) {
        id3.push(dado['id'])         
      }  

      let canvas2 = document.createElement('canvas');      
      canvas2.classList.add('grafico');
      canvas2.id = 'canvas2'; 
      document.querySelector('.box2').innerHTML = ""
      document.querySelector('.box2').appendChild(canvas2);


      var ctx =document.getElementById('canvas2').getContext('2d');
      const gradiant=ctx.createLinearGradient(0, 0, 0, 600);
      gradiant.addColorStop(0,'rgba(161, 98, 247, 0.4)');
      gradiant.addColorStop(1,'rgba(131, 130, 222, 0)');

      const gradiant1=ctx.createLinearGradient(0, 0, 0, 600);
      gradiant1.addColorStop(0,'rgba(249, 166, 68, 0.36)');
      gradiant1.addColorStop(1,'rgba(249, 166, 68, 0)');

      const gradiant2=ctx.createLinearGradient(0, 0, 0, 600);
      gradiant2.addColorStop(0,'rgba(252, 103, 104, 0.56)');
      gradiant2.addColorStop(1,'rgba(252, 103, 104, 0)');

      
      new Chart(canvas2, {
          type: 'line',
          data: {
            labels:data1,
            datasets: [
              {
                label: "Baixa Prioridade",
                backgroundColor:gradiant,
                borderColor:'rgba(131, 130, 222)',
                data: id1,
                radius:5,
                hoverRadius:10,
                tension: 0.5,
                fill: true,

              }, {
                label: "Media Prioridade",
                backgroundColor: gradiant1,
                borderColor:'rgba(249, 166, 68)',
                data: id2,
                radius:5,
                hoverRadius:10,
                tension: 0.5,
                fill: true,

              }, {
                label: "Alta Prioridade",
                backgroundColor: gradiant2,
                borderColor:'rgba(252, 103, 104)',
                data: id3,
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
}

// --------------------------- //
//  INICIO DO SEGUNDO SELECT  //
// --------------------------- // 

const selectsAno2 = document.getElementsByClassName('year2');
 
for (const selectAno of selectsAno2) { 
  carregarSelect2(selectAno)  
  selectAno.addEventListener('change', function(){
    carregarSelect2(selectAno)      
  } )    
}

function carregarSelect2(selectAno){  
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
      let  ano = document.querySelector('.year2').value;
      let  mes = document.querySelector('.monthg2').value;

      renderizarGrafico2(mes,ano);

    }) 
}
    
























