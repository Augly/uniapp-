<template>
	<view class="my_footprint">
		<view class="my_footprint_wrap" v-for="(item, index) in 10"  @click.stop="goDetail()">
			<image class="my_footprint_thumb" src="../../../static/thumb_pic_1.jpg"></image>
			<view class="my_footprint_info">
				<view class="my_footprint_info_title">更能打8GB+128GB 极夜黑 全网通4G 双卡双待</view>
				<view class="my_footprint_info_money">押金：<text class="font_price_1">￥</text><text class="font_price_number">1500.00</text></view>
				<view class="my_footprint_info_price"><text class="font_price_2">￥</text><text class="font_strong">28.2</text>/天</view>
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
				favorites: [{
				}],
				isLoading: false
			}
		},
		onReachBottom: function() {
			//触底的时候请求数据，即为上拉加载更多
			//为了更加清楚的看到效果，添加了定时器
			console.log('触发上滑加载')
			this.getListMoreAjax()
		},
		methods: {
			goDetail() {
				uni.navigateTo({
					url: '/pages/class/commodity_detail/commodity_detail'
				})
			},
			getListMoreAjax() {
				uni.showNavigationBarLoading(); //显示加载动画
				let _this = this
				this.isLoading = true
				// 模拟上滑加载，这里启用定时器
				setTimeout(function() {
					_this.isLoading = false
                    uni.hideNavigationBarLoading();//关闭加载动画
					console.log('加载完毕')
				}, 2000)
			}
		}
	}
</script>

<style>
	page {
		background: #FFFFFF;
	}
	.my_footprint_wrap {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		margin-top: 56.94upx;
		margin-bottom: 56.94upx;
		position: relative;
	}
	.my_footprint_wrap::after {
		position: absolute;
		content: ' ';
		display: inline-block;
		left: 0;
		bottom: -27.77upx;
		width: 100%;
		height: 2.77upx;
		background: #e6e6e6;
	}
	.my_footprint_thumb {
		width: 169.44upx;
		height: 169.44upx;
		border-radius: 6.94upx;
	}
	.my_footprint_info {
		flex: 1;
		font-size:27.77upx;
		font-weight:400;
		color:rgba(0,0,0,1);
		line-height:27.77upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.my_footprint_info_title {
		font-size: 27.77upx;
		padding-left:27.77upx;
		line-height: 33.33upx;
	}
	.my_footprint_info_money {
		font-size: 25upx;
		padding-left: 25upx;
	}
	.my_footprint_info_price {
		font-size: 22.22upx;
		padding-left: 22.22upx;
		color: #2dabf7;
	}
	.my_footprint_empty {
		font-size: 30.55upx;
		color: #9a9a9a;
		width: 100%;
		text-align: center;
		margin: 0 auto;
		padding-bottom: 69.44upx;
	}
	.font_price_1 {
		font-size: 23.61upx;
		color: #f23030;
	}
	.font_price_2 {
		font-size: 25.61upx;
	}
	.font_price_number {
		color: #f23030;
		font-size: 25.61upx;
	}
	.font_strong {
		font-weight: bold;
		font-size: 25.61upx;
	}
	.my_footprint_cancle {
		width: 131.25upx;
		height: 50upx;
		line-height: 50upx;
		text-align: center;
		color: #8b8b8b;
		font-size: 22.22upx;
		background-color: #ffffff;
		border-radius: 25upx;
		border: solid 1.38upx #dbdbdb;
		margin-top: 121.52upx;
	}
	.my_footprint_cancle.active {
		background-color: #2dabf7;
		border: 1.38upx solid #2dabf7;
		color: #FFFFFF;
	}
	.my_footprint_empty {
		
	}
</style>
