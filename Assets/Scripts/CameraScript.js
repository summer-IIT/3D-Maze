﻿#pragma strict

private var offset: Vector3;
public var player: GameObject;
function Start () {
offset= transform.position - player.transform.position;
    
}

function Update () {
transform.position = player.transform.position + offset;
}