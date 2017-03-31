#pragma strict

static var OK: boolean;
var Ok: boolean;

function Start ()
{

}

function Update ()
{

}

public function Set(SetBtn: boolean)
{
	OK = SetBtn;
	Ok = OK;
	Perfil.SetValorBotao1(false);
	Perfil.SetValorBotao2(false);
}