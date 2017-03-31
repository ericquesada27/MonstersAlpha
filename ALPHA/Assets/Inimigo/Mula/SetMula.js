#pragma strict

var Mula: GameObject;
var MulaLv2: GameObject;
var MulaLv3: GameObject;
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
    	Mula.transform.name = "Mula";

    	if(PersonagensControl.MulaLv < 4)
    	{
    		Instantiate(Mula,Origem3.position,Origem3.rotation);
    		DefineLvl =1;
    	}

    	else if(PersonagensControl.MulaLv > 3 && PersonagensControl.MulaLv < 7)
    	{
    		Instantiate(MulaLv2,Origem3.position,Origem3.rotation);
    		DefineLvl = 2;
    	}

    	else
    	{
    		Instantiate(MulaLv3,Origem3.position,Origem3.rotation);
    		DefineLvl = 3;
    	}

    	PersonagensControl.QuantidadeLinha3++;
}