<?php
    /*
        注册：
            1）获取所有数据
            2）注册数量+1
            3）重新写入文件
                fwrite()
        注册消息获取：
        返回包含多条注册名记录的json数据
     */
    $file_url = './data/reg.json';
    $myfile = fopen($file_url, 'r') or die("打开文件失败");
    $content = fread($myfile, filesize($file_url));
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';
        // 把读取到的内容转成数组
        // print_r($content);
        $arr_data = json_decode($content);
        var_dump($arr_data[0]);
        // print_r($arr_data);
        // echo $username.'+'.$password;
        // 返回修改的那条数据
        $res;
            // 将修改的数据赋值给$res
        $newObj = array('username' => $username, 'password' => $password);
        $res = array_push($arr_data,$newObj);
        // $res = array_push($arr_data,"{\"username\":\"$username\",\"password\":\"$password\"}");
            // array_push($stack, "apple", "raspberry");
        var_dump($res);
        // 关闭之前打开的文件
        fclose($myfile);
        // 以写入模式打开文件
        $myfile = fopen($file_url, 'w');
        //重新写入文件
        fwrite($myfile, json_encode($arr_data,JSON_UNESCAPED_UNICODE));
        // 把修改的数据返回前端
        echo json_encode($res,JSON_UNESCAPED_UNICODE);
        fclose($myfile);
?>