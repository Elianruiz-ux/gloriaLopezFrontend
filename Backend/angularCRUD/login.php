<?php

include_once("db_connect.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){

    $request = json_decode($postdata);
    $correo = mysqli_real_escape_string($mysqli, trim($request->correo));
    $contraseña = mysqli_real_escape_string($mysqli, trim($request->contraseña));

    $sql = "SELECT * FROM loginregister WHERE correo='$correo' and contraseña='$contraseña'";
    $result = mysqli_query($mysqli,$sql);
    $nums = mysqli_num_rows($result);
    
    if($nums>0){
        $data=array('message'=>'success', 'correo'=>$correo, 'contraseña'=>$contraseña);
        echo json_encode($data);
    }else{
        $data=array('message'=>'failed');
            echo json_encode($data);
    }
}

?>