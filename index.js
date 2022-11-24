let team1Name = document.getElementById('team1Button');
let team2Name = document.getElementById('team2Button');
let team1Score = document.getElementById('team1Score');
let team2Score = document.getElementById('team2Score');
let resetButton = document.getElementById('reset');
let score1 = 0, score2 = 0;

team1Name.innerText = prompt('Insira o nome do primeiro time:');
team2Name.innerText = prompt('Insira o nome do segundo time:');

function somar1() {
  score1++;
  team1Score.innerHTML = score1;
}

function somar2() {
  score2++;
  team2Score.innerHTML = score2;
}

function resetScore() {
  score1 = 0;
  score2 = 0;
  team1Score.innerHTML = score1;
  team2Score.innerHTML = score2;
}