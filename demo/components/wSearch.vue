<template>
	<view>
		<view class="w-search">
			<view class="w-search-input">
				<view class="uni-input-wrapper">
					<view  class="uni-input-placeholder w-search-text " 
					v-show="input === '' ? true : false">
						输入关键词/淘宝/京东链接搜索隐藏券
					</view>
					<view >
						<form @submit="searchGoods" class="uni-input-form">
							<input 
							maxlength="140" 
							step 
							autocomplete="off" 
							type="text" 
							v-model="input" 
							name="name"
							class="uni-input-input"/>
						</form>
					</view>
				</view>
			</view>

		  <view class="iconfont iconsearch w-search-icon" @click="searchGoods"></view>
      
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        input:""
			};
		},
    props:['isShow'],
		methods:{
			searchGoods(){
				console.log("切换页面");
				uni.redirectTo({
					url:'/pages/search/search?'+this.input,
					complete() {
						console.log("切换页面")
					}
				})
			}
		},
    computed:{
      // show(){
      //   return this.input === "" ? true : false;
      // }
    }
	}
</script>

<style>
.hide{
  display:none;
}
.w-search{
  width: 100%;
  padding: 5px 15px;
	box-sizing: border-box;
  border-radius: 5px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.w-search-input{
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  font-size: 16px;
}
.uni-input-form, .uni-input-wrapper {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
}
.uni-input-form, .uni-input-input, .uni-input-placeholder, .uni-input-wrapper {
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    text-decoration: inherit;
}
.uni-input-placeholder {
    position: absolute;
    top: 50%;
    left: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    color: grey;
    overflow: hidden;
    text-overflow: clip;
    white-space: pre;
    word-break: keep-all;
    pointer-events: none;
}
.w-search-text{
    color: #b2aeae;
    font-size: 16px;
}
.uni-input-input, .uni-input-placeholder {
    width: 100%;
}
.iconfont{
  font-family: iconfont!important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-search-icon{
  width: 16px;
  height: 16px;
  font-size: 16px;
  color: #b2aeae;
  margin-left: 15px;
}
.iconsearch:before{
  content: url(../static/search.png);
}

</style>
