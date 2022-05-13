console.log('testing')


fetch("https://api.eva.pingutil.com/email?email=clau8812@gmail.com")
    .then(response => response.json()) 
    .then(data => {
        console.log(data)
        
    })