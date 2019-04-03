<template>
	<view class="my_credit">
		<view class="my_credit_top">
			<view class="my_credit_all">125000.00<view>总减免额度(元)</view>
			</view>
			<view class="my_credit_top_down">
				<view class="my_credit_used">4500.00<view>已使用(元)</view>
				</view>
				<view class="my_credit_surplus">8000.00<view>剩余(元)</view>
				</view>
			</view>
		</view>
		<view class="my_credit_service">
			<view class="my_credit_service_item">
				<view class="my_credit_service_title">
					<view class="title">会员服务</view>
					<view class="free_play">开通最高100000</view>
					<view class="open_icon">
						<image src="../../static/55.png"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="my_credit_auth">
			<view class="my_credit_auth_title">信用认证</view>
			<view class="my_credit_auth_content">
				<view class="my_credit_auth_item">
					<view class="my_credit_auth_item_icon1">
						<image src="../../static/18.png"></image>
					</view>
					<view class="my_credit_auth_item_name">芝麻信用认证</view>
				</view>
				<view class="my_credit_auth_item">
					<view class="my_credit_auth_item_icon2">
						<image src="../../static/26.png"></image>
					</view>
					<view class="my_credit_auth_item_name">手机实名认证</view>
				</view>
				<view class="my_credit_auth_item">
					<view class="my_credit_auth_item_icon3">
						<image src="../../static/32.png"></image>
					</view>
					<view class="my_credit_auth_item_name">淘宝账号认证</view>
				</view>
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
	.my_credit {
		width: 100%;
	}

	.my_credit_top {
		height: 472.22upx;
		background: url('@~/static/icon61.png');
		background-size: cover;
	}

	.my_credit_all {
		font-size: 50upx;
		color: #FFFFFF;
		text-align: center;
		padding-top: 108.33upx;
	}

	.my_credit_top_down {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 69.44upx;
		color: #FFFFFF;
		position: relative;
	}
	.my_credit_top_down::after {
		position: absolute;
		content: ' ';
		display: block;
		top: 0;
		left: 50%;
		width: 2.77upx;
		height: 149.3upx;
		background: rgba(255,255,255,0.3);
	}

	.my_credit_used {
		font-size: 50upx;
		text-align: center;
	}

	.my_credit_surplus {
		font-size: 50upx;
		text-align: center;
	}

	.my_credit_auth {
		width: 95%;
		margin: 27.77upx auto 0 auto;
		height: 277.77upx;
		background: #FFFFFF;
		box-shadow: 0px 8.33upx 6.94upx 1.38upx rgba(0, 0, 0, 0.07);
		border-radius: 9.72upx;
		border: 1.38upx solid rgba(0, 0, 0, 0.07);
		;
	}

	.my_credit_auth_title {
		font-size: 27.77upx;
		color: #151515;
		width: 100%;
		padding: 27.77upx 0 0 0;
		margin-left: 41.66upx;
	}

	.my_credit_service {
		margin-top: 18.05upx;
		width: 100%;
		height: auto;
		background: #FFFFFF;
		padding: 22.22upx 0;
	}

	.my_credit_service_item {
		width: 95%;
		margin: 0 auto;
		padding: 34.72upx 0;
		background-image: linear-gradient(90deg, #d8b37b 0%, #ebcf97 100%);
		box-shadow: 0upx 11.11upx 5.55upx 1.38upx rgba(0, 0, 0, 0.06);
		border-radius: 12.5upx;
	}

	.my_credit_service_item:not(:first-child) {
		margin-top: 20.83upx;
	}

	.my_credit_service_title {
		display: flex;
		flex-direction: row;
	}

	.title {
		flex: 1;
		font-size: 25upx;
		color: #855e2b;
		font-weight: 600;
		margin-left: 26.38upx;
	}

	.free_play {
		width:194.44upx;
		font-size: 25upx;
		color: #855e2b;
		font-weight: 600;
	}

	.open_icon {
		width: 12.5upx;
		height: 20.83upx;
		margin-right: 22.22upx;
	}

	.open_icon image {
		width: 100%;
		height: 100%;
	}

	.my_credit_auth_content {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		padding-top: 40.27upx;
	}

	.my_credit_auth_item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.my_credit_auth_item_icon1 {
		width: 47.91upx;
		height: 56.25upx;
	}

	.my_credit_auth_item_icon1 image {
		width: 100%;
		height: 100%;
	}

	.my_credit_auth_item_icon2 {
		width: 56.94upx;
		height: 53.47upx;
	}

	.my_credit_auth_item_icon2 image {
		width: 100%;
		height: 100%;
	}

	.my_credit_auth_item_icon3 {
		width: 65.97upx;
		height: 50.69upx;
	}

	.my_credit_auth_item_icon3 image {
		width: 100%;
		height: 100%;
	}

	.my_credit_auth_item_name {
		font-size: 27.77upx;
		color: #999999;
		padding-top: 36.8upx;
	}
</style>
