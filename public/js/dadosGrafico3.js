//Gráfico de piza : Horário de Pico
//Gráfico 3

        

const url = "/dadosgraficos"
fetch(url)
.then((response) => {
return response.json();
})
.then((data) => {
    dados = data;


    var xValues = data['gradico3_xValues1'];
    var yValues = data['grafico3_yValues1'];

    var ctx =document.getElementById('grafico3').getContext('2d');
    new Chart(document.getElementById("grafico3"), {
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
          responsive:false,
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
