<template>
	<view class="content">
		<!-- 搜索组件 -->
		<view class="head">
			<view class="inputGroup">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" value="" placeholder="搜索" disabled @click.stop="goSearch()" />
			</view>
			<view class="tabWrap">
				<scroll-view scroll-x class="scrollWrap">
					<span class="scrollItem" :class="tabIndex == index ? 'active' : ''" v-for="(item, index) in tabList" :key="index"
					 @click="tabChange(index)">
						{{ item.label }}
					</span>
				</scroll-view>
			</view>
		</view>
		<view class="listTwo">
			<view class="listContent">
				<view class="listWrap" v-for="(item, index) in hot_list" :key="index" @click.stop="goCommondityDetail()">
					<image :src="item.banner" class="imgWrap"></image>
					<view class="listRes">
						<span class="title">{{ item.title }}</span>
						<span class="price">￥{{ item.price }}</span>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more v-show="isLoading" status="loading" :show-icon="true"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				tabIndex: 0,
				isLoading: false,
				tabList: [{
						label: '推荐',
						value: 0
					},
					{
						label: '美颜',
						value: 1
					},
					{
						label: '游戏',
						value: 2
					},
					{
						label: '生活',
						value: 3
					},
					{
						label: '居家',
						value: 4
					},
					{
						label: '户外男神',
						value: 5
					},
					{
						label: '居家',
						value: 6
					}
				],
				hot_list: [{
						banner: 'http://minpig.zzvlm.com/banner2.png',
						title: 'Bose蓝牙耳机',
						price: '20.00/天'
					},
					{
						banner: 'http://minpig.zzvlm.com/banner2.png',
						title: 'Bose蓝牙耳机',
						price: '20.00/天'
					},
					{
						banner: 'http://minpig.zzvlm.com/banner2.png',
						title: 'Bose蓝牙耳机',
						price: '20.00/天'
					},
					{
						banner: 'http://minpig.zzvlm.com/banner2.png',
						title: 'Bose蓝牙耳机',
						price: '20.00/天'
					},
					{
						banner: 'http://minpig.zzvlm.com/banner2.png',
						title: 'Bose蓝牙耳机',
						price: '20.00/天'
					},
					{
						banner: 'http://minpig.zzvlm.com/banner2.png',
						title: 'Bose蓝牙耳机',
						price: '20.00/天'
					},
					{
						banner: 'http://minpig.zzvlm.com/banner2.png',
						title: 'Bose蓝牙耳机',
						price: '20.00/天'
					},
					{
						banner: 'http://minpig.zzvlm.com/banner2.png',
						title: 'Bose蓝牙耳机',
						price: '20.00/天'
					}
				]
			};
		},
		onLoad() {},
		onReachBottom: function() {
			//触底的时候请求数据，即为上拉加载更多
			//为了更加清楚的看到效果，添加了定时器
			console.log('触发上滑加载')
			this.getListMoreAjax()
		},
		methods: {
			goCommondityDetail() {
				uni.navigateTo({
					url: '/pages/class/commodity_detail/commodity_detail'
				})
			},
			goSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			changeTab() {

			},
			tabChange(index) {
				uni.showLoading({
					title: '正在加载...',
					mask: true,
					success: () => {
						setTimeout(() => {
							uni.hideLoading();
							this.tabIndex = index
						}, 500);
					}
				});
				console.log('你点击的是'+this.tabList[index].label)
			},
			handleChange() {},
			getListMoreAjax() {
				uni.showNavigationBarLoading(); //显示加载动画
				let _this = this
				this.isLoading = true
				// 模拟上滑加载，这里启用定时器
				setTimeout(function() {
					_this.isLoading = false
			        uni.hideNavigationBarLoading();//关闭加载动画
					console.log(_this.tabList[_this.tabIndex].label + '加载完毕')
				}, 2000)
			}
		}
	};
</script>

<style lang="less" scoped>
	@import (reference) '../../common/public.less';

	.swiperWrap {
		width: 100%;
		height: 100%;
		background: #ff0000;
	}

	.content {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: rgba(255, 255, 255, 1);
	}

	.head {
		width: 100%;
		height: auto;
		overflow: hidden;
		position: fixed;
		top: 61.11upx;
		padding-bottom: 27.77upx;
		z-index: 10;
		background-color: rgba(255, 255, 255, 1);
	}

	::-webkit-scrollbar {
		display: none;
	}

	// 搜索组件样式
	.inputGroup {
		width: 704.16upx;
		height: 59.72upx;
		background: rgba(239, 239, 239, 1);
		border-radius: 8.33upx;
		margin: 0 auto;
		margin-top: 41.66upx;
		box-sizing: border-box;
		padding: 0upx 15.27upx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		image {
			width: 26.38upx;
			height: 26.38upx;
		}

		input {
			width: 625upx;
			font-size: 27.77upx;
			color: #989898;
			text-align: left;
		}
	}

	.tabWrap {
		width: 100%;
		height: 83.33upx;
		box-sizing: border-box;
		padding-left: 23.61upx;
	}

	.scrollWrap {
		white-space: nowrap;
		width: 100%;
		height: 83.33upx;
	}

	.scrollItem {
		line-height: 83.33upx;
		font-size: 30.55upx;
		color: rgba(51, 51, 51, 1);
		padding: 0upx 14px;
		display: inline-block;
		white-space: nowrap;
		position: relative;
	}

	.active {
		color: rgba(45, 171, 247, 1);
	}

	.active::after {
		content: '';
		@bottom();
		width: 36.11upx;
		height: 5.55upx;
		background: rgba(45, 171, 247, 1);
		border-radius: 2.77upx;
	}

	//列表组件2
	.listTwo {
		width: 100%;
		box-sizing: border-box;
		padding: 206upx 0upx 0upx 22.22upx;

		.listContent {
			width: 100%;
			height: auto;
			box-sizing: border-box;
			padding: 0upx 22.22upx 0upx 0upx;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.listWrap {
				width: 343.05upx;
				margin-bottom: 27.77upx;

				.imgWrap {
					width: 100%;
					height: 344.44upx;
					border-radius: 6.94upx;
				}

				.listRes {
					width: 100%;
					height: 83.33upx;
					margin-top: 25upx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.title {
						font-size: 31.94upx;
						font-weight: 400;
						color: rgba(0, 0, 0, 1);
						@oneLine();
					}

					.price {
						font-size: 25upx;
						font-weight: 400;
						color: rgba(45, 171, 247, 1);
					}
				}
			}
		}
	}
</style>
