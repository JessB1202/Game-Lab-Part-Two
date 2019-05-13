//declarting initial varibales. 
let userHp = 40;
let grantHp = 10;
let userWin = 0
let userName;

//function to track user's wins. 
function wins() {
  userWin++; 
}

// function to create random 1 or 5.
function getDamage(hP) {
  hP -= (Math.floor(Math.random()* 5) + 1);
  return hP;
}

//functon to determine whether to start the game
function startGame (){
  const playGame = prompt ("Would you like to play a game against The Almighty Grant?");

  if (playGame === "yes" || playGame === "Yes" || playGame === "YES"){
    //Asks user for their name to use in the game. and executes the function to play the game.
    userName = prompt ("Please enter your name.");
    startCombat(userName);
  }
  //Will not call the function to play the game. 
  else if (playGame === "no" || playGame === "No" || playGame === "NO") {
    console.log("I'm sorry to hear that, maybe next time.");
    alert ("I'm sorry to hear that, maybe next time.");
  }
}

//function for game logic
function startCombat() {
  while (userHp <= 40 && grantHp <=10 ) {
    let action = prompt ("Would you like to attack or quit?");

    if (action === "attack") {
      
      userHp = getDamage(userHp);
      grantHp = getDamage(grantHp);
    
      //log the progress of the iteration
      console.log (`${userName} has ${userHp} points.`);
      console.log (`The Almighty Grant has ${grantHp} points`);
    
      //adds one to the user's total wins.
      if (grantHp <= 0 && userHp > 0) {
        wins(userWin);
        grantHp = 10;
        console.log (`Congratulations ${userName} you have won ${userWin} times. You need to win ${3 - userWin} more times.`);
      }  
    //if grant hits 0 points 3 times and user still has points, user wins and game ends.
    if (userHp > 0 && userWin === 3){ 
      console.log(`Congratulations ${userName}, you won againt The Alimghty Grant!`);
      alert (`Congratulations ${userName}, you won againt The Alimghty Grant!`);
      break;
      } 
      //if user hits 0 points one time, grant wins and game ends. 
      else if (grantHp > 0 && userHp <= 0) {
        console.log("Sorry, The Almighty Grant wins.");
        alert ("Sorry, The Almighty Grant wins.");
        break;
          }
      
    //if user decides to quit playing the game, loop will stop. 
    } else if (action === "quit") {
      console.log(`Thanks for playing ${userName}! I hope you play again sometime.`);
      alert (`Thanks for playing ${userName}! I hope you play again sometime.`);
      break;
    }
  }
}

startGame();

