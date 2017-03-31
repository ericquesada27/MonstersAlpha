#pragma strict

var tempo: float;

function Start () {

}

function Update () {
tempo += Time.deltaTime;

if(tempo >= 0.5){
	Destroy(gameObject);
}

}