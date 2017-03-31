#pragma strict

static var GameOverVar: boolean;
var GameOverTela: UnityEngine.UI.Image;
var GameOverObj: GameObject;
var Tempo: float;

function Start ()
{
	Tempo = 0;
	GameOverVar = false;
	GameOverObj.active = false;
}

function Update ()
{
	if(GameOverVar)
	{
		//Time.timeScale = 0;
		GameOverObj.active = true;

		if(GameOverObj.active && Tempo <= 4)
		{
			Tempo += Time.deltaTime;			
			GameOverTela.color.a += Tempo/10;
		}

		else if(Tempo > 4)
		{
			Time.timeScale = 0;
			SceneManager.LoadScene ("GameOver");
		}
	}
}