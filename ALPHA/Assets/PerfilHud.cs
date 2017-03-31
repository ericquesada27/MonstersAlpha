using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class PerfilHud : MonoBehaviour
{

	public int SHCHud;
	public int HCHud;
	public bool CompraOk;
	public GameObject Obj;
	public GameObject Obj1;
	Text HCqtde;
	Text SHCqtde;

	void Update ()
	{		
		SHCHud = Perfil.SHC;
		HCHud = Perfil.HC;

		HCqtde = Obj.GetComponent <Text> ();
		HCqtde.text = "" + HCHud;

		SHCqtde = Obj1.GetComponent <Text> ();
		SHCqtde.text = "" + SHCHud;
	}
}
