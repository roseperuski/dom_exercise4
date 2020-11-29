const form=document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const data = new FormData(form);
    const num = data.get("how-many");
    console.log(num);
    const coin = data.get('which-coin');
    console.log(coin);

    const list = document.querySelector('ul'); 
    
    for (let index = 0; index < num; index++) {
        let coinElement=document.createElement('li');
        coinElement.append(coin);
        list.append(coinElement);
        coinElement.classList.add('coin');
        
        
    }
    form.reset();
    


})