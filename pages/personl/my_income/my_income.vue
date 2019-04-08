<template>
	<view class="content">
		<view class="headContent">
			<view class="headTop">
				<view class="left">
					<text class="left_title">累计获得收益(元)</text>
					<view class="left_center">
						5416.0
					</view>
					<text class="left_bottom">您已邀请了3人，成功注册1人</text>
				</view>
				<view class="right">
					<view class="button tx" @click.stop="goCash()">
						去提现
					</view>
					<view class="button share">
						邀请好友
					</view>
				</view>
			</view>
			<view class="headBottom">
				<view class="tabList after" :class="tabIndex==index?'tabActive':''" v-for="(item,index) in tabList" :key="'tab'+index" @click.stop="selectChange(index)">
					{{item.label}}
				</view>
			</view>
		</view>
		<view class="listWrap">
			<view class="list" v-for="item in 15">
				<view class="item">
					<text class="title">邀请好友注册</text>
					<text class="date">2018-07-12 08:00</text>
				</view>
				<view class="item detail">
					- 1.58
				</view>
				<view class="item type">
					<text class="title">邀请成功</text>
				</view>
			</view>
		</view>
		<uni-load-more v-show="isLoading" status="loading" :show-icon="true"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				tabIndex:0,
				tabList:[{
					label:'收入',
					value:0
				},{
					label:'支出',
					value:1
				}],
				isLoading: false
			};
		},
		onReachBottom: function() {
			//触底的时候请求数据，即为上拉加载更多
			//为了更加清楚的看到效果，添加了定时器
			console.log('触发上滑加载')
			this.getListMoreAjax()
		},
		methods:{
			selectChange(index){
				this.tabIndex=index
			},
			goCash() {
				uni.navigateTo({
					url: '/pages/ordel/txsq/txsq'
				})
			},
			getListMoreAjax() {
				uni.showNavigationBarLoading(); //显示加载动画
				let _this = this
				this.isLoading = true
				// 模拟上滑加载，这里启用定时器
				setTimeout(function() {
					_this.isLoading = false
			        uni.hideNavigationBarLoading();//关闭加载动画
					console.log('加载完毕')
				}, 2000)
			}
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
		padding-top: 397.22upx;
	}

	.headContent {
		position: fixed;
		top: 61.11upx;
		width: 100%;
		height: 397.22upx;
		background: linear-gradient(90deg, rgba(82, 194, 255, 1), rgba(80, 184, 240, 1));

		.headTop {
			width: 100%;
			height: 305.55upx;
			.boxCent;
			@flexXB();
			border-bottom: 1.38upx solid rgba(255, 255, 255, 0.27);
			padding: 62.5upx 29.16upx 31.94upx 29.16upx;

			.left {
				width: 416.66upx;
				height: 100%;
				@flexYB();
				align-items: flex-start;

				.left_title {
					font-size: 33.33upx;
					color: rgba(255, 255, 255, 1);
				}

				.left_center {
					font-size: 80.55upx;
					color: rgba(255, 255, 255, 1);
				}

				.left_center::before {
					content: '￥';
					font-size: 52.77upx;
				}

				.left_bottom {
					font-size: 22.22upx;
					color: rgba(255, 255, 255, 0.8);
				}
			}

			.right {
				width: 180.55upx;
				height: 100%;
				@flexYB();

				.button {
					width: 180.55upx;
					height: 93.05upx;
					line-height: 93.05upx;
					text-align: center;
					font-size: 33.33upx;
					border-radius: 6.94upx;
				}

				.tx {
					background: rgba(255, 255, 255, 1);
					color: rgba(45, 171, 247, 1);
				}

				.share {
					background: rgba(120, 215, 206, 1);
					color: rgba(255, 255, 255, 1);
				}
			}
		}

		.headBottom {
			width: 100%;
			height: 91.66upx;
			@flexXB();

			.tabList {
				width: 50%;
				height: 100%;
				position: relative;
				color: rgba(255, 255, 255, 1);
				font-size: 30.55upx;
				text-align: center;
				line-height: 91.66upx;
			}

			.tabActive {}

			.tabActive::before {
				content: '';
				width: 131.94upx;
				height: 4.16upx;
				background-color: rgba(255, 255, 255, 1);
				@bottom();
				bottom: 4.16upx;

			}

			.after {
				border-right: 1.38upx solid rgba(255, 255, 255, 0.27);
			}

			.before {
				border-left: 1.38upx solid rgba(255, 255, 255, 0.27);
			}
		}
	}

	.listWrap {
		width: 100%;
		height: auto;
		.boxCent;
		padding: 0upx 22.22upx;

		.list {
			width: 100%;
			height: 138.88upx;
			.boxCent;
			@flexXB();
			padding: 20.83upx 0upx;
			border-bottom: 1.38upx solid rgba(243, 243, 243, 1);

			.item {
				width: 33.33%;
				height: 100%;
				@flexYB();

				.title {
					font-size: 33.33upx;
					color: rgba(0, 0, 0, 1);
				}

				.date {
					font-size: 25upx;
					color: rgba(136, 136, 136, 1);

				}

			}

			.detail {
				font-size: 45.83upx;
				color: rgba(153, 153, 153, 1);
				justify-content: center;
			}

			.type {
				text-align: right;
				justify-content: center;
				align-items: flex-end;

				.title {
					font-size: 33.33upx;
					color: rgba(0, 0, 0, 1);
				}
			}
		}
	}
</style>
