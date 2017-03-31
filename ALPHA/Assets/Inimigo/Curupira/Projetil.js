#pragma strict

var RigidBody: Rigidbody2D;
//var Hit: GameObject;
var Player: GameObject;
var Rotation: Quaternion;
//var TempoMira: float;
//var DelayMira: float;
var Projetil: GameObject;
var Destino: Vector3;
//var Tempo: float;
//var Delay: float;
var SpriteFlecha: Renderer;

function Start ()
{
	//Delay = 3;
	//DelayMira = 0.3;
	Player = GameObject.FindGameObjectWithTag ("AlvoInimigo");
	Destino.x = Player.transform.position.x;
	Destino.y = Player.transform.position.y;
	Destino.z = Player.transform.position.z;
	//Instantiate(Destino,Vector3(Player.transform.position.x, Player.transform.position.y,0), Player.transform.rotation);
}

function Update ()
{
	RigidBody.velocity = transform.forward*170;
	//Destino = GameObject.FindGameObjectWithTag ("Destino");

	//TempoMira += Time.deltaTime;
	/*Tempo += Time.deltaTime;
	
	if(Tempo >= 3)
	{
		Instantiate(Projetil,Vector3(transform.position.x+0.3,transform.position.y-25,0),transform.rotation);
		Tempo = 0;
	}  */

	Mira();

	if(transform.position == Vector3(Destino.x,Destino.y,Destino.z))
		Destroy(gameObject);
} 


function Mira ()
{
	Rotation = Quaternion.LookRotation (Vector3(Destino.x,-2.48,Destino.z) - transform.position, Vector3(0,0,1));
	transform.rotation = Rotation;// Quaternion.Lerp (transform.rotation, Rotation, Time.deltaTime * 10);
}

function OnTriggerEnter2D (col : Collider2D)
{
	if(col.tag == "AlvoInimigo")
	{
		if(RoyControle.NoChao)
		{
			Destroy(gameObject);
			RoyStatus.PerdeVida(CurupiraIA.Ataque);
		}
	}

	if(col.tag == "Chao")
		Destroy(gameObject);

	else if(col.tag == "ColisaoTiroObjeto" && SpriteFlecha.sortingLayerName == "Linha1")
		Destroy(gameObject);
}