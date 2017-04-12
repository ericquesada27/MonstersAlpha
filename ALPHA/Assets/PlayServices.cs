using GooglePlayGames;
using GooglePlayGames.BasicApi;
using GooglePlayGames.BasicApi.SavedGame;
using UnityEngine.SocialPlatforms;
using UnityEngine;
using System.Collections;
using Google.Developers;

public class PlayServices: MonoBehaviour
{
	public static bool userSignedIn = true;
	public static string username;
	public static string id;

	void Start ()
	{
		InitPlayServices ();
	}
		
	void InitPlayServices ()
	{
		PlayGamesClientConfiguration config = new PlayGamesClientConfiguration.Builder ()
			.EnableSavedGames ()
			.RequireGooglePlus ()
			.Build ();
		PlayGamesPlatform.InitializeInstance (config);
		PlayGamesPlatform.DebugLogEnabled = true;
		PlayGamesPlatform.Activate (); 

		Social.localUser.Authenticate ((bool success) => { username = "aaa"; id = "aaa"; });//{ username = Social.localUser.userName; id = Social.localUser.id; });
	}
		

	//------------------------------------CARREGAR RANKING, LEADERBOARD E CONQUISTAS----------------------------------

	public static void MostrarRanking()
	{
		Social.ShowLeaderboardUI();
	}

	public static void PontuacaoFinal()
	{
		Social.ReportScore(Perfil.Pontuacao, "CgkIgPT5l8oJEAIQDw", (bool success) => {	});
	}

	public static void MostrarConquistas()
	{
		Social.ShowAchievementsUI();
	}
		

	//-------------------------------------------COMPLETAR CONQUISTAS--------------------------------------------------

	/*public void JeitinhoBrasileiro()
	{
		if (Social.localUser.authenticated)
			PlayGamesPlatform.Instance.ReportProgress (Conquistas.achievement_jeitinho_brasileiro, 100.0f, (bool success) => {Debug.Log("Jeitinho Brasileiro: " + success);});
	}

	public void PresenteDeGrego()
	{
		if (Social.localUser.authenticated)
			PlayGamesPlatform.Instance.ReportProgress (Conquistas.achievement_presente_de_grego, 100.0f, (bool success) => { });
	}

	public void AbaixoDeZero()
	{
		if (Social.localUser.authenticated)
			PlayGamesPlatform.Instance.ReportProgress (Conquistas.achievement_abaixo_de_zero, 100.0f, (bool success) => { });
	}

	public void ExecucaoPrimaria()
	{
		if (Social.localUser.authenticated)
			PlayGamesPlatform.Instance.IncrementAchievement (Conquistas.achievement_execuo_primria, 1, (bool success) => { });
	} */
} 
