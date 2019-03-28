<template>
	<view class="content">
		<view class="headWrap">
			<view class="list">
				订单编号：<span>1822342342134 </span>
			</view>
			<view class="list">
				物流编号：<span>1822342342134</span>
			</view>
			<view class="list">
				快递公司：<span>顺丰快递</span>
			</view>
		</view>
		<view class="example">
			<uni-steps :data="list"
			 direction="column" :active="2" :active-color="activeColor">
			</uni-steps>
		</view>

	</view>
</template>

<script>
	import uniSteps from "@/components/uni-steps/uni-steps.vue"
	export default {
		components: {
			uniSteps
		},
		data() {
			return {
				activeColor: 'rgba(45, 171, 247, 1)',
				list:[{
					title:'运输到达【北京】 北京市南山区科技园南区R2-B三楼',
					desc:'2018-07-14 08:15:42'
				},{
					title:'运输到达【北京】 北京市南山区科技园南区R2-B三楼',
					desc:'2018-07-14 08:15:42'
				},{
					title:'运输到达【北京】 北京市南山区科技园南区R2-B三楼',
					desc:'2018-07-14 08:15:42'
				},{
					title:'运输到达【北京】 北京市南山区科技园南区R2-B三楼',
					desc:'2018-07-14 08:15:42'
				},]
			};
		}
	}
</script>

<style lang="less">
	@import (reference) '../../common/public.less';
	page {
		@relative();
		@wh100();
		.backcolor(RGBA(255, 255, 255, 1));
	}
	.content {
		box-sizing: border-box;

		padding: 0upx 20.83upx;
	}

	.headWrap {
		width: 100%;
		height: auto;
		border-bottom: 1.38upx solid rgba(227, 227, 227, 1);
		padding-bottom: 27.77upx;

		.list {
			width: 100%;
			height: 69.44upx;
			display: flex;
			align-items: center;
			font-size: 30.55upx;
			color: RGBA(153, 153, 153, 1);

			span {
				color: rgba(51, 51, 51, 1);
			}
		}
	}
</style>
