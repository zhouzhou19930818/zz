document.addEventListener('DOMContentLoaded',function(){
        //创建异步请求
    // window.onclick=function(){
    var box = document.querySelector('#box_bottom_r');
    var page = document.querySelector('#page');
    var datalist = document.querySelector('#datalist');
    var pageNo = 1;
    var qty = 10;
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
                page.innerHTML = '';
                var pageQty = Math.ceil(_res_1.total/qty);
                for(var i=1;i<=pageQty;i++){
                    var span = document.createElement('span');
                    // console.log(span,777)
                    if(i==pageNo){
                        span.className = 'active';
                    }
                    span.innerText = i;
                    page.appendChild(span);
                }
                console.log(_res_1.data)
                // console.log(_res)
                     
                datalist.innerHTML =_res_1.data.map(function(item,idex){
                     // console.log(item.name,999)
                    return `
                    <ul>
                        <h4>${item.name}</h4>
                        <img src="${item.imgurl}">
                        <p><span>${item.price}</span></p>
                    </ul>
                    `
                }).join('');
            }
        }
        xhr.open('get','../api/data/list.php',true);
        xhr.send(null);
        // 点击页码请求响应数据
        page.onclick = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;
            var xhr_4 = new XMLHttpRequest();
            xhr_4.onreadystatechange=function(){
                if(xhr_4.readyState === 4 && (xhr_4.status === 200 || xhr_4.status === 304)){
                    // var res = JSON.parse(xhr.responseText);//报错,不是json字符串
                    var _res_4 = xhr_4.responseText;
                    console.log(_res_4,888)
                    try{
                        _res_4 = JSON.parse(_res_4);
                    }catch(err){
                        try{
                            _res_4 = eval('(' + _res_4 + ')');
                        }catch(e){
                        }
                    }
                }
            }
            if(target.tagName.toLowerCase() === 'span'){
                pageNo = target.innerText;
                console.log(pageNo,999,)    
                xhr.open('get',`../api/data/list.php?pageNo=${pageNo}&qty=${qty}`,true);
                // console.log('../api/data/list.php?pageNo=${pageNo}&qty=${qty}');
                     
                xhr.send();
            }
        }
        // &'password='+password    
// }

});