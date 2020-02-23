<template>
	<view>
    <view class="head" style="text-align: center;">
      <image src="../../static/login_user.png" style="display:inline-block; width: 100upx; height: 100upx;"></image>
    </view>
		<view class="info">
      <view class="info">
          <navigator url="navigate/navigate?title=navigate" hover-class="navigator-hover">
              <view type="default">当前分组：{{user.group}}</view>
          </navigator>
          <navigator url="redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">
              <view type="default">我的周报</view>
          </navigator>
          <navigator url="/pages/index/index" open-type="switchTab" hover-class="other-navigator-hover">
              <view type="default">周报提交</view>
          </navigator>
      </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:{ name:"yiyi", group:"web",email:"123@123"}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
  .btn-area{
   
  }
.btn-area > button {
  display: inline-block;
 width: 200upx; 
}
</style>
