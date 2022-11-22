


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


    var ctx =document.getElementById('grafico4').getContext('2d');
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
