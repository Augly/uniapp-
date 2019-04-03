<template>
	<view class="content">
		<view class="wrap">
			<view class="moneyGroup">
				<text class="title">￥</text>
				<input
					type="number"
					value=""
					class="input"
					placeholder="可转出到卡21637.28元"
					placeholder-style="font-size: 33.33upx"
				/>
				<text class="all" @click="needAll">全部</text>
			</view>
			<view class="tipGroup">
				<text class="tipTitle">可用余额:</text>
				<text class="tipMintitle">￥23.00</text>
			</view>
			<view class="submitGroup" @click="tx">确认提现</view>
			<!-- 提现规则 -->
			<view class="ruleGroup">
				<view class="ruleHead"><text class="ruleTitle">提现规则</text></view>
				<view class="ruleList">1. 提现申请成功后您的余额会有变动</view>
				<view class="ruleList">2. 不用担心，稍后会有客服联系您，请耐心等待</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	
	methods:{
		//全部提现
		needAll(){
			
		},
		//确认提现
		tx(){
			
		}
	}
};
</script>

<style lang="less" scoped>
@import (reference) '../../../common/public.less';

page {
	@relative();
	@wh100();
	.backcolor(RGBA(247, 247, 247, 1));
}
.content {
	@wh100();
	.boxCent;
	padding: 37.5upx 23.61upx;

	.wrap {
		width: 100%;
		@white();
		.boxCent;
		border-radius: 8.33upx;
		padding: 69.44upx;
		.moneyGroup {
			width: 100%;
			height: 69.44upx;
			padding-bottom: 26px;
			@flex();
			border-bottom: 1px solid rgba(217, 214, 214, 1);
			.title {
				font-size: 69.44upx;
				color: rgba(46, 46, 46, 1);
			}
			.input {
				width: 416.66upx;
				font-size: 69.44upx;
				color: rgba(19, 141, 216, 1);
				caret-color: rgba(19, 141, 216, 1);
			}
			.all {
				font-size: 31.94upx;
				font-weight: 400;
				color: rgba(45, 171, 247, 1);
				margin-left: auto;
			}
		}
		.tipGroup {
			width: 100%;
			margin-top: 20.83upx;
			font-size: 25upx;
			.tipTitle {
				color: rgba(0, 0, 0, 1);
			}
			.tipMintitle {
				color: rgba(45, 171, 247, 1);
			}
		}
		.submitGroup {
			width: 100%;
			height: 80.55upx;
			background: rgba(45, 171, 247, 1);
			border-radius: 9.72upx;
			margin: 0 auto;
			margin-top: 58.33upx;
			text-align: center;
			line-height: 80.55upx;
			font-size: 30.55upx;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);
		}
		//规则
		.ruleGroup {
			width: 100%;
			height: auto;
			.ruleHead {
				width: 100%;
				@flex();
				justify-content: center;
				margin-top: 73.61upx;
				margin-bottom: 5.55upx;
				.ruleTitle {
					font-size: 29.16upx;
					color: rgba(51, 51, 51, 1);
					position: relative;
				}
				.ruleTitle::before {
					content: '- ';
					color: rgba(0, 0, 0, 1);
					// position: absolute;
					font-size: 6.94upx;
					// top: -13.88upx;
					// 					left: 0;
					// right: -13.88upx;
				}
				.ruleTitle::after {
					content: ' -';
					color: rgba(0, 0, 0, 1);
					// position: absolute;
					font-size: 6.94upx;
					// top: 0;
				}
			}
			.ruleList {
				font-size: 27.77upx;
				color: rgba(204, 204, 204, 1);
				margin-top: 27.77upx;
			}
		}
	}
}
</style>
