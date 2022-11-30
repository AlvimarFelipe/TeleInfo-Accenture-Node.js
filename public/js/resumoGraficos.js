
// --------------------------- //
//  INICIO DO RESUMO SELECT  //
// --------------------------- // 

const selectResumo = document.getElementsByClassName('yearResumo');
 
for (const selectAnoResumo of selectResumo) { 
  
  carregarSelectResumo(selectAnoResumo)  
  selectAnoResumo.addEventListener('change', function(){
    
    carregarSelectResumo(selectAnoResumo)      
  } )    
}

function carregarSelectResumo(selectAnoRes){  
    
  fetch("http://localhost:2000/selectdata?ano="+selectAnoRes.value,)
  .then((response) => {
    return response.json();
    })
    
    .then(res => {
      let dados = res;      
  
      let organizado = dados['selectdata'];
      let select = document.querySelector(selectAnoRes.name)
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
      
      let  ano = document.querySelector('.yearResumo').value;
      let  mes = document.querySelector('.monthResumo').value;

      renderizarResumo(mes,ano)
    }) 
    
}
    
document.querySelector('.monthResumo').addEventListener('change',() =>{
  let ano = document.querySelector('.yearResumo').value;
  let mes = document.querySelector('.monthResumo').value;
  renderizarResumo(mes,ano)
});

function renderizarResumo(mes,ano){      
  fetch("http://localhost:2000/dataresumo?mes="+mes+"&ano="+ ano)
  .then((response) => {
  return response.json();
  })
  .then((data) => {
      let dados = data;       
      let resultadoChamadas = document.querySelector('.resultadoChamadas')
      resultadoChamadas.innerHTML = ""
  
      let positions = ['Total', 'Fácil','Médio','Difícil']
      let classes = ['t', 'b','m','a']

      for(let i=0;i<positions.length;i++){
        let p = document.createElement('p');
        let span = document.createElement('span');
        p.textContent = positions[i]+': '
        span.classList.add('destaque');
        span.classList.add(classes[i]);
        span.innerHTML = dados[positions[i]][0]['quantidade']
        p.appendChild(span);
        resultadoChamadas.appendChild(p);
      }
   
      renderizarResultados("resultadoDias","dias","dias","quantidade","Dia:")
      renderizarResultados("resultadoFuncionarios","funcionarios","nome","soma","")
      renderizarResultados("resultadoClientes","clientes","nome","soma","")
    
      function renderizarResultados(div,position,data1,data2,text){
        document.querySelector('.'+div).innerHTML = ''
        let ol = document.createElement('ol');
      
        for (let i=0;i<dados[position].length;i++){
          let li = document.createElement('li')
          let span = document.createElement('span');
          span.classList.add('destaque');
          span.textContent = text + dados[position][i][data1]
         
          li.appendChild(span);
          li.textContent += ' = ';
      
          let span2 = document.createElement('span');
          span2.classList.add('destaque');
          span2.classList.add('t');
          span2.innerHTML =  dados[position][i][data2]
          li.appendChild(span2);
          ol.appendChild(li)
        }
        document.querySelector('.'+div).appendChild(ol)
      }
      
    }
  ); 
}



{/*    
      
   
     
      <div class="clientes">
          <h3>Cliente com Mais Ligações</h3>
          <ol>
              {{#clientes}}
              <li><span class="destaque">{{nome}}</span> = <span class="destaue t">{{soma}}</span> Chamados</li>
              <div class="li-line"></div>
              {{/clientes}}
          </ol>
      </div> */}

const boxIcon = document.querySelector('.resDiv')
const icon = document.querySelector('.icone')
boxIcon.addEventListener('click', () =>{

  if (icon.classList.contains('bi-caret-down-fill')){   
    icon.classList.remove('bi-caret-down-fill')
    icon.classList.add('bi-caret-up-fill')
    document.querySelector('.resumo').classList.remove('none');
  }else{
    icon.classList.remove('bi-caret-up-fill')
    icon.classList.add('bi-caret-down-fill')   
    document.querySelector('.resumo').classList.add('none');
  }
 
});