#pragma strict

var Cuca: GameObject;
var CucaLv2: GameObject;
var CucaLv3: GameObject;
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
    	Cuca.transform.name = "Cuca3";

    	if(PersonagensControl.CucaLv < 4)
    	{
    		Instantiate(Cuca,Origem3.position,Origem3.rotation);
    		DefineLvl =1;
    	}

    	else if(PersonagensControl.CucaLv > 3 && PersonagensControl.CucaLv < 7)
    	{
    		Instantiate(CucaLv2,Origem3.position,Origem3.rotation);
    		DefineLvl = 2;
    	}

    	else
    	{
    		Instantiate(CucaLv3,Origem3.position,Origem3.rotation);
    		DefineLvl = 3;
    	}

    	PersonagensControl.QuantidadeLinha3++;
}
