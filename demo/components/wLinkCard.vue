<template>
  <!-- link类型的产品渲染 -->
  <view v-if="isLink" @click="directTo(feedDetails.linkUrl)">
		<view class="home-list-card w-link-card" >
			<view class="w-link-card-img">
				<view style="
				background-position: center center;
				background-size: contain; 
				background-repeat: no-repeat; "
				:style="{ 'background-image': 'url('+feedDetails.imgUrl+')'}"
		
				></view>
				<image :src="feedDetails.imgUrl"></image>
			</view>
			<view class="w-link-card-main">
				<text class="main-title text-ellipsis"> {{ feedDetails.title }}</text>
				<text class="main-caption text-ellipsis-single">{{ feedDetails.subheading }}</text>
			</view>
		</view>	
	
  </view>
	<!-- 非link类型的产品渲染 -->
  <view v-else>
    <view class="home-list-card" >
      <view class="home-list-card_header flex justify-between items-end">
        <view class="font-bold home-list-card_header_title text-ellipsis-single">
          {{ title }} 
        </view>
        <view class="home-list-card_header_btn">
          <text>查看全部</text>
          <text class="iconfont"></text>
        </view>
      </view>
      
      <view class="home-list-card_main" >
         <view class="w-card w-card-two"
            v-for="(item, index) in list"
						:key="item.id">
            <view class="w-card-img-two">
               <view style="background-position: center center;background-size: contain; background-repeat: no-repeat; "
               :style="{ 'background-image': 'url('+item.imgUrl+')'}"
               ></view>
               <image :src="item.imgUrl"></image>
            </view>
            <view class="w-card-main w-card-main-two">
              <text class="text-ellipsis w-card-main_title-two">{{ item.title }}</text>
              <text class="w-card-prices w-card-prices-two">
                <text class="w-card-current_price w-card-current_price-two">￥{{ item.price }}</text>
              </text>
         </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
	export default {
    props:['feedDetails','feedType'],
		data() {
			return {
       list:[],
       title:"",
			 url:''
       };
		},
    onLoad() {
      this.update();
    },
    methods:{
			directTo(link){
				 // 跳转到内部窗口并且传递链接
					uni.navigateTo({
							url: '/pages/webview/webview?url=' + link,
							fail(res) {
								console.log(res)
							},
							complete() {
								console.log(link)
							}
					})
			}
    },
    computed:{
      isLink(){
        return this.feedType==="link" ? true : false;
      },
      update(){
        if(this.feedType==="autoList"){
          set:{
            this.list = this.feedDetails.autolistGoods;
            this.title = this.feedDetails.autolistName;
            }
        }
        if(this.feedType==="goodsTopic"){
          set:{
            this.list = this.feedDetails.goodsDetails;
            this.title =  this.feedDetails.title;
            }
         }
      }
    },
	}
</script>

<style>
  
  image {
    width: 110px;
    height:110px;
  }
  .font-bold {
      font-weight: 700;
  }
  .flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
  .text-ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
  }
  .text-ellipsis-single {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  .home-list-card {
      width: 100%;
      background-color: #fff;
      padding: 16px 7px 12px 7px;
      box-sizing: border-box;
      border-radius: 5px;
      margin-bottom: 10px;
  }
  .w-link-card {
      width: 355px;
      box-sizing: border-box;
      border-radius: 5px;
      background: #fff;
      padding: 10px;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
  }
.w-link-card-img {
    width: 110px;
    height: 110px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 110px;
    flex: 0 0 110px;
    margin-right: 12px;
}
.w-link-card-main {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    width: 211px;
}
.main-title{
    font-size: 15px;
    font-weight: 700;
    font-stretch: normal;
    line-height: 28px;
    letter-spacing: 1px;
    color: #333;
    margin-bottom: 15px;
}

.main-caption {
    font-size: 12px;
    font-weight: 400;
    font-stretch: normal;
    line-height: 14px;
    letter-spacing: 0px;
    color: #999;
}
.home-list-card_header{
  font-size: 17px;
  margin-bottom: 16px;
}
.justify-between {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}
.items-end {
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    align-items: flex-end;
}
.home-list-card_header_title {
    width: 260px;
}
.home-list-card_header_btn {
    font-size: 13px;
    color: #999;
}
.iconfont{
  font-family: iconfont!important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.home-list-card_main {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    width: 100%;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}
.w-card {
    width: 100%;
   display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    background-color: #fff;
}
.w-card-two {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
}
.w-card-img-two {
    width: 110px;
    height: 110px;
}
.w-card-main {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    color: #484848;
}
.w-card-main-two {
    font-size: 12px;
    padding: 9px 0 0 0;
}
.w-card-main_title-two{
    width: 110px;
}
.w-card-prices {
    display: block;
}
.w-card-prices-two {
    margin-top: 15px;
}
.w-card-current_price {
    color: #fe626b;
    font-weight: 700;
}
.w-card-current_price-two {
    font-size: 13px;
    width: 50px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
