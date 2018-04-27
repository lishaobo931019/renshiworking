<template>
	<div id="">
		<h5>
			离合同到期还差一个月时的提醒
		</h5>
		<el-table :data="EmployeecontractData" border style="width:960px;margin:auto">
			    <el-table-column prop="number" label="工号" width="150">
			    </el-table-column>
			    <el-table-column prop="name" label="姓名" width="120">
			    </el-table-column>
			    <el-table-column prop="date" label="生日" width="120">
			    </el-table-column>
			    <el-table-column prop="phone" label="联系电话" width="120">
			    </el-table-column>
			    <el-table-column prop="bumen" label="部门" width="120">
			    </el-table-column>
			    <el-table-column prop="gangwei" label="岗位" width="128">
			    </el-table-column>
			    <el-table-column prop="zhuanzhengday" label="所属公司" width="200">
			    </el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	        EmployeecontractData: [{
	            number:'100',
	            date: '2016-05-03',
	            name: '王小虎',
	            province: '上海',
	            city: '普陀区',
	            phone: 15539300000
	        }, {
	        	number:'100',
	            date: '2016-05-02',
	            name: '王小虎',
	            province: '上海',
	            city: '普陀区',
	            phone: 15539300000
	        }, {
	        	number:'100',
	            date: '2016-05-04',
	            name: '王小虎',
	            province: '上海',
	            phone: 15539300000
	        }, {
	            number:'100',	
	            date: '2016-05-01',
	            name: '王小虎',
	            province: '上海',
	            city: '普陀区',
	            phone: 15539300000
	        }]
	      }
	    },
	    methods: {
	      onSubmit() {
	        console.log('submit!');
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
	/*修改label的位置*/
	.el-form-item__label{
		margin-top:4px;
	}
	.cell{
		text-align: center;
		font-size: 15px;
	}
	/*第二个table的表头高度控制*/
	.el-table__header-wrapper{
		line-height: 0px;
	}
</style>