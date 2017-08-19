#pragma strict

private var Score: int;
private var GameOver: boolean;
private var Restart: boolean;

function Start () {
	Score = 0;

	GameOver = false;
	Restart = false;
}

function Update () {
	
}
function UpdateScore(ScoreIncrement: int){
    Score = Score + ScoreIncrement;
    UpdateScoreText();
}
function UpdateScoreText(){
}
function gameOver(){
    GameOver = true;
}
function restartGame(){
    Restart = true;
}
