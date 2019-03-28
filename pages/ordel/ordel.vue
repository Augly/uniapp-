<template>
	<view class="content">
		<view class="headWrap">
			<view
				class="headList"
				:class="activeIndex == index ? 'active' : ''"
				v-for="(item, index) in tabList"
				:key="index"
				@click="getIndex(index)"
			>
				{{ item.title }}({{ item.value }})
			</view>
		</view>
		<swiper :duration="300" class="swiperWrap" :current="activeIndex" @change="changeCurrent">
			<swiper-item>
				<view class="swiper-item">
					<view class="listItem" @click="lookRes">
						<view class="itemHead">
							<span class="ordelTitle">订单编号：20190324122159000</span>
						</view>
						<view class="itemContent">
							<view class="itemTitle">
								<span class="date">2019.03.14-2019.04.25 (43天)</span>
								<span class="type">已预约</span>
							</view>
							<view class="shopRes">
								<view class="shopLogo"></view>
								<view class="shopDetail">
									<view class="titleGroup">
										<view class="title">
											更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网
											通4G 双卡双待
										</view>
										<view class="button" @click.stop="tologi">查看物流</view>
									</view>
									<view class="money">
										<span class="moneyTitle">押金：</span>
										<span class="moneyRes">￥1726.55</span>
									</view>
									<view class="priceGroup">
										<span class="date">28.2</span>
										<span class="number">x1</span>
									</view>
								</view>
							</view>
							<view class="itempay">
								<span class="price">已支付：</span>
								<span class="money">￥1726.55</span>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="listItem" @click="lookRes">
						<view class="itemHead">
							<span class="ordelTitle">订单编号：20190324122159000</span>
						</view>
						<view class="itemContent">
							<view class="itemTitle">
								<span class="date">2019.03.14-2019.04.25 (43天)</span>
								<span class="type">已预约</span>
							</view>
							<view class="shopRes">
								<view class="shopLogo"></view>
								<view class="shopDetail">
									<view class="titleGroup">
										<view class="title">
											更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网
											通4G 双卡双待
										</view>
										<view class="button" @click.stop="tologi">查看物流</view>
									</view>
									<view class="money">
										<span class="moneyTitle">押金：</span>
										<span class="moneyRes">￥1726.55</span>
									</view>
									<view class="priceGroup">
										<span class="date">28.2</span>
										<span class="number">x1</span>
									</view>
								</view>
							</view>
							<view class="itempay">
								<span class="price">已支付：</span>
								<span class="money">￥1726.55</span>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="listItem">
						<view class="itemHead">
							<span class="ordelTitle">订单编号：20190324122159000</span>
						</view>
						<view class="itemContent">
							<view class="itemTitle">
								<span class="date">2019.03.14-2019.04.25 (43天)</span>
								<span class="type">已预约</span>
							</view>
							<view class="shopRes">
								<view class="shopLogo"></view>
								<view class="shopDetail">
									<view class="titleGroup">
										<view class="title">
											更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网
											通4G 双卡双待
										</view>
										<view class="button" @click.stop="tologi">查看物流</view>
									</view>
									<view class="money">
										<span class="moneyTitle">押金：</span>
										<span class="moneyRes">￥1726.55</span>
									</view>
									<view class="priceGroup">
										<span class="date">28.2</span>
										<span class="number">x1</span>
									</view>
								</view>
							</view>
							<view class="itempay">
								<span class="price">已支付：</span>
								<span class="money">￥1726.55</span>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabList: [
				{
					title: '已预约',
					value: '12'
				},
				{
					title: '使用中',
					value: '12'
				},
				{
					title: '已归还',
					value: '12'
				}
			],
			activeIndex: 0,
			height: 0
		};
	},
	created() {
		uni.getSystemInfo({
			success: res => {
				this.height = res.windowHeight;
			}
		});
	},
	methods: {
		tologi() {
			uni.navigateTo({
				url: '/pages/logistics/logistics',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		changeCurrent(e){
			console.log(e)
			this.activeIndex=e.detail.current
		},
		lookRes(){
			uni.navigateTo({
				url: '/pages/ordel/ordelRes/ordelRes',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		getIndex(index) {
			this.activeIndex = index;
		}
	}
};
</script>

<style lang="less" scoped>
@import (reference) '../../common/public.less';
page {
	@relative();
	@wh100();
	.backcolor(RGBA(247, 247, 247, 1));
}
.content {
	@wh100();
}
.headWrap {
	position: fixed;
	.setWh(100%, 97.22upx);
	.backcolor(rgba(255, 255, 255, 1));
	@flex();
	.headList {
		.setWh(33.33%, 100%);
		font-size: 30.55upx;
		color: rgba(102, 102, 102, 1);
		@relative();
		@center();
		@flex();
		justify-content: center;
	}

	.active {
		color: rgba(45, 171, 247, 1);
		&::after {
			width: 126.38upx;
			height: 4.16upx;
			content: '';
			@blue();
			@bottom();
		}
	}
}

.swiperWrap {
	@wh100();
	.boxCent;
	padding-top: 97.22upx;
}

.swiper-item {
	@wh100();
	.boxCent();
	padding: 0px 13.88upx;
	.listItem {
		.setWh(100%, auto);
		.itemHead {
			width: 100%;
			height: 83.33upx;
			.backcolor(RGBA(247, 247, 247, 1));
			@flex();
			.ordelTitle {
				height: 38.88upx;
				@ordelColor();
				.br(19.44upx);
				padding: 0upx 25upx;
				font-size: 25upx;
				color: rgba(255, 255, 255, 1);
				line-height: 38.88upx;
			}
		}
		.itemContent {
			width: 100%;
			height: auto;
			@white();
			.br(6.94upx);
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
							width: 291.66upx;
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
		}
	}
}
</style>
