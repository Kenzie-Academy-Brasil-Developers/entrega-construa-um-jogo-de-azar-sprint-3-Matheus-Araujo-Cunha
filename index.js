


let pointUser = document.getElementById('pointUser');
let pointPc = document.getElementById('pointPc');

let playerChange = 0;
let pcChange = 0;



let pointPlayer = 0;
let pointBot = 0;

let msg = document.getElementById('resultMsg')

let opacidade = document.createAttribute('o')

function roll(change){
    playerChange = change;

    pcChange = Math.floor(Math.random() * (4 - 1) + 1);
    
    msg.style.padding = '20px'

    if(playerChange === pcChange){
        
        msg.innerText = 'Ops, houve um empate!'
        
    } else if (playerChange - pcChange === -2 || playerChange - pcChange === 1){   
        msg.innerText = 'Jogador Venceu!'
         pointPlayer++
        
    } else {
        msg.innerText = 'Computador venceu!';
         pointBot++; 
    }


    pointUser.innerHTML = pointPlayer;
    pointPc.innerHTML = pointBot;
}





   
