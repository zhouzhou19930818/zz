<?php
// echo 123;
    $username = isset($_GET['username'])?$_GET['username']:'';
    $reged = array('zhouzhou123','laoxie123','abc123456','a123456');
    if(in_array($username, $reged)){
        echo 'no';
    }else{
        echo 'yes';
    }
    //PHP后面这个结尾部分不能有多余的空行，不然打印出来的no会带有空格，JS的IF判断就不会执行。"no"不等于"(这里有个空格，或者no后面有)no".
?>