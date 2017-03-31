using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class ControleMunicao : MonoBehaviour
{
	public GameObject Cloq17;
	Text QtdeMunCloq17;

	public GameObject TouroNegro;
	Text QtdeMunTouroNegro;

	public GameObject KoltSucuri;
	Text QtdeMunKoltSucuri;

	public GameObject HC;
	Text QtdeHC;
	public GameObject SHC;
	Text QtdeSHC;

	public GameObject Pontuacao;
	Text QtdePontuacao;

	public int Municao;

	void Update ()
	{
		QtdeMunCloq17 = Cloq17.GetComponent <Text> ();
		QtdeMunCloq17.text = "" + Perfil.MunicaoCloq17; 

		QtdePontuacao = Pontuacao.GetComponent <Text> ();
		QtdePontuacao.text = "" + Perfil.Pontuacao;

		QtdeMunTouroNegro = TouroNegro.GetComponent <Text> ();
		QtdeMunTouroNegro.text = "" + Perfil.MunicaoTouroNegro;

		QtdeMunKoltSucuri = KoltSucuri.GetComponent <Text> ();
		QtdeMunKoltSucuri.text = "" + Perfil.MunicaoKoltSucuri;

		QtdeHC = HC.GetComponent <Text> ();
		QtdeHC.text = "" + Perfil.HC;
		QtdeSHC = SHC.GetComponent <Text> ();
		QtdeSHC.text = "" + Perfil.SHC;

		Municao = Perfil.MunicaoCloq17;
	}

	public void CompraMunCloq17()
	{			
		if (Perfil.HC >= 100)
		{	
			Perfil.MunicaoCloq17 += 50;
			Perfil.HC -= 100;
		}
	}
	//------------------------------------------------

	public void CompraMunTouroNegro()
	{			
		if (Perfil.HC >= 100)
		{	
			Perfil.MunicaoTouroNegro += 50;
			Perfil.HC -= 100;
		}
	}

	public void CompraMunKoltSucuri()
	{			
		if (Perfil.HC >= 130)
		{	
			Perfil.MunicaoKoltSucuri += 40;
			Perfil.HC -= 130;
		}
	}
}
