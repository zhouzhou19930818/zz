/* 
* @Author: Marte
* @Date:   2017-08-12 11:27:12
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-09 16:57:05
*/
function getCss(ele,attr){
  // 判断浏览器是否支持getComputedStyle
  if(window.getComputedStyle){
    return getComputedStyle(ele)[attr];
  }

  // ie8-
  else if(ele.currentStyle){
    return ele.currentStyle[attr];
  }

  // 返回内联样式
  else{
    return ele.style[attr];
  }

}
function animate(ele,opt,callback){
  //如何确定哪个属性是最后完成的动画

  // 动画数量
  var timerQty = 0;

  //遍历属性
  for(var attr in opt){
    createTimer(attr);
    timerQty++;
  }
  
  function createTimer(attr){
    // 根据属性定义定时器名字
    var timerName = attr + 'timer';

    // 获取目标值
    var target = opt[attr];

    clearInterval(ele[timerName]);
    ele[timerName] = setInterval(function(){
      // 获取当前值
      var current = getCss(ele,attr);//10px,0.5,20em,2.4rem,40deg

      // 提取单位
      var unit = current.match(/[a-z]+$/);
      unit = unit ? unit[0] : '';

      // 提取值
      current = parseFloat(current);


      // 计算速度（最小变化值：1/-1）
      // 避免速度变成0
      var speed = (target-current)/10;
      speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

      // 针对opacity属性计算速度
      if(attr === 'opacity'){
        speed = speed>0 ? 0.01 : -0.01;
      }

      // 到达目标值后清除动画定时器
      if(current === target || speed === 0){
        clearInterval(ele[timerName]);

        // 重置目标值
        current = target - speed;

        // 动画完成数量减一
        timerQty--;


        // 执行回调函数
        if(timerQty===0 && typeof callback === 'function'){
          callback();
        }
      }

      ele.style[attr] = current + speed + unit;
    },30);
  }
}
// 利用对象封装
var Cookie = {
  /**
   * [设置cookie]
   * @param {String} name    [cookie名]
   * @param {String} val     [cookie值]
   * @param {[Date]} expires [有效期]
   * @param {[String]} path    [cookie路径]
   */
  set:function(name,val,expires,path){
    // document.cookie = 'cartlist=1234;expires=' + now
    var cookieStr = name + '=' + val;

    // 有效期
    if(expires){
      cookieStr += ';expires=' + expires.toUTCString();
    }

    // 设置路径
    if(path){
      cookieStr += ';path=' + path;
    }

    // 写入
    document.cookie = cookieStr;
  },
  get:function(name){
    // 先获取所有cookie
    var cookie = document.cookie;
    if(cookie.length === 0){
      return '';
    }

    // 拆分成数组
    cookie = cookie.split('; ');

    // 遍历cookie，找到想要的cookie值
    var res = '';
    cookie.forEach(function(item){
      var arr = item.split('=');

      if(arr[0] === name){
        res = arr[1];
      }
    });

    return  res;
  },
  remove:function(name){
    // 利用设置过期时间达到删除的效果。
    var now = new Date();
    now.setDate(now.getDate()-100);

    // document.cookie = name +'=xxx;expires=' + now.toUTCString();
    Cookie.set(name,null,now);
  }
}