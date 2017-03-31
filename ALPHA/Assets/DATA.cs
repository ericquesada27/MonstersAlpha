using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DATA : MonoBehaviour
{
	//public static int Dinheiro;
	public GameObject[] Datas;

	void Awake()
	{
		Datas = GameObject.FindGameObjectsWithTag ("DATA");
		if (Datas.Length >= 2) {
			Destroy (Datas [0]);
		}
		DontDestroyOnLoad (transform.gameObject);
	}

	void Start ()
	{
		if(PlayerPrefs.HasKey("HC"))			
			Perfil.HC = PlayerPrefs.GetInt ("HC");
		
		else
			PlayerPrefs.SetInt("HC", Perfil.HC);
		
			
		if(PlayerPrefs.HasKey("SHC"))
			Perfil.SHC = PlayerPrefs.GetInt ("SHC");
		
		else
			PlayerPrefs.SetInt("SHC", Perfil.SHC);
		
			
		if(PlayerPrefs.HasKey("MunicaoCloq17"))
			Perfil.MunicaoCloq17 = PlayerPrefs.GetInt ("MunicaoCloq17");
		
		else
			PlayerPrefs.SetInt("MunicaoCloq17", Perfil.MunicaoCloq17);
		

		if(PlayerPrefs.HasKey("MunicaoTouroNegro"))
			Perfil.MunicaoTouroNegro = PlayerPrefs.GetInt ("MunicaoTouroNegro");
	
		else
			PlayerPrefs.SetInt("MunicaoTouroNegro", Perfil.MunicaoTouroNegro);
		

		if(PlayerPrefs.HasKey("MunicaoKoltSucuri"))
			Perfil.MunicaoKoltSucuri = PlayerPrefs.GetInt ("MunicaoKoltSucuri");
	
		else
			PlayerPrefs.SetInt("MunicaoKoltSucuri", Perfil.MunicaoKoltSucuri);
		

		if(PlayerPrefs.HasKey("Pontuacao"))
			Perfil.Pontuacao = PlayerPrefs.GetInt ("Pontuacao");
	
		else
			PlayerPrefs.SetInt("Pontuacao", Perfil.Pontuacao);
		

		if(PlayerPrefs.HasKey("TouroComprada"))
			Perfil.TouroNegro = PlayerPrefs.GetInt ("TouroComprada") > 0? true:false;
		
		else
			PlayerPrefs.SetInt("TouroComprada", Perfil.TouroNegro ? 1:0);


		if(PlayerPrefs.HasKey("KoltComprada"))
			Perfil.KoltSucuri = PlayerPrefs.GetInt ("KoltComprada") > 0? true:false;

		else
			PlayerPrefs.SetInt("KoltComprada", Perfil.KoltSucuri ? 1:0);
		
		
		if(PlayerPrefs.HasKey("Botao1ok"))
			Perfil.Botao1ok = PlayerPrefs.GetInt ("Botao1ok") > 0? true:false;

		else
			PlayerPrefs.SetInt("Botao1ok", Perfil.Botao1ok ? 1:0);


		if(PlayerPrefs.HasKey("Botao2ok"))
			Perfil.Botao2ok = PlayerPrefs.GetInt ("Botao2ok") > 0? true:false;
	
		else
			PlayerPrefs.SetInt("Botao2ok", Perfil.Botao2ok ? 1:0);


		if(PlayerPrefs.HasKey("Botao3ok"))
			Perfil.Botao3ok = PlayerPrefs.GetInt ("Botao3ok") > 0? true:false;

		else
			PlayerPrefs.SetInt("Botao3ok", Perfil.Botao3ok ? 1:0);


		if(PlayerPrefs.HasKey("Botao1Arma1"))
			Perfil.Botao1Arma1 = PlayerPrefs.GetInt ("Botao1Arma1") > 0? true:false;

		else
			PlayerPrefs.SetInt("Botao1Arma1", Perfil.Botao1Arma1 ? 1:0);


		if(PlayerPrefs.HasKey("Botao1Arma2"))
			Perfil.Botao1Arma2 = PlayerPrefs.GetInt ("Botao1Arma2") > 0? true:false;

		else
			PlayerPrefs.SetInt("Botao1Arma2", Perfil.Botao1Arma2 ? 1:0);


		if(PlayerPrefs.HasKey("Botao2Arma1"))
			Perfil.Botao2Arma1 = PlayerPrefs.GetInt ("Botao2Arma1") > 0? true:false;

		else
			PlayerPrefs.SetInt("Botao2Arma1", Perfil.Botao2Arma1 ? 1:0);


		if(PlayerPrefs.HasKey("Botao2Arma2"))
			Perfil.Botao2Arma2 = PlayerPrefs.GetInt ("Botao2Arma2") > 0? true:false;

		else
			PlayerPrefs.SetInt("Botao2Arma2", Perfil.Botao2Arma2 ? 1:0);


		if(PlayerPrefs.HasKey("Botao3Arma1"))
			Perfil.Botao3Arma1 = PlayerPrefs.GetInt ("Botao3Arma1") > 0? true:false;

		else
			PlayerPrefs.SetInt("Botao3Arma1", Perfil.Botao3Arma1 ? 1:0);


		if(PlayerPrefs.HasKey("Botao3Arma2"))
			Perfil.Botao3Arma2 = PlayerPrefs.GetInt ("Botao3Arma2") > 0? true:false;

		else
			PlayerPrefs.SetInt("Botao3Arma2", Perfil.Botao3Arma2 ? 1:0);


		if(PlayerPrefs.HasKey("ContadorArmas"))
			Perfil.ContadorArmas = PlayerPrefs.GetInt ("ContadorArmas");

		else
			PlayerPrefs.SetInt("ContadorArmas", Perfil.ContadorArmas);
	}
}
