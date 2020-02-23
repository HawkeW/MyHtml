<template>
	<view class="content page">
		<view class="top_view home_bar-color"></view>
		<view class="home_bar-color home-header fixed">
			<view class="home-header-search">
				<w-search class=""></w-search>
			</view>
			<view class="home-header-tabs absolute"><w-tab :categories="categoryList" @handleRequest="getCurrentPage"></w-tab></view>
		</view>

		<view class="home-list">
			<w-link-card v-for="(item, index) in productList" :key="item.id" :feedDetails="item.feedDetails" :feedType="item.feedType" @click="reDirect('')"></w-link-card>
		</view>
	</view>
</template>

<script>
import wLinkCard from '../../components/wLinkCard.vue';
import wSearch from '../../components/wSearch.vue';
import wTab from '../../components/wTab.vue';
export default {
	data() {
		return {
			categoryList: [],
			productList: [],
			feedDetails: '',
			feedType: '',
			pageData: { currentPage: '', productList: '', totalPage: '' }
		};
	},
	components: {
		'w-link-card': wLinkCard,
		'w-search': wSearch,
		'w-tab': wTab
	},
	beforeMount(){
		
	},
	onLoad() {
		// 获取类目
		const getCategories = uni.request({
			url: 'http://dev-m.wuanlife.com/api/categories',
			dataType: 'json',
			success: res => {
				this.categoryList.push({ id: '0', name: '首页' });
				let cates = res.data.data;
				cates.map(item => {
					this.categoryList.push(item);
				});
			}
		});
		this.getCurrentPage(1, '0'); // 获取首页数据
		console.log(this.productList);
	},
	onReady() {
		uni.hideLoading();
	},
	methods: {
		getCurrentPage(page, id) {
			//首页数据
			if (id === '0') {
				const getCurrentData = uni.request({
					url: 'http://dev-m.wuanlife.com/api/feedlist',
					data: {
						page: page
					},
					method: 'GET',
					success: res => {
						this.productList = [];
						this.pageData = res.data.data; //包含currentPage,totalPage和productList(data)
						this.pageData.data.map(product => {
							this.productList.push(product);
						});
					}
				});
			} else {
				//类目页面数据
				const getCurrentData = uni.request({
					url: 'http://dev-m.wuanlife.com/api/feedlist',
					data: {
						page: 1,
						categoryId: id
					},
					method: 'GET',
					success: res => {
						this.productList = [];
						this.pageData = res.data.data; //包含currentPage,totalPage和productList(data)
						this.pageData.data.map(product => {
							this.productList.push(product);
						});
						console.log(this.productList);
					}
				});
			}
		}
	}
};
</script>

<style>
* {
	margin: 0;
	-webkit-tap-highlight-color: transparent;
}
.flex {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
}
.absolute {
	position: absolute;
}
.fixed {
	position: fixed;
}
.content {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
}
.page {
	background-color: #eee;
	padding-top: 0;
}
.top_view {
	height: 0;
	width: 100%;
	position: fixed;
	background-color: #f8f8f8;
	top: 0;
	z-index: 999;
}
.home_bar-color {
	background-color: #fe626b;
}
.home-header {
	height: 91px;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1;
}
.home-header-search {
	width: 345px;
	margin: 0 auto;
	border-radius: 5px;
	background-color: #fff;
	margin-top: 22px;
	margin-bottom: 11px;
}

.home-header-tabs {
	width: 345px;
	bottom: 0;
	left: 50%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}

.home-list {
	width: 355px;
	padding-top: 101px;
}
</style>
