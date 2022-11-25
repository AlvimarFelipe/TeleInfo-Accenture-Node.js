//Gráfico de piza : Horário de Pico
//Gráfico 3        


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





    let canvas3 = document.createElement('canvas');      
    canvas3.classList.add('grafico');
    canvas3.id = 'canvas3'; 
    document.querySelector('.box3').innerHTML = ''
    document.querySelector('.box3').appendChild(canvas3);


    new Chart(canvas3, {
        type: 'doughnut',
        data: {
          labels: ['Madrugada','Manhã','tarde','Noite'],
          datasets: [
            {
              label: "Baixa Prioridade",
              backgroundColor:'rgba(131, 130, 222)',
              data:[madrugadaBaixa,manhaBaixa,tardeBaixa,noiteBaixa],
            }, {
              label: "Media Prioridade",
              backgroundColor: 'rgba(249, 166, 68)',
              data: [madrugadaMedia,manhaMedia,tardeMedia,noiteMedia],
            }, {
              label: "Alta Prioridade",
              backgroundColor: 'rgba(252, 103, 104)',
              data: [madrugadaAlta,manhaAlta,tardeAlta,noiteAlta],
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
renderizarGrafico3("0","2019")