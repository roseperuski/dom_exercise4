const form=document.querySelector('form');

let count=0;
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
        coinElement.setAttribute('id',`coin-${count+1}`);
        coinElement.append(coin);
        list.append(coinElement);
        coinElement.classList.add('coin');
        count++;
        
        
    }
    form.reset();

    for (let index = 1; index <= count; index++) {
        let coinClick=document.getElementById(`coin-${index}`);
        //console.log(coinClick);
        coinClick.addEventListener('click', function(e){
            console.log(`clicked ${coinClick.id}`);
            coinClick.setAttribute('class', 'hidden');
            // console.log(clicked);
           // list.remove(coinClick.id);
        })
    }
    
    // let coinClick = document.querySelectorAll('.coin');
    // console.log(coinClick);


    
    // for (let i = 0; i < coinClick.length; i++) {
    //     console.log(coinClick[i]);
    //     coinClick[i].addEventListener('click', function(e){
    //     console.log("Clicked");
    //     list.remove(this.coin);
    //    coinClick.parentNode.removeChild(coinClick[i]);
    
    // })

    //   }

    
    
})

