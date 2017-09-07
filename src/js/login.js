document.addEventListener('DOMContentLoaded',function(){
    var zzflag = false;
    var btn1 = document.querySelector('#btn1');
    var btn2 = document.querySelector('#btn2');
    var put_1 = document.querySelector('.put_1');
    var put_2 = document.querySelector('.put_2');
    var tips = document.querySelector('.tips');
    var username = document.querySelector('#username');
    var password = document.getElementById('password');
    var welcome = document.getElementsByClassName('welcome')[0];
    var btnlogin = document.getElementById('btnlogin');
    var mdl = document.getElementById('mdl');
    var form = document.getElementsByClassName('form')[0];
    var login = document.getElementById('login');
    var last = document.getElementById('the_last');
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
                zzflag = false;
            }else{
                vcode.className='right';
                zzflag = true;
            }
        }
    }
            // console.log(zzflag,999)

btnlogin.onclick=function(){
    // if(!gouxuan){
    //     return false;
    // }
            // console.log(btn1,666,btn2)
            // console.log(zzflag,999)
            if(zzflag==true && mdl.checked && username.value!=''&&password.value!=''){
                var _username = username.value;
                var _password = password.value; 
                // console.log(_username,_password,777)
                // 如果勾选免登陆 则保存用户和密码到cookie
                var now = new Date();
                now.setDate(now.getDate()+14);
                document.cookie = 'username=' + _username + ';expires=' + now.toString()+"; path=/";
                document.cookie = 'password=' + _password + ';expires=' + now.toString()+"; path=/";
                //创建异步请求
                var xhr_3 = new XMLHttpRequest();
                // console.log(_res_3,666)
                xhr_3.onreadystatechange=function(){
                    if(xhr_3.readyState === 4 && (xhr_3.status === 200 || xhr_3.status === 304)){
                    // var res = JSON.parse(xhr.responseText);//报错,不是json字符串
                       var _res_3 = xhr_3.responseText;
                        console.log(_res_3,5666)
                        try{
                            _res_3 = JSON.parse(_res_3);
                        }catch(err){
                            try{
                                _res_3 = eval('(' + _res_3 + ')');
                            }catch(e){
                            }
                        }
                        if(_res_3=='yes'){
                        // window.location.href = "http://localhost/zhouzhoudexiangmu/src";
                        welcome.style.display = 'block';
                        login.style.display = 'none';
                        last.style.display = 'none';
                        welcome.innerHTML = '您好！' + _username + ', 欢迎来到壹药网<button id="logout">退出</button><button id="go">进入</button>';
                        // console.log('YES!');      
                        }else if(_res_3=='yn'){
                            // console.log('YN!');
                            alert('密码不正确');
                        }else if(_res_3=='no'){
                            // console.log('NO!');
                            alert('用户名不存在，请注册后登录！');
                        }else{
                            // console.log('ELSE');         
                        }
                    }       
                }
                xhr_3.open('get','../api/login.php?_username='+_username+'&_password='+_password,true);
                    // console.log(_password,_username,9988);
                xhr_3.send(null);
                // console.log(_res_3);
            }else if(put_1.checked == false && zzflag==false){
                put_1.focus();
            }else if(put_1.checked == true && zzflag==false){
                alert('请填写完成验证码');
            }
        }     
    // 查找cookie
    // 判断是否存在用户/密码
    // 获取cookie
    var cookies = document.cookie.split('; ');
    // 遍历数组
    cookies.forEach(function(item){
        var arr = item.split('=');
        if(arr[0] === '_username'){
            welcome.style.display = 'block';
            login.style.display = 'none';
            last.style.display = 'none';
        }
    });
    // 退出
    document.onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        // console.log(target,999);
             
        if(target.id == 'logout'){
            var now = new Date()
            now.setDate(now.getDate()-100);
            // 删除cookie
            document.cookie = 'username=xx;expires=' + now.toString();
            document.cookie = 'password=xx;expires=' + now.toString();

            console.log(document.cookie);
                 
            // 手动刷新页面
            window.location.href = "http://localhost/zhouzhoudexiangmu/src/html/login.html";
            }
            if(target.id == 'go'){
                window.location.href = "http://localhost/zhouzhoudexiangmu/src";
            }
        }
});