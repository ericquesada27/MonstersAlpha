#pragma strict

static var OK: boolean;
//var ShopArma: GameObject;
var BotaoPrev: GameObject;
var Ok: boolean;

function Start ()
{

}

function Update ()
{	
	if(BotaoNext.Pagina <= 0)
			BotaoPrev.active = false;

	else
			BotaoPrev.active = true;
}

public function Set(SetBtn: boolean)
{
		OK = SetBtn;

		if(OK)
			BotaoNext.Pagina--;

		Ok = OK;
}