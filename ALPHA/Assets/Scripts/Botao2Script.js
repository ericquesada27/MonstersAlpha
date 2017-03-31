#pragma strict

static var OK: boolean;
var Ok: boolean;
var DiminuiContador: boolean;
static var EssaArma1: boolean;
static var EssaArma2: boolean;

function Start ()
{
	EssaArma1 = Perfil.CheckBotao2Arma1();
	EssaArma2 = Perfil.CheckBotao2Arma2();
	OK = Perfil.CheckBotao2();
}

function Update ()
{
	Ok = OK;
}

public function Set(SetBtn: boolean)
{
	if(!OK)
	{
		if(ControleGeral.Contador < 2)
		{
			if(!ControleGeral.SetArma1)
			{
				ControleGeral.SetArma1 = true;
				ControleGeral.Arma1 = 2;
				ControleGeral.Contador++;
				EssaArma1 = true;
				Perfil.ValorContador(ControleGeral.Contador);
				Perfil.ValorBotao2Arma1(EssaArma1);
			}

			else
			{
				ControleGeral.SetArma2 = true;
				ControleGeral.Arma2 = 2;
				ControleGeral.Contador++;
				EssaArma2 = true;
				Perfil.ValorContador(ControleGeral.Contador);
				Perfil.ValorBotao2Arma2(EssaArma2);
			}

			ControleGeral.StaticCheck2.active = true;
			OK = SetBtn;
		}
	}

	else
	{
		if(ControleGeral.Contador > 1)
		{
			if(EssaArma1)
			{
				ControleGeral.SetArma1 = false;
				ControleGeral.Arma1 = 0;
				DiminuiContador = true;

				if(DiminuiContador)
				{	ControleGeral.Contador--; DiminuiContador = false;	}

				EssaArma1 = false;
				Perfil.ValorContador(ControleGeral.Contador);
				Perfil.ValorBotao2Arma1(EssaArma1);
			}

			else if(EssaArma2)
			{
				ControleGeral.SetArma2 = false;
				ControleGeral.Arma2 = 0;
				DiminuiContador = true;

				if(DiminuiContador)
				{	ControleGeral.Contador--; DiminuiContador = false;	}

				EssaArma2 = false;
				Perfil.ValorContador(ControleGeral.Contador);
				Perfil.ValorBotao2Arma2(EssaArma2);
			}

			ControleGeral.StaticCheck2.active = false;					
			OK = false;
		}
	}

	Perfil.SetValorBotao2(OK); // QUANDO O BOTÃO ESTÁ SELECIONADO OU NÃO, SALVA NO PERFIL
}