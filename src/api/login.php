<?php
    $file_url = './data/reg.json';
    $myfile = fopen($file_url, 'r') or die("打开文件失败");
    $content = fread($myfile, filesize($file_url));
    $username = isset($_GET['_username']) ? $_GET['_username'] : 'zhouzhou123';
    $password = isset($_GET['_password']) ? $_GET['_password'] : '12345x';
    $returnvalue = 'no';
        // print_r($content);
        $totil = json_decode($content,true);
        // print_r($totil);
        foreach($totil as $i=>$i_value){
                // echo $i_value;
            // print_r($i_value);
            if($username == $i_value['username']){
                if($password==$i_value['password']){
                    $returnvalue = 'yes';
                }else{
                    $returnvalue = 'yn';
                }
            }
        }
        echo $returnvalue;
        fclose($myfile);
?>