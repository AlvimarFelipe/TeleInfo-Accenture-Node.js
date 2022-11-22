//Gráfico de Linha : Prioriadade de Atendimento
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


    var ctx =document.getElementById('grafico2').getContext('2d');
    const gradiant=ctx.createLinearGradient(0, 0, 0, 600);
    gradiant.addColorStop(0,'rgba(161, 98, 247, 0.4)');
    gradiant.addColorStop(1,'rgba(131, 130, 222, 0)');

    const gradiant1=ctx.createLinearGradient(0, 0, 0, 600);
    gradiant1.addColorStop(0,'rgba(249, 166, 68, 0.36)');
    gradiant1.addColorStop(1,'rgba(249, 166, 68, 0)');

    const gradiant2=ctx.createLinearGradient(0, 0, 0, 600);
    gradiant2.addColorStop(0,'rgba(252, 103, 104, 0.56)');
    gradiant2.addColorStop(1,'rgba(252, 103, 104, 0)');

    
    new Chart(document.getElementById("grafico2"), {
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

