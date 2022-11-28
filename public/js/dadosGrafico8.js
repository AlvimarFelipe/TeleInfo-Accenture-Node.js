


//Gráfico8
//
let url = "http://localhost:2000/dadosgraficos3"


const g8 = document.getElementsByClassName('g8');
const year8 = document.getElementsByClassName('monthg8');

for (const grafico of year8) {    
  grafico.addEventListener('change', () => {   

    renderizarNome8(g8[0].value,g8[1].value)
  })
}

function renderizarGrafico8(nome,mes,ano){   

  fetch("http://localhost:2000/dadosgraficos8?mes="+mes+"&ano="+ ano+"&nome="+nome)
  .then((response) => {
  return response.json();
  })
  .then((data) => {
    dados = data;     

    let somaFacil = []
    let somaMedio= []
    let somaDificil = []
    let nomeFacil = []
    let nomeMedio = []
    let nomeDificil = []
        
    let i = 0
    let numeros =1
    while (i< dados['facil'].length) {
      if (dados['facil'][i]['id'] == numeros){
        nomeFacil.push(dados['facil'][i]['nome']);
        somaFacil.push(dados['facil'][i]['soma']);
        i++;
        numeros++;   
      }else{
        nomeFacil.push("AMB"+numeros);
        somaFacil.push(0);
        numeros++;      
      }      
    }    
  
    let j = 0
    let numerosMedio = 1
    while (j< dados['medio'].length) {
      if (dados['medio'][j]['id'] == numerosMedio){
        nomeMedio.push(dados['medio'][j]['nome']);
        somaMedio.push(dados['medio'][j]['soma']);
        j++;
        numerosMedio++;   
      }else{
        nomeMedio.push("AMB"+numerosMedio);
        somaMedio.push(0);
        numerosMedio++;      
      }      
    }
    
    let h = 0
    let numerosDificil = 1
    while (h< dados['dificil'].length) {
      if (dados['dificil'][h]['id'] == numerosDificil){
        nomeDificil.push(dados['dificil'][h]['nome']);
        somaDificil.push(dados['dificil'][h]['soma']);
        h++;
        numerosDificil++;   
      }else{
        nomeDificil.push("AMB"+numerosDificil);
        somaDificil.push(0);
        numerosDificil++;      
      }      
    }   
    
    var nome = [nomeFacil,nomeMedio,nomeDificil]
    let maior = nomeFacil
    for (let gg=0; gg < nome.length;gg++){      
      if (nome[gg].length >= maior.length){
        maior = nome[gg];
      }
    }
    
    let index = maior.indexOf(dados['nome']); 
    
    let primeiroFacil = somaFacil[index]
    let primeiroMedio = somaMedio[index]
    let primeiroDificil = somaDificil[index]     
    
    removeItemOnce(somaFacil,primeiroFacil)
    removeItemOnce(somaMedio,primeiroMedio)
    removeItemOnce(somaDificil,primeiroDificil)
    let sFacil  = []
    let sMedio = []
    let sDificil = []

    sFacil.push(primeiroFacil)
    sMedio.push(primeiroMedio)
    sDificil.push(primeiroDificil)

    for (const facil of somaFacil){
      sFacil.push(facil)          
    }   
    for (const medio of somaMedio){
      sMedio.push(medio)          
    }   
    for (const dificil of somaDificil){
      sDificil.push(dificil)          
    }   


    removeItemOnce(maior,dados['nome'])
    nome = []
    nome.push(dados['nome'])

    
    for (const nomes of maior){
      nome.push(nomes)          
    }   
      
      
  
    var yValues1 = sFacil;
    var yValues2 = sMedio;
    var yValues3 = sDificil;

    let canvas = document.createElement('canvas');      
    canvas.classList.add('grafico');
    canvas.id = 'canvas7'; 


    
    new Chart(canvas, {
        type: 'bar',
        data: {
          labels:nome,
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
        interaction: {
          intersect: false,
          mode: 'index',
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

    document.querySelector('.box8').innerHTML = ""
    document.querySelector('.box8').appendChild(canvas);

  }
  );
}


function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

// --------------------------- //
//  INICIO DO QUARTO SELECT  //
// --------------------------- // 

const selectsAno8 = document.getElementsByClassName('year8');
 
for (const selectAno of selectsAno8) { 
  carregarSelect8(selectAno)  
  selectAno.addEventListener('change', function(){
    carregarSelect8(selectAno)      
  } )    
}

function carregarSelect8(selectAno){  
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
      
      let  ano = document.querySelector('.year8').value;
      let  mes = document.querySelector('.monthg8').value;

      renderizarNome8(mes,ano);
    }) 
}
    
document.querySelector('.nameg8').addEventListener('change',() =>{
  let nome= document.querySelector('.nameg8').value;
  let ano = document.querySelector('.year8').value;
  let mes = document.querySelector('.monthg8').value;
  renderizarGrafico8(nome,mes,ano)
})

function renderizarNome8(mes,ano){
   
  fetch("http://localhost:2000/selectcliente?mes="+mes+"&ano="+ ano,)
  .then((response) => {
    return response.json();
  })
  .then(res => {
    let dados = res;     

    let nome = dados['nome']
    let select = document.querySelector(".nameg8")
    select.innerHTML = ""
    for(let i=0;i<nome.length;i++){         
      let opcao = document.createElement('option');      
      opcao.value = nome[i]['nome'];
      opcao.innerHTML = nome[i]['nome'];
      if (i==0){
        opcao.selected = true;
    }
      select.appendChild(opcao); 
  
    }

    let  nomedado = document.querySelector('.nameg8').value;
    renderizarGrafico8(nomedado,mes,ano);
  })

}

