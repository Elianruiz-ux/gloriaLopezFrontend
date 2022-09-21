<?php

include_once("db_connect.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $nombre = trim($request->nombre);
    $apellido = trim($request->apellido);
    $documento = trim($request->documento);
    $celular = trim($request->celular);
    $correo = mysqli_real_escape_string($mysqli, trim($request->correo));
    $confirmarCorreo = mysqli_real_escape_string($mysqli, trim($request->confirmarCorreo));
    $contraseña = mysqli_real_escape_string($mysqli, trim($request->contraseña));
    $confirmarContraseña = mysqli_real_escape_string($mysqli, trim($request->confirmarContraseña));

    $sql = "INSERT INTO loginregister(
        nombre,
        apellido,
        documento,
        celular,
        correo,
        confirmarCorreo,
        contraseña,
        confirmarContraseña
        ) VALUES (
            '$nombre',
            '$apellido',
            '$documento',
            '$celular',
            '$correo',
            '$confirmarCorreo',
            '$contraseña',
            '$confirmarContraseña')";
        if($mysqli->query($sql)){
            $data=array('message'=>'success');
            echo json_encode($data);
        }else{
            $data=array('message'=>'failed');
                echo json_encode($data);
            
        }
}

?>