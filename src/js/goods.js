document.addEventListener('DOMContentLoaded',function(){    

            //选择颜色和size
            var div = document.getElementsByClassName('size')[0];
            var ul_1 =div.getElementsByTagName('ul')[0]; 
            var ul_2 =div.getElementsByTagName('ul')[1]; 

            ul_1.onclick = function(e){
                e = e||window.event;
                var target = e.target||e.srcElement;
                if (target.className==='none') {
                    return;
                }
                var lis = ul_1.getElementsByTagName('li');
                for(var i=0;i<lis.length;i++){
                    if (lis[i].className =='none') {
                        continue;
                    }else{      
                    lis[i].className = '';
                    }
                }
                target.classList.add('active');
            }
            ul_2.onclick = function(e){
                e = e||window.event;
                var target = e.target||e.srcElement;
                if (target.className==='none') {
                    return;
                }
                var lis = ul_2.getElementsByTagName('li');
                for(var i=0;i<lis.length;i++){
                    if (lis[i].className =='none') {
                        continue;
                    }else{      
                    lis[i].className = '';
                    }
                }
                target.classList.add('active1');
            }
            //qty数字框输入和计算
        
            var qty = document.getElementById('qty');
            var num = document.getElementById('num');
            var total = document.getElementById('total');
            // console.log(num,total)
            qty.onclick = function(){
                // console.log(qty.value);
                num.innerHTML = qty.value;
                total.innerHTML = (119.99*qty.value).toFixed(2)+'py6.';
            }
            //cookie 传参(title price1 price2 size imgurl)
            var btn = document.getElementById('car_btn');
            btn.onclick = function(){
                //获取title price size
                // title.innerText
                // price1.innerText
                // price2.innerText
                // qty.value
                var size = div.getElementsByClassName('active')[0];
                //size.innerHTML
                var arr = [];
                var obj = {};
                obj['imgurl']='../images/z01.png';
                obj['title']=title.innerText;
                obj['price']=Number(price1.innerText.slice(2));
                obj['sale']=Number(price2.innerText.slice(2));
                obj['qty']=qty.value
                obj['guid']=size.innerHTML;
                arr[0]=obj;
                document.cookie = 'cartlist='+JSON.stringify(arr);
            }
            //tag标签页
            var tag_name = document.getElementsByClassName('tag_name')[0];
            var tag_main = document.getElementsByClassName('tag_main')[0];
            var lis = tag_name.getElementsByTagName('li');
            var lis2= tag_main.getElementsByTagName('li');
            var idx = 0
            for(var i=0;i<lis.length;i++){
                lis[i].idx=i
                lis[i].onclick = function(){
                    for(var i=0;i<lis.length;i++){
                        lis[i].className = '';
                        lis2[i].className = '';
                    }
                    // console.log(this.idx);
                    lis[this.idx].className = 'tag_checked';
                    lis2[this.idx].className = 'tag_checked2';
                }
            }
});