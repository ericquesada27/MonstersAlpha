#pragma strict

var setControle: int;
var Digital: GameObject;
var Analogico: GameObject;
var BotaoPause: GameObject;

function Start () {

}

function Update () {
	setControle = PlayerPrefs.GetInt ("setControle");
	if(setControle == 1){
		Analogico.SetActive(true);
		Digital.SetActive(false);
	}else{
		Analogico.SetActive(false);
		Digital.SetActive(true);
	}

	if(Time.timeScale == 1){
		BotaoPause.SetActive (true);
	}else{
		BotaoPause.SetActive (false);
		Analogico.SetActive(false);
		Digital.SetActive(false);
	}
		
}