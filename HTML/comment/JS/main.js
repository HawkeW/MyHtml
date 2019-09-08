// Element UI
import Element from 'element-ui'
// 默认样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
Vue.use(Element, { size: 'small', zIndex: 3000 });




new Vue({
  el: '#app',
  render: h => h(App)
});


window.onload = function () {
Vue.component('commentlist', {
    props: ['item', 'index'],
    template: "<ul><li>用户名：{{item.userName}} 评论时间：{{item.currenttime}}<p style=\"width:100%\">评论内容：{{item.userContent}}</p></li></ul> "
})

new Vue({
    el: "#root",
    data: {
        userName: '',
        userContent: '',
        list: []
    },
    methods: {
        handleSubmit: function () {
            var obj = {
                userName: this.userName,
                currenttime: this.getTime(),
                userContent: this.userContent
            }
            this.list.push(obj);
            this.userContent = "";
            this.userName = "";
        },
        getTime: function () {
            var nowdate = new Date;
            nowYear = nowdate.getFullYear();
            nowMonth = nowdate.getMonth() + 1;
            nowDate = nowdate.getDate();
            return nowYear + "-" + nowMonth + "-" + nowDate;
        }
    },

})
}

