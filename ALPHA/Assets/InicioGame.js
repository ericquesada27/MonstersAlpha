#pragma strict

var InicioLevelFake: GameObject;
static var RoyReload: boolean;
var Contador: float;
var ContadorInt: int;
public var Mensagem: GameObject;

function Start ()
{
	Contador = 0;
	RoyReload = true;
}

function Update ()
{
	Contador += Time.deltaTime;

	if(Contador < 2)
		Mensagem.GetComponent(Text).text = "PREPARAR...";

	else if(Contador > 2 && Contador < 3)
		Mensagem.GetComponent(Text).text = "     FOGO!";


	else if(Contador >= 3)
	{
		InicioLevelFake.active = false;
		Contador = 0;
	}
}