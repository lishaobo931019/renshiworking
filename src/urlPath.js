    import axios from 'axios'
    
    
    //axios配置
    axios.defaults.baseURL = 'http://47.94.131.160:8080';
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    
    
    
//  var contextPath = "http://39.106.209.182:8080";//测试
//  var contextPath = "http://47.94.131.160:8080";//正式
    
    
    
	export default{
		//
		//
		//**下面是一些echarts的接口**/
		MonthVisit(){
			return axios.get('/market/chart/month.json')//月度出访次数
		},
		seasonVisit(){
			return axios.get('/market/chart/quarter.json')//季度出访次数
		},
		diquVisit(){
			return axios.get('/market/chart/area.json')//地区出访比例
		},
		pianquVisit(){
			return axios.get('/market/chart/region.json')//片区出访比例
		},
		Contractincome(){
			return axios.get('/contract/chart/income.json')//合同收入情况
		},
		Contractpayment(){
			return axios.get('/contract/chart/paid.json')//合同付款情况
		},
		workprogress(){
			return axios.get('/contract/chart/work/region.json')//各地工作进度
		},
		Productincome(){
			return axios.get('/contract/chart/product.json')//各产品收入
		},
		diquincome(){
			return axios.get('/contract/chart/area.json')//地区收入比例
		},
		fenquincome(){
			return axios.get('/contract/chart/region.json')//分区收入比例
		},
		yearWarrantygold(){
			return axios.get('/contract/chart/deposit/year.json')//年度质保金情况
		},
		Warrantygoldreturn(){
			return axios.get('/contract/chart/deposit/back.json')//质保金回款情况
		},
		biddingNum(){
			return axios.get('/bid/chart/file/amount.json')//中标的数量
		},
		biddingMoney(){
			return axios.get('/bid/chart/total/prices.json')//中标的金额
		},
		biddingProportion(){
			return axios.get('bid/chart/win/weight.json')//中标的占比情况
		}		
		/***********/
		//
		//
	}
