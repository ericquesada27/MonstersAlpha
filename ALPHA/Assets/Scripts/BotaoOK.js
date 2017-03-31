#pragma strict

static var OK: boolean;
var Ok: boolean;
var ErroFaltaDeArmas: GameObject;
var ErroFaltaDinheiro: GameObject;
var OKBox: boolean;

function Start ()
{
	ErroFaltaDeArmas.active = false;
}

function Update ()
{
	if(OKBox)
	{
		ErroFaltaDeArmas.active = false;
		OKBox = false;
	}
}

public function Set(SetBtn: boolean)
{
	if(ControleGeral.Contador > 0)
		OK = SetBtn;

	else
		ErroFaltaDeArmas.active = true;

	Ok = OK;
}

public function Box(SetOK: boolean)
{
	OKBox = SetOK;
}

public function OKFaltaArma()
{
	
	ErroFaltaDinheiro.active = false;
	BotaoCompra.SIM = false;
}