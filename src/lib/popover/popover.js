function Popover(options){
	var defaults = {
		width:600,
		height:'auto',
		position:'center',
		title:'弹窗标题',
		content:'',
		dragable:true,
		overlay:0.3
	}

	// 扩展默认参数
	var opt = Object.assign({},defaults,options);

	// 弹窗宽高
	this.width = opt.width;
	this.height = opt.height;

	// 弹窗位置
	this.position = opt.position;

	// 标题和内容
	this.title = opt.title;
	this.content = opt.content;

	// 是否可拖拽
	this.dragable = opt.dragable;

	// 遮罩层透明度
	this.overlay = opt.overlay;
}

Popover.prototype = {
	//生成html结构
	//绑定事件
	init(){
		// 创建弹窗div
		this.ele = document.createElement('div');
		this.ele.className = 'popover';

		// 创建标题
		if(this.title){
			var title = document.createElement('div');
			title.className = 'title';
			title.innerHTML = this.title;

			this.ele.appendChild(title);
		}

		var content = document.createElement('div');
		content.className = 'content';
		content.innerHTML = this.content;
		this.ele.appendChild(content);

		// 删除按钮
		var btnClose = document.createElement('span');
		btnClose.className = 'btn-close';
		btnClose.innerHTML = '&times;';
		this.ele.appendChild(btnClose);
		btnClose.onclick = ()=>{
			this.close();
		}

		// 定义样式
		this.ele.style.width = this.width + 'px';
		this.ele.style.height = this.height + 'px';

		// 遮罩层
		var overlay = document.createElement('div');
		overlay.className = 'overlay';

		document.body.appendChild(overlay);
		document.body.appendChild(this.ele);

		this.bg = overlay;


		this.drag();

		return this;
	},
	show(){
		this.ele.style.display = 'block';
		this.bg.style.display = 'block';
		this.setPosition();
		return this;
	},
	close(){
		this.ele.style.display = 'none';
		this.bg.style.display = 'none';
		return this;
	},
	setPosition(x,y){
		if(x===undefined && this.position === 'center'){
			// 如果元素没有添加到页面，获取不到宽高
			x = (window.innerWidth - this.ele.offsetWidth)/2;
			y = (window.innerHeight - this.ele.offsetHeight)/2;
		}

		this.ele.style.left = x + 'px';
		this.ele.style.top = y + 'px';

		return this;
	},
	drag(){
		if(!this.dragable) return;
		var self = this;
		var pop = self.ele;
		this.ele.onmousedown = e=>{
			var ox = e.clientX - pop.offsetLeft;
			var oy = e.clientY - pop.offsetTop;

			// 只能在标题位置拖拽
			if(oy>pop.children[0].offsetHeight){
				return;
			}

			document.onmousemove = function(evt){
				var x = evt.clientX - ox;
				var y = evt.clientY - oy;
				self.setPosition(x,y);

				evt.preventDefault();
			}
		}

		document.onmouseup = function(){
			document.onmousemove = null;
		}
		return this;
	}
}


// 确认对话框
function Confirm(options){
	var defaults = {
		width:300,
		title:false,
		content:'你确定这个操作吗',
		overlay:false
	}

	// 扩展默认参数
	var opt = Object.assign({},defaults,options);

	Popover.call(this,opt);
}

// 继承Popover的方法
Confirm.prototype = Object.create(Popover.prototype);

// 添加/重置方法
Confirm.prototype.init = function(){

}

function AdPop(){

}