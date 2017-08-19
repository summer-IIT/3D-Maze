#pragma strict
public var explosion: GameObject;
public var playerExplosion: GameObject;
private var myGameController: GameController;
public var ScoreValue: int = 100;
function Start(){
	var gameControllerObject : GameObject = GameObject.FindWithTag("GameController");
	if(gameControllerObject != null){
	   myGameController = gameControllerObject.GetComponent(GameController);
	}else{
	   Debug.Log("Cannot Find 'GameController' Object");
  }

}
function OnTriggerEnter(other: Collider){
	if(other.CompareTag ("Inner Wall")){
		return;
		}if(other.CompareTag("Player")){
			Instantiate(playerExplosion, transform.position, transform.rotation);
			myGameController.gameOver();
		}else{ //if we hit the bolt
			Instantiate(explosion, transform.position, transform.rotation);
			myGameController.UpdateScore(ScoreValue);
			}
		Destroy(gameObject);
		Destroy(other.gameObject);
//	if(other.CompareTag ("Enemigo")){
//		.ignore;
		} 
//}

