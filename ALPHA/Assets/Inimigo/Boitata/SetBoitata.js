#pragma strict

var Boitata: GameObject;
var Origem1: Transform;
var Origem2: Transform;
var SortLinha: int;
static var Linha2Start: boolean;

function Start ()
{

}

function Update ()
{
    if(PersonagensControl.SetBoss)
    {
    	Linha();
    	PersonagensControl.SetBoss = false;
    }
}	

function Linha ()
{
    Boitata.transform.name = "BoitataBOSS";
    SortLinha = Random.Range(1,7);

    if(SortLinha < 4)
    	Instantiate(Boitata,Origem1.position,Origem1.rotation);

    else
    {
    	Linha2Start = true;
    	Instantiate(Boitata,Origem2.position,Origem2.rotation);
    }
}