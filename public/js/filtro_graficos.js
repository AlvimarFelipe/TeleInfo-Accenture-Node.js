

// const select1 = document.querySelector('.g1');

// select1.addEventListener('change', () =>{
   
//     fetch("http://localhost:2000/teste",
//     {
//         headers:{
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//         },
//         method: "POST",
//         body: JSON.stringify({
//          "g1_1": select1.value,        
//         })
//     })
//     .then(res => {
//         let myPromise = res.text()

//         myPromise.then((message) => {  
//             console.log( message);
//     });
//     })          
//     .catch(err => console.log('Error, with message:', err));
    
// });


const graficos_1 = document.getElementsByClassName('g1');


for (const grafico of graficos_1) {

    
    grafico.addEventListener('change', (e) => {

    
        
    fetch("http://localhost:2000/teste",
    {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
         "g1_mes": graficos_1[0].value, 
         "g1_ano": graficos_1[1].value        
              
        })
    })
    .then(res => {
        let myPromise = res.text()
        myPromise.then((message) => {  
            console.log( message);
              
     window.open('/home', targert = '_self')
    });
    })          
    .catch(err => console.log('Error, with message:', err));

    })
}

const graficos_2 = document.getElementsByClassName('g2');

for (const grafico of graficos_2) {
    grafico.addEventListener('change', (e) => {

    fetch("http://localhost:2000/teste2",
    {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
         "g2_mes": graficos_2[0].value, 
         "g2_ano": graficos_2[1].value        
              
        })
    })
    .then(res => {
        let myPromise = res.text()
        myPromise.then((message) => {  
            console.log( message);
    });
    })          
    .catch(err => console.log('Error, with message:', err));

    })
}

