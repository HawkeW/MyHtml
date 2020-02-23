import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 首先声明一个需要全局维护的状态 state,比如 我这里举例的resturantName
const state = {

}
 
// 注册上面引入的各大模块
const store = new Vuex.Store({
    state,    // 共同维护的一个状态，state里面可以是很多个全局状态
    getters,  // 获取数据并渲染
    actions,  // 数据的异步操作
    mutations:{
        // 获取类目
       export const getCategories = uni.request({
               url: 'http://dev-m.wuanlife.com/api/categories', 
               dataType:"json",
               success: (res) => {
                 this.categoryList.push({id:"0",name:"首页"});
                 let cates = res.data.data;
                   cates.map((item)=>{
                    this.categoryList.push(item);
                  } )
               }
           });
         this.productList =  getCurrentPage(1, "0");      // 获取首页数据
      }
    }  // 处理数据的唯一途径，state的改变或赋值只能在这里
})
