/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game



CODING CHALLENGE:

1) Player loses their entire score if they role two sixes in a row
*/
var scores, roundScore, activePlayer, gamePlaying, previousRoll, winningScore; 

init();


previousRoll = [];

 document.getElementById('submitButton').addEventListener('click', function() {
   winningScore = document.getElementById('sampleText').value;
   console.log(winningScore);
});

// document.getElementById('sampleText').addEventListener('input', function(evt) {
   // console.log(evt);
//});




// this is an annonymous function 
document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if(gamePlaying) {
        //1. Random number    
    var dice = Math.floor(Math.random() * 6)+1;
    var dice2 = Math.floor(Math.random() * 6)+1;

    
    var bothDice = [dice, dice2]
    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    var diceDOM2 = document.querySelector('.dice2');


    diceDOM.style.display = 'block';
    diceDOM.src  = 'dice-' + dice + '.png';
    
    diceDOM2.style.display = 'block';
    diceDOM2.src  = 'dice-' + dice2 + '.png';

    
    //3. Update the round score if the rolled number was not a 1 and save the previous role
        //if (bothDice.includes(1)){
        //    nextPlayer();
            
        //} 
        
        if (dice !== 1 && dice !== previousRoll[0]){
        //add score 
        roundScore += (dice+dice2);
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        previousRoll[0] = dice;
        console.log ('previousRoll ' + previousRoll);
        
    } else if (dice == 6 && previousRoll[0] == dice) {
        console.log('match. dice = ' + dice + ' and previousRoll = ' + previousRoll);
        document.getElementById('score-' + activePlayer).textContent = '0';
        nextPlayer();
        
        
    }
        else if (bothDice.includes(1)){
            console.log (bothDice);
           nextPlayer();
            }
            
        else {
            //nextPlayer();
            console.log('hullo')
        }
        
    }
    
    
});

document.querySelector('.btn-hold').addEventListener('click', function (){
    
    if (gamePlaying) {
    // add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    
    // Update the UI
    document.querySelector('#score-' +activePlayer).textContent = scores[activePlayer];
    
    //Check if the player won the game
    
    if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' +activePlayer + '-panel').classList.add('winner');
        gamePlaying = false
        //document.querySelector('.player-' +activePlayer + '-panel').classList.remove('active');
    } else {
    nextPlayer();
    }
    //next player    
        
    }
    


});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
} 


document.querySelector('.btn-new').addEventListener('click', init);

function init () {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    
    gamePlaying = true
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

                                                        
    
}
                                                   
//get winning score


                                                         
                                                

//document.querySelector('#current-' + activePlayer).textContent = dice;

//setter
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';

//getter
//var x = document.querySelector('#score-0').textContent;




