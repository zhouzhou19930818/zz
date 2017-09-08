document.addEventListener('DOMContentLoaded',function(){
        //创建异步请求
    // window.onclick=function(){
    var box = document.querySelector('#box_bottom_r');
    var page = document.querySelector('#page');
    var datalist = document.querySelector('#datalist');
    var list_price_sheng= document.querySelectorAll('.first_li_1');
    var list_price_jiang = document.querySelectorAll('.first_li_2');
    var pageNo = 1;
    var qty = 10;
    var num =1;
    //价格排序
    list_price_sheng.forEach(function(ite,idx){
            // console.log(list_price_sheng.length)
        ite.onclick=function(){console.log(888)
            var xhr_6 = new XMLHttpRequest();
            xhr_6.onload=function(){
                if(xhr_6.readyState === 4 && (xhr_6.status === 200 || xhr_6.status === 304)){
                    // console.log(4434343)
                    // var res = JSON.parse(xhr_6.responseText);//报错,不是json字符串
                    var _res_6 = xhr_6.responseText;
                    // console.log(_res_6,9388)
                    try{
                        _res_6 = JSON.parse(_res_6);
                    }catch(err){
                        try{
                            _res_6 = eval('(' + _res_6 + ')');
                        }catch(e){
                        }
                    }

                }
                // console.log(_res_6)
                     
                    datalist.innerHTML =_res_6.data.map(function(item,idex){
                        return `
                        <ul>
                            <h4>${item.name}</h4>
                            <img src="${item.imgurl}">
                            <p><span>${item.price}</span></p>
                            <div><span>-</span><input value="${num}"><span>+</span><button>加入购物车</button></div>
                        </ul>
                        `
                    }).join('');
            }
            xhr_6.open('get','../api/pricepaixusheng.php?className=first_li_1',true);
            xhr_6.send(null);     
        }
    });
        list_price_jiang.forEach(function(ie,idx){
                // console.log(list_price_jiang.length)
            ie.onclick=function(){
                // console.log(777)
                var xhr_5 = new XMLHttpRequest();
                xhr_5.onload=function(){
                        // console.log(434343)
                    if(xhr_5.readyState === 4 && (xhr_5.status === 200 || xhr_5.status === 304)){
                             
                        // var res = JSON.parse(xhr_5.responseText);//报错,不是json字符串
                             
                        var _res_5 = xhr_5.responseText;
                        // console.log(_res_5);
                        
                        try{
                            _res_5 = JSON.parse(_res_5);
                        }catch(err){
                            try{
                                _res_5 = eval('(' + _res_5 + ')');
                            }catch(e){
                            }
                        }
                    }
                    // console.log(this+'70');
                         
                    // console.log(_res_5);
                    datalist.innerHTML =_res_5.data.map(function(item,idex){
                         // console.log(_res_5.data,6767)
                        return `
                        <ul>
                            <h4>${item.name}</h4>
                            <img src="${item.imgurl}">
                            <p><span>${item.price}</span></p>
                            <div><span>-</span><input value="${num}"><span>+</span><button>加入购物车</button></div>
                        </ul>
                        `
                    }).join('');
                }
                xhr_5.open('get','../api/pricepaixujiang.php?class_1=first_li_2',true);
                xhr_5.send(null);
            }
        });

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
                // console.log(_res_1.data)
                // console.log(_res)
                     
                datalist.innerHTML =_res_1.data.map(function(item,idex){
                     // console.log(item.name,999)
                    return `
                    <ul>
                        <h4>${item.name}</h4>
                        <img src="${item.imgurl}">
                        <p><span>${item.price}</span></p>
                        <div><span>-</span><input value="${num}"><span>+</span><button>加入购物车</button></div>
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
                // console.log(pageNo,999,)    
                xhr.open('get',`../api/data/list.php?pageNo=${pageNo}&qty=${qty}`,true);
                // console.log('../api/data/list.php?pageNo=${pageNo}&qty=${qty}');
                     
                xhr.send();
            }
        }
        // &'password='+password    
// }

});