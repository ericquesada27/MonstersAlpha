#pragma strict

var Cloq17: GameObject;
var TouroNegro: GameObject;
var KoltSucuri: GameObject;
var PistolPrata1: GameObject;
var Shotgun: GameObject;
var Shotgun1: GameObject;
var Metralhadora: GameObject;
var Metralhadora1: GameObject;

var RoyCloq17: GameObject;
var RoyTouroNegro: GameObject;
var RoyKoltSucuri: GameObject;
var SophiaCloq17: GameObject;
var SophiaTouroNegro: GameObject;
var SophiaKoltSucuri: GameObject;

static var VidaRoy: float;
static var TrocaArma: boolean;

//RETIRAR
var Vida: float;
var TrocarArma: boolean;
static var ArmaAtual: short;

var RoyAtual: GameObject;
var Posicao1: Vector3;
var Posicao2: Vector3;
var PegaPos1: boolean;
var PegaPos2: boolean;

function Start ()
{
	Cloq17.active = false;
	TouroNegro.active = false;
	KoltSucuri.active = false;
	PistolPrata1.active = false;
	Shotgun.active = false;
	Shotgun1.active = false;
	Metralhadora.active = false;
	Metralhadora1.active = false;
	RoyCloq17.active = false;
	RoyTouroNegro.active = false;
	RoyKoltSucuri.active = false;
	VidaRoy = 100;
}

function Update ()
{
	TrocarArma = TrocaArma;

  if(Perfil.RoySelecionado)
  {
	if(Perfil.Botao1Arma1 || Perfil.Botao2Arma1 || Perfil.Botao3Arma1)
	{
		if(!TrocaArma)
		{		
			if(Perfil.Botao1Arma1)
			{	
				TouroNegro.active = false; KoltSucuri.active = false;
				RoyTouroNegro.active = false;	RoyKoltSucuri.active = false;
				Cloq17.active = true;
				RoyCloq17.active = true;
				RoyAtual = RoyCloq17;
				ArmaAtual = 1;

				if(PegaPos2)
				{
					RoyAtual.transform.position = Posicao2;	
					PegaPos2 = false;
				}
			}

			else if(Perfil.Botao2Arma1)
			{
				Cloq17.active = false; KoltSucuri.active = false;
				RoyCloq17.active = false;	RoyKoltSucuri.active = false;
				TouroNegro.active = true;
				RoyTouroNegro.active = true;
				RoyAtual = RoyTouroNegro;
				ArmaAtual = 2;

				if(PegaPos2)
				{
					RoyAtual.transform.position = Posicao2;	
					PegaPos2 = false;
				}
			}

			else if(Perfil.Botao3Arma1)
			{
				TouroNegro.active = false; Cloq17.active = false;
				RoyTouroNegro.active = false;	RoyCloq17.active = false;
				KoltSucuri.active = true;
				RoyKoltSucuri.active = true;
				RoyAtual = RoyKoltSucuri;
				ArmaAtual = 3;

				if(PegaPos2)
				{
					RoyAtual.transform.position = Posicao2;	
					PegaPos2 = false;
				}
			}

			Posicao1 = RoyAtual.transform.position;
			PegaPos1 = true;
		}

		else if(TrocaArma)
		{									
			if(Perfil.Botao1Arma2)
			{
				TouroNegro.active = false; KoltSucuri.active = false;
				RoyTouroNegro.active = false;	RoyKoltSucuri.active = false;
				Cloq17.active = true;
				RoyCloq17.active = true;
				RoyAtual = RoyCloq17;
				ArmaAtual = 1;

				if(PegaPos1)
				{
					RoyAtual.transform.position = Posicao1;	
					PegaPos1 = false;
				}
			}

			else if(Perfil.Botao2Arma2)
			{
				Cloq17.active = false; KoltSucuri.active = false;
				RoyCloq17.active = false;	RoyKoltSucuri.active = false;
				TouroNegro.active = true;
				RoyTouroNegro.active = true;
				RoyAtual = RoyTouroNegro;
				ArmaAtual = 2;

				if(PegaPos1)
				{
					RoyAtual.transform.position = Posicao1;	
					PegaPos1 = false;
				}
			}

			else if(Perfil.Botao3Arma2)
			{
				TouroNegro.active = false; Cloq17.active = false;
				RoyTouroNegro.active = false;	RoyCloq17.active = false;
				KoltSucuri.active = true;
				RoyKoltSucuri.active = true;
				RoyAtual = RoyKoltSucuri;
				ArmaAtual = 3;

				if(PegaPos1)
				{
					RoyAtual.transform.position = Posicao1;	
					PegaPos1 = false;
				}
			}

			Posicao2 = RoyAtual.transform.position;
			PegaPos2 = true;
		}
	}


	else
	{								
		if(Perfil.Botao1Arma2)
		{
			TouroNegro.active = false; KoltSucuri.active = false;
			RoyTouroNegro.active = false;	RoyKoltSucuri.active = false;
			Cloq17.active = true;
			RoyCloq17.active = true;
			RoyAtual = RoyCloq17;
			ArmaAtual = 1;
		}

		else if(Perfil.Botao2Arma2)
		{
			Cloq17.active = false; KoltSucuri.active = false;
			RoyCloq17.active = false;	RoyKoltSucuri.active = false;
			TouroNegro.active = true;
			RoyTouroNegro.active = true;
			RoyAtual = RoyTouroNegro;
			ArmaAtual = 2;
		}

		else if(Perfil.Botao3Arma2)
		{
			TouroNegro.active = false; Cloq17.active = false;
			RoyTouroNegro.active = false;	RoyCloq17.active = false;
			KoltSucuri.active = true;
			RoyKoltSucuri.active = true;
			RoyAtual = RoyKoltSucuri;
			ArmaAtual = 3;
		}
	}
  }


  else if(Perfil.SophiaSelecionada)
  {
	if(Perfil.Botao1Arma1 || Perfil.Botao2Arma1 || Perfil.Botao3Arma1)
	{
		if(!TrocaArma)
		{		
			if(Perfil.Botao1Arma1)
			{	
				TouroNegro.active = false; KoltSucuri.active = false;
				SophiaTouroNegro.active = false;	SophiaKoltSucuri.active = false;
				Cloq17.active = true;
				SophiaCloq17.active = true;
				RoyAtual = SophiaCloq17;
				ArmaAtual = 1;

				if(PegaPos2)
				{
					RoyAtual.transform.position = Posicao2;	
					PegaPos2 = false;
				}
			}

			else if(Perfil.Botao2Arma1)
			{
				Cloq17.active = false; KoltSucuri.active = false;
				SophiaCloq17.active = false; SophiaKoltSucuri.active = false;
				TouroNegro.active = true;
				SophiaTouroNegro.active = true;
				RoyAtual = SophiaTouroNegro;
				ArmaAtual = 2;

				if(PegaPos2)
				{
					RoyAtual.transform.position = Posicao2;	
					PegaPos2 = false;
				}
			}

			else if(Perfil.Botao3Arma1)
			{
				TouroNegro.active = false; Cloq17.active = false;
				SophiaTouroNegro.active = false; SophiaCloq17.active = false;
				KoltSucuri.active = true;
				SophiaKoltSucuri.active = true;
				RoyAtual = SophiaKoltSucuri;
				ArmaAtual = 3;

				if(PegaPos2)
				{
					RoyAtual.transform.position = Posicao2;	
					PegaPos2 = false;
				}
			}

			Posicao1 = RoyAtual.transform.position;
			PegaPos1 = true;
		}

		else if(TrocaArma)
		{									
			if(Perfil.Botao1Arma2)
			{
				TouroNegro.active = false; KoltSucuri.active = false;
				SophiaTouroNegro.active = false; SophiaKoltSucuri.active = false;
				Cloq17.active = true;
				SophiaCloq17.active = true;
				RoyAtual = SophiaCloq17;
				ArmaAtual = 1;

				if(PegaPos1)
				{
					RoyAtual.transform.position = Posicao1;	
					PegaPos1 = false;
				}
			}

			else if(Perfil.Botao2Arma2)
			{
				Cloq17.active = false; KoltSucuri.active = false;
				SophiaCloq17.active = false;	SophiaKoltSucuri.active = false;
				TouroNegro.active = true;
				SophiaTouroNegro.active = true;
				RoyAtual = SophiaTouroNegro;
				ArmaAtual = 2;

				if(PegaPos1)
				{
					RoyAtual.transform.position = Posicao1;	
					PegaPos1 = false;
				}
			}

			else if(Perfil.Botao3Arma2)
			{
				TouroNegro.active = false; Cloq17.active = false;
				SophiaTouroNegro.active = false; SophiaCloq17.active = false;
				KoltSucuri.active = true;
				SophiaKoltSucuri.active = true;
				RoyAtual = SophiaKoltSucuri;
				ArmaAtual = 3;

				if(PegaPos1)
				{
					RoyAtual.transform.position = Posicao1;	
					PegaPos1 = false;
				}
			}

			Posicao2 = RoyAtual.transform.position;
			PegaPos2 = true;
		}
	}


	else
	{								
		if(Perfil.Botao1Arma2)
		{
			TouroNegro.active = false; KoltSucuri.active = false;
			SophiaTouroNegro.active = false;	SophiaKoltSucuri.active = false;
			Cloq17.active = true;
			SophiaCloq17.active = true;
			RoyAtual = SophiaCloq17;
			ArmaAtual = 1;
		}

		else if(Perfil.Botao2Arma2)
		{
			Cloq17.active = false; KoltSucuri.active = false;
			SophiaCloq17.active = false; SophiaKoltSucuri.active = false;
			TouroNegro.active = true;
			SophiaTouroNegro.active = true;
			RoyAtual = SophiaTouroNegro;
			ArmaAtual = 2;
		}

		else if(Perfil.Botao3Arma2)
		{
			TouroNegro.active = false; Cloq17.active = false;
			SophiaTouroNegro.active = false; SophiaCloq17.active = false;
			KoltSucuri.active = true;
			SophiaKoltSucuri.active = true;
			RoyAtual = SophiaKoltSucuri;
			ArmaAtual = 3;
		}
	}
  }
}
 
public function Trocar ( bol: boolean )
{ 
	if(Perfil.ContadorArmas > 1)
	{
		if(!TrocaArma)
			TrocaArma = bol;

		else
			TrocaArma = false;
	}
} 
