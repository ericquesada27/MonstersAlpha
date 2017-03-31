#pragma strict

var Speed: float;
var FacingRight: boolean;
var MovX: float;
var RigidBody: Rigidbody2D;
var Anime: Animator;
var Tempo: float;
var Vel: float;
var Mira: GameObject;
var Alvo: GameObject;
var Atacar: boolean;
var Distancia: float;
var Vida: float;
var Barravida: GameObject;
var Pistola: int;
var Ataque: int;
var Atacando: boolean;
var MiraEsta: boolean;  //*********

function Start ()
{
  	MovX = 0.2;
  	Speed = 500;
	Vida = 100;

	if(SetLobisomem.DefineLvl == 1)
		Ataque = 8;

	else if(SetLobisomem.DefineLvl == 2)
		Ataque = 10;

	else
		Ataque = 12;

	Atacar = true;
	Atacando = true;
}

function Update ()
{	
  	Mira = GameObject.FindGameObjectWithTag ("Mira");
  	Alvo = GameObject.FindGameObjectWithTag ("AlvoInimigo");
  	Distancia = (transform.position.x) - (Alvo.transform.position.x);
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

	if(!Atacar)
		Tempo += Time.deltaTime;

    if(Tempo >= 3)
    {
    	Atacar = true;
    	Tempo = 0;
    	Atacando = true;
    }
}


function UpdateLinha()
{
	if(Distancia <= 40 && Distancia > -29 && Atacar)
	{
	    MovX = 0;
	    Anime.SetBool("Atacar",true);
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
	    PersonagensControl.AtivaSomFumaca = true;  		
		waitmove1();
  	}
}
//**********

function OnTriggerEnter2D (col: Collider2D)
{
	if(col.tag == "PistolShot" && (Mira.transform.position.x >= transform.position.x-55 && Mira.transform.position.x < transform.position.x+55)
	   && (Mira.transform.position.y >= transform.position.y-45 && Mira.transform.position.y < transform.position.y+45))
	{
		TiraVida();
		//Vida = Vida - Pistola;
		//Instantiate(Blood,transform.position,transform.rotation);
		//GOHit.SetActive(true);
		//TextHIT.text = " "+Pistola;
	}


	if(col.tag == "LimiteBotDireito")
	{
		MovX *= -1;
		transform.localScale.x *= -1;
		Vel = MovX;
	}

	if(col.tag == "LimiteBotEsquerdo")
	{
		MovX *= -1;
		transform.localScale.x *= -1;
		Vel = MovX;
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
}

function TiraVida()
{
	if(ControlArmas.ArmaAtual == 1)
	{
		if(SetLobisomem.DefineLvl == 1)
			Vida = Vida - 24;

		else if(SetLobisomem.DefineLvl == 2)
			Vida = Vida - 18;

		else
			Vida = Vida - 13;
	}

	else if(ControlArmas.ArmaAtual == 2)
	{
		if(SetLobisomem.DefineLvl == 1)
			Vida = Vida - 25;

		else if(SetLobisomem.DefineLvl == 2)
			Vida = Vida - 19;

		else
			Vida = Vida - 14;
	}

	else if(ControlArmas.ArmaAtual == 3)
	{
		if(SetLobisomem.DefineLvl == 1)
			Vida = Vida - 28;

		else if(SetLobisomem.DefineLvl == 2)
			Vida = Vida - 22;

		else
			Vida = Vida - 17;
	}
} 


function wait()
{
	yield WaitForSeconds (0.3);
	//GOHit.SetActive(false);
	Anime.SetBool("DanoFrente",false);
//	TextHIT.text = " ";
	MovX = Vel;
}


function waitmove()
{
	yield WaitForSeconds (0.6);
	Anime.SetBool("Atacar",false);
	Atacar = false;
	MovX = Vel;

	if(Atacando)
	{
		if(RoyControle.NoChaoTiro)
   			RoyStatus.PerdeVida(Ataque);

		Atacando = false;
	}
}

//*********
function waitmove1()
{
	yield WaitForSeconds (0.5);
	PersonagensControl.InimigosDerrotados++;
	PersonagensControl.ContadorRecupera++;
	Destroy(gameObject);
}
//*******