<template>
	<view class="content">
		<view class="list">
			<text class="listHead">真实姓名：</text>
			<input type="text" value="" placeholder="请输入姓名" />
		</view>
		<view class="list">
			<text class="listHead">电话号码：</text>
			<input type="number" value="" placeholder="请输入电话号码" />
		</view>
		<view class="list">
			<text class="listHead">身份证号：</text>
			<input type="idcard" value="" placeholder="请输入身份证号" />
		</view>
		<view class="list">
			<text class="listHead">验证码：</text>
			<view class="leftwrap">
				<input type="number" value="" placeholder="验证码" class="codeIpt" />
				<view class="code" @click="getCode">{{ code }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			code: '获取验证码',
			timeGroup: null
		};
	},
	methods: {
		getCode() {
			if (this.code == '获取验证码') {
				this.code = 60;
				let st = setInterval(() => {
					let n = this.code--;
					if (n == 0) {
						this.code = '获取验证码';
						clearInterval(st);
					} else {
						n--;
						this.code = n;
					}
				}, 1000);
			}
		}
	}
};
</script>

<style lang="less">
@import (reference) '../../../common/public.less';

page {
	@relative();
	@wh100();
	.backcolor(RGBA(255, 255, 255, 1));
}

.content {
	@wh100();
}

.list {
	width: 100%;
	height: 94.44upx;
	border-bottom: 1.38upx solid rgba(230, 230, 230, 1);
	.boxCent;
	@flexXB();
	padding: 0upx 25upx;

	.listHead {
		width: 152.77upx;
		height: auto;
		font-size: 30.55upx;
		color: rgba(51, 51, 51, 1);
	}

	input {
		width: 527.77upx;
		height: 100%;
		font-size: 30.55upx;
		color: rgba(51, 51, 51, 1);
	}

	.leftwrap {
		width: 527.77upx;
		height: 100%;
		@flexXB();

		.code {
			width: 168.05upx;
			height: 58.33upx;
			background: rgba(45, 171, 247, 1);
			border-radius: 4.16upx;
			font-size: 27.77upx;
			color: rgba(255, 255, 255, 1);
			text-align: center;
			line-height: 58.33upx;
		}

		.codeIpt {
			width: 416.66upx;
		}
	}
}
</style>
