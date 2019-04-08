<template>
	<view class="order_status">
		<view class="order_status_item">
			<view class="order_status_item_text">
				<view class="order_status_item_text_status">{{currentStatus.name}}</view>
				<view class="order_status_item_text_status_info">{{currentStatus.description}}</view>
			</view>
			<view class="order_status_item_icon">
				<image mode="aspectFit" :src="currentStatus.thumb"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'order_status',
		props: {
			status_type: {
				type: String,
				default: '0'
			}
		},
		created() {
			this.currentStatus = this.statusArr[this.status_type]
		},
		data() {
			return {
				currentStatus: {},
				statusArr: [
					{
						name: '待付款',
						description: '您的产品已预定，请在60分钟之内付款',
						thumb: '../../../static/20.png'
					},
					{
						name: '待签收',
						description: '您的产品已发货，请注意查收',
						thumb: '../../../static/5.png'
					},
					{
						name: '已归还',
						description: '您的产品已归还，请耐心等待仓库验收',
						thumb: '../../../static/11.png'
					},
					{
						name: '已取消',
						description: '您的产品已取消，感谢您对小蓝猪的信任',
						thumb: '../../../static/25.png'
					},
					{
						name: '使用中',
						description: '您的产品已发货，请注意查收',
						thumb: '../../../static/28.png'
					},
					{
						name: '已完成',
						description: '您的产品已归还，请耐心等待仓库验收',
						thumb: '../../../static/46.png'
					},
					{
						name: '已退款',
						description: '您的订单已取消，感谢您对小蓝猪的支持',
						thumb: '../../../static/45.png'
					}
				]
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
