<template>
    <view>
        <web-view :src="link"></web-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                url: ''
            }
        },
				mounted(e) {
					this.url = e.url;
				},
        onLoad(e) {
             // 获取传递过来的链接
            this.url = e.url;
        },
				computed:{
					link(){
						return this.url;
					}
				}
    }
</script>
<style>

</style>
