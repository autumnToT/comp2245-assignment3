document.addEventListener('DOMContentLoaded', function(){
	let squares = document.querySelectorAll('#board div');
	
	let gameState = [];
	let xIsNext = true;
	
	squares.forEach((square, index) => {
		square.setAttribute('class','square');
	
		gameState[index] = '';
		square.addEventListener('click', function(){
			if(gameState[index] == ''){
				let currentPlayer = xIsNext ? 'X' : 'O';
				square.textContent = currentPlayer;
				square.setAttribute('class','square ${currentPlayer}');
				gameState[index] = currentPlayer;
				xIsNext = !xIsNext;
			}
		});
	});
});