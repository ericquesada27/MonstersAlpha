#pragma strict 

static var SelvaCenario: boolean;

public function SelecionarSelva()
{
	SceneManager.LoadScene ("TrocaCenasLoading");
	SelvaCenario = true;
	Loading.StopMusicaMenu();
}

public function Voltar()
{
	SceneManager.LoadScene ("MenuTeste");
}