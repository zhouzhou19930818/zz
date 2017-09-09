document.addEventListener('DOMContentLoaded',function(){
    window.onload = function(){
            var arr = [
                {
                    "imgurl":"../images/g1 (57).jpg",
                    "title":"三精 葡萄糖酸锌口服液 ",
                    "price":200.20,
                    "sale":150.12,
                    "guid":"g01",
                    "qty":2
                },
                {
                    "imgurl":"../images/g1 (58).jpg",
                    "title":"迪巧 维D钙咀嚼片",
                    "price":400.30,
                    "sale":350.24,
                    "guid":"g02",
                    "qty":2
                },
                {
                    "imgurl":"../images/g1 (59).jpg",
                    "title":"惠氏 碳酸钙维",
                    "price":270.40,
                    "sale":180.38,
                    "guid":"g03",
                    "qty":2
                },
                {
                    "imgurl":"../images/g1 (53).jpg",
                    "title":"养生堂 天然维生素E ",
                    "price":290.23,
                    "sale":230.67,
                    "guid":"g04",
                    "qty":2
                }                
            ];
            var hotlist = [
                {
                    "imgurl":"../images/g1 (61).jpg",
                    "title":"迪巧 维D钙咀嚼片",
                    "price":2455.00,
                    "sale":2100.00, 
                    "guid":"g1"
                },
                {
                    "imgurl":"../images/g1 (65).jpg",
                    "title":"康恩贝 B族维生素",
                    "price":289.00,
                    "sale":240.00 ,
                    "guid":"g2"               
                },
                {
                    "imgurl":"../images/g1 (67).jpg",
                    "title":"斯利安 叶酸片",
                    "price":2223.00,
                    "sale":2123.00,
                    "guid":"g3"                
                },
                {
                    "imgurl":"../images/g1 (57).jpg",
                    "title":"哈药 钙铁锌口服液",
                    "price":1536.00,
                    "sale":1234.00 ,
                    "guid":"g4"               
                },
                {
                    "imgurl":"../images/g1 (54).jpg",
                    "title":"龙牡 龙牡壮骨颗粒",
                    "price":1490.00,
                    "sale":1123.00,
                    "guid":"g5"              
                },
                {
                    "imgurl":"../images/g1 (77).jpg",
                    "title":"养生堂 天然维生素E ",
                    "price":1683.00,
                    "sale":1400.00 ,
                    "guid":"g6"              
                }
            ];
            var mb = document.getElementsByClassName('mb')[0];
            var hot = document.getElementsByClassName('hot')[0];
            var now = new Date();
            now.setDate(now.getDate()+10);
            addhot(hotlist);
            // addcar(arr);
            //获取cookie内的内容
            var arr_goodslist = arr;
            // if(cookie.get('cartlist')!=''){
            //     arr_goodslist = JSON.parse(cookie.get('cartlist'));       
            // }
            mb.innerHTML = '';
            addcar(arr_goodslist);
            //点击删除商品
            mb.onclick = function(e){
                var e=e||window.event;
                var target = e.target||e.srcElement;
                if(target.className == 'delbtn'){
                    var guid = target.parentNode.parentNode.getAttribute('data-guid');
                    arr_goodslist.forEach(function(item,idx){
                        if(item.guid==guid){
                            arr_goodslist.splice(idx,1);
                            return;
                        }                
                    })
                    //删除后的cookie覆盖               
                    document.cookie = 'cartlist='+JSON.stringify(arr_goodslist)+';expires='+now.toUTCString();
                    mb.innerHTML = '';
                    addcar(arr_goodslist);
                }
            //商品数量加减,利用事件绑定
                // var qty = document.getElemntsByClassName('qty')[0];
                if(target.className=='jian'){
                   var guid = target.parentNode.parentNode.getAttribute('data-guid');
                   arr_goodslist.forEach(function(item,idx){      
                    if(item.guid==guid){
                        if(item.qty>0){
                        item.qty--;
                        }
                        if(item.qty==0){
                            arr_goodslist.splice(idx,1);
                        }                                
                    }
                   })
                   document.cookie = 'cartlist='+JSON.stringify(arr_goodslist)+';expires='+now.toUTCString();
                   mb.innerHTML = '';
                   addcar(arr_goodslist);
               }
                   if(target.className=='jia'){
                   var guid = target.parentNode.parentNode.getAttribute('data-guid');
                   arr_goodslist.forEach(function(item){
                    if(item.guid==guid){
                        item.qty++;
                    }
                   })
                   document.cookie = 'cartlist='+JSON.stringify(arr_goodslist)+';expires='+now.toUTCString();
                   mb.innerHTML = '';
                   addcar(arr_goodslist);
                }
            }
            //给添加到购物车按钮绑定事件
             hot.onclick = function(e){
                var e=e||window.event;
                var target = e.target||e.srcElement;
                if(target.className==='addtocar'){
                    console.log(666);
                    var tarli = target.parentNode;
                    var guid = tarli.getAttribute('data-guid');
                    for(var i=0;i<arr_goodslist.length;i++){
                        if(arr_goodslist[i].guid==guid){
                           arr_goodslist[i].qty++;
                           break; 
                        }
                    }
                    if(i===arr_goodslist.length){
                      var arr_h ={
                        imgurl:tarli.children[0].src,
                        title:tarli.children[1].innerText,
                        price:tarli.children[2].children[0].innerText,
                        sale:tarli.children[2].children[1].innerText,
                        guid:guid,
                        qty:1
                      }
                      arr_goodslist.push(arr_h);
                    }
                    document.cookie = 'cartlist='+JSON.stringify(arr_goodslist)+';expires='+now.toUTCString();
                    
                    mb.innerHTML = '';
                   addcar(arr_goodslist);
                }

                //给左边滑动按钮绑定事件
                if(target.className=='arr_l'){
                    hotlist.push(hotlist.shift());
                    hot.innerHTML = '';
                    addhot(hotlist);
                }
                //给右滑动按钮绑定事件
                if(target.className=='arr_r'){
                    hotlist.unshift(hotlist.pop());
                    hot.innerHTML = '';
                    addhot(hotlist);
                     }
             }
            //将商品数组写入购物车函数
            function addcar(arr){
                var total = 0;
                var cuttotal=0;
                var ul = document.createElement('ul');
                var jiage = document.getElementsByClassName('jiage')[0];
                ul.innerHTML = arr.map(function(item){
                    total+=item.sale*item.qty;
                    cuttotal+=item.price*item.qty;
                    return '<li data-guid='+item.guid+'>'
                    +  '<img src="'+item.imgurl+'">'
                    +'<div class="title"><p>'+item.title+'</p><p>ID:'+item.guid+'</p></div>'       
                    +'<div class="qty"><span class="jian">-</span><span><input class="changeqty" type="text" value='+item.qty+'>'+'</input></span><span class="jia">+</span></div>'
                    +'<div class="price"><p>'+item.price+'</p><p>'+item.sale+'</p></div>'
                    +'<div class="total"><p>'+item.sale*item.qty+'</p><p>节省价格：'+(item.price*item.qty-item.sale*item.qty).toFixed(2)+'</p></div>'
                    +'<div class="deldiv"><button class="delbtn">&times;</button></div>'
                    +'</li>'
                }).join('')           
                jiage.children[0].children[0].innerHTML = total;
                jiage.children[1].children[0].innerHTML = (cuttotal-total).toFixed(2);
                mb.appendChild(ul);
            }
            //将热门数组写入热门栏
            function addhot(arr){
                var span1 = document.createElement('span');
                span1.className = 'arr_l';
                var span2 = document.createElement('span');
                span2.className = 'arr_r';
                var ul = document.createElement('ul');
                ul.innerHTML = arr.map(function(item){
                    return '<li data-guid="'+item.guid+'">'
                    +'<img src="'+item.imgurl+'">'
                        +'<p class="p_title">'+item.title+'</p>'
                        +'<p class="p_price"> <span>'+item.price.toFixed(2)+'</span><span>'+item.sale.toFixed(2)+'</span> </p>'
                        + '<span class="addtocar">Add to <i></i> </span>'
                        +'</li>'
                }).join('');
                hot.appendChild(span1);
                hot.appendChild(ul);
                hot.appendChild(span2);
            }
     }
 });