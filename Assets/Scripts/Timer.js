#pragma strict
	private var secondsCount: float;
	private var minuteCount: int;
	private var hourCount: int;

	private var time: float;
	public var timeText: UnityEngine.UI.Text;

function Update () {
// UpdateTimerUI();

	//if(PlayerController.Instance().Spa == true){
		var minutes = time / 60; //Divide the guiTime by sixty to get the minutes.
		var seconds = time % 60; //Use  the euclidean division for the seconds.

		time += Time.deltaTime;
// Update the label value
		timeText.text = String.Format ("Time: {0:00} : {1:00}", minutes, seconds);
	//	}
					
}
//call this on update
	function UpdateTimerUI(){
//	set timer UI
//	seconds Count += Time.deltaTime;
//	timerText.text = hourCount + "h:"+ minuteCount +"m:"+secondsCount + "s";
//	if(secondsCount >= 60){
//		minuteCount++;
//		secondsCount = 0;
//	}else{ if(minuteCount >=60){
//		hourCount++;
//		minuteCount = 0;
//}



}