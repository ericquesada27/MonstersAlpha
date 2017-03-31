#pragma strict

var rb: Rigidbody2D; 
var Anime: Animator; 
var Pulo: boolean;
//var PuloAux: boolean;
static var NoChao: boolean;
static var NoChaoTiro: boolean;

function Start ()
{
	
}

function Update ()
{
	if(InicioGame.RoyReload)
	{
		Anime.SetBool("Recarregando",true);
		waitmove();	
	}	

	else
	{
		Anime.SetBool("Recarregando",false);
		Anime.SetBool("Parado",true);
	} 

	Digital();
	Pulo = BotaoPular.Pulo;

	if(Pulo && NoChao)
	{
		NoChao = false;
		NoChaoTiro = false;
		rb.AddForce(new Vector2(0,2000));
		Anime.SetBool("Pulo",true);
		waitmove();
	}

	if(BotaoPular.Pulo)
		BotaoPular.Pulo = false;

	if(RoyStatus.vidaAtual <= 0)
	{
		Anime.SetBool("Caindo",true);
		waitmove1();
	}

	/*Gabriel esse trecho foi para testar na cena durante a partida apertando a tecla 'S' para salvar as alterações.
	  Essa validação temporaria precisa ser copiada em outro script somente quando o jogador concluir a partida. Caso de game over
	  ele perde.
	*/

	/*if (Input.GetKeyDown ("s")) {

	    Debug.Log('Salvou'); //Observar na tela o processo de SAVE quando apertar tecla

	    //Perfil.HC = 2000;                //Plano de volta: Setar a variavel após o Save
	    //Perfil.MunicaoCloq17 = 300;      //Plano de volta: Setar a variavel após o Save
	    //Perfil.MunicaoTouroNegro = 250;  //Plano de volta: Setar a variavel após o Save
	    //Perfil.MunicaoKoltSucuri = 250;  //Plano de volta: Setar a variavel após o Save
	           
		PlayerPrefs.SetInt ("HC", Perfil.HC);
		PlayerPrefs.SetInt ("SHC", Perfil.SHC);
		PlayerPrefs.SetInt ("MunicaoCloq17", Perfil.MunicaoCloq17);
		PlayerPrefs.SetInt ("MunicaoTouroNegro", Perfil.MunicaoTouroNegro);
		PlayerPrefs.SetInt ("MunicaoKoltSucuri", Perfil.MunicaoKoltSucuri);
		PlayerPrefs.SetInt ("Pontuacao", Perfil.Pontuacao);
	}*/


}
	
function Digital()
{
	if(RoyStatus.vidaAtual > 0)
	{
		if(Butao.velHorizontal != 0)
		{ 
			rb.velocity.x = Butao.velHorizontal;
			Anime.SetBool("Parado",false); 

			if(Butao.velHorizontal > 0)
				Anime.SetBool("AndarDireita",true); 

			else 
				Anime.SetBool("AndarEsquerda",true);
		}

		else
		{ 
			Anime.SetBool("Parado",true);
			Anime.SetBool("AndarDireita",false);
			Anime.SetBool("AndarEsquerda",false);
			rb.velocity.x = 0;
		}

	    //if(PuloAux && NoChao)
	    	//rb.AddForce(transform.up*50);
			//rb.velocity.y += 15;
	}

	else
		rb.velocity.x = 0;
}

function OnTriggerEnter2D (col : Collider2D)
{
	/*if(col.tag == "LimitePulo")
	{
		PuloAux = false;
		NoChao = false;
		rb.velocity.y -= 900;
	} */

	if(col.tag == "Chao")
	{
		NoChao = true;
		NoChaoTiro = true;
	}
}

function waitmove()
{
	yield WaitForSeconds (0.8);
	Anime.SetBool("Pulo",false);
	InicioGame.RoyReload = false;
}

function waitmove1()
{
   	yield WaitForSeconds(4);
   	GameOver.GameOverVar = true;
}