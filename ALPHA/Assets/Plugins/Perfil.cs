using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using System;

[System.Serializable] 
public class Perfil
{

//VARIAVEIS ORIGINAIS
	public static int SHC = 100;
	public static int HC = 3000;	
	public static int CompraHC;			//VALOR DE UMA COMPRA A SER PASSADA NA FUNÇÃO, ONDE LÁ VERIFICA SE O JOGADOR POSSUI DINHEIRO
	public static bool TouroNegro;		//ARMAZENA SE TOURO NEGRO ESTÁ COMPRADA (SEM CADEADO)
	public static bool KoltSucuri;		//ARMAZENA SE KOLT ESTÁ COMPRADA (SEM CADEADO)
    public static int Pontuacao = 0;
	public static float PontuacaoF = 0;//PONTUAÇÃO DO JOGADOR
	public static bool Botao1ok = true; //ARMEZENA SE CLOQ ESTÁ SELECIONADA (COM CHECK), POR PADRÃO SIM, JA QUE É ARMA INICIAL
	public static bool Botao2ok;		//ARMEZENA SE TOURO NEGRO ESTÁ SELECIONADA (COM CHECK)
	public static bool Botao3ok;		//ARMEZENA SE KOLT ESTÁ SELECIONADA (COM CHECK)
	public static int ContadorArmas = 1;	//ARMEZENA NUMERO DE ARMAS SELECIONADAS (MÁXIMO DUAS, TENTEI COM SHORT INVÉS DE INT MAS N ROLOU). POR PADRÃO RECEBE 1

	public static bool Botao1Arma1 = true;  //ARMAZENA QUE A CLOQ É ARMA 1
	public static bool Botao1Arma2;  //ARMAZENA QUE A CLOQ É ARMA 2
	public static bool Botao2Arma1;  //ARMAZENA QUE A TOURO NEGRO É ARMA 1
	public static bool Botao2Arma2;  //ARMAZENA QUE A TOURO NEGRO É ARMA 2
	public static bool Botao3Arma1;  //ARMAZENA QUE A KOLT É ARMA 1
	public static bool Botao3Arma2;  //ARMAZENA QUE A KOLT É ARMA 2
	//public static float Volume;
	public static bool SophiaDesbloqueada = true;
	public static bool SophiaSelecionada;
	public static bool RoySelecionado = true;

	public static int MunicaoCloq17 = 2;
	public static int MunicaoTouroNegro = 4;
	public static int MunicaoKoltSucuri = 250;
	public static bool SaveCloud;
	public static bool PlayGamesLogin;
	public static bool ConexaoEstabelecida;
	public static bool TesteConexao;
	public static bool Nepal;
	public static bool Grecia;
	//public static string email  = PlayServices.EmailPlayServices;

//VARIAVEIS POST
	public bool validation;
	public int hc = HC;
	public int shc = SHC;
	public int pontuacao = Pontuacao;
	public bool touronegro = TouroNegro;
	public bool koltsucuri = KoltSucuri;
	public bool botao1ok = Botao1ok;
	public bool botao2ok = Botao2ok;
	public bool botao3ok = Botao3ok;
	public int contadorarmas = ContadorArmas;
	public bool botao1arma1 = Botao1Arma1;
	public bool botao1arma2 = Botao1Arma2;
	public bool botao2arma1 = Botao2Arma1;
	public bool botao2arma2 = Botao2Arma2;
	public bool botao3arma1 = Botao3Arma1;
	public bool botao3arma2 = Botao3Arma2;
	public int municaocloq17 = MunicaoCloq17;
	public int municaotouronegro = MunicaoTouroNegro;
	public int municaokoltsucuri = MunicaoKoltSucuri; 

	public static void LiberaGrecia(bool ok)
	{
		Grecia = ok;
	}

	//-----------------------(SHOP)----------------------------- RESPONSÁVEL POR REALIZAR A COMPRA DESDE QUE O JOGADOR TENHA DINHEIRO
	public static bool Compra(int Compra)
	{
		CompraHC = Compra;

		if (CompraHC <= HC)
		{
			HC = HC - CompraHC;
			return true;
		} 

		else 
			return false;
	}
	//-----------------------(SHOP)-----------------------------


	//-----------------------(SAVE)----------------------------- VERIFICA QUANDO CLOQ 17 ESTA SELECIONADA, COLOCANDO ASSIM O "CHECK"
	public static void SetValorBotao1(bool OK)
	{
		Botao1ok = OK;
		Perfil.SaveCloud = true;
		//PlayerPrefs.SetInt("Botao1ok", Botao1ok ? 1:0);
	}

	public static bool CheckBotao1()
	{
		if (Botao1ok)
			return true;
		else
			return false;
	}


	public static void SetValorBotao2(bool OK)	//VERIFICA QUANDO TOURO NEGRO ESTA SELECIONADA, COLOCANDO ASSIM O "CHECK"
	{
		Botao2ok = OK;
		Perfil.SaveCloud = true;
		//PlayerPrefs.SetInt("Botao2ok", Botao2ok ? 1:0);
	}

	public static bool CheckBotao2()
	{
		if (Botao2ok)
			return true;
		else
			return false;
	}


	public static void SetValorBotao3(bool OK)	//VERIFICA QUANDO KOLT ESTA SELECIONADA, COLOCANDO ASSIM O "CHECK"
	{
		Botao3ok = OK;
		Perfil.SaveCloud = true;
		//PlayerPrefs.SetInt("Botao3ok", Botao3ok ? 1:0);
	}

	public static bool CheckBotao3()
	{
		if (Botao3ok)
			return true;
		else
			return false;
	}
	//-----------------------(SAVE)-----------------------------


	//-----------------------(SHOP)----------------------------- VERIFICA QUANDO ARMAS FORAM COMPRADAS, DESBLOQUEANDO ASSIM O CADEADO
	public static void TouroNegroComprada(bool OK)            // NO SCRIPT Shop.cs, NA FUNÇÃO START
	{	TouroNegro = OK;  }  

	public static void KoltSucuriComprada(bool OK)
	{	KoltSucuri = OK;  } 
	//-----------------------(SHOP)-----------------------------


	//-----------------------(MUNIÇÃO E PONTUAÇÃO)-------------- DIMINUI A MUNIÇÃO A CADA TIRO, DESDE QUE O JOGADOR TENHA
	public static void AtualizaPontuacaoSelva(float Tempo, float Vida)
	{	
		PontuacaoF = (Vida/Tempo)*100000;
		Pontuacao = Convert.ToInt32(PontuacaoF);
	} 

	public static void GastaMunCloq17()
	{	
		if(MunicaoCloq17 > 0)
			MunicaoCloq17--;	
	}

	public static void GastaMunTouroNegro()
	{ 	
		if(MunicaoTouroNegro > 0)
			MunicaoTouroNegro--;
	}

	public static void GastaMunKoltSucuri()
	{ 	
		if(MunicaoKoltSucuri > 0)
			MunicaoKoltSucuri--;
	}
	//-----------------------(MUNIÇÃO E PONTUAÇÃO)---------------


	//-----------------------(ARMAS)----------------------------- FUNÇÕES VERIFICAM QUAL A ORDEM DE SELEÇÃO DE ARMAS
													// EXEMPLO: A PRIMEIRA ARMA SELECIONADA É A DO BOTÃO 1 (CLOQ)
    public static void ValorBotao1Arma1(bool OK)
	{
		Botao1Arma1 = OK;
		Perfil.SaveCloud = true;
		//PlayerPrefs.SetInt("Botao1Arma1", Botao1Arma1 ? 1:0);
	}

	public static bool CheckBotao1Arma1()
	{
		if (Botao1Arma1)
			return true;
		else
			return false;
	}


	public static void ValorBotao1Arma2(bool OK)
	{
		Botao1Arma2 = OK;
		Perfil.SaveCloud = true;
		//PlayerPrefs.SetInt("Botao1Arma2", Botao1Arma2 ? 1:0);
	}

	public static bool CheckBotao1Arma2()
	{
		if (Botao1Arma2)
			return true;
		else
			return false;
	}


	public static void ValorBotao2Arma1(bool OK)
	{
		Botao2Arma1 = OK;
		Perfil.SaveCloud = true;
		//PlayerPrefs.SetInt("Botao2Arma1", Botao2Arma1 ? 1:0);
	}

	public static bool CheckBotao2Arma1()
	{
		if (Botao2Arma1)
			return true;
		else
			return false;
	}


	public static void ValorBotao2Arma2(bool OK)
	{
		Botao2Arma2 = OK;
		Perfil.SaveCloud = true;
		//PlayerPrefs.SetInt("Botao2Arma2", Botao2Arma2 ? 1:0);
	}

	public static bool CheckBotao2Arma2()
	{
		if (Botao2Arma2)
			return true;
		else
			return false;
	}


	public static void ValorBotao3Arma1(bool OK)
	{
		Botao3Arma1 = OK;
		Perfil.SaveCloud = true;
		//PlayerPrefs.SetInt("Botao3Arma1", Botao3Arma1 ? 1:0);
	}

	public static bool CheckBotao3Arma1()
	{
		if (Botao3Arma1)
			return true;
		else
			return false;
	}


	public static void ValorBotao3Arma2(bool OK)
	{
		Botao3Arma2 = OK;
		Perfil.SaveCloud = true;
		//PlayerPrefs.SetInt("Botao3Arma2", Botao3Arma2 ? 1:0);
	}

	public static bool CheckBotao3Arma2()
	{
		if (Botao3Arma2)
			return true;
		else
			return false;
	}


	public static void ValorContador(int Valor)
	{
		ContadorArmas = Valor;
		Perfil.SaveCloud = true;
		//PlayerPrefs.SetInt("ContadorArmas", ContadorArmas);
	}


	/*public static void SetVolume(float Vol)
	{	Volume = Vol;	}

	public static float GetVolume()
	{	return Volume;	} */

}
