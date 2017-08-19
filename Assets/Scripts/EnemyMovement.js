#pragma strict

public var speed: float;
private var rb: Rigidbody;
function Start () {
	rb = GetComponent.<Rigidbody>();
}

function FixedUpdate () {
	rb.velocity = transform.forward * speed;

}

function OnTriggerEnter (other : Collider){
	if(other.CompareTag("Inner Wall")){
		//Debug.Log("we detected a wall");
		var ran = Random.Range(-1,1);
		if (ran>0){
		transform.Rotate(0,90,0);
		}
		else{
		transform.Rotate(0,-90,0);
		}

	}
}