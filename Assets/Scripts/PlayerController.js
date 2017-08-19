#pragma strict

public var speed: float;
private var rb: Rigidbody;
private var count: int;
public var cam : Camera ;
public var countText: UnityEngine.UI.Text;
public var winText: UnityEngine.UI.Text;
function Start() {
	rb = GetComponent.<Rigidbody>();
	count = 0;
}

function Update () {
	var moveVertical= Input.GetAxis("Vertical");
	var moveHorizen= Input.GetAxis("Horizontal");
	var vector = Vector3(moveHorizen,0.0,moveVertical);
	rb.AddForce( vector * speed);
	countText.text = "Count; " + count.ToString();
	if(count >=13){
			winText.text = "You Win";
			transform.position = Vector3(-296.1,1.0,-46.8);
			count = 0;
		//	(other.CompareTag("MainCamera")){
		//	cam.transform.position = Vector3(-250.2,100,1.0);

			}else{
				winText.text = "";
		
     }
}

function OnTriggerEnter (other : Collider){
	if(other.CompareTag("Pick Up")){
		count = count + 1;
		other.gameObject.SetActive(false);
//		Debug.Log("Collison");
	//if(other.CompareTag("teleport")){
		//gameObject.SetActive(false);

	if(other.CompareTag("enemies")){
		gameObject.SetActive(false);

	

   }
}


		}


