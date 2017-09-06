document.addEventListener('DOMContentLoaded',function(){
    // 获取元素
    var tab = document.getElementsByClassName('login_r')[0];
    var header = tab.children[0];
    var content = tab.children[1];
    var tabItem = header.children;
    var contentItem = content.children;
        // console.log(tabItem)
    // 初始化状态
    // 1.给第一个tab加高亮
    // 2.隐藏除第一个以外的内容
    var index = 0;
    tabItem[index].className = 'active';
    for(var i=0;i<contentItem.length;i++){
        if(i != index){
            contentItem[i].style.display = 'none';
        }
        // 1.给当前加高亮
        // 2.切换显示相应内容
        // console.log(i,tabItem[i]);
        // tabItem[i].setAttribute('idx',i);
        tabItem[i].idx = i;
        tabItem[i].onclick = function(){
            // this
            // 先隐藏所有，再显示当前
            // 去除所有高亮，再添加当前高亮
            // var idx = this.getAttribute('idx');
            var idx = this.idx;
            for(var i=0;i<tabItem.length;i++){
                tabItem[i].className = '';
                contentItem[i].style.display = 'none';
            }
            tabItem[idx].className = 'active';
            contentItem[idx].style.display = 'block';
        }
    }
});