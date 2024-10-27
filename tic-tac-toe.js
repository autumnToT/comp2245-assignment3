document.addEventListener('DOMContentLoaded', function(){
	let squares = document.querySelectorAll('#board div');
	//console.log(squares);
	let gameState = [];
	//let gameState = Array(9).fill(null);
	//let currentPlayer = 'X';
	let xIsNext = true;
	
	let winStatus = document.querySelector('#status');
	
	function chickenDinner(){
		let winningCombos = [
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6],
		];
		for(let combo of winningCombos){
			if(gameState[combo[0]] && gameState[combo[0]] == gameState[combo[1]] && gameState[combo[0]] == gameState[combo[2]]){
				return gameState[combo[0]];
			}
		}
		return null;
	}
	
	squares.forEach((square, index) => {
		//console.log(squares);
		square.setAttribute('class','square');
		gameState[index] = '';
		
		square.addEventListener('mouseover', function(){
			//square.setAttribute('class','square hover');
			if(gameState[index] == 'X'){
				square.setAttribute('class','square X hover');
			} else if(gameState[index] == 'O'){
				square.setAttribute('class','square O hover');
			} else {
				square.setAttribute('class','square hover');
			}
		});
		square.addEventListener('mouseout', function(){
			//square.setAttribute('class','square');
			if(gameState[index] == 'X'){
				square.setAttribute('class','square X');
			} else if(gameState[index] == 'O'){
				square.setAttribute('class','square O');
			} else {
				square.setAttribute('class','square');
			}
		});
		square.addEventListener('click', function(){
			if(gameState[index] == '' && !chickenDinner()){
				let currentPlayer = xIsNext ? 'X' : 'O';
				square.textContent = currentPlayer;
				square.setAttribute('class','square '+currentPlayer);
				gameState[index] = currentPlayer;
				xIsNext = !xIsNext;
				
				let winner = chickenDinner();
				if(winner){
					winStatus.textContent = `Congratulations! ${winner} is the Winner!`;
					winStatus.setAttribute('class','status you-won');
				}
			}
		});
	});
});