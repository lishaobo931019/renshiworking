<template>
	<div id="">
		<el-form :model="formInline" class="demo-form-inline" label-width="80px" size="mini">
			<h5>基本信息</h5>
			<table id="jibenxinxi">
				<tr>
					<td>
						<el-form-item label="工号" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td rowspan="2">
						<el-upload
						  action="https://jsonplaceholder.typicode.com/posts/"
						  list-type="picture-card"
						  :on-preview="handlePictureCardPreview"
						  :on-remove="handleRemove">
						  <i class="el-icon-plus"></i>
						</el-upload>
						<el-dialog :visible.sync="dialogVisible">
						  <img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog>
					</td>
				</tr>
				<!---->
				<tr>
					<td>
						<el-form-item label="姓名">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="证件号" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="手机" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<!---->
				<tr>
					<td>
						<el-form-item label="户口所在地">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="是否在职">
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="户口性质" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="年龄" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="毕业院校" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="专业" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="学历" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="政治面貌" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="出生日期" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="介绍人" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="紧急联系人" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="联系人电话" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
			</table>
			<!---->
			<h5>部门信息</h5>
			<table id="bumenxinxi">
				<tr>
					<td>
						<el-form-item label="入职时间" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="转正时间" >
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
						<el-form-item label="所在部门" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="合同签订情况" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="合同类型" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="岗位名称" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
					<td>
						<el-form-item label="岗位分类" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
				<tr>
					<td>
						<el-form-item label="常住地点" >
				  			<el-input></el-input>
				  		</el-form-item>
					</td>
				</tr>
			</table>
			<h5>其他信息</h5>
			<table id="qitaxinxi">
					<el-form-item label="其他相关资格证书备注">
				    	<el-input type="textarea"></el-input>
				  	</el-form-item>
				  	<el-form-item label="个人晋升奖励">
				    	<el-input type="textarea"></el-input>
				  	</el-form-item>
				  	<el-form-item label="个人处罚">
				    	<el-input type="textarea"></el-input>
				  	</el-form-item>
				  	<el-form-item label="工作业绩">
				    	<el-input type="textarea"></el-input>
				  	</el-form-item>
			</table>
			<h5>添加附件</h5>
			<table id="tianjiafujian">
				<el-upload class="upload-demo" ref="upload"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :on-preview="handlePreview"
				  :on-remove="handleRemove"
				 
				  :auto-upload="false">
				  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
				  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
				</el-upload>
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
        },
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
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
	#jibenxinxi,#bumenxinxi,#qitaxinxi,#tianjiafujian{
		/*width: 700px;*/
		/*border:1px solid red;*/
		margin: auto;
	}
	/*label 调整*/
	#jibenxinxi .el-form-item--mini .el-form-item__label{
		width:120px!important;
		margin-left:-40px!important;
	}
	/*修改label的位置*/
	#jibenxinxi .el-form-item__label{
		margin-top:4px;
	}
	#bumenxinxi .el-form-item--mini .el-form-item__label{
		width:120px!important;
		margin-left:-40px!important;
	}
	/*修改label的位置*/
	#bumenxinxi .el-form-item__label{
		margin-top:4px;
	}
	
	#bumenxinxi tr{
		height:10px
	}
	
	
	/*label 调整*/
	#qitaxinxi .el-form-item--mini .el-form-item__label{
		width:180px!important;
		margin-left:-100px!important;
	}
	/*修改label的位置*/
	#qitaxinxi .el-form-item__label{
		margin-top:4px;
	}
	#qitaxinxi textarea{
		width: 442px;
	}
</style>