
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

   
    }) 
}
    
document.querySelector('.nameg8').addEventListener('change',() =>{
  let nome= document.querySelector('.nameg8').value;
  let ano = document.querySelector('.year8').value;
  let mes = document.querySelector('.monthg8').value;
  renderizarResumo(nome,mes,ano)
});


const boxIcon = document.querySelector('.box-icon')
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