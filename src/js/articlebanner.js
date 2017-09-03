document.addEventListener('DOMContentLoaded',function(){
    var res = document.querySelectorAll('.carousel_1');
    console.log(res,999)
    res.forEach(function(items,z_idex){
        // console.log(item)
            var ul = items.querySelector('ul');
            // 复制第一张到最后
            ul.appendChild(ul.children[0].cloneNode(true));
            var len = ul.children.length;
            // 默认显示第一张图片
            var index = 0;
            // 每张图片的宽度
            var itemWidth = items.offsetWidth;
            // 设置容器的宽度，让所有图片水平排列
            ul.style.width = itemWidth*len + 'px';
            // 生成分页
            var page = document.createElement('div');
            page.className = 'page';
            for(var i=0;i<len-1;i++){
                var span = document.createElement('span');
                span.innerText = i+1;
                // 高亮
                if(i===index){
                    span.className = 'active';
                }
                page.appendChild(span);
            }
            items.appendChild(page);
            // 改变ul的top值
            var outerTimer = setInterval(autoPlay,3000);
            

            // 鼠标移入移出
            items.onmouseenter = ()=>{
                clearInterval(outerTimer);
            }
            items.onmouseleave = ()=>{
                outerTimer = setInterval(autoPlay,3000);
            }
            items.onmousemove = (e)=>{
                var target = e.target;
                // 分页点击效果
                if(target.parentNode.classList.contains('page')){
                    index = target.innerText-1;
                    showPic();
                }
                // console.log(777,target.tagName)
                // console.log(target.className,231)
                // if(target.parentNode.classList.contains('carousel')||target.parentNode.classList.contains('carousel')){
                //     // console.log(444,span.style.display)
                //     span.style.display='block';
                // }
            }
            items.onclick = (ev)=>{
                var target = ev.target;
                
                // span.onmouseover=function(){
                    
                //     };
                // span.onmouseover=function(){
                //     span.style.cursor = 'pointer'
                // };
            // 前后按钮
            if(target.classList.contains('prev_1')){
                // console.log(6666)
                // //鼠标移上去变小手
                // span.style.cursor = 'pointer'
                index--;
                showPic();
            }else if(target.classList.contains('next_1')){
                // span.style.cursor = 'pointer'
                index++;
                showPic();
            }
        }
            // 自动轮播
            function autoPlay(){
                index++;
                showPic();
            }
            function showPic(){
                // 防止index超出范围
                if(index>=len){
                    // 移动到初始位置
                    ul.style.left = 0;
                    index = 1;
                }else if(index<0){
                    index = len-1;
                }
                // 计算目标值
                var target = -index * itemWidth;
                animate(ul,{left:target});
                // // 分页高亮
                for(var i=0;i<len-1;i++){
                    page.children[i].className = '';
                }
                // 当图片滚动到复制图片时，显示第1分页高亮
                if(index==len-1){
                    page.children[0].className = 'active'
                }else{
                    page.children[index].className = 'active';
                }
            }
    })
    

});