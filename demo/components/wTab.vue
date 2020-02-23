<template>
	<view>
		<view class="w-tab">
		     <view 
		     class="w-tab-item home-tab-item"
		      v-for="(item,index) in categories" 
		      :key="item.id"
		      :class="{'home-active-tab-item':isActive[index] }"
          @click="handleClick(index)"
		      >
		        {{ item.name }}
		      </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isActive:["true"],
			};
		},
    props:['categories'],     //传入参数：categories
    methods:{
      handleClick(index){
        //修改选中样式
        this.isActive = [];
        let num = Number(index);
        for(let i = 0; i < this.categories.length; i++){
          if( i === num){
            this.isActive.push(true);
          }else {
             this.isActive.push(false);
          } 
        }
        this.$emit('handleRequest', 1, this.categories[index].id); 
      }
    }
	}
</script>

<style>
.w-tab {
    width: 100%;
    overflow-y: scroll;
    white-space: nowrap;
}
.w-tab-item {
    display: inline-block;
}
.home-tab-item:first-child {
    margin-left: 0;
}
.home-tab-item {
    font-size: 16px;
    color: #fff;
    margin: 0 11px;
    opacity: .7;
    box-sizing: border-box;
}
.home-active-tab-item {
  transition: 80;
    font-size: 18px;
    opacity: .8;
    font-weight: 700;
    border-bottom: 2px solid #fff;
}
</style>
