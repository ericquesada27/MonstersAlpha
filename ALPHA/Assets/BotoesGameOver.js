#pragma strict

public function  BackMenuGameOver()
{
	Pause.SaindoCenario = true;
	Loading.PlayMusicaMenu();
	SceneManager.LoadScene ("TrocaCenasLoading");
}