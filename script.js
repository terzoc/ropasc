function check() {
	var computer = Math.floor(Math.random() * 3);
	if (computer == 0) {
		computer = "paper";
	} else if (computer == 1) {
		computer = "scissors";
	} else if (computer == 2) {
		computer = "rock";
	}
	console.log(computer);
	player = prompt("Enter rock, paper, or scissors");
	player = player.toLowerCase();
	// while(player !== "rock" || player !== "paper" || player !== "scissors"){
	// 	alert("you must enter rock, paper, or scissors");
	// 	player = prompt("Enter rock, paper, or scissors");
	// 	player = player.toLowerCase();
	// }
	// game(computer,player);
	if (player == "rock" || player == "paper" || player == "scissors") {
		game(computer, player);
	} else {
		alert("you must enter rock, paper, or scissors");
	}
}

function game(computer, player) {
	if (computer == player) {
		alert("tie");
	} else if (player === "rock" && computer === "scissors") {
		alert("Computer Chose : "+ computer + " You Win!");
	} else if (player === "scissors" && computer === "paper") {
		alert("Computer Chose : "+ computer + " You Win!");
	} else if (player === "paper" && computer === "rock") {
		alert("Computer Chose : "+ computer + " You win");
	} else if (player === "scissors" && computer === "rock") {
		alert("Computer Chose : "+ computer + " You Lose!");
	} else if (player === "paper" && computer === "scissors") {
		alert("Computer Chose : "+ computer + " You Lose!");
	} else if (player === "rock" && computer === "paper") {
		alert("Computer Chose : "+ computer + " You Lose!");
	}
}

function rock(){
	document.getElementById('cRock').classList.add('rock');
	document.getElementById('cPaper').classList.add('paper');
	document.getElementById('cScissors').classList.add('scissors');
	var computer = Math.floor(Math.random() * 3);
	if (computer == 0) {
		computer = "paper";
		document.getElementById('cPaper').classList.remove('paper');
	} else if (computer == 1) {
		computer = "scissors";
		document.getElementById('cScissors').classList.remove('scissors');
	} else if (computer == 2) {
		computer = "rock";
		document.getElementById('cRock').classList.remove('rock');
	}
	console.log(computer);
	player = "rock";
	game(computer, player);
}

function paper(){
	document.getElementById('cRock').classList.add('rock');
	document.getElementById('cPaper').classList.add('paper');
	document.getElementById('cScissors').classList.add('scissors');
	var computer = Math.floor(Math.random() * 3);
	if (computer == 0) {
		computer = "paper";
		document.getElementById('cPaper').classList.remove('paper');
	} else if (computer == 1) {
		computer = "scissors";
		document.getElementById('cScissors').classList.remove('scissors');
	} else if (computer == 2) {
		computer = "rock";
		document.getElementById('cRock').classList.remove('rock');
	}
	console.log(computer);
	player = "paper";
	game(computer, player);
}

function scissors(){
	// document.getElementById('pRock').classList.add('rock');
	// document.getElementById('pPaper').classList.add('paper');
	document.getElementById('cRock').classList.add('rock');
	document.getElementById('cPaper').classList.add('paper');
	document.getElementById('cScissors').classList.add('scissors');
	var computer = Math.floor(Math.random() * 3);
	if (computer == 0) {
		computer = "paper";
		document.getElementById('cPaper').classList.remove('paper');
	} else if (computer == 1) {
		computer = "scissors";
		document.getElementById('cScissors').classList.remove('scissors');
	} else if (computer == 2) {
		computer = "rock";
		document.getElementById('cRock').classList.remove('rock');
	}
	console.log(computer);
	player = "scissors";
	game(computer, player);
}
