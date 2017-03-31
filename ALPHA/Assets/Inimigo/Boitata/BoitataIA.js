#pragma strict

var Sprite: Renderer;
var Speed: float;
var MovX: float;
var RigidBody: Rigidbody2D;
var Transf: Transform;
var Anime: Animator;
var Tempo: float;
var Vel: float;
var Mira: GameObject;
var Origem1: GameObject;
var Origem2: GameObject;
var Fogo: GameObject;
var maxVida: float;
static var vidaAtual: float;
var LancarFogo: boolean;
var Atacando: boolean;
static var Defeated: boolean;

var Alvo: GameObject;
var Distancia: float;
var AtaquePerto: boolean;
var AtacandoPerto: boolean;
public var AtualVida: GameObject;
public var BarraVida: GameObject;

function Start ()
{
	Defeated = false;
  	Speed = 190;
  	Origem1 = GameObject.FindGameObjectWithTag ("Origem1Boss");
  	Origem2 = GameObject.FindGameObjectWithTag ("Origem2Boss");
  	AtualVida = GameObject.FindGameObjectWithTag ("AtualVidaBoss");
	BarraVida = GameObject.FindGameObjectWithTag ("BarraVidaBoss");

  	if(SetBoitata.Linha2Start)
  	{
  		Vel *= -1;
		transform.localScale.x *= -1;
		Sprite.sortingLayerName = "Linha2";
		SetBoitata.Linha2Start = false;
  	}

  	MovX = Vel;  
 	maxVida = 300;
	vidaAtual = maxVida;
}

function Update ()
{	
  	Tempo += Time.deltaTime;
  	Mira = GameObject.FindGameObjectWithTag ("Mira");
  	Alvo = GameObject.FindGameObjectWithTag ("AlvoInimigo");
  	Distancia = (transform.position.x) - (Alvo.transform.position.x);
  	MovX = Vel; 
  	UpdateLinha();
	Dano();
	Interface();

	//if(vidaAtual <= 0)
  		//PlayServices.JeitinhoBrasileiro();

	if(Sprite.sortingLayerName == "Linha1")
	{
		if((Tempo >= 3) && (transform.position.x < 756) && (transform.position.x >= 6))
		{
			AtacandoPerto = false;
			AtaquePerto = false;
			LancarFogo = true;
			Atacando = true;
			Tempo = 0;
		}
	}

	else if(Sprite.sortingLayerName == "Linha2")
	{
		if(Tempo >= 2)
		{
			Atacando = false;
			LancarFogo = false;
			AtaquePerto = true;
            AtacandoPerto = true;
            Tempo = 0;
        }
	}
}

function Interface ()
{
	BarraVida.transform.localScale.x = 1*((vidaAtual * 100/maxVida)/100);
	AtualVida.GetComponent(Text).text = "" + vidaAtual;
}

function UpdateLinha()
{	
	if(LancarFogo)
	{	
		MovX = 0;
		Anime.SetBool("AtirarFlecha",true);
		waitmove();
	}

	else if(AtaquePerto && Distancia <= 84 && Distancia > -3.8)
	{	
		MovX = 0;
		Anime.SetBool("DanoFrente",true);
		waitmove();
	}

	RigidBody.velocity.x = MovX * Speed;

	if (MovX != 0) 
		Anime.SetBool("Andar",true);

	else 
		Anime.SetBool("Andar",false);
}


function Dano ()
{
	//BarraVida.transform.localScale.x = 0.2*(Vida/100);
	if(vidaAtual <= 0)
  	{
  		vidaAtual = 0;
  		MovX = 0;
  		Atacando = false;
  		AtacandoPerto = false;
		Anime.SetBool("Andar",false);
		Anime.SetBool("AtirarFlecha",false);
		Anime.SetBool("DanoFrente",false);
		Anime.SetBool("Desintegrar",true);
		waitmove1();
  		//PersonagensControl.InimigosDerrotados++;
    	//Destroy(gameObject);
  	}
}


function OnTriggerEnter2D (col: Collider2D)
{
	if(col.tag == "PistolShot" && (Mira.transform.position.x >= transform.position.x-75 && Mira.transform.position.x < transform.position.x+75)
	&& (Mira.transform.position.y >= transform.position.y-90 && Mira.transform.position.y < transform.position.y+90))
	{
	  	TiraVida();
	}
	

	if(col.tag == "Destino1Boss")
	{
		Vel *= -1;
		transform.localScale.x *= -1;
		transform.position = Origem2.transform.position;
		Sprite.sortingLayerName = "Linha2";
	}

	if(col.tag == "Destino2Boss")
	{
		Vel *= -1;
		transform.localScale.x *= -1;
		transform.position = Origem1.transform.position;
		Sprite.sortingLayerName = "Linha1";
	}
}


function TiraVida()   ////////////////////////////////////////////////////////////////////////////////////////
{
	if(ControlArmas.ArmaAtual == 1)
		vidaAtual = vidaAtual - 8;

	else if(ControlArmas.ArmaAtual == 2)
		vidaAtual = vidaAtual - 9;

		else if(ControlArmas.ArmaAtual == 3)
		vidaAtual = vidaAtual - 12;
} 


function wait()
{
	yield WaitForSeconds (0.3);
	//GOHit.SetActive(false);
	Anime.SetBool("DanoFrente",false);
	//TextHIT.text = " ";
	MovX = Vel;
}


function waitmove()
{
	yield WaitForSeconds (0.8);
	Anime.SetBool("AtirarFlecha",false);
	Anime.SetBool("DanoFrente",false);
	MovX = Vel;

   if(Atacando)
   {
		Instantiate(Fogo,Vector3(Transf.position.x+40,Transf.position.y-0.912,0),Transf.rotation);
		Atacando = false;
   }

   else if(AtacandoPerto)
   {
   		if(RoyControle.NoChaoTiro)
   			RoyStatus.PerdeVida(15);

   		AtacandoPerto = false;
   }

	LancarFogo = false;
	AtaquePerto = false;
}

function waitmove1()
{
	MovX = Vel;
   	yield WaitForSeconds(2);
   	Defeated = true;
   	Destroy(gameObject);
}

/*function DropFunc(){

Drop = Random.Range(1,3);

switch (Drop){
	case 1:
		Instantiate(Potion,transform.position,transform.rotation);
}


} */