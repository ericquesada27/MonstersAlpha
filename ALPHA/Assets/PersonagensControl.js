#pragma strict

static var CucaLv: byte;
static var LobisomemLv: byte;
static var CurupiraLv: byte;
static var SaciLv: int;
static var MulaLv: int;
static var QuantidadeLinha3: byte;
static var QuantidadeLinha2: byte;
static var QuantidadeLinha1: byte;
static var SetBoss: boolean;
var Wave: byte;
static var InimigosDerrotados: byte;
var NumeroDeInimigos: byte;
var InimigosDefeat: byte;
var InimigosInvocados: byte;
var TempoRespawn: float;
var TempoGeral: float;
var Respawn: float;
var SelecionaMonstro: byte;
var TrocaWave: boolean;
var PrimeiroRespawn: boolean;
static var WavesCompletas: boolean;
var Countdown: float;
var CountMsg: float;
var CDint: int;
public var ContadorBoss: GameObject;
public var MensagemBoss: GameObject;
public var Informacoes: GameObject;
var RecuperaVida: boolean;
static var ContadorRecupera: byte;
public var EstatisticaFinal: GameObject;

var SomFumaca: AudioSource;
static var AtivaSomFumaca: boolean;
var auxSomFumaca: boolean;

function Start ()
{
	QuantidadeLinha1 = 0;
	QuantidadeLinha2 = 0;
	QuantidadeLinha3 = 0;
	Wave = 1;
	TempoGeral = 0;
	InimigosDerrotados = 0;
	InimigosInvocados = 0;
	TrocaWave = false;
	PrimeiroRespawn = true;
	WavesCompletas = false;
	SetBoss = false;
	Countdown = 6;
	CountMsg = 4;
	ContadorBoss = GameObject.FindGameObjectWithTag ("ContadorBoss");
	MensagemBoss = GameObject.FindGameObjectWithTag ("MensagemBoss");
	Informacoes = GameObject.FindGameObjectWithTag ("Informacoes");
	//Camera.main.aspect = 800f/480f;

	if(Wave == 1)
	{
		CucaLv = 1;
		LobisomemLv = 1;
		MulaLv = 1;
		CurupiraLv = 1;
		SaciLv = 1;
		Respawn = 5.5;
		NumeroDeInimigos = 15;
		TempoRespawn = 0;
	} 
}

function Update ()
{
	Informacoes.GetComponent(Text).text = "Wave: " + Wave + "\n" + "Numero De Inimigos: " + NumeroDeInimigos + 
    "\n" + "Inimigos Derrotados: " + InimigosDerrotados;// + "\n" + Screen.width + " " + Screen.height; 
	
  if(!BoitataIA.Defeated)
   		TempoGeral += Time.deltaTime;  	

  else
  {
  	  Perfil.AtualizaPontuacaoSelva(TempoGeral, RoyStatus.vidaAtual);
  	  EstatisticaFinal.SetActive(true);
  }

  if(AtivaSomFumaca)
  {
  	if(!auxSomFumaca)
  	{
  		 SomFumaca.Play();
  		 auxSomFumaca = true;
  	}

  	AtivaSomFumaca = false;
  }

  else
  	auxSomFumaca = false;

  if(Wave < 6)
  {
	TempoRespawn += Time.deltaTime;
	InimigosDefeat = InimigosDerrotados;

	if((TempoRespawn >= Respawn && InimigosInvocados < NumeroDeInimigos))
	{	
		SelecionaMonstro = Random.Range(1,6);

		if(Wave == 3 || Wave == 4)
		{
			CucaLv = Random.Range(1,7);
			LobisomemLv = Random.Range(1,7);
			MulaLv = Random.Range(1,7);
			CurupiraLv = Random.Range(1,7);
			SaciLv = Random.Range(1,7);
		}

		else if(Wave == 5)
		{
			CucaLv = Random.Range(4,10);
			LobisomemLv = Random.Range(4,10);
			MulaLv = Random.Range(4,10);
			CurupiraLv = Random.Range(4,10);
			SaciLv = Random.Range(4,10);
		}

		switch (SelecionaMonstro)
		{
			case 1: SetSaci.Ativar = true; TempoRespawn = 0; InimigosInvocados++; PrimeiroRespawn = false; break;
			case 2: SetMula.Ativar = true; TempoRespawn = 0; InimigosInvocados++; PrimeiroRespawn = false; break;
			case 3: SetCuca.Ativar = true; TempoRespawn = 0; InimigosInvocados++; PrimeiroRespawn = false; break;
			case 4: SetCurupira.Ativar = true; TempoRespawn = 0; InimigosInvocados++; PrimeiroRespawn = false; break;
			case 5: SetLobisomem.Ativar = true; TempoRespawn = 0; InimigosInvocados++; PrimeiroRespawn = false; break;
		}
	}

	/*if(ContadorRecupera == 2)
	{
		if( (RoyStatus.vidaAtual + 20) >= 100)
		{	
			RoyStatus.vidaAtual = 100;
			ContadorRecupera = 0;
		}

		else
		{
			RoyStatus.vidaAtual += 20;
			ContadorRecupera = 0;
		} 
	} */

    if(InimigosDerrotados == NumeroDeInimigos)
    	{Wave++; InimigosDerrotados = 0; TrocaWave = true; PrimeiroRespawn = true;} 

    if(Wave == 2 && TrocaWave)
	{
		Respawn = 5;
		//Respawn = 3;
		NumeroDeInimigos = 21;
		TempoRespawn = 0;
		InimigosInvocados = 0;
		TrocaWave = false;
	}

	else if(Wave == 3 && TrocaWave)
	{
		Respawn = 4.5;
		//Respawn = 3;
		NumeroDeInimigos = 20;
		TempoRespawn = 0;
		InimigosInvocados = 0;
		TrocaWave = false;
	}

	else if(Wave == 4 && TrocaWave)
	{
		Respawn = 4.5;
		NumeroDeInimigos = 27;
		TempoRespawn = 0;
		InimigosInvocados = 0;
		TrocaWave = false;
	}

	else if(Wave == 5 && TrocaWave)
	{
		Respawn = 4;
		//Respawn = 3;
		NumeroDeInimigos = 32;
		TempoRespawn = 0;
		InimigosInvocados = 0;
		TrocaWave = false;
	} 
  }

  else if(Wave == 6)
  {
  		WavesCompletas = true;
  		Wave++;
  }

  if(WavesCompletas)
  {		
  		CountMsg -= Time.deltaTime;

  		/*Informacoes.GetComponent(Text).text = "Wave: BOSS" + "\n" + "Numero De Inimigos: BOSS" + 
    	"\n" + "Inimigos Derrotados: BOSS" + "\n" + Screen.width + " " + Screen.height;; */

  		if(CountMsg > 0)
  	    	MensagemBoss.GetComponent(Text).text = "BOSS SE APROXIMANDO...";  			
		
		else 
  		{
  			CountMsg = 0;
  		  	Destroy(MensagemBoss);  		

  		  	Countdown -= Time.deltaTime;
  		  	CDint = Countdown;
  		  	ContadorBoss.GetComponent(Text).text = "" + CDint;

  		  	if(Countdown <= 0)
  		  	{
  				Destroy(ContadorBoss);
  				SetBoss = true;
  				WavesCompletas = false;
  				Countdown = 0;
  		 	 }
  		}
  }
}