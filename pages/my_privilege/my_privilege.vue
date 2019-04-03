<template>
	<view class="my_privilege">
		<view class="my_privilege_scroll">
			<scroll-view class="my_privilege_scroll_wrap" scroll-x="true">
				<view class="my_privilege_scroll_item">
					<view class="scroll_title">猪一戒会员</view>
					<view class="scroll_discount">9.5折</view>
					<view class="scroll_price">9.5折</view>
				</view>
				<view class="my_privilege_scroll_item">
					<view class="scroll_title">猪一戒会员</view>
					<view class="scroll_discount">9.5折</view>
					<view class="scroll_price">9.5折</view>
				</view>
				<view class="my_privilege_scroll_item">
					<view class="scroll_title">猪一戒会员</view>
					<view class="scroll_discount">9.5折</view>
					<view class="scroll_price">9.5折</view>
				</view>
				<view class="my_privilege_scroll_item">
					<view class="scroll_title">猪一戒会员</view>
					<view class="scroll_discount">9.5折</view>
					<view class="scroll_price">9.5折</view>
				</view>
			</scroll-view>
		</view>
		<view class="my_privilege_nav">
			<view class="my_privilege_nav_title">会员特权</view>
			<view class="my_privilege_nav_list">
				<view class="my_privilege_nav_item">
					<view class="my_privilege_nav_item_icon">
						<image src="../../static/49.png"></image>
					</view>
					<view>设备租金</view>
					<view>7.5折</view>
				</view>
				<view class="my_privilege_nav_item">
					<view class="my_privilege_nav_item_icon">
						<image src="../../static/49.png"></image>
					</view>
					<view>设备租金</view>
					<view>7.5折</view>
				</view>
				<view class="my_privilege_nav_item">
					<view class="my_privilege_nav_item_icon">
						<image src="../../static/49.png"></image>
					</view>
					<view>设备租金</view>
					<view>7.5折</view>
				</view>
				<view class="my_privilege_nav_item">
					<view class="my_privilege_nav_item_icon">
						<image src="../../static/49.png"></image>
					</view>
					<view>设备租金</view>
					<view>7.5折</view>
				</view>
			</view>
		</view>
		<view class="my_privilege_ul">
			<view class="my_privilege_li">
				<image class="my_privilege_li_icon" src="../../static/14.png"></image>
				<view class="my_privilege_li_title">会员有效期</view>
				<view class="my_privilege_li_badge">aaa</view>
			</view>
			<view class="my_privilege_li">
				<image class="my_privilege_li_icon" src="../../static/14.png"></image>
				<view class="my_privilege_li_title">会员有效期</view>
				<view class="my_privilege_li_badge">aaa</view>
			</view>
			<view class="my_privilege_li">
				<image class="my_privilege_li_icon" src="../../static/14.png"></image>
				<view class="my_privilege_li_title">会员有效期</view>
				<view class="my_privilege_li_badge">aaa</view>
			</view>
		</view>
		<view class="my_privilege_btn_top"></view>
		<view class="my_privilege_btn">￥188.00去开通会员</view>
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
	.my_privilege {
		background: #F7F7F7;
		padding-top: 55.55upx;
	}

	.my_privilege_scroll {
		white-space: nowrap;
		width: 100%;
	}

	.my_privilege_scroll_wrap {
		white-space: nowrap;
		width: 100%;
	}

	.my_privilege_scroll_item {
		display: inline-block;
		white-space: nowrap;
		width: 258.33upx;
		height: 201.38upx;
		margin-right: 13.88upx;
		background-image: url('~@/static/33.png');
		background-repeat: no-repeat;
		background-size: contain;
		text-align: center;
	}
	.scroll_title {
		font-size: 22.91upx;
		color: #FFFFFF;
		padding-top: 34.72upx;
	}
	.scroll_discount {
		font-size: 45.83upx;
		color: #FFFFFF;
		padding-top: 13.88upx
	}
	.scroll_price {
		font-size: 20.83upx;
		color: #FFFFFF;
		padding-top: 13.88upx
	}
	
	.my_privilege_scroll_item:first-child {
		margin-left: 20.83upx
	}
	.my_privilege_scroll_item image{
		width: 100%;
		height: 100%;
	}
	.my_privilege_nav {
		margin-top: 55.55upx;
		width: 100%;
		height: auto;
		background: #FFFFFF;
	}
	.my_privilege_nav_title {
		font-size: 33.33upx;
		padding: 33.33upx 0 47.22upx 27.77upx;
	}
	.my_privilege_nav_list {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-bottom: 65.27upx;
	}
	.my_privilege_nav_item {
		display: flex;
		flex-direction: column;
		width: 24.4%;
		align-items: center;
	}
	.my_privilege_nav_item view:nth-child(2) {
		font-size: 22.22upx;
		padding-top: 26.38upx;
		color: #666666;
	}
	.my_privilege_nav_item view:nth-child(3) {
		font-size: 19.44upx;
		padding-top: 19.44upx;
		color: #999999;
	}
	.my_privilege_nav_item_icon {
		width: 77.08upx;
		height: 77.08upx;
	}
	.my_privilege_nav_item_icon image {
		width: 100%;
		height: 100%;
	}
	.my_privilege_ul {
		width: 100%;
		height: auto;
		background: #FFFFFF;
		margin-top: 20.83upx;
	}
	.my_privilege_li {
		display: flex;
		flex-direction: row;
		height: 94.44upx;
		line-height: 94.44upx;
		border-bottom: 1.38upx solid #e5e5e5;
	}
	.my_privilege_li_icon {
		width: 34.72upx;
		height: 34.72upx;
		margin-left: 20.83upx;
		margin-top: 34.72upx;
		margin-right: 20.83upx;
	}
	.my_privilege_li_title {
		flex: 1;
	}
	.my_privilege_li_badge {
		font-size: 22.22upx;
		color: #181818;
		text-align: center;
		width: 156.94upx;
	}
	.my_privilege_btn_top {
		background: #f0f4f7;
		height: 16.66upx;
	}
	.my_privilege_btn {
		width: 100%;
		background-image: linear-gradient(163deg, #dcaf67 2%, #e8b67b 100%), linear-gradient(#f76d4a, #f76d4a);
		color: #FFFFFF;
		position: fixed;
		left: 0;
		bottom: 0;
		height: 90.27upx;
		line-height: 90.27upx;
		text-align: center;
	}
	
</style>
