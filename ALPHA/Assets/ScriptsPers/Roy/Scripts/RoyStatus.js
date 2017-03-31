#pragma strict

static var instance: RoyStatus;
public var maxVida: float;
public static var vidaAtual: float;   
public var AtualVida: GameObject;
public var BarraVida: GameObject;
public var DesativarBotoes: GameObject;
var EfeitoDano: GameObject;
var TransformRoy: Transform;
var MiraInimigo: Transform;
var Life: float;
var Tempo: float;

function Start ()
{
	instance = this;
	maxVida = 100;
	AtualVida = GameObject.FindGameObjectWithTag ("AtualVida");
	BarraVida = GameObject.FindGameObjectWithTag ("BarraVida");

	if(ControlArmas.TrocaArma)
		vidaAtual = ControlArmas.VidaRoy;

	else
		vidaAtual = maxVida;

	//AtualVida.GetComponent(Text).color = Color.green;
}

function Update ()
{
	Interface();

	if(vidaAtual == 0)
		DesativarBotoes.SetActive(true);

	Tempo += Time.deltaTime;
	Life = vidaAtual;
}

function Interface () {
	BarraVida.transform.localScale.x = 1*((vidaAtual * 100/maxVida)/100);
	AtualVida.GetComponent(Text).text = "" + vidaAtual;
	//AtualVida.GetComponent(Text).text = "X" + 1*((vidaAtual * 100/maxVida)/100);
}

public static function PerdeVida(dano: float)
{
	RoyStatus.instance.vidaAtual -= dano;
	ControlArmas.VidaRoy = vidaAtual;

	if (RoyStatus.instance.vidaAtual <= 0)
		RoyStatus.instance.vidaAtual = 0;
		
	//if((RoyStatus.instance.vidaAtual * 100 / RoyStatus.instance.maxVida) <= 30)
		//RoyStatus.instance.AtualVida.GetComponent(Text).color = Color.red;

	//RoyStatus.instance.Anime.SetBool("Dano",true);
//	Instantiate(RoyStatus.instance.EfeitoDano,RoyStatus.instance.TransformRoy.position,RoyStatus.instance.TransformRoy.rotation);
	//yield WaitForSeconds (0.3);
	//RoyStatus.instance.Anime.SetBool("Dano",false);
}

public static function RecuperaVida(recupera: float)
{
		RoyStatus.instance.vidaAtual += recupera;
 
		if (RoyStatus.instance.vidaAtual > RoyStatus.instance.maxVida) 
			RoyStatus.instance.vidaAtual = RoyStatus.instance.maxVida;
		
 
		//if ((RoyStatus.instance.vidaAtual * 100 / RoyStatus.instance.maxVida) >= 30) {
			//RoyStatus.instance.AtualVida.GetComponent(Text).color = Color.green;
		//}
}
