﻿#pragma strict

function Start () {

}

function Update () {

///DEFININDO A MIRA PARA NAO SAIR DA TELA///
	//var playerSize: Vector3;
	
	//playerSize = GetComponent.<Renderer>().bounds.size; //Bounding Box do Player!
     
   /* //Definindo os limites do player atraves da visão da camera
    var distance = (transform.position - Camera.main.transform.position).z;
     
    var leftBorder = Camera.main.ViewportToWorldPoint (new Vector3 (0, 0, distance)).x + (playerSize.x/2);
    var rightBorder = Camera.main.ViewportToWorldPoint (new Vector3 (1, 0, distance)).x - (playerSize.x/2);
     
    var bottomBorder = Camera.main.ViewportToWorldPoint (new Vector3 (0, 0, distance)).y + (playerSize.y/2);
    var topBorder = Camera.main.ViewportToWorldPoint (new Vector3 (0, 1, distance)).y - (playerSize.y/2);
     
    //Player não passa dos limites que setamos. Usamos o Clamp para nao serrilhar o movimento quando estiver nos limtes
    transform.position = (new Vector3 (
    Mathf.Clamp (transform.position.x, leftBorder, rightBorder),
    Mathf.Clamp (transform.position.y, bottomBorder, topBorder),
    transform.position.z)
    ); */
}

function OnTriggerEnter2D (col : Collider2D)
{	

}