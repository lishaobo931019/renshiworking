<template>
	<div>
		<div id="outbox">
			<span id="zuoshangjiao">&nbsp;&nbsp;公司总部</span>
			<h3>合计（XXX个人）</h3>
			<!---->
			<!---->
			<div id="yincangliebiao">
				<ul id="firstlist">
					<li>工号</li>
					<li>姓名</li>
					<li>工作内容</li>
					<li>操作</li>
				</ul>
				<!---->
				<!--列表数据-->
				<ul class="detiallist">
					<li class="list-list">1001</li>
					<li class="list-list">曹操</li>
					<li class="list-list">接待</li>
					<li class="list-list">
						<b class="yidong" @click="nav">移动</b>
						<b id="mingxi">历史明细</b>
					</li>
					<ul class="nav" >
							<li>公司总部</li>
							<li>联动U谷</li>
							<li>天津基地</li>
							<li>天津项目</li>
							<li>山东子公司</li>
							<li>南京子公司</li>
						</ul>
				</ul>
				<ul class="detiallist">
					<li class="list-list">1001</li>
					<li class="list-list">曹操</li>
					<li class="list-list">接待</li>
					<li class="list-list">
						<b class="yidong">移动</b>
						<b id="mingxi">历史明细</b>
					</li>
				</ul>
				<ul class="detiallist">
					<li class="list-list">1001</li>
					<li class="list-list">曹操</li>
					<li class="list-list">接待</li>
					<li class="list-list">
						<b class="yidong">移动</b>
						<b id="mingxi">历史明细</b>
					</li>
				</ul>
				<ul class="detiallist">
					<li class="list-list">1001</li>
					<li class="list-list">曹操</li>
					<li class="list-list">接待</li>
					<li class="list-list">
						<b class="yidong">移动</b>
						<b id="mingxi">历史明细</b>
					</li>
				</ul>
				<ul class="detiallist">
					<li class="list-list">1001</li>
					<li class="list-list">曹操</li>
					<li class="list-list">接待</li>
					<li class="list-list">
						<b class="yidong">移动</b>
						<b id="mingxi">历史明细</b>
					</li>
				</ul>
				<ul class="detiallist">
					<li class="list-list">1001</li>
					<li class="list-list">曹操</li>
					<li class="list-list">接待</li>
					<li class="list-list">
						<b class="yidong">移动</b>
						<b id="mingxi">历史明细</b>
					</li>
				</ul>
				<ul class="detiallist">
					<li class="list-list">1001</li>
					<li class="list-list">曹操</li>
					<li class="list-list">接待</li>
					<li class="list-list">
						<b class="yidong">移动</b>
						<b id="mingxi">历史明细</b>
					</li>
				</ul>
				
				
				
			</div>
			
			
			
			<div id="personbox2">
				<ul class="list">
					<li @click="tanchu">
						<h4>公司总部</h4>
						<h5>(XXX)人</h5>
					</li>
					<li @click="tanchu">
						<h4>联动U谷</h4>
						<h5>(XXX)人</h5>
					</li>
					<li @click="tanchu">
						<h4>天津基地</h4>
						<h5>(XXX)人</h5>
					</li>
					<li @click="tanchu">
						<h4>天津项目</h4>
						<h5>(XXX)人</h5>
					</li>
					<li @click="tanchu">
						<h4>山东子公司</h4>
						<h5>(XXX)人</h5>
					</li>
					<li @click="tanchu">
						<h4>南京子公司</h4>
						<h5>(XXX)人</h5>
					</li>
					<li @click="tanchu">
						<h4>出差人员</h4>
						<h5>(XXX)人</h5>
					</li>
					<li @click="tanchu">
						<h4>未到岗人员</h4>
						<h5>(XXX)人</h5>
					</li>
				</ul>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			tanchu(ev){
//				console.log(1);
				var yincangliebiao = document.getElementById("yincangliebiao");
				yincangliebiao.style.visibility = "visible";
				var evt = ev || event;
			    evt.stopPropagation();
				document.addEventListener("click",function(){
//					console.log(111111111)
			        yincangliebiao.style.visibility = "hidden";
			    });
			    var oUl = document.getElementById('yincangliebiao');
			    oUl.addEventListener('click',function(event){
			    	event=event||window.event;
			        event.stopPropagation();
			    })
			},
			nav(ev){
				var evt = ev || window.event;
				console.log(evt.target.parentNode.parentNode)
				var nav = evt.target.parentNode.parentNode.getElementsByClassName("nav")[0];
				nav.style.display = "block";
				document.addEventListener("click",function(){
			        nav.style.display="none";
			    });
			    var oUl = document.getElementById('yincangliebiao');
			    oUl.addEventListener("click",function(){
			        nav.style.display="none";
			    });
			    //阻止冒泡
			    var evt = ev || event;
			    evt.stopPropagation();
			    nav.addEventListener("click",function(event){
			        event=event||window.event;
			        event.stopPropagation();
			    });
			}
		}
	}
</script>

<style>
	/*外层div*/
*{
	margin: 0;
	padding: 0;	
	list-style: none;
}	
#outbox{
		width: 900px;
		min-height: 500px;
		border:1px solid #000000;
		margin: 50px auto;
		background: #BDC3C7;
		position: relative;
		padding-bottom: 20px;
	}
#zuoshangjiao{
		visibility: hidden;
		display: block;
		height: 20px;
	}
h3{
	text-align: center;
	height: 50px;
	line-height: 50px;
	/*border: 1px solid red;*/
}
h4{
	text-align: center;
	height: 50px;
	line-height: 100px;
}
h5{
	text-align: center;
	height: 50px;
	line-height: 60px;
}
#personbox2{
	width: 700px;
	height: 350px;
	/*border: 1px solid #000000;*/
	margin:30px auto;
	position: relative;
}
#personbox2 .list{
	width:610px;
	height: 300px;
	position:absolute;
	top:30px;
	left: 45px;
}

#personbox2 .list li{
	width:200px;
	height: 100px;
	float:left;
	border:1px solid #000000;
	list-style: none;
	background: #888888;
	border-right: 0;
	border-top: 0;
}
#personbox2 .list li:nth-child(3),#personbox2 .list li:nth-child(6),#personbox2 .list li:nth-child(8){
	border-right: 1px solid #000000;
}
#personbox2 .list li:nth-child(1),#personbox2 .list li:nth-child(2),#personbox2 .list li:nth-child(3){
	border-top: 1px solid #000000;
}
/*隐藏列表*/
#yincangliebiao{
	width: 700px;
	height: 60px;
	border: 1px solid #000000;
	margin:10px auto;
	position: absolute;
	left: 95px;
	visibility: hidden;
}
#yincangliebiao #firstlist{
	width: 700px;
	height: 60px;
	line-height: 60px;
	background: black;
	/*opacity: 0.9;*/
	z-index: 999;
	position: relative;
	color:white;
}
#yincangliebiao #firstlist li{
	float: left;
	width:25%;
	text-align: center;
	line-height: 60px;
}
#yincangliebiao .detiallist{
	width: 700px;
	min-height: 60px;
	line-height: 60px;
	z-index: 999;
	position: relative;
	color:white;
	/*border:1px solid #4A77D4*/
}
#yincangliebiao .detiallist .list-list{
	float: left;
	width:25%;
	text-align: center;
	line-height: 60px;
	background: #080808;
	opacity: 0.9;
}
.yidong,#mingxi{
	color: #00B7EE;
	text-decoration: none;
	cursor: pointer
}
#yincangliebiao .nav{
	width:130px;
	height:180px;
	border:1px solid #000000;
	position: absolute;
	background: dodgerblue;
	top:0px;
	right: -132px;
	display: none;
}
#yincangliebiao .nav li{
	width: 130px;
	height: 30px;
	float: left;
	line-height: 30px;
}
</style>