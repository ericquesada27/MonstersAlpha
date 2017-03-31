#pragma strict

var rb: Rigidbody2D;
var Hit: GameObject;
var Blood: GameObject;
var Rotation: Quaternion;
var Bala: GameObject;
/*var Mira: GameObject;
var MiraFrente: GameObject;
var MiraDireita: GameObject;
var MiraEsquerda: GameObject; */

function Start ()
{
	//if(ControlArmas.ArmaAtual == 1)
		//Perfil.GastaMunCloq17();

	if(ControlArmas.ArmaAtual == 2)
		Perfil.GastaMunTouroNegro();

	else if(ControlArmas.ArmaAtual == 3)
		Perfil.GastaMunKoltSucuri();
}

function Update ()
{
	/*Mira = GameObject.FindGameObjectWithTag ("Mira");
	MiraFrente = GameObject.FindGameObjectWithTag ("MiraFrente");
	MiraEsquerda = GameObject.FindGameObjectWithTag ("MiraEsquerda");
	MiraDireita = GameObject.FindGameObjectWithTag ("MiraDireita");

	if(Butao.bool && RoyArma.delayCount >= 1)
	{
		if(RoyArma.distancia > 88)
			 Instantiate(Bala,Vector3(MiraEsquerda.transform.position.x,MiraEsquerda.transform.position.y,0),transform.rotation);
	} */

	//Mirando();
	//transform.rotation.y = 86;
	rb.velocity = transform.forward*500;
	//if(tam >= 0)
	//tam-=2*Time.deltaTime;
	//Mira = GameObject.FindGameObjectWithTag ("Mira");

	//Rotation = Quaternion.LookRotation(Mira.transform.position - transform.position);
	//transform.rotation = Quaternion.Lerp (transform.rotation, Rotation, Time.deltaTime * 500);

	Destroy(gameObject,5);
}

/*function Mirando()
{
	Rotation = Quaternion.LookRotation(Mira.transform.position - transform.position);
	transform.rotation = Quaternion.Lerp (transform.rotation, Rotation, Time.deltaTime * 500);
} */

function OnTriggerEnter2D (col : Collider2D)
{
	if(col.tag == "Player")
		Bala.SetActive (false);

	else if(col.tag == "Chao" || col.tag == "Mira")
	{
		//Instantiate(Hit,transform.position,transform.rotation);
		Destroy(gameObject);
	}
}

function OnTriggerExit2D ()
{
	Bala.SetActive (true);
}