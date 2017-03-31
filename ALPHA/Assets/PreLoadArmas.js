#pragma strict

function Start ()
{	
	Botao1Script.OK = true;
	ControleGeral.SetArma1 = true;
	ControleGeral.OKBotao1 = true;
	ControleGeral.Arma1 = 1;
	ControleGeral.Contador = 1;
	
	if(Botao1Script.OK)
		ControleGeral.OKBotao1 = true;

	/*if(Botao2Script.OK)
		ControleGeral.OKBotao2 = true;

	if(Botao3Script.OK)
		ControleGeral.OKBotao3 = true; */
}

function Update () {

}