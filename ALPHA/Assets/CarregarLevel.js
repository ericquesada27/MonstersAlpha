#pragma strict

var Carregar: AsyncOperation;
var Porcentagem: float;
var ExibirPorcentagem: int;
public var MostrarPorcentagem: GameObject;
public var Jogar: GameObject;

function Start ()
{
	if(BotoesMenuMapa.SelvaCenario)
	{
		Carregar = SceneManager.LoadSceneAsync("Beta1Selva");
		Carregar.allowSceneActivation = false;
		BotoesMenuMapa.SelvaCenario = false;
	}

	else if(Pause.SaindoCenario)
	{
		Perfil.SaveCloud = true;
		VoltarMenuESalvar();
	}
}

function Update ()
{
	if(!Pause.SaindoCenario)
	{
		if(!Carregar.isDone)
		{
			Porcentagem = (Carregar.progress/0.9f)*100;
			ExibirPorcentagem = Porcentagem;
			MostrarPorcentagem.GetComponent(Text).text = "Carregando... " + ExibirPorcentagem + "%";
		}

		if(Porcentagem == 100)
		{
			MostrarPorcentagem.GetComponent(Text).text = "TOQUE PARA JOGAR!";
			Jogar.active = true;
		}
	}
}

function JogarSelva()
{
	Carregar.allowSceneActivation = true;
}

function VoltarMenuESalvar()
{	
	yield WaitForSeconds(3);
	SceneManager.LoadScene("MenuTeste");
	Pause.SaindoCenario = false;
}