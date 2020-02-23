<template>
	<view>
		搜索结果页
		<button type="primary" @click="nBack">返回</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			nBack(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style>

</style>
