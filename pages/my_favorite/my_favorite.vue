<template>
	<view class="my_favorite">
		<view class="my_favorite_wrap" v-for="(item, index) in 10">
			<image class="my_favorite_thumb" src="../../static/thumb_pic_1.jpg"></image>
			<view class="my_favorite_info">
				<view class="my_favorite_info_title">更能打8GB+128GB 极夜黑 全网通4G 双卡双待</view>
				<view class="my_favorite_info_money">押金：<text class="font_price_1">￥</text><text class="font_price_number">1500.00</text></view>
				<view class="my_favorite_info_price"><text class="font_price_2">￥</text><text class="font_strong">28.2</text>/天</view>
			</view>
			<view class="my_favorite_cancle active">取消收藏</view>
		</view>
		<view class="my_favorite_empty">暂无更多内容</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				favorites: [{

				}]
			}
		}
	}
</script>

<style>
	.my_favorite_wrap {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		margin-top: 56.94upx;
		margin-bottom: 56.94upx;
		position: relative;
	}
	.my_favorite_wrap::after {
		position: absolute;
		content: ' ';
		display: inline-block;
		left: 0;
		bottom: -27.77upx;
		width: 100%;
		height: 2.77upx;
		background: #e6e6e6;
	}
	.my_favorite_thumb {
		width: 169.44upx;
		height: 169.44upx;
		border-radius: 6.94upx;
	}
	.my_favorite_info {
		flex: 1;
		font-size:27.77upx;
		font-weight:400;
		color:rgba(0,0,0,1);
		line-height:27.77upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.my_favorite_info_title {
		font-size: 27.77upx;
		padding-left:27.77upx;
		line-height: 33.33upx;
	}
	.my_favorite_info_money {
		font-size: 25upx;
		padding-left: 25upx;
	}
	.my_favorite_info_price {
		font-size: 22.22upx;
		padding-left: 22.22upx;
		color: #2dabf7;
	}
	.my_favorite_empty {
		font-size: 30.55upx;
		color: #9a9a9a;
		width: 100%;
		text-align: center;
		margin: 0 auto;
		padding-bottom: 69.44upx;
	}
	.font_price_1 {
		font-size: 23.61upx;
	}
	.font_price_2 {
		font-size: 22.22upx;
	}
	.font_price_number {
		color: #f23030;
		font-size: 23.61upx;
	}
	.font_strong {
		font-weight: bold;
	}
	.my_favorite_cancle {
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
	.my_favorite_cancle.active {
		background-color: #2dabf7;
		border: 1.38upx solid #2dabf7;
		color: #FFFFFF;
	}
	.my_favorite_empty {
		
	}
</style>
