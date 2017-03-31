#pragma strict

var TouroNegroLocked: GameObject;
var KoltSucuriLocked: GameObject;
var SophiaLocked: GameObject;
var SophiaSelect: GameObject;
var SophiaOK: GameObject;
var RoyOK: GameObject;
var Confirmar: GameObject;
var SemDinheiro: GameObject;
var ValidaCompra1: boolean; //variavel criada para validar a compra da TouroNegro
var ValidaCompra2: boolean; //variavel criada para validar a compra da KoltSucuri


function Start ()
{
	if(Perfil.TouroNegro)
		TouroNegroLocked.active = false;

	if(Perfil.KoltSucuri)
		KoltSucuriLocked.active = false;

	if(Perfil.SophiaDesbloqueada)
	{
		SophiaLocked.active = false;
		SophiaSelect.active = true;
	}

	if(Perfil.RoySelecionado)
	{
		RoyOK.active = true;
		SophiaOK.active = false;
	}

	else if(Perfil.SophiaSelecionada)
	{
		RoyOK.active = false;
		SophiaOK.active = true;
	}
	//PARTE DO CÓDIGO EM QUE É VERIFICADO QUAIS ARMAS FORAM COMPRADAS PARA ASSIM DESBLOQUEAR O CADEADO
}

function Update ()
{
	if(BotaoCompra.SIM)
	{
		if(BotaoCompra.Arma == 1)
		{ 
			if(Perfil.Compra(1200))
			{
				TouroNegroLocked.active = false;
				Perfil.TouroNegroComprada(true);
				Confirmar.active = false;
				BotaoCompra.SIM = false;
				ValidaCompra1 = true; //validando a compra da TouroNegro
			}

			else
			{
				SemDinheiro.active = true;
				Confirmar.active = false;
			}
		}

		if(BotaoCompra.Arma == 2)
		{ 
			if(Perfil.Compra(1500))
			{
				KoltSucuriLocked.active = false;
				Perfil.KoltSucuriComprada(true);
				Confirmar.active = false;
				BotaoCompra.SIM = false;
				ValidaCompra2 = true; //validando a compra da KoltSucuri
			}

			else
			{
				SemDinheiro.active = true;
				Confirmar.active = false;
			}
		}
	}

	else if(BotaoCompra.NAO)
	{
		BotaoCompra.NAO = false;
		Confirmar.active = false;
	}

	/*Gabriel esse trecho é para validar se houve compra da TouroNegro para então salvar as alterações
	   após sair da loja.*/
 /*
	if(ValidaCompra1 == true){
		PlayerPrefs.SetInt ("HC", Perfil.HC);
		PlayerPrefs.SetInt ("SHC", Perfil.SHC);
		PlayerPrefs.SetInt("TouroComprada", Perfil.TouroNegro ? 1:0);
	}

	Gabriel esse trecho é para validar se houve compra da KoltSucuri para então salvar as alterações
	   após sair da loja.

	if(ValidaCompra2 == true){
		PlayerPrefs.SetInt ("HC", Perfil.HC);
		PlayerPrefs.SetInt ("SHC", Perfil.SHC);
		PlayerPrefs.SetInt("KoltComprada", Perfil.KoltSucuri ? 1:0);
	} */				
}

public function SelecionaRoy()
{
	Perfil.SophiaSelecionada  = false;
	Perfil.RoySelecionado = true;
	RoyOK.active = true;
	SophiaOK.active = false;
} 

public function SelecionaSophia()
{
	Perfil.SophiaSelecionada  = true;
	Perfil.RoySelecionado = false;
	SophiaOK.active = true;
	RoyOK.active = false;
} 