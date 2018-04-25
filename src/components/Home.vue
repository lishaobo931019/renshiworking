<!--管理主页面-->
<template>
	<el-container>
		  <!--头部-->
		  <el-header>
		  	<Header></Header>
		  </el-header>
		  
		  <el-container>
				  <el-aside width="200px" style="overflow: hidden;">
				  	<!--左侧包裹嵌套组件-->
				  	<Leftaside></Leftaside>
				  </el-aside>
			  
				  <el-main>
				  		<router-view></router-view>
				  </el-main>
		  </el-container>
	</el-container>
	
	
</template>

<script>
	import header from '@/components/Header'//头部组件
	import leftaside from '@/components/Leftaside'//左侧导航组件
	export default{
		name:'home',
		
		components:{
			Header:header,
			Leftaside:leftaside
		}
	}
	
</script>

<style>
	.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  /*设置全屏*/
  .el-container{
  	height: 100vh;
  }
  body{
  	margin:0;
  }
  /*--------------------------------*/
  /*---------------------------------*/
	
</style>