<template>
	<div id="">
		<el-form :model="formInline" class="demo-form-inline" label-width="80px" size="mini">
			<table>
				<tr>
					<td>
						<el-form-item label="工号">
		    				<el-input ></el-input>
		  				</el-form-item>
					</td>
					<td>
						<el-form-item label="姓名">
		    				<el-input ></el-input>
		  				</el-form-item>
					</td>
					<td>
						<el-form-item label="部门">
		    				<el-input ></el-input>
		  				</el-form-item>
					</td>
					<td>
						<el-form-item label="岗位">
		    				<el-input></el-input>
		  				</el-form-item>
					</td>
					<td>
						<el-form-item label="所属公司">
		    				<el-input ></el-input>
		  				</el-form-item>
					</td>
					<td>
						<el-form-item>
		    				<el-button type="primary" @click="onSubmit">查询</el-button>
		  				</el-form-item>
					</td>
				</tr>
			</table>
			<h5>
				离试用期还差一个月时所有员工的信息显示
				<span id="spanright">
					操作：详细--所属公司
				</span>
			</h5>
		</el-form>
		
		<!---->
		<el-table :data="remindingData" border style="width:1100px;margin:auto">
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
			    <el-table-column prop="zhuanzhengday" label="转正日期" width="220">
			    </el-table-column>
			    <el-table-column prop="contracttype" label="合同类型" width="120">
			    </el-table-column>
		</el-table>
		
		
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
		    formInline: {
		          user: '',
		          region: ''
		        },
	        remindingData: [{
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
	#spanright{
		float: right;
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