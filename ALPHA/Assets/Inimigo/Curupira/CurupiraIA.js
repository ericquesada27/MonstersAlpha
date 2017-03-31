#pragma strict

var Sprite: Renderer;
var Speed: float;
var FacingRight: boolean;
var MovX: float;
var RigidBody: Rigidbody2D;
var Transf: Transform;
var Scale: Vector3;
var Anime: Animator;
var Tempo: float;
//var Vel: float;
var Nome: String;
var Mira: GameObject;
var ProjetilLinha1: GameObject;
var ProjetilLinha2: GameObject;
var Vida: float;
var Barravida: GameObject;
static var Ataque: int;
var Atacar: boolean;
var Atacando: boolean;
var Level: byte;
var NaoAtirar: boolean;

var MiraEsta: boolean;  //*********

function Start ()
{
  	Nome = Transf.name;
  	MovX = 0.2;
  	Speed = 190;
  	Vida = 100;

  	switch (Nome)
  	{
  		case "CurupiraLinha1(Clone)":
  			Level = 1;
  			Ataque = 7;
  			break;

  		case "CurupiraLv2Linha1(Clone)":
  			Level = 2;
  			Ataque = 9;
  			break;

  		case "CurupiraLv3Linha1(Clone)":
  			Level = 3;
  			Ataque = 11;
  			break;

  		case "CurupiraLinha2(Clone)":
  			Sprite.sortingLayerName = "Linha2";
  			Level = 1;
  			Ataque = 7;
  			break;

  		case "CurupiraLv2Linha2(Clone)":
  			Sprite.sortingLayerName = "Linha2";
  			Level = 2;
  			Ataque = 9;
  			break;

  		case "CurupiraLv3Linha2(Clone)":
  			Sprite.sortingLayerName = "Linha2";
  			Level = 3;
  			Ataque = 11;
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

	if(Tempo >= 3)
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
	if(col.tag == "PistolShot" && (Mira.transform.position.x >= transform.position.x-40 && Mira.transform.position.x < transform.position.x+30)
	   && (Mira.transform.position.y >= transform.position.y-50 && Mira.transform.position.y < transform.position.y+40))
	{
		TiraVida();
	}

	if(col.tag == "LimiteBotDireito")
	{
		//Vel *= -1;
		Speed *= -1;
		transform.localScale.x *= -1;
	}

	if(col.tag == "LimiteBotEsquerdo")
	{
		//Vel *= -1;
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
			Vida = Vida - 28;

		else if(Level == 2)
			Vida = Vida - 21;

		else
			Vida = Vida - 15;
	}

	else if(ControlArmas.ArmaAtual == 2)
	{
		if(Level == 1)
			Vida = Vida - 29;

		else if(Level == 2)
			Vida = Vida - 22;

		else
			Vida = Vida - 16;
	}

	else if(ControlArmas.ArmaAtual == 3)
	{
		if(Level == 1)
			Vida = Vida - 32;

		else if(Level == 2)
			Vida = Vida - 25;

		else
			Vida = Vida - 19;
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
		//if(Sprite.sortingLayerName == "Linha2")
			Instantiate(ProjetilLinha2,Vector3(Transf.position.x+0.2,Transf.position.y-0.5,0),Transf.rotation);

		//else //if(Sprite.sortingLayerName == "Linha1" && transform.position.x < 530 && )
			//Instantiate(ProjetilLinha1,Vector3(Transf.position.x+0.2,Transf.position.y-0.5,0),Transf.rotation);

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