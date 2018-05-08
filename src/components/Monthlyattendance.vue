<template>
	<div id="">
		<h5>本月加班一天请假三天xxxx至xxxx</h5>
		<el-table :data="MonthData" border style="width:1100px;margin:auto">
			    <el-table-column prop="number" label="工号" width="150">
			    </el-table-column>
			    <el-table-column prop="name" label="姓名" width="120">
			    </el-table-column>
			    <el-table-column prop="phone" label="联系电话" width="120">
			    </el-table-column>
			    <el-table-column prop="bumen" label="部门" width="120">
			    </el-table-column>
			    <el-table-column prop="gangwei" label="岗位" width="128">
			    </el-table-column>
			    <el-table-column prop="ruzhiriqi" label="入职日期" width="120">
			    </el-table-column>
			    <el-table-column prop="gongzuodidian" label="工作地点" width="120">
			    </el-table-column>
			    <el-table-column prop="gongzuoneirong" label="工作内容" width="120">
			    </el-table-column>
			    <el-table-column prop="tijiaoshijian" label="提交时间" width="120">
			    </el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	        MonthData: [{
	            number:'100',
	            ruzhiriqi: '2016-05-03',
	            name: '王小虎',
	            gongzuodidian: '上海',
	            city: '普陀区',
	            phone: 15539300000
	        }, {
	        	number:'100',
	            ruzhiriqi: '2016-05-02',
	            name: '王小虎',
	            gongzuodidian: '上海',
	            city: '普陀区',
	            phone: 15555555555
	        }, {
	        	number:'100',
	            ruzhiriqi: '2016-05-04',
	            name: '王小虎',
	            gongzuodidian: '上海',
	            phone: 15539300000
	        }, {
	            number:'100',	
	            ruzhiriqi: '2016-05-01',
	            name: '王小虎',
	            gongzuodidian: '上海',
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
		height: 30px;
		line-height: 30px;
		text-align: left;
	}
	/*第二个table的表头高度控制*/
	.el-table__header-wrapper{
		line-height: 0px;
	}
	.cell{
		text-align: center;
		font-size: 15px;
	}
</style>