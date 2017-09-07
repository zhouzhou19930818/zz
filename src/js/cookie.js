document.addEventListener('DOMContentLoaded',function(){
    var showname = document.querySelector('#showname');
    var cookies_1 = document.cookie.split('; ');
    // console.log(cookies_1,666)
    // var res1 = JSON.parse(cookies_1);
    // console.log(res1)
    cookies_1.forEach(function(item){
        var arr_1 = item.split('=');
        // console.log(555,arr_1)
        // console.log(arr_1[1],777)
        if(arr_1[0] == 'username'){
            // console.log(arr_1[0],777)
            showname.innerHTML= '您好！' + arr_1[1] +'欢迎你';
        }
    });
});