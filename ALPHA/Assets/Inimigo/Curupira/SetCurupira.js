#pragma strict

var Curupira: GameObject;
var CurupiraLv2: GameObject;
var CurupiraLv3: GameObject;
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
       	if(PersonagensControl.CurupiraLv < 4)
    	{
    		Curupira.transform.name = "CurupiraLinha1";
    		Instantiate(Curupira,Origem1.position,Origem1.rotation);
    		DefineLvl =1;
    	}

    	else if(PersonagensControl.CurupiraLv > 3 && PersonagensControl.CurupiraLv < 7)
    	{
    		CurupiraLv2.transform.name = "CurupiraLv2Linha1";
    		Instantiate(CurupiraLv2,Origem1.position,Origem1.rotation);
    		DefineLvl = 2;
    	}

    	else
    	{
    		CurupiraLv3.transform.name = "CurupiraLv3Linha1";
    		Instantiate(CurupiraLv3,Origem1.position,Origem1.rotation);
    		DefineLvl = 3;
    	}

    	PersonagensControl.QuantidadeLinha1++;
}


function Linha2 ()
{
       	if(PersonagensControl.CurupiraLv < 4)
    	{
    		Curupira.transform.name = "CurupiraLinha2";
    		Instantiate(Curupira,Origem2.position,Origem2.rotation);
    		DefineLvl =1;
    	}

    	else if(PersonagensControl.CurupiraLv > 3 && PersonagensControl.CurupiraLv < 7)
    	{
    		CurupiraLv2.transform.name = "CurupiraLv2Linha2";
    		Instantiate(CurupiraLv2,Origem2.position,Origem2.rotation);
    		DefineLvl = 2;
    	}

    	else
    	{
    		CurupiraLv3.transform.name = "CurupiraLv3Linha2";
    		Instantiate(CurupiraLv3,Origem2.position,Origem2.rotation);
    		DefineLvl = 3;
    	}

    	PersonagensControl.QuantidadeLinha2++;
}
