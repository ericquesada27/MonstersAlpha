#pragma strict

var Lobisomem: GameObject;
var LobisomemLv2: GameObject;
var LobisomemLv3: GameObject;
var Origem3: Transform;
static var DefineLvl: int;
static var Ativar: boolean;

function Start ()
{
	Ativar = false;
}

function Update ()
{
    if (Ativar)
    {
    	 Linha3 ();       
         Ativar = false;
    }
}

function Linha3 ()
{
    	Lobisomem.transform.name = "Lobisomem";

    	if(PersonagensControl.LobisomemLv < 4)
    	{
    		Instantiate(Lobisomem,Origem3.position,Origem3.rotation);
    		DefineLvl =1;
    	}

    	else if(PersonagensControl.CucaLv > 3 && PersonagensControl.CucaLv < 7)
    	{
    		Instantiate(LobisomemLv2,Origem3.position,Origem3.rotation);
    		DefineLvl = 2;
    	}

    	else
    	{
    		Instantiate(LobisomemLv3,Origem3.position,Origem3.rotation);
    		DefineLvl = 3;
    	}

    	PersonagensControl.QuantidadeLinha3++;
}