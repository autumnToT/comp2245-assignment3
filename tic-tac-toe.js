document.addEventListener('DOMContentLoaded', function(){
	let squares = document.querySelectorAll('#board div');
	//console.log(squares);
	let gameState = [];
	//let gameState = Array(9).fill(null);
	//let currentPlayer = 'X';
	let xIsNext = true;
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
			if(gameState[index] == ''){
				let currentPlayer = xIsNext ? 'X' : 'O';
				square.textContent = currentPlayer;
				square.setAttribute('class','square '+currentPlayer);
				gameState[index] = currentPlayer;
				xIsNext = !xIsNext;
			}
		});
	});
});