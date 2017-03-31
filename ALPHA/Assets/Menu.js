#pragma strict

public function Jogar()
{
	//Time.timeScale = 1;
	SceneManager.LoadScene ("SelecaoMapa");
}

public function Shop()
{
	//Time.timeScale = 1;
	SceneManager.LoadScene ("SelecaoArma");
}

public function Opcoes()
{
	//Time.timeScale = 1;
	SceneManager.LoadScene ("Opcoes");
}

public function Sair()
{
	Application.Quit();
}