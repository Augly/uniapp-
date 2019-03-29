<template>
	<view class="content">
		<view class="title">
			顺丰到付
		</view>
		<view class="consignee">
			<span class="iconfont icon-weizhi"></span>
			<view class="resGroup">
				<view class="nameGroup">
					<text class="name">收货人：张系鱼 </text>
					<text class="tel">1827376453</text>
				</view>
				<view class="addRes">
					收货地址: 山西省太原市店区平阳路学府街口144号
				</view>
			</view>
		</view>
		<view class="line">
			<image src="../../../static/line.png"></image>
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

	.title {
		width: 100%;
		height: 83.33upx;
		.boxCent;
		@flex();
		justify-content: center;
		font-size: 31.94upx;
		color: rgba(51, 51, 51, 1);
		border-bottom: 1.38upx solid rgba(230, 230, 230, 1);
	}

	.consignee {
		width: 100%;
		height: auto;
		.boxCent;
		padding: 33.33upx 25upx;
		@flexXB();
		align-items: flex-start;
	}

	.icon-weizhi {
		line-height: 34.72upx;
		font-size: 22.22upx;
		color: RGBA(163, 163, 163, 1);
	}

	.resGroup {
		width: 666.66upx;
		height: auto;

		.nameGroup {
			width: 100%;
			height: auto;
			@flexXB();
			font-size: 26.38upx;
			color: rgba(51, 51, 51, 1);

			.name {}

			.tel {}
		}

		.addRes {
			font-size: 23.61upx;
			color: rgba(51, 51, 51, 1);
			margin-top: 20.83upx;
		}
	}

	.line {
		width: 100%;
		height: 2.77upx;
		image {
			width: 100%;
			height: 100%;
			display: block;
		}
	}
</style>
