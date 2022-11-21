const select = document.querySelector('#selecionado');

select.addEventListener('change', () =>{
   
    fetch("http://localhost:2000/selectdata",
    {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
         "id": select.value        
        })
    })
    .then(res => {
        let myPromise = res.text()

        myPromise.then((message) => {  
            console.log( message);
            document.querySelector('#teste').innerHTML = message;
    });
    })          
    .catch(err => console.log('Error, with message:', err));
    
    
});


