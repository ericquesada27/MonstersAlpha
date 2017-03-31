using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using System.Collections.Generic;
using Facebook.Unity;
using UnityEngine.SceneManagement;
using System.Collections.Generic;
using System.Linq;

public class FBScript : MonoBehaviour {

	//public GameObject DialogFacebookLogado;
	public GameObject DialogFacebookDeslogado;
	public GameObject DialogUsuario;
	public GameObject DialogFotoPerfil;

	void Awake()  
	{
		FB.Init (SetInit, OnHideUnity);
	}

	void SetInit()
	{
		if (FB.IsLoggedIn) { Debug.Log ("Facebook está Logado");}
        
		else { Debug.Log ("Facebook não está logado");}

		LidarMenusFB (FB.IsLoggedIn);
	}

	void OnHideUnity (bool isGameShown)
	{
		if(!isGameShown) { Time.timeScale = 0;} 

		else { Time.timeScale = 1;}
	}

	public void FBlogin () 
	{
		List<string> permissions = new List<string> (); 
		permissions.Add ("public_profile");

		FB.LogInWithReadPermissions (permissions, AuthCallBack);
	}

	void AuthCallBack (IResult result)
	{
		if (result.Error != null) {	Debug.Log (result.Error);}

		else if(FB.IsLoggedIn) { Debug.Log ("Facebook está logado");}

		else { Debug.Log ("Facebook não está logado");}

		LidarMenusFB (FB.IsLoggedIn);
	}

	void LidarMenusFB(bool FBLogado)
	{
		if (FBLogado)
		{
			DialogFacebookDeslogado.SetActive (false);
			//DialogFacebookLogado.SetActive (true);

			FB.API ("/me?fields=first_name", HttpMethod.GET, ExibirUsuario);
			FB.API ("/me/picture?type=square&height=144&width=144", HttpMethod.GET, ExibirFoto);
		}

		else
		{
			DialogFacebookDeslogado.SetActive (true);
			//DialogFacebookLogado.SetActive (false);
		}
	}

	void ExibirUsuario(IResult result)
	{
		Text Usuario = DialogUsuario.GetComponent<Text> ();

		if (result.Error == null) { Usuario.text = "Olá, " + result.ResultDictionary ["first_name"];}

		else { Debug.Log (result.Error); }
	}

	void ExibirFoto(IGraphResult result)
	{
		if (result.Texture != null)
		{
			Image Perfil = DialogFotoPerfil.GetComponent<Image> ();
			Perfil.sprite = Sprite.Create (result.Texture, new Rect (0, 0, 144, 144), new Vector2 ());
		}
	}
}
