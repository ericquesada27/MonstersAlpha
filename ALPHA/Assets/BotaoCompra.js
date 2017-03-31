#pragma strict

static var SIM: boolean;
static var NAO: boolean;
static var Arma: int;
var Confirmar: GameObject;

function Start()
{
	Confirmar.active = false;
}

public function Apertar (Num: int)
{
	Confirmar.active = true;
	Arma = Num;
}

public function CertezaSIM (bol: boolean)
{
	SIM = bol;
	Perfil.SaveCloud = true;
}

public function CertezaNAO (bol: boolean)
{
	NAO = bol;
}


