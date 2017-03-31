using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using System.Collections.Generic;
using System;

public class PostURL : MonoBehaviour
{
	public bool ErroPlayGames;
	public bool ErroConexao;
	public GameObject Erros;
	Text ErrosT;

	void Start()
	{
		if (PlayServices.username != "" || PlayServices.id != "")
		{
			string url = "http://54.89.111.59:3000/login"; //"https://monsters-headshotarts.c9users.io/login";

			WWWForm form = new WWWForm ();
			form.AddField ("username", PlayServices.username);
			form.AddField ("id", PlayServices.id);
			form.AddField ("hc", Perfil.HC);
			form.AddField ("shc", Perfil.SHC);
			form.AddField ("pontuacao", Perfil.Pontuacao);
			form.AddField ("koltsucuri", Convert.ToInt32 (Perfil.KoltSucuri));
			form.AddField ("touronegro", Convert.ToInt32 (Perfil.TouroNegro));
			form.AddField ("botao1ok", Convert.ToInt32 (Perfil.Botao1ok));
			form.AddField ("botao2ok", Convert.ToInt32 (Perfil.Botao2ok));
			form.AddField ("botao3ok", Convert.ToInt32 (Perfil.Botao3ok));
			form.AddField ("contadorarmas", Perfil.ContadorArmas);
			form.AddField ("botao1arma1", Convert.ToInt32 (Perfil.Botao1Arma1));
			form.AddField ("botao1arma2", Convert.ToInt32 (Perfil.Botao1Arma2));
			form.AddField ("botao2arma1", Convert.ToInt32 (Perfil.Botao2Arma1));
			form.AddField ("botao2arma2", Convert.ToInt32 (Perfil.Botao2Arma2));
			form.AddField ("botao3arma1", Convert.ToInt32 (Perfil.Botao3Arma1));
			form.AddField ("botao3arma2", Convert.ToInt32 (Perfil.Botao3Arma2));
			form.AddField ("municaocloq17", Perfil.MunicaoCloq17);
			form.AddField ("municaotouronegro", Perfil.MunicaoTouroNegro);
			form.AddField ("municaokoltsucuri", Perfil.MunicaoKoltSucuri);
			Perfil.PlayGamesLogin = true;

			WWW www = new WWW (url, form);

			StartCoroutine (WaitForRequest (www));
		}
	}

	void Update()
	{
		ErrosT = Erros.GetComponent <Text> ();
		ErrosT.text = "Server:" + Perfil.ConexaoEstabelecida + "  Play:" + Perfil.PlayGamesLogin;
	}

	IEnumerator WaitForRequest(WWW www)
	{
		yield return www;

		// check for errors
		if (www.error == null)
		{
			Debug.Log("Json Completo: " + www.text);
			string text = www.text;

			Perfil p = JsonUtility.FromJson<Perfil>(text);

			//Se validation for true então carrega os dados do Perfil 
			//no jogo, fazer o msm para o update

			if (p.validation)
			{
				//Vc pega os valores dessa forma: 
				Perfil.HC = p.hc;
				Perfil.SHC = p.shc;
				Perfil.Pontuacao = p.pontuacao;
				Perfil.TouroNegro = p.touronegro;
				Perfil.KoltSucuri = p.koltsucuri;
				Perfil.Botao1ok = p.botao1ok;
				Perfil.Botao2ok = p.botao2ok;
				Perfil.Botao3ok = p.botao3ok;
				Perfil.ContadorArmas = p.contadorarmas;
				Perfil.Botao1Arma1 = p.botao1arma1;
				Perfil.Botao1Arma2 = p.botao1arma2;
				Perfil.Botao2Arma1 = p.botao2arma1;
				Perfil.Botao2Arma2 = p.botao2arma2;
				Perfil.Botao3Arma1 = p.botao3arma1;
				Perfil.Botao3Arma2 = p.botao3arma2;
				Perfil.MunicaoCloq17 = p.municaocloq17;
				Perfil.MunicaoTouroNegro = p.municaotouronegro;
				Perfil.MunicaoKoltSucuri = p.municaokoltsucuri;
				Debug.Log("POST!");
				Perfil.ConexaoEstabelecida = true;
			}

			else
			{
				//Se  validation for false entao ocorreu um erro no webService
				//vc precisa mandar uma mensagem pro usuario informando isso e parar o jogo
				Debug.Log("Ocorreu um erro no servidor.");
			}
			//Perfil.TesteConexao = true;
		}

		else
			Debug.Log("WWW Error: " + www.error);
	}
}