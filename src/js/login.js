document.addEventListener('DOMContentLoaded',function(){
    var zzflag = false;
    var btn1 = document.querySelector('#btn1');
    var btn2 = document.querySelector('#btn2');
    var put_1 = document.querySelector('.put_1');
    var put_2 = document.querySelector('.put_2');
    var tips = document.querySelector('.tips');
    var username = document.querySelector('#username');
    // 验证码
        var arr_char = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
        var showVCode = document.getElementById('showVCode');
        var get= document.getElementById('get');
        var vcode = document.getElementById('vcode');
    
        //得到验证码
        get.onclick = function(){
        var res = '';
            for(var i=0;i<4;i++){
                // 获取随机索引值
                var idx = parseInt(Math.random()*arr_char.length);
                // 根据索引值获取字符，并拼接
                res += arr_char[idx];
            }
            showVCode.innerHTML = res.toUpperCase();
        // console.log(res)

        

// 失去焦点时判断验证码正确性
     vcode.onblur=()=>{
        // console.log(res)
            var val = vcode.value;
            // val.onblur=function(){
            if(val.toUpperCase() != res.toUpperCase()){
                vcode.className= 'wrong';
            }else{
                vcode.className='right';
        }
     }
}
var c_2 = document.getElementsByClassName('c_2')[0];

    // console.log(input);
    // for(var i=0;i<=input.length-1;i++){
        // console.log(input[i],input[2])
    c_2.onblur=function(evn){
        evn =evn||window.event;
        var target = evn.target ||event.srcElement;
        var username = document.getElementById('username').value;
        //不能为空，字母开头，长度6-12
        // var _username = username.value;
        // console.log(username)
        //创建异步请求
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
                // var res = JSON.parse(xhr.responseText);//报错,不是json字符串
                var _res_1 = xhr.responseText;
                console.log(xhr.responseText,username)
                if(_res_1=='no'){
                    console.log(5555)
                    tips.classList.remove('success');
                    tips.classList.add('error');
                    tips.innerHTML = username+'太受欢迎啦，换一个吧！';
                }else if(_res_1=='yes'){
                    tips.classList.remove('error');
                    tips.classList.add('success');
                    tips.innerHTML = username+'厉害了，老铁。';
                }
            }
        }
        xhr.open('get','http://localhost/007/api/01.php?username='+username,true);
        xhr.send(null);
        var reg = /^[a-z][\da-z\-]{5,11}$/i;
        if(!reg.test(username)){
             c_2.className= 'wrong';
             zzflag = false;
             // return false;
        }else{
            c_2.className='right';
            zzflag = true;
        }    
}

var c_0 = document.getElementsByClassName('c_0')[0];
// console.log(c_0)
    c_0.onblur=function(event){
        console.log(9898)
    event =event||window.event;
    var target = event.target ||event.srcElement;
    //密码长度为6-16，不能有空格。
    var pwd = document.getElementById('pwd').value;
    var reg = /^\S{6,16}$/;
    if(!reg.test(pwd)){
        c_0.className= 'wrong';
        zzflag = false;
        // return false;
    }else{
        c_0.className= 'right';
        zzflag = true;
    }
}

var c_1 = document.getElementsByClassName('c_1')[0];
    c_1.onblur=function(ev){
        ev =ev||window.event;
        var target = ev.target ||event.srcElement;
    var confirm_pwd = document.getElementById('confirm_pwd').value;
    var pwd = document.getElementById('pwd').value;
        if(confirm_pwd != pwd){
            // console.log(2222,pwd)
            c_1.className= 'wrong';
            zzflag = false;
            // return false;
        }else{
            c_1.className= 'right';
            zzflag = true;
        }
    }

    // var xhr_1 = new XMLHttpRequest();
    // var onreadystatechange=function(){
    //     if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){

    //     }
    // }
    btn2.onclick=function(){
        // console.log(btn1,666,btn2)
        // console.log(zzflag)
        if(put_1.checked == true && put_2.checked ==true && zzflag==true){
        alert('恭喜您，注册成功');
        }else if(put_1.checked == true && put_2.checked ==false && zzflag==true){
            put_2.focus();
        }else if(put_1.checked == false && put_2.checked ==true && zzflag==true){
            put_1.focus();
        }else if(put_1.checked == false && put_2.checked ==false && zzflag==true){
             put_1.focus();
             put_2.focus();
        }else if(put_1.checked == true && put_2.checked ==true && zzflag==false){
            alert('请填写完成注册页面');
        }
        // var username = document.getElementById('username').value;
        // var open('get','/api/denglu.php?username='+username,true);
        // var send(null);
}
// username.onblur=function(){
// }
    
});