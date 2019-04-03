<template>
	<view class="login_wrap">
		<view class="login_logo">
			<image src="../../static/38.png" mode=""></image>
		</view>
		<view class="login_logo_title">
			<image src="../../static/39.png" mode=""></image>
		</view>
		<view class="login_form">
			<view class="login_input">
				<input class="login_tel_input" placeholder="输入电话号码"  placeholder-class="placeholderStyle"/>
				<view class="iconfont icon-cha"></view>
			</view>
			<view class="login_code">
				<input class="login_code_input" placeholder="验证码"/>
				<view class="login_code_send">获取验证码</view>
			</view>
		</view>
		<view class="login_submit">登录/注册</view>
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
	.placeholderStyle{

	}
	.login_logo {
		width: 216.66upx;
		height: 216.66upx;
		margin: 59.72upx auto;
	}
	.login_logo_title {
		width: 138.88upx;
		height: 43.05upx;
		margin: 31.94upx auto;
	}
	.login_logo_title image {
		width: 100%;
		height: 100%;
	}
	.login_logo image {
		width: 100%;
		height: 100%;
	}
	.login_form {
		width: 80%;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		height: 197.22upx;
		justify-content: space-between;
	}
	.login_input {
		width: 100%;
		border: 1.38upx solid #e3e3e3;
		position: relative;
	}
	.login_tel_input {
		height: 83.33upx;
		text-indent: 27.77upx;
		padding-left: 27.77upx;
	}
	.login_code {
		width: 100%;
		display: flex;
		flex-direction: row;
	}
	.login_code_input {
		border: 1.38upx solid #E3E3E3;
		width: 412.5upx;
		height: 83.33upx;
		text-indent: 27.77upx;
		padding-left: 27.77upx;
	}
	.login_code_send {
		flex: 1;
		border: 1.38upx solid #2dabf7;
		border-radius: 4.16upx;
		margin-left: 11.11upx;
		line-height: 83.33upx;
		text-align: center;
		color: #2dabf7;
		font-size: 25upx;
	}
	.login_submit {
		width: 80%;
		height: 83.33upx;
		background: #2dabf7;
		margin: 0 auto;
		line-height: 83.33upx;
		text-align: center;
		color: #FFFFFF;
		margin-top: 30.55upx;
		border-radius: 4.16upx;
	}
	.icon-cha {
		position: absolute;
		right: 27.77upx;
		top: 27.77upx;
	}
</style>
