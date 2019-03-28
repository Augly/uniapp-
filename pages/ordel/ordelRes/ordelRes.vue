<template>
	<view class="content">
		<view class="headWrap">
			<view class="list">
				您归还的订单编号：
				<span>1822342342134</span>
			</view>
			<view class="list">
				最晚归还时间：
				<span>2019.10.02 12:30</span>
			</view>
		</view>
		<view>
			<view class="shopRes">
				<view class="shopLogo"></view>
				<view class="shopDetail">
					<view class="titleGroup">
						<view class="title">
							更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待
						</view>
					</view>
					<view class="money">
						<span class="moneyTitle">押金：</span>
						<span class="moneyRes">￥1726.55</span>
					</view>
					<view class="priceGroup"><span class="date">28.2</span></view>
				</view>
			</view>
			<view class="shopRes">
				<view class="shopLogo"></view>
				<view class="shopDetail">
					<view class="titleGroup">
						<view class="title">
							更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待
						</view>
					</view>
					<view class="money">
						<span class="moneyTitle">押金：</span>
						<span class="moneyRes">￥1726.55</span>
					</view>
					<view class="priceGroup"><span class="date">28.2</span></view>
				</view>
			</view>
		</view>
		<view class="otherGroup">
			<view class="list">
				归还地址：
				<span>北京市常品渠小帅哥给他</span>
			</view>
			<view class="list">
				快递编号：
				<input
					type="text"
					value=""
					placeholder="请填写您的快递单号"
					placeholder-class="plclass"
				/>
			</view>
			<view class="list">
				快递公司：
				<picker range-key="label" :range="logistics" @change="bindPickerChange">
					<view class="pickerWrap">{{ logistics[index].label }}</view>
				</picker>
			</view>
			<view class="sure">确认归还</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			logistics: [
				{
					label: '申1通快递',
					value: 'ST'
				},
				{
					label: '申2通快递',
					value: 'ST'
				},
				{
					label: '申2通快递',
					value: 'ST'
				}
			],
			index: 0
		};
	},
	methods: {
		bindPickerChange: function(e) {
			console.log(e.target.value);
			this.index = e.target.value;
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
.shopRes {
	width: 100%;
	height: auto;
	.boxCent;
	padding: 25upx 15.27upx 27.77upx 15.27upx;
	@white();
	@flexXB();
	border-bottom: 1.38upx solid rgba(230, 230, 230, 1);
	.shopLogo {
		width: 169.44upx;
		height: 169.44upx;
		border-radius: 6.94upx;
		@blue();
	}
	.shopDetail {
		width: 486.11upx;
		height: 169.44upx;
		@flexYB();
		.titleGroup {
			width: 100%;
			@flexXB();
			.title {
				width: 100%;
				height: 72.22upx;
				font-size: 27.77upx;
				font-weight: 400;
				color: rgba(0, 0, 0, 1);
				.twoLine(2);
			}
			.button {
				width: 147.22upx;
				height: 59.72upx;
				line-height: 59.72upx;
				color: rgba(255, 255, 255, 1);
				@center();
				@blue();
				.br(30.55upx);
			}
		}
		.money {
			width: 100%;
			@flex();
			.moneyTitle {
				font-size: 27.77upx;
				color: rgba(0, 0, 0, 1);
			}
			.moneyRes {
				font-size: 26.38upx;
				color: rgba(252, 51, 56, 1);
			}
		}
		.priceGroup {
			width: 100%;
			@flexXB();
			.date {
				font-size: rgba(45, 171, 247, 1);
				color: rgba(45, 171, 247, 1);
				&:before {
					content: '￥';
					.price(rgba(45, 171, 247, 1));
				}
			}
			.number {
				font-size: 30.55upx;
				color: rgba(153, 153, 153, 1);
			}
		}
	}
}
.otherGroup {
	margin-top: 10px;
	.list {
		width: 100%;
		height: 80upx;
		display: flex;
		align-items: center;
		font-size: 30.55upx;
		color: RGBA(153, 153, 153, 1);
		input {
			font-size: 27.77upx;
			color: rgba(0, 0, 0, 1);
			width: 388.88upx;
			height: 68.05upx;
			background: rgba(255, 255, 255, 1);
			border: 1.38upx solid rgba(230, 230, 230, 1);
			border-radius: 1.38upx;
			.boxCent;
			padding: 0upx 20.83upx;
		}
		.pickerWrap {
			font-size: 27.77upx;
			color: rgba(0, 0, 0, 1);
			width: 388.88upx;
			height: 68.05upx;
			background: rgba(255, 255, 255, 1);
			border: 1.38upx solid rgba(230, 230, 230, 1);
			border-radius: 1.38upx;
			.boxCent;
			padding: 0upx 20.83upx;
			text-align: center;
			line-height: 68.05upx;
		}
		.plclass {
			font-size: 27.77upx;
			color: rgba(153, 153, 153, 0.47);
		}
		span {
			color: rgba(51, 51, 51, 1);
		}
	}
}
.sure {
	width: 583.33upx;
	height: 83.33upx;
	background: rgba(45, 171, 247, 1);
	border-radius: 4.16upx;
	margin: 0 auto;
	margin-top: 81.94upx;
	font-size: 33.33upx;
	color: rgba(255, 255, 255, 1);
	text-align: center;
	line-height: 83.33upx;
}
</style>
