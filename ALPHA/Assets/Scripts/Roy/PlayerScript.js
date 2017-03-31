#pragma strict
import UnityEngine.UI;

//MOVIMENTACAO
var speed: float;
var facingRight: boolean;
var movX: float;
var rb: Rigidbody2D;
var trans: Transform;
var scale: Vector3;
var Anime: Animator;

//INTERFACE
var BarraVida: GameObject;
var AtualVida: GameObject;
var QntVida: GameObject;
var LevelOb: GameObject;
var QntBalaOb: GameObject;


//DANO DAS ARMAS
var PistolaRoyBot: float;

//HIT
var Blood: GameObject;

//QUANTIDADE DE VIDA
static var maxVida: float;
static var vidaAtual: float;
var Vida: int;

//GUI
var posXV: float;
var posYV: float;
var AltV:  float;
var LargV: float;
var SkinLetra: GUISkin;
static var butaoD: boolean;
static var butaoE: boolean;
var SkinDireita: GUISkin;
var SkinEsquerda: GUISkin;

//ARMAS
var SetArma: int;
var QuantBala: int;
var SkinLetraBala: GUISkin;
var ArmaMesh: GameObject[];

//LEVEL
var Level: int;
var EXPAtual: float;
var EXPMax: float;

//acceleration
var Acel: float;

function Start () {

//MOVIMENTACAO
facingRight = true;


//VIDA
BarraVida = GameObject.FindGameObjectWithTag ("BarraVida");
maxVida = 100;
vidaAtual = maxVida;

//ARMA
ArmaMesh[0] = GameObject.FindGameObjectWithTag ("Arma0");

//INTERFACE
AtualVida = GameObject.FindGameObjectWithTag ("AtualVida");
QntVida = GameObject.FindGameObjectWithTag ("QntVida");
LevelOb = GameObject.FindGameObjectWithTag ("Level");
QntBalaOb = GameObject.FindGameObjectWithTag ("QntBala");
}

function FixedUpdate () {



//INTERFACE
Vida = PlayerPrefs.GetInt("Vida");
BarraVida.transform.localScale.x = 1*((vidaAtual * 100/maxVida)/100);
//LEVEL
Level = PlayerPrefs.GetInt("LevelRoy");
Interface();

if(Divisao.DivisaoTela == false &&  butaoD == false){
	transform.localScale.x = -0.2;
}else{
	transform.localScale.x = 0.2;
}

Move ();
ArmaMeshFunc ();
//AcelFunc ();
RecuperaVida();

if ( butaoE == false && butaoD == false ){
PlayerPrefs.SetInt("Butao",1);
} 


}

function Move(){

if ( butaoE == true || butaoD == true || Acel != 0) 
	Anime.SetBool("Walk",true);
else
	Anime.SetBool("Walk",false);
}

if ( butaoE == false && butaoD == false ){ 
PlayerPrefs.SetInt("Butao",1);
}


function OnTriggerEnter2D (col : Collider2D) {

if(col.tag == "PistolRoyBot"){
	PerdeVida(10);
	Anime.SetBool("Hit",true);
	Instantiate(Blood,transform.position,transform.rotation);
	movX = speed;
	speed = 0;
	wait();
}

}

function wait(){

yield WaitForSeconds (0.5);
Anime.SetBool("Hit",false);
speed = movX;

}

function PerdeVida(dano : int) {
vidaAtual -= dano;
if (vidaAtual <= 0) {
	vidaAtual = 0;
	Vida--;
	PlayerPrefs.SetInt("SetHeroi",1);
	PlayerPrefs.SetInt("Vida",Vida);
	if(Vida == 0){
	GameOver();
	}
	Destroy(gameObject);
}

}

function RecuperaVida(){

if (vidaAtual > maxVida) {
		vidaAtual = maxVida;
	}

}

function ArmaMeshFunc (){

SetArma = PlayerPrefs.GetInt("SerArma");
QuantBala = PlayerPrefs.GetInt("QntBala");
if(QuantBala <= 0){
	PlayerPrefs.SetInt("SemBala",0);
}else{PlayerPrefs.SetInt("SemBala",1);}

switch (SetArma){
	case 0:
		ArmaMesh[0].SetActive(true);
		break;
}

}

function Interface(){
//VIDA ATUAL
if ((vidaAtual * 100 / maxVida) < 30) {
			AtualVida.GetComponent(Text).color = Color.red;
		}else{AtualVida.GetComponent(Text).color = Color.green;}
AtualVida.GetComponent(Text).text = "HP: "+ vidaAtual + "/" + maxVida;
//QUANTIDADE DE VIDA
QntVida.GetComponent(Text).text = "" + Vida;
LevelOb.GetComponent(Text).text = "Level: "+Level;
QntBalaOb.GetComponent(Text).text = ""+QuantBala;
}


/*function AcelFunc () {
 
Acel = Input.acceleration.x;
transform.Translate(Input.acceleration.x*3.5*Time.deltaTime,0,0);
if(Acel<0){
	transform.localScale.x = -0.2;
}else{
	transform.localScale.x = 0.2;
}
}
*/
 
function OnGUI(){

//BUTAO
//ESQUERDA
posXV = Screen.width/2 - Screen.width/2.1;
posYV = Screen.height/2 + Screen.height/3;
AltV  = Screen.height/7;
LargV = Screen.width/10;

GUI.skin = SkinEsquerda;
if(GUI.RepeatButton(Rect(posXV,posYV,LargV,AltV),"")){
rb.velocity.x = -1 * speed;
transform.localScale.x = -0.2;
butaoE = true;
PlayerPrefs.SetInt("Butao",0);
}else{butaoE = false;}

//DIREITA
posXV = Screen.width/2 - Screen.width/2.65;
posYV = Screen.height/2 + Screen.height/3;
AltV  = Screen.height/7;
LargV = Screen.width/10;

GUI.skin = SkinDireita;
if(GUI.RepeatButton(Rect(posXV,posYV,LargV,AltV),"")){
rb.velocity.x = 1 * speed;
transform.localScale.x = 0.2;
butaoD = true;
PlayerPrefs.SetInt("Butao",0);
}else{butaoD = false;}


}

function GameOver(){
Debug.Log("GAME OVER");
}
