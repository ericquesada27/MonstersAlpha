#pragma strict

var MusicaMenu: AudioSource;
static var StaticMusicaMenu: AudioSource;
var HeadShotTela: UnityEngine.UI.Image;
var HeadShotLogo: UnityEngine.UI.Image;
var Botao: GameObject;
var TextoBotao: GameObject;
var Tempo: float;
var Connect: boolean;
var Conectando: GameObject;
var ErroPlayGames: GameObject;
var ErroConexao: GameObject;
//var Erros: GameObject;

function Start ()
{
	StaticMusicaMenu = MusicaMenu;
	StopMusicaMenu();
}

function Update()
{
	Tempo += Time.deltaTime;			

	if(Tempo >= 3 && !Connect)
	{
		HeadShotTela.color.a =0;//-= Tempo/20;
		HeadShotLogo.color.a =0;//-= Tempo/20;
		Botao.SetActive(true);

		if(Tempo >= 4)
		{
			if(TextoBotao.active)
				TextoBotao.SetActive(false);

			else
				TextoBotao.SetActive(true);

			Tempo = 3;
		}
	}
}

function Play()
{
	Tempo = 0;
	Botao.SetActive(false);
	Connect = true;
	Conectando.SetActive(true);
	SceneManager.LoadScene ("MenuTeste");
	PlayMusicaMenu();

	//AguardarConexao();
}

public function AguardarConexao()
{
	yield WaitForSeconds(3);

	if(!Perfil.PlayGamesLogin)
	{
		//Conectando.SetActive(false);
		ErroPlayGames.SetActive(true);
	}	

	else if(!Perfil.ConexaoEstabelecida)
	{
		//Conectando.SetActive(false);
		ErroConexao.SetActive(true);
	}	

	else if(Perfil.ConexaoEstabelecida && Perfil.PlayGamesLogin)
	{
		SceneManager.LoadScene ("MenuTeste");
		PlayMusicaMenu();
	}
	//Perfil.ComecarTesteConexao = false;
}

public static function StopMusicaMenu()
{
	DontDestroyOnLoad(StaticMusicaMenu);
	StaticMusicaMenu.Stop();
}

public static function PlayMusicaMenu()
{
	DontDestroyOnLoad(StaticMusicaMenu);
	StaticMusicaMenu.Play();
}

public function Sair()
{
	Application.Quit();
	//sair
}
