#pragma strict

var VS: Transform;
var Descer: boolean;
var Parar: boolean;
var Limite: GameObject;
var LimiteVS: GameObject;

function Start ()
{
	
}

function Update ()
{
	if(PersonagensControl.WavesCompletas)
	{
		if(!Descer)
		{
			if(transform.position.x <= Limite.transform.position.x)			
				Descer = true;

			/*else
			{
				if(Screen.width > 1280 && Screen.height > 720)
					transform.position.x -= 3; */

				else
					transform.position.x -= 1.5;
			//}
		}

		else if(Descer && !Parar)
		{
			if(VS.position.y <= LimiteVS.transform.position.y)			
				Parar = true;

			//else
			//{
				//if(Screen.width > 1280 && Screen.height > 720)
					//VS.position.y -= 3;

				else
					VS.position.y -= 1.5;
			//}
		}
	}
}