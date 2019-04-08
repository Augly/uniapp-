<template>
	<view class="order_status">
		<view class="order_status_item">
			<view class="order_status_item_text">
				<view class="order_status_item_text_status">待付款</view>
				<view class="order_status_item_text_status_info">您的产品已预订，请在60分钟之内付款</view>
			</view>
			<view class="order_status_item_icon">
				<image mode="aspectFit" src="../../static/5.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.order_status {
		width: 100%;
		height: auto;
	}
	.order_status_item {
		height: 184.72upx;
		background:linear-gradient(264deg,rgba(45,171,247,1) 0%,rgba(119,198,245,1) 98%);
		color: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.order_status_item:not(:first-child) {
		margin-top: 27.77upx;
	}
	.order_status_item_text {
		flex: 1;
		margin-left: 56.94upx;
	}
	.order_status_item_icon {
		width: 98.61upx;
		height: 118.05upx;
		margin-right: 56.94upx;
	}
	.order_status_item_icon image {
		width: 100%;
		height: 100%;
	}
	.order_status_item_text_status {
		font-size: 31.94upx;
	}
	.order_status_item_text_status_info {
		font-size: 23.61upx;
		padding-top: 19.44upx;
	}
</style>
