var pieces = document.querySelectorAll('.squarePieces');
var playerThatWon = document.getElementById('playerWon');
var turnPlayer = document.getElementById('player_One');

// console.log(pieces);
// pieces[0].innerHTML = "hello";
var player = 1; //player 1  is true
let gameState = true;
let winnerTable = [ 
[0,1,2], 
[3,4,5], 
[6,7,8], 
[0,3,6], 
[1,4,7], 
[2,5,8], 
[0,4,8],
[2,4,6]
];
var piecesize = 3;




// console.log(pieces[0].innerHTML == "O" && pieces[1].innerHTML == "O" && pieces[2].innerHTML == "O");
// console.log(pieces[3].innerHTML == "O" && pieces[4].innerHTML == "O" && pieces[5].innerHTML == "O");
// console.log(pieces[6].innerHTML == "O" && pieces[7].innerHTML == "O" && pieces[8].innerHTML == "O");

function checkWon(value) {
	for (var a = 0; a < winnerTable.length; a++ ){
		// console.log("winnerTable loop #", a);

		if ((pieces[winnerTable[a][0]].innerHTML == "O") && (pieces[winnerTable[a][1]].innerHTML == "O") && (pieces[winnerTable[a][2]].innerHTML == "O") ){
			// ||		(pieces[winnerTable[a][0]].innerHTML == "X") && (pieces[winnerTable[a][1]].innerHTML == "X") && (pieces[winnerTable[a][2]].innerHTML == "X"))
			playerThatWon.innerHTML ="Player 1 won!";
			gameState = false;

		}		//checks winnerTable every basket of every position index of the string in pieces array == X
		else if((pieces[winnerTable[a][0]].innerHTML == "X") && (pieces[winnerTable[a][1]].innerHTML == "X") && (pieces[winnerTable[a][2]].innerHTML == "X")){
			playerThatWon.innerHTML ="Player 2 won!";
			gameState = false
		}
		
	
	}

}

function resetGame(){
	location.reload();
	}


function playAgain(){
	var response = confirm('Play again?');
	if (response != true){
		window.alert("Thanks for playing!");
	}
	else {
		resetGame();
	}
}

for(var i = 0; i < pieces.length; i++){ //for loop to put onclick into every sqaures
	
		pieces[i].onclick = function(event){
			
		  //then every click runs another event function
			if(gameState == true){
				// 0 1 2 3 4 5 6 7 8    = pieces array
				//when user click on pieces[3], print out X and replace array 3
				//console.log(event.target) ;//if pieces[i].innerHtML= X,Cannot set property 'innerHTML' of undefined at HTMLDivElement.pieces.(anonymous function).onclick
			
				if (event.target.innerHTML == ""){
						
						if (player == 1 ){  //if player 1 is true then print O and player 1 becomes false
								event.target.innerHTML = "O"; //target the event to print the X
								turnPlayer.innerHTML = "Player 1 turn";
								player = 0;
						}
						 //else player becomes false then print X, then player becomes true
						else {
							turnPlayer.innerHTML = "Player 2 turn";
							event.target.innerHTML = "X";
							player = 1;	
						}
				}	
				else{
					window.alert("Space has been filled.")
				}

				checkWon();

			}
			
			else {
				alert('Game Over!')
				playAgain();
			}

		}

}

		

				

			
	