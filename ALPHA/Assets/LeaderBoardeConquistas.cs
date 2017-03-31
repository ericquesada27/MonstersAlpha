using UnityEngine;
using System.Collections;

public class LeaderBoardeConquistas : MonoBehaviour {

	public void Conquistas()
	{
		PlayServices.MostrarConquistas ();
	}

	public void Leaderboard()
	{
		PlayServices.MostrarRanking ();
	}
}
