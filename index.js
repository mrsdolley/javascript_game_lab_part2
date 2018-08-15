let userScore = 40;
let grantScore = 10;

function getDamage(min, max) {
  return Math.floor(min + Math.random()*(max+1 - min))
}

let wins = 0;

function startGame(){
  let playGame = prompt("Do you want to play?");

  if (playGame === 'yes' ){
  const enterName = prompt("Please enter your name.");
 
function startCombat() {
while (userScore > 0 && wins < 3 ){
  
    console.log(enterName + ` has ${userScore} health left. `);
    console.log(`Almighty Grant has ${grantScore} health left. `);
  
 

  grantScore-=getDamage(1, 5);
  userScore-=getDamage(1, 5);
   let keepPlaying = prompt("Would you like to attack or quit?");
 
  if (grantScore <= 0){
      grantScore = 10;
      console.log (enterName + " Wins");
      wins++;
  } 
  
  if (keepPlaying !== 'attack'){
    break;
  }

   if (grantScore > 0 && userScore<=0 && wins<3) {console.log ("Grant Wins");}
     }
    
      }
    }

startCombat();
}

startGame();
