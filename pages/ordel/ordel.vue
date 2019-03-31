<template>
	<view class="content">
		<view class="">
			<scroll-view scroll-x class="headWrap" :scroll-into-view="'s'+activeIndex" scroll-with-animation='true'>
				<view class="headList" :id="'s'+index" :class="activeIndex == index ? 'active' : ''" v-for="(item, index) in tabList" :key="index"
				 @click="getIndex(index)">
					{{ item.title }}({{ item.value }})
				</view>
			</scroll-view>
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
								<span class="type">使用中</span>
							</view>
							<view class="shopRes">
								<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
								<view class="shopDetail">
									<view class="titleGroup">
										<view class="title title100">
											更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网
											通4G 双卡双待
										</view>
										<!-- <view class="button" @click.stop="tologi">查看物流</view> -->
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
								<view class="cendel_ordel">取消订单</view>
								<view class="button">去支付</view>
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
								<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
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
								<span class="type">使用中</span>
							</view>
							<view class="shopRes">
								<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
								<view class="shopDetail">
									<view class="titleGroup">
										<view class="title title100">
											更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网
											通4G 双卡双待
										</view>
										<!-- <view class="button" @click.stop="tologi">查看物流</view> -->
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
								<view class="goOn" @click.stop="toTop">续租</view>
								<view class="button">去归还</view>
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
								<span class="type">已归还</span>
							</view>
							<view class="shopRes">
								<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
								<view class="shopDetail">
									<view class="titleGroup">
										<view class="title title100">
											更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网
											通4G 双卡双待
										</view>
										<!-- <view class="button" @click.stop="tologi">查看物流</view> -->
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
								<span class="type">已取消</span>
							</view>
							<view class="shopRes">
								<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
								
								<view class="shopDetail">
									<view class="titleGroup">
										<view class="title title100">
											更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网
											通4G 双卡双待
										</view>
										<!-- <view class="button" @click.stop="tologi">查看物流</view> -->
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
		<popup-layer ref="popup" :direction="direction">
			<view class="zidingyi">
				<view class="top">
					<view class="title">
						续租
					</view>
					<span class="moneyTitle">请选择续租天数，每个订单之可续租一次</span>
					<view>
						<span class="moneyTitle">
							续租价格：</span>
						<span class="moneyRes">￥1726.55</span>
					</view>
					<view class="tabWrap">
						
						<view class="tabList" :class="popupIndex==index?'tabactive':''" v-for="(item,index) in popup" :key="'popup'+index" @click.stop="selectDate(index)">
							{{item.label}}
						</view>
						
					</view>
					<text class="tip">*续租不可参与折扣*</text>
				</view>
				<view class="sumbit" @click="sure">
					确定续租(￥23.50)
				</view>
			</view>
		</popup-layer>
	</view>
</template>

<script>
	import popupLayer from '@/components/popup-layer/popup-layer.vue';
	export default {
		data() {
			return {
				direction: 'top',
				ani: false,
				tabList: [{
						title: '待付款',
						value: '12'
					},
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
					},
					{
						title: '已取消',
						value: '12'
					}
				],
				activeIndex: 0,
				height: 0,
				popupIndex:0,
				popup:[{
					label:'1天',
					vaue:1
				},{
					label:'7天',
					vaue:7
				},{
					label:'15天',
					vaue:15
				},{
					label:'30天',
					vaue:30
				},{
					label:'90天',
					vaue:90
				},{
					label:'180天',
					vaue:180
				}  ]
			};
		},
		created() {
			uni.getSystemInfo({
				success: res => {
					this.height = res.windowHeight;
				}
			});
		},
		components: {
			popupLayer
		},
		methods: {
			//查看物流
			tologi() {
				uni.navigateTo({
					url: '/pages/logistics/logistics',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			//选择续租时间
			selectDate(index){
				this.popupIndex=index
			},
			//选择订单状态
			changeCurrent(e) {
				this.activeIndex = e.detail.current
				uni.showLoading({
					title:'正在加载中...',
					success: () => {
						setTimeout(()=>{
							uni.hideLoading()
						},1000)
					}
				})
			},
			toTop() {
				this.$refs.popup.show()
			},
			//确定续租
			sure(){
				this.$refs.popup.close()
			},
			lookRes() {
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

<style lang="less">
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
		white-space: nowrap;
		// flex-wrap: nowrap;
		.headList {
			.setWh(250upx,  97.22upx);
			font-size: 30.55upx;
			color: rgba(102, 102, 102, 1);
			@relative();
			@center();
			line-height: 97.22upx;
			display: inline-block;
			white-space: nowrap;
			// @flex();
			// justify-content: center;
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

	.button {
		display: inline-block;
		.boxCent;
		padding: 0upx 20.83upx;
		height: 59.72upx;
		line-height: 59.72upx;
		color: rgba(255, 255, 255, 1);
		@center();
		@blue();
		.br(30.55upx);
	}

	.goOn {
		.button;
		background-color: rgba(120, 215, 206, 1);
		margin-right: 19.44upx;
	}
	.cendel_ordel{
		.button;
		background-color: rgba(210, 210, 210, 1);
		margin-right: 19.44upx;
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
						// @blue();
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

	.zidingyi {
		width: 100%;
		height: auto;

		.top {
			width: 100%;
			height: auto;
			.boxCent;
			border-bottom: 16upx solid rgba(245, 245, 245, 1);
			padding: 36.11upx;
			@white();

			.title {
				width: 100%;
				height: 60px;
				@center();
				line-height: 60px;
				font-size: 33.33upx;
				font-weight: bolder;
				color: rgba(0, 0, 0, 1);
			}

			.moneyTitle {
				font-size: 27.77upx;
				color: rgba(0, 0, 0, 1);
			}

			.moneyRes {
				font-size: 26.38upx;
				color: rgba(45, 171, 247, 1);
			}

			.tabWrap {
				width: 100%;
				height: auto;
				overflow: hidden;
				margin-top: 30.55upx;
			}

			.tabList {
				width: 150upx;
				height: 81.94upx;
				background: rgba(210, 210, 210, 0.75);
				border-radius: 6.94upx;
				float: left;
				color: rgba(255,255,255,1);
				margin-right: 19.44upx;
				margin-bottom: 20.83upx;
				text-align: center;
				line-height: 81.94upx;
			}
			.tabactive{
				background-color: rgba(45, 171, 247, 1);
			}
			.tip {
				color: rgba(255, 0, 0, 1);
				font-size: 25upx;
			}
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
	}
</style>
