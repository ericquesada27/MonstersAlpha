#pragma strict

static var OK: boolean;
var ShopArma: GameObject;
var ShopPers: GameObject;
var ShopMoney: GameObject;
var BotaoNext: GameObject;
static var Pagina: short;
var Ok: boolean;
var Pag: short;

function Start ()
{
	Pagina = 0;
}

function Update ()
{	
	if(Pagina >= 2)
			BotaoNext.active = false;

	else
			BotaoNext.active = true;

	if(Pagina == 1)
	{
		ShopArma.active = false;
		ShopPers.active = true;
		ShopMoney.active = false;
	}

	else if(Pagina == 2)
	{
		ShopArma.active = false;
		ShopPers.active = false;
		ShopMoney.active = true;
	}

	else
	{
		ShopArma.active = true;
		ShopPers.active = false;
		ShopMoney.active = false;
	}

	Pag = Pagina;
}

public function Set(SetBtn: boolean)
{
		OK = SetBtn;

		if(OK)
			Pagina++;

			//ShopArma.active = false;
			//SceneManager.LoadScene ("Beta1Selva");

		Ok = OK;
}