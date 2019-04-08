<template>
	<view class="content">
		<order-status status_type="1"></order-status>
		<view class="Htitle">顺丰到付</view>
		<view class="consignee">
			<span class="iconfont icon-weizhi"></span>
			<view class="resGroup">
				<view class="nameGroup">
					<text class="name">收货人：张系鱼</text>
					<text class="tel">1827376453</text>
				</view>
				<view class="addRes">收货地址: 山西省太原市店区平阳路学府街口144号</view>
			</view>
		</view>
		<view class="line">
			<image src="../../../static/line.png"></image>
		</view>
		<view class="timeGroup">
			<view class="time">
				<text class="time_title">开始使用</text>
				<text class="mintitle">2019.03.01</text>
			</view>
			<view class="day">共15天</view>
			<view class="time">
				<text class="time_title">开始使用</text>
				<text class="mintitle">2019.03.01</text>
			</view>
		</view>
		<view class="shopWrap">
			<view class="shopRes" v-for="item in 3">
				<view class="shopLogo">
					<image src="../../../static/thumb_pic_1.jpg" mode="aspectFill"></image>
				</view>
				<view class="shopDetail">
					<view class="titleGroup">
						<view class="title">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
						<view class="button" @click.stop="showPopup()">查看配置清单</view>
					</view>
					<view class="money">
						<span class="moneyTitle">押金：￥222.00</span>
						<span class="moneyRes">￥1726.55</span>
					</view>
					<view class="priceGroup">
						<span class="date">28.2</span>
						<span class="number">x1</span>
					</view>
				</view>
			</view>
		</view>
		<view class="menber_info">
			<view class="info_head" @click.stop="gotoVip()">
				<text class="title">尊敬的猪一戒会员</text>
				<text class="iconfont icon-fangxiang"></text>
			</view>
			<view class="info_body">
				<view class="body_list">
					<text class="title">2020.10.10</text>
					<text class="mintitle">会员到期日期</text>
				</view>
				<view class="body_list">
					<text class="title">7.5折</text>
					<text class="mintitle">当前折扣</text>
				</view>
				<view class="body_list">
					<text class="title">100000</text>
					<text class="mintitle">剩余蓝猪</text>
				</view>
			</view>
		</view>
		<view class="list">
			<text class="list_title">蓝猪抵扣</text>
			<switch checked @change="offGroup()" color="#2dabf7" />
		</view>
		<view class="list">
			<text class="list_title">原租金</text>
			<text class="list_mintitle">￥300.00</text>
		</view>
		<view class="list">
			<text class="list_title">折扣租金</text>
			<text class="list_mintitle">￥300.00</text>
		</view>
		<view class="list">
			<text class="list_title">蓝猪</text>
			<text class="list_mintitle">-3000000</text>
		</view>
		<view class="list">
			<text class="list_title">折扣租金</text>
			<text class="list_mintitle">-￥300.00</text>
		</view>
		<view class="list">
			<text class="list_title">折扣租金</text>
			<text class="list_mintitle">顺丰到付</text>
		</view>
		<view class="itempay">
			<span class="price">共两件商品：</span>
			<span class="money">￥1726.55</span>
		</view>
		<view class="menber_info height80">
			<view class="info_head">
				<text class="title">会员服务</text>
				<text class="title" style="margin-left:auto;margin-right: 12.5upx;">开通会员免费玩</text>
				<text class="iconfont icon-fangxiang"></text>
			</view>
		</view>
		<view class="list">
			<text class="list_title">您的剩余押金额度</text>
			<text class="list_mintitle">￥9000000</text>
		</view>
		<view class="list">
			<text class="list_title">商品押金</text>
			<text class="list_mintitle">￥300.00</text>
		</view>
		<view class="list">
			<text class="list_title">免押金</text>
			<text class="list_mintitle">-￥3000.00</text>
		</view>
		<view class="itempay">
			<span class="price">合计租金计：</span>
			<span class="money">￥1726.55</span>
		</view>
		<view class="borB"></view>
		<view class="buttonGroup">
			<view class="left">
				<text class="title">租金:￥18.2/天</text>
				<text class="title">押金:￥3000</text>
			</view>
			<view class="right" @click.stop="wechatPay()">合计支付(0.00)</view>
		</view>
		<popup-layer ref="popup">
			<view class="popup_top">
				<view class="popup_top_title">
					标配清单
				</view>
				<view class="popup_top_desc">
					<view class="popup_top_desc_thumb">
						<image src="../../../static/thumb_pic_1.jpg"></image>
					</view>
					<view class="popup_top_desc_title">精灵4pxs大疆无人机</view>
				</view>
				<view class="popup_top_list">
					<view class="popup_top_list_item">
						<view>电池</view>
						<view>*1</view>
					</view>
					<view class="popup_top_list_item">
						<view>电池</view>
						<view>*1</view>
					</view>
				</view>
			</view>
			<view class="sumbit" @click.stop="closePopup()">
				我知道了
			</view>
		</popup-layer>
	</view>
</template>

<script>
	import popupLayer from '@/components/popup-layer/popup-layer.vue';
	import orderStatus from '@/components/order_status/order_status.vue';
	export default {
		components: {
			popupLayer,
			orderStatus
		},
		data() {
			return {};
		},
		methods: {
			wechatPay() {
				uni.showToast({
					title: '发起微信支付',
					duration: 2000
				});
				console.log('组织订单参数')
				console.log('发起微信支付')
			},
			offGroup() {
				console.log('切换蓝珠抵扣')
			},
			showPopup() {
				this.$refs.popup.show() // 弹出
			},
			closePopup() {
				this.$refs.popup.close()
			},
			gotoVip() {
				uni.navigateTo({
					url: '/pages/personl/my_privilege/my_privilege'
				})
			}
		}
	};
</script>
<style lang="less">
	@import (reference) '../../../common/public.less';

	.popup_top {
		width: 90%;
		height: auto;
		margin: 0 auto;
	}

	.popup_top_title {
		width: 100%;
		padding: 33.33upx 0;
		text-align: center;
	}

	.popup_top_desc {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.popup_top_desc_thumb {
		width: 84.72upx;
		height: 84.72upx;
		border-radius: 6.94upx;
	}

	.popup_top_desc_thumb image {
		width: 100%;
		height: 100%;
	}

	.popup_top_desc_title {
		margin-left: 20.83upx;
		font-size: 27.77upx;
	}

	.popup_top_list {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 27.77upx 0;
	}

	.popup_top_list_item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 13.88upx 0;
		position: relative;
		text-indent: 27.77upx;
	}

	.popup_top_list_item::before {
		position: absolute;
		content: ' ';
		width: 11.11upx;
		height: 11.11upx;
		border-radius: 11.11upx;
		background: #007AFF;
		left: 0;
		top: 27.77upx;
		display: block;
	}

	.sumbit {
		width: 100%;
		height: 83.33upx;
		background: rgba(45, 171, 247, 1);
		border-radius: 4.16upx;
		text-align: center;
		line-height: 83.33upx;
		font-size: 33.33upx;
		color: rgba(255, 255, 255, 1);
	}

	page {
		@relative();
		@wh100();
		.backcolor(RGBA(255, 255, 255, 1));
	}

	.content {
		@wh100();
		.boxCent;
	}

	.Htitle {
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

	.timeGroup {
		width: 100%;
		height: 217.22upx;
		.boxCent;
		padding: 25upx 61.11upx;
		padding-bottom: 69.44upx;
		border-bottom: 22.22upx solid rgba(245, 245, 245, 1);
		@flexXB();

		.time {
			width: 208.33upx;
			height: 100%;
			@flexYB();

			.time_title {
				font-size: 31.94upx;
				color: rgba(51, 51, 51, 1);
			}

			.mintitle {
				font-size: 29.16upx;
				color: rgba(51, 51, 51, 1);
			}
		}

		.day {
			@flex();
			font-size: 27.77upx;
			color: rgba(153, 153, 153, 1);
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
		}
		.shopLogo image {
			width: 100%;
			height: 100%;
		}

		.shopDetail {
			width: 486.11upx;
			height: 169.44upx;
			@flexYB();

			.titleGroup {
				width: 100%;
				@flexXB();

				.title {
					width: 291.66upx;
					height: 72.22upx;
					font-size: 27.77upx;
					font-weight: 400;
					color: rgba(0, 0, 0, 1);
					.twoLine(2);
				}

				.title100 {
					width: 100%;
				}

				.button {
					width: 172.22upx;
					height: 50upx;
					background: rgba(255, 255, 255, 1);
					border: 1.38upx solid rgba(45, 171, 247, 1);
					border-radius: 25upx;
					text-align: center;
					line-height: 50upx;
					color: rgba(45, 171, 247, 1);
					font-size: 22.22upx;
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

	.menber_info {
		width: 708.33upx;
		height: 180.55upx;
		.boxCent;
		box-shadow: 0upx 0upx 13.88upx rgba(0, 0, 0, 0.2);
		margin: 13.88upx auto;
		background: linear-gradient(90deg, RGBA(216, 179, 123, 1), RGBA(235, 207, 151, 1));
		border-radius: 6.94upx;
		padding: 26.38upx 33.33upx;
		@flexYB();
		align-content: flex-start;

		.info_head {
			width: 100%;
			height: auto;
			font-size: 23.61upx;
			color: rgba(133, 94, 43, 1);
			@flexXB();

			.icon-fangxiang {
				font-size: 23.61upx;
			}
		}

		.info_body {
			width: 100%;
			height: 83.33upx;
			@flexXB();

			.body_list {
				height: 100%;
				@flexYB();

				.title {
					font-size: 34.72upx;
					color: rgba(255, 255, 255, 1);
				}

				.mintitle {
					font-size: 20.83upx;
					color: rgba(134, 94, 39, 1);
				}
			}
		}
	}

	.height80 {
		height: 111.11upx;
		justify-content: center;

		.info_head {
			align-items: flex-end;
		}
	}

	.list {
		width: 709.72upx;
		height: 97.22upx;
		.boxCent;
		border-bottom: 1.38upx solid rgba(241, 241, 241, 1);
		margin: 0 auto;
		@flexXB();

		.list_title {
			font-size: 25upx;
			color: rgba(0, 0, 0, 1);
		}

		.list_mintitle {
			font-size: 25upx;
			color: rgba(153, 153, 153, 1);
		}
	}

	.itemTitle {
		width: 100%;
		height: 83.33upx;
		.boxCent;
		padding: 0px 27.77upx;
		border-bottom: 1.38upx solid rgba(230, 230, 230, 1);
		@flexXB();

		.date {
			font-size: 22upx;
			color: rgba(102, 102, 102, 1);
		}

		.type {
			font-size: 26.38upx;
			color: rgba(49, 146, 255, 1);
		}
	}

	.itempay {
		.itemTitle;
		@flexXR();

		.price {
			font-size: 26.38upx;
			color: rgba(153, 153, 153, 1);
		}

		.money {
			font-size: 26.38upx;
			color: rgba(252, 51, 56, 1);
		}
	}

	.borB {
		width: 750upx;
		height: 22.22upx;
		background: rgba(245, 245, 245, 1);
		margin-bottom: 97.22upx;
	}

	.buttonGroup {
		width: 100%;
		height: 97.22upx;
		background-color: rgba(255, 255, 255, 1);
		@flexBottom();
		@flexXB();
		z-index: 10;

		.left {
			width: 50%;
			height: 100%;
			.boxCent;
			padding: 16.66upx 0upx;
			@flexYB();

			.title {
				font-size: 25upx;
			}

			.mintitle {
				font-size: 25upx;
			}
		}

		.right {
			width: 50%;
			height: 100%;
			.boxCent;
			padding: 16.66upx 0upx;
			color: rgba(245, 245, 245, 1);
			font-size: 31.94upx;
			@flex();
			justify-content: center;
			background-color: rgba(45, 171, 247, 1);
		}
	}
</style>
