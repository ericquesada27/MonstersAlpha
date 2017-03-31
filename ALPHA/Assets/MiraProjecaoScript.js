#pragma strict

var touchPosition: Vector2;
var Posicao: Vector3;
var i: int;
var realWorldPos: Vector3;
var ContadorTouch: short;
static var Colidiu: boolean;

function Start ()
{
	Colidiu = false;
}

function Update ()
{
	var pos: Vector3 = touchPosition;
	pos.z = 100;
	realWorldPos = Camera.main.ScreenToWorldPoint(pos);	

	for(i = 0; i < Input.touchCount; i++)
	{
		touchPosition.x = Input.GetTouch(0).position.x;
		touchPosition.y = Input.GetTouch(0).position.y;

		if(!Colidiu)
		{
			if(Input.GetTouch(0).phase == TouchPhase.Moved || Input.GetTouch(0).phase == TouchPhase.Began)
			{
				if(touchPosition.y > Screen.height/4 && touchPosition.y < Screen.height/1.5)				
					transform.position = realWorldPos;
			} 
		}

		else
		{
			if(Input.GetTouch(0).phase == TouchPhase.Began)
			{
				if(touchPosition.y > Screen.height/4 && touchPosition.y < Screen.height/1.5)				
					ContadorTouch++;
			} 

			if(ContadorTouch == 1)
			{
				Colidiu = false;
				ContadorTouch = 0;
			}
		} 
	}

	/*if(Input.mousePosition.y > Screen.height/4 && Input.mousePosition.y < Screen.height/1.5 && Input.GetMouseButton(0))
	{
		Posicao = Vector3(Input.mousePosition.x, Input.mousePosition.y, 100);
		transform.position = Posicao;
	} */
}