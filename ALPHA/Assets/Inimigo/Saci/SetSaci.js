#pragma strict

var Saci: GameObject;
var SaciLv2: GameObject;
var SaciLv3: GameObject;
var Origem1: Transform;
var Origem2: Transform;
static var DefineLvl: int;
var SortLinha: int;
static var Ativar: boolean;

function Start ()
{
	Ativar = false;
}

function Update ()
{
    if(Ativar)
    {
    	SortLinha = Random.Range(1,6);

    	if(SortLinha < 4)
         Linha1 ();

        else
    	 Linha2 ();
    	
         Ativar = false;
    }
}

function Linha1 ()
{
       	if(PersonagensControl.SaciLv < 4)
    	{
    		Saci.transform.name = "SaciLinha1";
    		Instantiate(Saci,Origem1.position,Origem1.rotation);
    		DefineLvl = 1;
    	}

    	else if(PersonagensControl.SaciLv > 3 && PersonagensControl.SaciLv < 7)
    	{
    		SaciLv2.transform.name = "SaciLv2Linha1";
    		Instantiate(SaciLv2,Origem1.position,Origem1.rotation);
    		DefineLvl = 2;
    	}

    	else
    	{
    		SaciLv3.transform.name = "SaciLv3Linha1";
    		Instantiate(SaciLv3,Origem1.position,Origem1.rotation);
    		DefineLvl = 3;
    	}

    	PersonagensControl.QuantidadeLinha1++;
}


function Linha2 ()
{
       if(PersonagensControl.SaciLv < 4)
    	{
    		Saci.transform.name = "SaciLinha2";
    		Instantiate(Saci,Origem2.position,Origem2.rotation);
    		DefineLvl = 1;
    	}

    	else if(PersonagensControl.SaciLv > 3 && PersonagensControl.SaciLv < 7)
    	{
    		SaciLv2.transform.name = "SaciLv2Linha2";
    		Instantiate(SaciLv2,Origem2.position,Origem2.rotation);
    		DefineLvl = 2;
    	}

    	else
    	{
    		SaciLv3.transform.name = "SaciLv3Linha2";
    		Instantiate(SaciLv3,Origem2.position,Origem2.rotation);
    		DefineLvl = 3;
    	}

    	PersonagensControl.QuantidadeLinha2++;
}
