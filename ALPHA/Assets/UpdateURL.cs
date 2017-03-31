using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System;

public class UpdateURL : MonoBehaviour {

	//public GameObject[] PostSave;
	// Use this for initialization

	void Update()
	{
		//PostSave = GameObject.FindGameObjectsWithTag ("PostSave");
		//if (PostSave.Length >= 2)
			//Destroy (PostSave [0]);
		
		//DontDestroyOnLoad (transform.gameObject);

		if (Perfil.SaveCloud)
		{
			string url = "http://54.89.111.59:3000/update_perfil"; //"https://monsters-headshotarts.c9users.io/update_perfil";  //"http://54.89.111.59:3000/update_perfil";

			WWWForm form = new WWWForm ();
			form.AddField ("username", PlayServices.username);
			form.AddField ("id", PlayServices.id);
			form.AddField ("hc", Perfil.HC);
			form.AddField ("shc", Perfil.SHC);
			form.AddField ("pontuacao", Perfil.Pontuacao);
			form.AddField ("koltsucuri", Convert.ToInt32(Perfil.KoltSucuri));
			form.AddField ("touronegro", Convert.ToInt32(Perfil.TouroNegro));
			form.AddField ("botao1ok", Convert.ToInt32(Perfil.Botao1ok));
			form.AddField ("botao2ok", Convert.ToInt32(Perfil.Botao2ok));
			form.AddField ("botao3ok", Convert.ToInt32(Perfil.Botao3ok));
			form.AddField ("contadorarmas", Perfil.ContadorArmas);
			form.AddField ("botao1arma1", Convert.ToInt32(Perfil.Botao1Arma1));
			form.AddField ("botao1arma2", Convert.ToInt32(Perfil.Botao1Arma2));
			form.AddField ("botao2arma1", Convert.ToInt32(Perfil.Botao2Arma1));
			form.AddField ("botao2arma2", Convert.ToInt32(Perfil.Botao2Arma2));
			form.AddField ("botao3arma1", Convert.ToInt32(Perfil.Botao3Arma1));
			form.AddField ("botao3arma2", Convert.ToInt32(Perfil.Botao3Arma2));
			form.AddField ("municaocloq17", Perfil.MunicaoCloq17);
			form.AddField ("municaotouronegro", Perfil.MunicaoTouroNegro);
			form.AddField ("municaokoltsucuri", Perfil.MunicaoKoltSucuri);

			WWW www = new WWW (url, form);

			StartCoroutine (WaitForRequest (www));
		}
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
				Debug.Log("UPDATE!");
				Perfil.SaveCloud = false;
			}

			else
			{
				//Se  validation for false entao ocorreu um erro no webService
				//vc precisa mandar uma mensagem pro usuario informando isso e parar o jogo
				Debug.Log("Ocorreu um erro no servidor.");
			}
				
		}

		else
		{
			Debug.Log("WWW Error: " + www.error);
		}
			
	}
}
