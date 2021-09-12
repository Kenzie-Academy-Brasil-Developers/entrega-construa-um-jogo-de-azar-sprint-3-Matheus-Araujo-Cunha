




let pointUser = document.getElementById('pointUser');
let pointPc = document.getElementById('pointPc');

let playerChange = 0;
let pcChange = 0;

let pointPlayer = 0;
let pointBot = 0;


const resultMsg = document.getElementById('resultMsg')

function roll(change){
    playerChange = change;

    pcChange = Math.floor(Math.random() * (4 - 1) + 1);

    if(playerChange === pcChange){
        resultMsg.innerText = 'Ops, houve um empate!'
        
    } else if (playerChange - pcChange === -2 || playerChange - pcChange === 1){   
        resultMsg.innerText = 'Jogador Venceu!'
         pointPlayer++
        
    } else {
        resultMsg.innerText = 'Computador venceu!';
         pointBot++; 
    }
    pointUser.innerHTML = pointPlayer;
    pointPc.innerHTML = pointBot;
}

    


//li do pc
// const rockPc = document.getElementById('gameRock-pc');
// const paperPc = document.getElementById('gamePaper-pc');
// const scissorsPc = document.getElementById('gameScissors-pc');





    
//   let pc = [rockPc, paperPc, scissorsPc];
//   const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
 
//   console.log(pc[random(0, pc.length)]);

//   let pcChange = Math.floor(Math.random() * (4 - 1) + 1);

   
