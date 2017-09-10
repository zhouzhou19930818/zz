document.addEventListener('DOMContentLoaded',function(){    
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
});