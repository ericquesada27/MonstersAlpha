#pragma strict

var Mira: GameObject;
var MiraFrente: Transform;
var MiraDireita: Transform;
var MiraEsquerda: Transform;
var projetil: GameObject;
var butaoAtivo: boolean;
var MunicaoArmaAtual: int;
var delay: float;
static var delayCount: float;
var Anime: Animator; 
var distancia: float;
var Hold: boolean;
var Rotation: Quaternion;
//static var setArmaRoy: int;

/*var SomTiroCloq17: AudioSource;
static var StaticSomTiroCloq17: AudioSource;
*/

function Start ()
{
	//StaticSomTiroCloq17 = SomTiroCloq17;
}

function Update ()
{
	butaoAtivo = Butao.bool;				
	delayCount += 0.03;//Time.deltaTime;
	Mira = GameObject.FindGameObjectWithTag ("Mira");

    MiraEsquerda.LookAt(Mira.transform);
	MiraDireita.LookAt(Mira.transform);
	MiraFrente.LookAt(Mira.transform);
	distancia = (MiraFrente.transform.position.x - Mira.transform.position.x);

	if(ControlArmas.ArmaAtual == 1)
		MunicaoArmaAtual = 2;

	else if(ControlArmas.ArmaAtual == 2)
		MunicaoArmaAtual = Perfil.MunicaoTouroNegro;

	else if(ControlArmas.ArmaAtual == 3)
		MunicaoArmaAtual = Perfil.MunicaoKoltSucuri;
	
	if(delayCount >= delay)
		delayCount = delay;

	if(butaoAtivo && RoyControle.NoChaoTiro && MunicaoArmaAtual > 0) //( (ControlArmas.ArmaAtual == 1) || (ControlArmas.ArmaAtual == 2 && Perfil.MunicaoTouroNegro > 0) || ( ControlArmas.ArmaAtual == 3 && Perfil.MunicaoKoltSucuri > 0) ) )
	{	
		if (distancia > 88)
		{			
			if(delayCount >= delay && ControlArmas.ArmaAtual == 1)
			{
			  Instantiate(projetil,Vector3(MiraEsquerda.position.x,MiraEsquerda.position.y,0),MiraEsquerda.rotation);
			  delayCount = 0;
			}

			else if(delayCount >= delay && ControlArmas.ArmaAtual == 2 && Perfil.MunicaoTouroNegro > 0)
			{
			  Instantiate(projetil,Vector3(MiraEsquerda.position.x,MiraEsquerda.position.y,0),MiraEsquerda.rotation);
			  delayCount = 0;
			}

			else if(delayCount >= delay && ControlArmas.ArmaAtual == 3 && Perfil.MunicaoKoltSucuri > 0)
			{
			  Instantiate(projetil,Vector3(MiraEsquerda.position.x,MiraEsquerda.position.y,0),MiraEsquerda.rotation);
			  delayCount = 0;
			}

			if(Butao.velHorizontal < 0)
			{
				Anime.SetBool("AtirarDireita",false);
				Anime.SetBool("AtirarEsquerda",false);
				Anime.SetBool("AtirarFrente",false);
				Anime.SetBool("AndarAtirandoEsquerda",true);
				Anime.SetBool("AndarAtirandoEsquerdaTras",false);
			}

			else if(Butao.velHorizontal == 0)
			{
				Anime.SetBool("AtirarDireita",false);
				Anime.SetBool("AtirarEsquerda",true);
				Anime.SetBool("AtirarFrente",false);
				Anime.SetBool("AndarAtirandoEsquerda",false);
				Anime.SetBool("AndarAtirandoEsquerdaTras",false);
			}

			else if(Butao.velHorizontal > 0)
			{
				Anime.SetBool("AtirarDireita",false);
				Anime.SetBool("AtirarEsquerda",true);
				Anime.SetBool("AtirarFrente",false);
				Anime.SetBool("AndarAtirandoEsquerda",false);
				Anime.SetBool("AndarAtirandoEsquerdaTras",true);
			}

		}

		if (distancia < -54)
		{
			if(delayCount >= delay && ControlArmas.ArmaAtual == 1)
			{
			  Instantiate(projetil,Vector3(MiraDireita.position.x,MiraDireita.position.y,0),MiraDireita.rotation);
			  delayCount = 0;
			}

			else if(delayCount >= delay && ControlArmas.ArmaAtual == 2 && Perfil.MunicaoTouroNegro > 0)
			{
			  Instantiate(projetil,Vector3(MiraDireita.position.x,MiraDireita.position.y,0),MiraDireita.rotation);
			  delayCount = 0;
			}

			else if(delayCount >= delay && ControlArmas.ArmaAtual == 3 && Perfil.MunicaoKoltSucuri > 0)
			{
			  Instantiate(projetil,Vector3(MiraDireita.position.x,MiraDireita.position.y,0),MiraDireita.rotation);
			  delayCount = 0;
			}

			if(Butao.velHorizontal > 0)
			{
				Anime.SetBool("AtirarDireita",false);
				Anime.SetBool("AtirarEsquerda",false);
				Anime.SetBool("AtirarFrente",false);
				Anime.SetBool("AndarAtirandoDireita",true);
				Anime.SetBool("AndarAtirandoDireitaTras",false);
			}

			else if(Butao.velHorizontal == 0)
			{
				Anime.SetBool("AtirarDireita",true);
				Anime.SetBool("AtirarEsquerda",false);
				Anime.SetBool("AtirarFrente",false);
				Anime.SetBool("AndarAtirandoDireita",false);
				Anime.SetBool("AndarAtirandoDireitaTras",false);
			}

			else if(Butao.velHorizontal < 0)
			{
				Anime.SetBool("AtirarDireita",true);
				Anime.SetBool("AtirarEsquerda",false);
				Anime.SetBool("AtirarFrente",false);
				Anime.SetBool("AndarAtirandoDireita",false);
				Anime.SetBool("AndarAtirandoDireitaTras",true);
			}
		}

		if(distancia > -54 && distancia < 88) 
		{
			if(delayCount >= delay && ControlArmas.ArmaAtual == 1)
			{
			  Instantiate(projetil,Vector3(MiraFrente.position.x,MiraFrente.position.y,0),MiraFrente.rotation);
			  delayCount = 0;
			}

			else if(delayCount >= delay && ControlArmas.ArmaAtual == 2 && Perfil.MunicaoTouroNegro > 0)
			{
			  Instantiate(projetil,Vector3(MiraFrente.position.x,MiraFrente.position.y,0),MiraFrente.rotation);
			  delayCount = 0;
			}

			else if(delayCount >= delay && ControlArmas.ArmaAtual == 3 && Perfil.MunicaoKoltSucuri > 0)
			{
			  Instantiate(projetil,Vector3(MiraFrente.position.x,MiraFrente.position.y,0),MiraFrente.rotation);
			  delayCount = 0;
			}

			if(Butao.velHorizontal == 0)
			{
				Anime.SetBool("AtirarFrente",true);
				Anime.SetBool("AtirarEsquerda",false);
				Anime.SetBool("AtirarDireita",false);
				Anime.SetBool("AndarAtirandoDireita",false);
				Anime.SetBool("AndarAtirandoDireitaTras",false);
				Anime.SetBool("AndarAtirandoEsquerda",false);
				Anime.SetBool("AndarAtirandoEsquerdaTras",false);
			}
		}	
	}

	//Rotation = Quaternion.LookRotation(Mira.transform.position - MiraFrente.transform.position);
	//projetil.transform.rotation = Quaternion.Lerp (transform.rotation, Rotation, Time.deltaTime * 500);

	if(butaoAtivo == false || MunicaoArmaAtual == 0)
	{
		Anime.SetBool("AtirarEsquerda",false);
		Anime.SetBool("AtirarDireita",false);
		Anime.SetBool("AtirarFrente",false);
		Anime.SetBool("AndarAtirandoEsquerda",false);
		Anime.SetBool("AndarAtirandoDireita",false);
		Anime.SetBool("AndarAtirandoEsquerdaTras",false);
		Anime.SetBool("AndarAtirandoDireitaTras",false);
	}
}

function waitAnime()
{
	yield WaitForSeconds (1);
	Anime.SetBool("AtirarEsquerda",false);
	Anime.SetBool("AtirarDireita",false);
	Anime.SetBool("AtirarFrente",false);
}

/*static function TiroCloq17()
{
	StaticSomTiroCloq17.Play();
} */