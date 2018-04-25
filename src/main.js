// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $http from './urlPath.js'
import echarts from 'echarts'


//引入element-ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//全局加载urlPath
Object.defineProperty(Vue.prototype, '$http', {value: $http})


//全局加载echarts
Object.defineProperty(Vue.prototype, 'echarts', {value: echarts})

//全局加载ui组件
Vue.use(ElementUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
