/* 
* @Author: Marte
* @Date:   2017-08-19 11:14:34
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-06 17:43:34
*/
// console.log(5555)
document.addEventListener('DOMContentLoaded',function(){
    var zzflag = false;
    var btn1 = document.querySelector('#btn1');
    var put_1 = document.querySelector('.put_1');
    var tips = document.querySelector('.tips');
    var username = document.querySelector('#username');
    var passwordval = document.querySelector('#pwd');
    var usernameval = document.querySelector('#username');
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
        
        var reg = /^[a-z][\da-z\-]{5,11}$/i;
        if(!reg.test(username)){
             c_2.className= 'wrong';
             zzflag = false;
             // return false;
        }else{
            c_2.className='right';
            zzflag = true;
            //创建异步请求
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange=function(){
                if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
                    // var res = JSON.parse(xhr.responseText);//报错,不是json字符串
                    var _res_1 = xhr.responseText;
                    try{
                        _res_1 = JSON.parse(_res_1);
                    }catch(err){
                        try{
                            _res_1 = eval('(' + _res_1 + ')');
                        }catch(e){

                        }
                    }
                    // console.log(xhr.responseText,username)
                    if(_res_1=='no'){
                        // console.log(5555)
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
            xhr.open('get','../api/reg.php?username='+username,true);
            xhr.send(null);
            // &'password='+password
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

    var xhr_1 = new XMLHttpRequest();
    var onreadystatechange=function(){
        if(xhr_1.readyState === 4 && (xhr_1.status === 200 || xhr_1.status === 304)){
            var _res_2 = xhr.responseText;
            try{
                _res_2 = JSON.parse(_res_2);
            }catch(err){
                try{
                    _res_2 = eval('(' + _res_2 + ')');
                }catch(ee){

                }
            }
        }
    }
btn1.onclick=function(){
        // console.log(btn1,666,btn2)
        // console.log(zzflag)
        if(put_1.checked == true && zzflag==true){
            // console.log(passwordval.value,usernameval.value);
                 
            xhr_1.open('get','../api/reg1.php?username='+usernameval.value+'&password='+passwordval.value,true);
            // console.log(passwordval.value,usernameval.value);
            xhr_1.send(null);
            alert('恭喜您，注册成功');
        }else if(put_1.checked == false && zzflag==true){
            put_1.focus();
        }else if(put_1.checked == true && zzflag==false){
            alert('请填写完成注册页面');
        }
        // var username = document.getElementById('username').value;
        // var open('get','/api/denglu.php?username='+username,true);
        // var send(null);
}
// username.onblur=function(){
// }
});