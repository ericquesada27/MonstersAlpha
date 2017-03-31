#pragma strict
static var bool: boolean;
static var velHorizontal: float;
static var velVertical: float;
var Count: float;

function Start () {

}

function Update ()
{ 
	
}

public function Atirar ( bol: boolean )
{ 
	bool = bol;
}

//FUNCAO QUE O BOTAO UI DIREITA ATIVA
	public function Direita ( speed: float ){ //SPEED E O VALOR QUE O BOTAO ENVIA PARA A FUNCAO

	velHorizontal = speed;

	}
	//FUNCAO QUE O BOTAO UI ESQUERDA ATIVA
	public function Esquerda ( speed: float ){ //SPEED E O VALOR QUE O BOTAO ENVIA PARA A FUNCAO

	velHorizontal = speed;

	}
	//FUNCAO QUE O BOTAO UI CIMA ATIVA
	public function Cima ( speed: float ){ //SPEED E O VALOR QUE O BOTAO ENVIA PARA A FUNCAO

	velVertical = speed;

	}
	//FUNCAO QUE O BOTAO UI BAIXO ATIVA
	public function Baixo ( speed: float ){ //SPEED E O VALOR QUE O BOTAO ENVIA PARA A FUNCAO

	velVertical = speed;
	}

	public function ADDVida(bol: boolean)
	{
		if(RoyStatus.vidaAtual < 100)
			RoyStatus.vidaAtual += 10;

	    if(RoyStatus.vidaAtual >= 100)
			RoyStatus.vidaAtual = 100;
	}