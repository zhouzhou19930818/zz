<?php
    //引入其他php文件
    include './data/conn.php';
    //得到前端传过来的排序按钮
    $pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 10;
    $class = isset($_GET['className']) ? $_GET['className'] : '';
    // if($class == '.first_li_1'){
        // 编写sql语句
            $sql = "SELECT * FROM goods ORDER BY price ASC";
            //limit后面必须是数字
            $startIdx = $qty*($pageNo-1);
            $sql .= " limit $startIdx,$qty";
            // 获取查询结果
            $result = $conn->query($sql);
            // var_dump($result);
            // 使用查询结果集  ASSOC关联数组
            $row = $result->fetch_all(MYSQLI_ASSOC);
            /*//释放查询结果集
            $result->close();*/
            // 格式化数据
            // 创建关联数组 
            //计算有多少条数据count(*) from goods'
            $res = array(
                'pageNo'=>$pageNo,
                'qty'=>$qty,
                'total'=>$conn->query('select count(*) from goods')->fetch_row()[0],
                'data'=>$row,
                'status'=>200,
                'msg'=>'success'
            );
            //把结果输出到前台（得到json字符串）
            echo json_encode($res,JSON_UNESCAPED_UNICODE);
            // 释放查询内存(销毁)
            //$result->free();
            //关闭连接
            $conn->close();
    // }
?>