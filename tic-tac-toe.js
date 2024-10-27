document.addEventListener("DOMContentLoaded", function(){
	let squares = document.querySelectorAll('#board div')
	console.log(squares);
	squares.forEach((square) => {
		console.log(square);
		square.setAttribute('class','square');
	});
});
