<?php
    //遍历数值数组：for循环
    // $cars=array("Volvo","BMW","Toyota");
    // $arrlength=count($cars);
    // for($x=0;$x<$arrlength;$x++){
    //     echo $cars[$x] . "<br>";
    // }
    //遍历关联数组：foreach..as
    $age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
    foreach($age as $x=>$x_value){
        echo "Key=" . $x . ", Value=" . $x_value;
        echo "<br>";
    }
    $stack = array("orange", "banana");
    array_push($stack, "{\"apple\":\"abc\",\"apple111\":\"abc1\"}");
    print_r($stack);
?>