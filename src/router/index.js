import Vue from 'vue'
import Router from 'vue-router'//路由
import HelloWorld from '@/components/HelloWorld'//登录页
import home from '@/components/Home'//主页

import Employeeinformation from '@/components/Employeeinformation'//员工信息
import Recruitnewemployees from '@/components/Recruitnewemployees'//录入新员工
import Remindingstafftoreminding from '@/components/Remindingstafftoreminding'//待转正员工提醒
import Employeecontract from '@/components/Employeecontract'//合同到期员工提醒
import Employeesbirthday from '@/components/Employeesbirthday'//员工生日提醒
import Staffdaystatistics from '@/components/Staffdaystatistics'//人员日统
import Monthlyattendance from '@/components/Monthlyattendance'//月度考勤
import Wageaccounting from '@/components/Wageaccounting'//工资核算
import Statisticalreport from '@/components/Statisticalreport'//统计报表



Vue.use(Router)//全局路由

export default new Router({
  routes: [
    {
      path: '/',//登录页
      name: 'HelloWorld',
      component: HelloWorld
    },
    //
    {
      path: '/home',//主页
      name: 'home',
      component: home,
      children:[
      	{
      	  path:'Employeeinformation',//员工信息
      		name:'Employeeinformation',
      		component:Employeeinformation
      	},
      	{
      	  path:'Recruitnewemployees',//录入新员工
      		name:'Recruitnewemployees',
      		component:Recruitnewemployees
      	},
      	{
      	  path:'Remindingstafftoreminding',//待转正员工提醒
      		name:'Remindingstafftoreminding',
      		component:Remindingstafftoreminding
      	},
      	{
      	  path:'Employeecontract',//合同到期员工提醒
      		name:'Employeecontract',
      		component:Employeecontract
      	},
      	{
      	  path:'Employeesbirthday',//员工生日提醒
      		name:'Employeesbirthday',
      		component:Employeesbirthday
      	},
      	{
      	  path:'Staffdaystatistics',//人员日统
      		name:'Staffdaystatistics',
      		component:Staffdaystatistics
      	},
      	{
      	  path:'Monthlyattendance',//月度考勤
      		name:'Monthlyattendance',
      		component:Monthlyattendance
      	},
      	{
      	  path:'Wageaccounting',//工资核算
      		name:'Wageaccounting',
      		component:Wageaccounting
      	},
      	{
      	  path:'Statisticalreport',//统计报表
      		name:'Statisticalreport',
      		component:Statisticalreport
      	}
      ]
    }
  ]
})
