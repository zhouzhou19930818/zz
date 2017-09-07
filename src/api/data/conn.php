<?php
    //配置参数
    $servername='localhost';
    $username='root';
    $password='';
    $database='list';
    //连接数据库
    $conn =new mysqli($servername,$username,$password,$database);
    //连接检测
    if($conn->connect_errno){
        die('连接失败'.$conn->connect_errno);
    }
    //设置编码,防止出现乱码
    $conn->set_charset('utf8');
?>