import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

const store = new Vuex.Store({
  state: {
    currentPage:1, // 默认值
    categoryList:[],
    productList:[],
    pageData:"",
  },
  mutations: {
    getProductList(page, id,state){
      //首页数据
      if(id === "0"){
        const getCurrentData = uni.request({
           url: 'http://dev-m.wuanlife.com/api/feedlist',
           data: {
               page: page,
           },
           method:"GET",
           success: (res) => {
               state.pageData = res.data.data;//包含currentPage,totalPage和productList(data)
               state.geData.data.map( product => {
               state.productList.push(product);
           })
           }
       });
      }else {
        //类目页面数据
        const getCurrentData = uni.request({
              url: 'http://dev-m.wuanlife.com/api/feedlist', 
              data: {
                  page: 1,
                  categoryId: id
              },
              method:"GET",
              success: (res) => {
                productList:[];
                this.pageData = res.data.data;//包含currentPage,totalPage和productList(data)
                this.pageData.data.map( product => {
                  this.productList.push(product);
                  })
                }
          });
      }
    }
  }
})