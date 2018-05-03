<template>
	<div id="">
		<h5>个人信息</h5>
		<!---->
		<el-form :model="formInline" class="demo-form-inline" label-width="80px" size="mini">
			<table id="gerenxinxi">
				<tr>
					<td>
						<el-form-item label="工号" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="姓名">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="所属公司" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="月份">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="部门" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="岗位">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
			</table>
			<h5>收入项</h5>
			<table id="shouruxiang">
				<tr>
					<td>
						<el-form-item label="基本工资" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="岗位工资">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="工资工龄" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="加班工资">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="保险缴纳基数" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="公积金缴纳基数">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="交通补助" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="话费补助">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="餐补" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="技工补助">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="季度绩效" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="年度绩效">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
			</table>
		<h5>扣减项</h5>
			<table id="koujianxiang">
				<tr>
					<td>
						<el-form-item label="缺勤扣除" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="衣物扣除">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="绩效扣除" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="处罚扣除">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="其他扣除" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
			</table>
			<h5>个人保险</h5>
			<table id="gerenbaoxian">
				<tr>
					<td>
						<el-form-item label="养老保险(个人)" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="失业保险(个人)">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="医疗保险(个人)" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="公积金(个人)">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
			</table>
			<h5>单位保险</h5>
			<table id="danweibaoxian">
				<tr>
					<td>
						<el-form-item label="养老保险(公司)" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="失业保险(公司)">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="生育保险(公司)" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="医疗保险(公司)">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="工伤保险(公司)" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="公积金(公司)">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
			</table>
			<h5>薪资合计</h5>
			<table id="xinziheji">
				<tr>
					<td>
						<el-form-item label="收入合计(收入项-扣减项)" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="应发工资(收入合计-个人保险)">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="税前工资(收入项-扣减项-个人保险)" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="个人所得税">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="实发工资(税前工资-个人所得税)" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
			</table>
		</el-form>
	</div>
</template>

<script>
	export default {
    data() {
      	return {
       		formInline: {
            	user: '',
            	region: ''
        	}
     	}
    }  
  }
</script>

<style>
	h5{
		border-bottom: 1px solid #000;
		height: 20px;
		line-height: 20px;
		text-align: left;
	}
	#gerenxinxi,#shouruxiang,#koujianxiang,#gerenbaoxian,#danweibaoxian,#xinziheji{
		margin: auto;
		height: 100px;
/*		border:1px solid red*/
	}
	#gerenxinxi .el-form-item__content,#shouruxiang .el-form-item__content,#koujianxiang .el-form-item__content,#gerenbaoxian .el-form-item__content,#danweibaoxian .el-form-item__content{
		margin-right: 40px;
	}
	/*修改label的位置*/
	#gerenxinxi .el-form-item__label,#shouruxiang .el-form-item__label,#koujianxiang .el-form-item__label,#gerenbaoxian .el-form-item__label,#danweibaoxian .el-form-item__label,#xinziheji .el-form-item__label{
		margin-top:4px;
	}
	/*label 调整*/
	#shouruxiang .el-form-item--mini .el-form-item__label{
		width:140px!important;
		margin-left:-60px!important;
	}
	/*label 调整*/
	#gerenbaoxian .el-form-item--mini .el-form-item__label{
		width:140px!important;
		margin-left:-60px!important;
	}
	/*label 调整*/
	#danweibaoxian .el-form-item--mini .el-form-item__label{
		width:140px!important;
		margin-left:-60px!important;
	}
	/*label 调整*/
	#xinziheji .el-form-item--mini .el-form-item__label{
		width:240px!important;
		
	}
	#xinziheji .el-form-item__content{
		margin-left: 240px!important;
	}
	#xinziheji{
	}
</style>