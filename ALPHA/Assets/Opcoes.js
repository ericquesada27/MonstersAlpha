#pragma strict

public static var Volume: float;
var VolumeGeral: Slider;
static var Save: boolean;
static var VolumeSave: float;

function Start()
{
	if(Save)
	{
		//VolumeSave = Perfil.GetVolume();
		VolumeGeral.value = VolumeSave;
		Save = false;
	}
}

function Update()
{
	if(!Save)
		Loading.StaticMusicaMenu.volume = VolumeGeral.value;
	
	VolumeSave = VolumeGeral.value;
	//Perfil.SetVolume(VolumeSave);
}

public function VoltarMenu()
{
	SceneManager.LoadScene ("MenuTeste");
	Save = true;
}
