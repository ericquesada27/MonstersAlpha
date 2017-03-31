#pragma strict
///LOOK AT 2D
var player: GameObject;
var rotatespeed: float;
var damping: float;
var rotation: Quaternion;
var MaxClamp: float;
var MinClamp: float;
var Rotation: Quaternion;
var tempoMira: float;
var DelayMira: float;

//ATIRAR
var Projetil: GameObject;
var tempo: float;
var Delay: float;

function Start () {

//LOOK AT 2D
rotatespeed = 100;
damping = 10;
MaxClamp = 0;
MinClamp = 0;
Rotation = transform.rotation;
}

function Update () {

player = GameObject.FindGameObjectWithTag ("AlvoInimigo");


tempoMira += Time.deltaTime;
tempo += Time.deltaTime;

if(tempo >= Delay){
	Instantiate(Projetil,Vector3(transform.position.x+0.2,transform.position.y-0.5,0),transform.rotation);
	tempo = 0;
}

if(player){
	if(tempoMira >= DelayMira){
		Mira ();
		tempoMira = 0;
	}
} 

}

function Mira () {

rotation = Quaternion.LookRotation (player.transform.position - transform.position, Vector3.forward);
transform.rotation = Quaternion.Lerp (transform.rotation, rotation, Time.deltaTime * rotatespeed/damping);

}