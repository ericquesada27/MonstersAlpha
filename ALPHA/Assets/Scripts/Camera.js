#pragma strict

 var pt: GameObject;
 var ct: Transform;

function Start () {

}

function Update () {

pt = GameObject.FindGameObjectWithTag ("Roy");
if(pt){
	ct.position = Vector3.Lerp(
	ct.position,
	new Vector3 (pt.transform.position.x, ct.position.y, ct.position.z),
	1);
}
}