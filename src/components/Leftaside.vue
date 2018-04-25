<template>
	<el-col :span="12">
	    <el-menu
	      default-active="2"
	      class="el-menu-vertical-demo"
	      @open="handleOpen"
	      @close="handleClose"
	      background-color="#545c64"
	      text-color="#fff"
	      active-text-color="#ffd04b">
	      
	      
	      <el-submenu index="1">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span class="yijibiaoti">人员管理</span>
	        </template>
	        <el-menu-item-group>
	          <el-menu-item index="1-1" @click="Employeeinformation">员工信息</el-menu-item>
	          <el-menu-item index="1-2" @click="Recruitnewemployees">录入新员工</el-menu-item>
	          <el-menu-item index="1-3" @click="Remindingstafftoreminding">待转正员工提醒</el-menu-item>
	          <el-menu-item index="1-4" @click="Employeecontract">合同到期员工提醒</el-menu-item>
	          <el-menu-item index="1-5" @click="Employeesbirthday">员工生日提醒</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      
	      <el-submenu index="2">
	        <template slot="title">
	          <i class="el-icon-menu"></i>
	          <span class="yijibiaoti">考勤管理</span>
	        </template>
	        <el-menu-item-group>
	          <el-menu-item index="2-1" @click="Staffdaystatistics">人员日统</el-menu-item>
	          <el-menu-item index="2-2" @click="Monthlyattendance">月考勤汇总</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      
	      
	       <el-submenu index="3">
	        <template slot="title">
	          <i class="el-icon-document"></i>
	          <span class="yijibiaoti">薪酬管理</span>
	        </template>
	        <el-menu-item-group>
	          <el-menu-item index="3-1" @click="Wageaccounting">工资核算</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      
	      
	       <el-submenu index="4">
	        <template slot="title">
	          <i class="el-icon-setting"></i>
	          <span class="yijibiaoti">报表管理</span>
	        </template>
	        <el-menu-item-group>
	          <el-menu-item index="4-1" @click="Statisticalreport">统计报表</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      
	    </el-menu>
	  </el-col>
	</el-row>
</template>

<script>
	export default{
		name:'Leftaside',
		methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      Employeeinformation:function(){//跳转到员工信息
	      	this.$router.push({
	      		path:'/home/Employeeinformation',
	      		query:{}
	      	})
	      },
	      Recruitnewemployees:function(){//录入新员工
	      	this.$router.push({
	      		path:'/home/Recruitnewemployees',
	      		query:{}
	      	})
	      },
	      Remindingstafftoreminding:function(){//待转正员工提醒
	      	this.$router.push({
	      		path:'/home/Remindingstafftoreminding',
	      		query:{}
	      	})
	      },
	      Employeecontract:function(){//合同到期员工提醒
	      	this.$router.push({
	      		path:'/home/Employeecontract',
	      		query:{}
	      	})
	      },
	      Employeesbirthday:function(){//员工生日提醒
	      	this.$router.push({
	      		path:'/home/Employeesbirthday',
	      		query:{}
	      	})
	      },
	      Staffdaystatistics:function(){//人员日统
	      	this.$router.push({
	      		path:'/home/Staffdaystatistics',
	      		query:{}
	      	})
	      },
	      Monthlyattendance:function(){//月度考勤
	      	this.$router.push({
	      		path:'/home/Monthlyattendance',
	      		query:{}
	      	})
	      },
	      Wageaccounting:function(){//工资核算
	      	this.$router.push({
	      		path:'/home/Wageaccounting',
	      		query:{}
	      	})
	      },
	       Statisticalreport:function(){//统计报表
	      	this.$router.push({
	      		path:'/home/Statisticalreport',
	      		query:{}
	      	})
	      }
	    }
	}
</script>

<style>
	.el-menu-vertical-demo{
		width: 200px;
	}
	.yijibiaoti{
		padding-right: 70px;
	}
</style>