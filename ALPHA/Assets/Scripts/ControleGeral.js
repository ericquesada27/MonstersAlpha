#pragma strict

static var SetArma1: boolean;
static var SetArma2: boolean;
static var Contador: int;
static var Arma1: short;
static var Arma2: short;

var OK: boolean;
static var OKBotao1: boolean;
static var OKBotao2: boolean;
static var OKBotao3: boolean;

//RETIRA
var SettArma1: boolean;
var SettArma2: boolean;
var Armaa1: short;
var Armaa2: short;
var Counter: int;
var OKReady: boolean;

var Check1: GameObject;
var Check2: GameObject;
var Check3: GameObject;

static var StaticCheck1: GameObject;
static var StaticCheck2: GameObject;
static var StaticCheck3: GameObject;

var Cloq17Selecionada: boolean;
var TouroNegroSelecionada: boolean;
var KoltSelecionada: boolean;

function Start ()
{
	/*Botao1Script.OK = true;
	SetArma1 = true;
	Check1.active = true;
	OKBotao1 = true;
	Arma1 = 1;
	Contador = 1; */
	/*SetArma1 = false;
	SetArma2 = false;
	OKReady = false;
	Check1.active = false;
	Check2.active = false;
	Check3.active = false;
	Contador = 0; */
	StaticCheck1 = Check1;
	StaticCheck2 = Check2;
	StaticCheck3 = Check3;
	Contador = Perfil.ContadorArmas;
	Cloq17Selecionada = Perfil.CheckBotao1();
	TouroNegroSelecionada = Perfil.CheckBotao2();
	KoltSelecionada = Perfil.CheckBotao3();

	if(Cloq17Selecionada)
	{
		Check1.active = true;

		if(Perfil.Botao1Arma1)  
		{
			SetArma1 = true;
			Arma1 = 1;
		}

		else if(Perfil.Botao1Arma2)
		{
			SetArma2 = true;
			Arma2 = 1;
		}
	}

	if(TouroNegroSelecionada)
	{
		Check2.active = true;

		if(Perfil.Botao2Arma1) 
		{
			SetArma1 = true;
			Arma1 = 2;
		}

		else if(Perfil.Botao2Arma2)
		{
			SetArma2 = true;
			Arma2 = 2;
		}
	}

	if(KoltSelecionada)
	{
		Check3.active = true;

		if(Perfil.Botao3Arma1) 
		{
			SetArma1 = true;
			Arma1 = 3;
		}

		else if(Perfil.Botao3Arma2)
		{
			SetArma2 = true;
			Arma2 = 3;
		}
	}
}

function Update ()
{
	Check2 = StaticCheck2;
	Check1 = StaticCheck1;
	Check3 = StaticCheck3;
	
	if(BotaoOK.OK)
	{
		SceneManager.LoadScene ("MenuTeste");
		BotaoOK.OK = false;
	}

	if(BotaoTrocarArma.OK)
	{
		Botao1Script.OK = false;
		SetArma1 = false;
		//OKBotao1 = false;
		Arma1 = 0;
		Botao2Script.OK = false;
		SetArma2 = false;
		//OKBotao2 = false;
		Arma2 = 0;
		Botao3Script.OK = false;
		//OKBotao3 = false;
		Contador = 0;
		OKReady = false;
		Check1.active = false;
		Check2.active = false;
		Check3.active = false;
	}
	
	if(!OKReady)
	{
		//if(SetArma1 || SetArma2)
			//OKReady = true;
		
		/*if(Botao1Script.OK) 
			Check1.active = true;

		if(!Botao1Script.OK)
			Check1.active = false;

	    if(Botao2Script.OK) //&& !OKBotao2)
		{
			/*if(SetArma2 && SetArma1) 
				Arma2 = Botao2Script.ID;

			else if (SetArma1)
				Arma1 = Botao2Script.ID; 

			//Contador++;
			//OKBotao2 = true;
			Check2.active = true;
		}

		if(!Botao2Script.OK)
			Check2.active = false; */

/*		else if(Botao3Script.OK && !OKBotao3)
		{
			if(SetArma2 && SetArma1) 
				Arma2 = Botao3Script.ID;

			else if (SetArma1)
				Arma1 = Botao3Script.ID;

			Contador++;
			OKBotao3 = true;
			Check3.active = true;
		} */
	}

	SettArma1 = SetArma1;
	SettArma2 = SetArma2;
	Armaa1 = Arma1;
	Armaa2 = Arma2;
	Counter = Contador;
}
