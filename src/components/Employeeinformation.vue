<template>
	<div id="">
		<el-form :model="formInline" class="demo-form-inline" label-width="80px" size="mini">
			<table id="yuangongxinxi">
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
					<td>
						<el-form-item>
					    	<el-button type="primary" @click="onSubmit">搜索</el-button>
					 	</el-form-item>
					</td>
				</tr>
			</table>
		</el-form>	
			<!---->
			<!---->
			<el-table :data="persontableData" border style="width:1100px;margin:auto">
			    <el-table-column prop="number" label="工号" width="150">
			    </el-table-column>
			    <el-table-column prop="name" label="姓名" width="120">
			    </el-table-column>
			    <el-table-column prop="date" label="生日" width="120">
			    </el-table-column>
			    <el-table-column prop="phone" label="联系电话" width="120">
			    </el-table-column>
			    <el-table-column prop="company" label="公司" width="220">
			    </el-table-column>
			    <el-table-column prop="bumen" label="部门" width="120">
			    </el-table-column>
			    <el-table-column prop="gangwei" label="岗位" width="128">
			    </el-table-column>
			    <el-table-column  label="操作" width="120">
			      <template slot-scope="scope">
			        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
			        <el-button type="text" size="small">编辑</el-button>
			      </template>
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
        persontableData: [{
            number:'100',
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            company: '上海市普陀区金沙江路 1518 弄',
            phone: 200333
        }, {
        	number:'100',
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            phone: 200333
        }, {
        	number:'100',
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            phone: 200333
        }, {
            number:'100',	
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            company: '上海市普陀区金沙江路 1518 弄',
            phone: 200333
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
	#yuangongxinxi{
		margin: auto;
		/*width: 80%;*/
		min-height: 300px;
/*		border:1px solid red*/
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