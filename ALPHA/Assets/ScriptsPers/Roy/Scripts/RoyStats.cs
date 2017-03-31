using UnityEngine;
using System.Collections;

public class RoyStats : MonoBehaviour {
	//VIDA
	public int maxVida;
	private int vidaAtual;
	//public GameObject BarraVida;
	public GameObject AtualVida;
	//public GameObject QntVida;
	//public int Vida;

	// Use this for initialization
	void Start () {
		//VIDA
		vidaAtual = maxVida;
		AtualVida = GameObject.FindGameObjectWithTag ("AtualVida");
		//QntVida = GameObject.FindGameObjectWithTag ("QntVida");
		//BarraVida = GameObject.FindGameObjectWithTag ("BarraVida");
	}
	
	// Update is called once per frame
	void Update () {
		//INTERFACE VIDA
		//Vida = PlayerPrefs.GetInt("Vida");
		//BarraVida.transform.localScale.x = 1*((vidaAtual * 100/maxVida)/100);
		//AtualVida.GetComponent(Text).text = "HP: "+ vidaAtual + "/" + maxVida;
		//AtualVida.GetComponent(Text).text = "teste";
	}

	public void PerdeVida(int dano) {
		vidaAtual -= dano;
		
		if (vidaAtual <= 0) {
			//Application.LoadLevel(Application.loadedLevel);
		} 
		
		if ((vidaAtual * 100 / maxVida) < 30) {
			//vida.GetComponent<GUIText>().color = Color.red;
		}
		
		//vida.GetComponent<GUIText>().text = "HP: " + vidaAtual + "/" + maxVida;
	}
}
