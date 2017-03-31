#pragma strict

var Sprite: Renderer;
var Speed: float;
var MovX: float;
var RigidBody: Rigidbody2D;
var Transf: Transform;
var Anime: Animator;
var Tempo: float;
var Nome: String;
var Mira: GameObject;
var TornadoLinha1: GameObject;
var TornadoLinha2: GameObject;
//var Espera: float;
var Vida: float;
var Barravida: GameObject;
//var Pistola: int;
static var Ataque: byte;
var Atacar: boolean;
var Atacando: boolean;
var Level: byte;
var NaoAtirar: boolean;

var MiraEsta: boolean;  //*********

function Start ()
{
  	Nome = Transf.name;
  	MovX = 0.2;
  	Speed = 200;
  	Vida = 100;

  	switch (Nome)
  	{
  		case "SaciLinha1(Clone)":
  			Ataque = 4;
  			Level = 1;
  			break;

  		case "SaciLv2Linha1(Clone)":
  			Ataque = 6;
  			Level = 2;
  			break;

  		case "SaciLv3Linha1(Clone)":
  			Ataque = 8;
  			Level = 3;
  			break;

  		case "SaciLinha2(Clone)":
  			Sprite.sortingLayerName = "Linha2";
  			Ataque = 4;
  			Level = 1;
  			break;

  		case "SaciLv2Linha2(Clone)":
  			Sprite.sortingLayerName = "Linha2";
  			Ataque = 6;
  			Level = 2;
  			break;

  		case "SaciLv3Linha2(Clone)":
  			Sprite.sortingLayerName = "Linha2";
  			Ataque = 8;
  			Level = 3;
  			break;
  	}
}

function Update ()
{	
  	Tempo += Time.deltaTime;
  	Mira = GameObject.FindGameObjectWithTag ("Mira");
  	UpdateLinha();
	Dano();

	//*************
	if(MiraEsta)
	{
		Mira.transform.position.x = transform.position.x;
		Mira.transform.position.y = transform.position.y+30;
	}

	if(!MiraProjecaoScript.Colidiu)
		MiraEsta = false;
	//*************

	if(Tempo >= 4)
	{
		if(!NaoAtirar)
		{
			Atacar = true;
			Atacando = true;
		}

		Tempo = 0;
	}
}

function UpdateLinha()
{
	if(Atacar)
	{	
		MovX = 0;
		Anime.SetBool("AtirarFlecha",true);
		waitmove();
	}

	RigidBody.velocity.x = MovX * Speed;

	if (MovX != 0) 
		Anime.SetBool("Andar",true);

	else 
		Anime.SetBool("Andar",false);
}


//**********
function Dano ()
{
	Barravida.transform.localScale.x = 0.2*(Vida/100);

	if(Vida <=0)
  	{
  		Vida = 0;	
  		MiraProjecaoScript.Colidiu = false;
    	MovX = 0;  
	    Anime.SetBool("Fumaca",true); 		
		waitmove1();
  	}
}
//**********

function OnTriggerEnter2D (col: Collider2D)
{
	Mira = GameObject.FindGameObjectWithTag ("Mira");

	if(col.tag == "PistolShot" && (Mira.transform.position.x >= transform.position.x-30 && Mira.transform.position.x < transform.position.x+30)
	  && (Mira.transform.position.y < transform.position.y+50) && (Mira.transform.position.y > transform.position.y-50))
	{
	  	TiraVida();
	}

	if(col.tag == "LimiteBotDireito")
	{
		Speed *= -1;
		transform.localScale.x *= -1;
	}

	if(col.tag == "LimiteBotEsquerdo")
	{
		Speed *= -1;
		transform.localScale.x *= -1;
	}

	//**********
	if(col.tag == "Mira")	
	{	
		if(!MiraProjecaoScript.Colidiu)
		{
			MiraProjecaoScript.Colidiu = true;
			MiraEsta = true;
		}
	}
	//**********

	if(col.tag == "InimigoNaoAtirar" && Sprite.sortingLayerName == "Linha1")
		NaoAtirar = true;

	if(col.tag == "InimigoAtirar" && Sprite.sortingLayerName == "Linha1")
		NaoAtirar = false;
}


function TiraVida()
{
	if(ControlArmas.ArmaAtual == 1)
	{
		if(Level == 1)
			Vida = Vida - 35;

		else if(Level == 2)
			Vida = Vida - 30;

		else
			Vida = Vida - 24;
	}

	else if(ControlArmas.ArmaAtual == 2)
	{
		if(Level == 1)
			Vida = Vida - 36;

		else if(Level == 2)
			Vida = Vida - 31;

		else
			Vida = Vida - 25;
	}

	else if(ControlArmas.ArmaAtual == 3)
	{
		if(Level == 1)
			Vida = Vida - 39;

		else if(Level == 2)
			Vida = Vida - 34;

		else
			Vida = Vida - 28;
	}
} 


function wait()
{
	yield WaitForSeconds (0.3);
	//GOHit.SetActive(false);
	Anime.SetBool("DanoFrente",false);
	//TextHIT.text = " ";
	MovX = 0.2;
}


function waitmove()
{
	yield WaitForSeconds (0.6);
	Anime.SetBool("AtirarFlecha",false);
	MovX = 0.2;

   if(Atacando)
   {
		if(Sprite.sortingLayerName == "Linha2")
			Instantiate(TornadoLinha2,Vector3(Transf.position.x+0.2,Transf.position.y-25,0),Transf.rotation);

		else
			Instantiate(TornadoLinha1,Vector3(Transf.position.x+0.2,Transf.position.y-25,0),Transf.rotation);

		Atacando = false;
	}

	Atacar = false;
}

//*********
function waitmove1()
{
	yield WaitForSeconds (0.5);
	PersonagensControl.InimigosDerrotados++;
	PersonagensControl.ContadorRecupera++;
	Destroy(gameObject);
}
//*********

/*function DropFunc(){

Drop = Random.Range(1,3);

switch (Drop){
	case 1:
		Instantiate(Potion,transform.position,transform.rotation);
}


} */