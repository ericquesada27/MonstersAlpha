#pragma strict 

static var SelvaCenario: boolean;
public var AmericaSulMapa: GameObject;
public var EuropaMapa: GameObject;
public var AsiaMapa: GameObject;

public function SelecionarSelva()
{
	SceneManager.LoadScene ("TrocaCenasLoading");
	SelvaCenario = true;
	Loading.StopMusicaMenu();
}

public function AmericaDoSulBotao()
{
	AmericaSulMapa.SetActive(true);
}

public function EuropaBotao()
{
	EuropaMapa.SetActive(true);
}

public function AsiaBotao()
{
	AsiaMapa.SetActive(true);
}

public function Voltar()
{
	SceneManager.LoadScene ("MenuTeste");
}

public function FecharMapas()
{
	AmericaSulMapa.SetActive(false);
	EuropaMapa.SetActive(false);
	AsiaMapa.SetActive(false);
}