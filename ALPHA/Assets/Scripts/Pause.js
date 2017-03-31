#pragma strict
import UnityEngine.SceneManagement;

static var Pause: boolean;
var FundoPause: GameObject;
static var SaindoCenario: boolean;

function Update ()
{
	if(Pause)
	{
		Time.timeScale = 0;
		FundoPause.active = true;
	}

	else
	{
		Time.timeScale = 1;
		FundoPause.active = false;
	}
}

public function  ApertarPause(bool: boolean)
{
	Pause = bool;
}

public function  BackMenu()
{
	FundoPause.active = false;
	SaindoCenario = true;
	Pause = false;
	Loading.PlayMusicaMenu();
	SceneManager.LoadScene ("TrocaCenasLoading");
}
