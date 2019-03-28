<template>
	<view class="content">
		<!-- 搜索组件 -->
		<view class="inputGroup">
			<text class="iconfont icon-sousuo"></text>
			<input type="text" value="" placeholder="搜索" disabled/>
		</view>
		<!-- 轮播图组件 -->
		<view class="imageGroup">
			<swiper
				class="swiper"
				previous-margin="9px"
				next-margin="9px"
				:indicator-dots="indicatorDots"
				:autoplay="autoplay"
				:interval="interval"
				:duration="duration"
				:indicator-color="indicatorColor"
				:indicator-active-color="activeColor"
				:circular="circular"
			>
				<swiper-item><view class="swiper-item uni-bg-red">A</view></swiper-item>
				<swiper-item><view class="swiper-item uni-bg-green">B</view></swiper-item>
				<swiper-item><view class="swiper-item uni-bg-blue">C</view></swiper-item>
			</swiper>
		</view>
		<!-- 0元体验 -->
		<view class="zeroExperience">
			<view class="zero-title">
				<view class="left">
					<image src="../../static/43.png" mode=""></image>
					<span>0元体验</span>
				</view>
				<view class="right">
					<span class="active">相机</span>
					<span>洗脸仪</span>
				</view>
			</view>
			<view class="zeroConter"></view>
			<view class="zeroMintitle">
				<block>
					<text class="iconfont icon-shuliang"></text>
					<span>数量：7</span>
				</block>
				<block>
					<text class="iconfont icon-zuqizhong"></text>
					<span>租期：7日</span>
				</block>
				<block>
					<text class="iconfont icon-jiage"></text>
					<span>价格：￥0.00/日</span>
				</block>
			</view>
		</view>
		<!-- 邀请好友 -->
		<view class="shareFriends">
			<view class="left">
				<span class="title">邀请有礼</span>
				<span class="mintitle">邀请好友赢现金</span>
			</view>
			<view class="right">
				<span class="title">邀请</span>
				<image src="../../static/53.png" mode="" class="img"></image>
			</view>
		</view>
		<!--listOne-->
		<view class="listOne">
			<view class="listTitle">
				<span class="title">酷玩娱乐</span>
				<span class="more">查看更多</span>
				<image src="../../static/53.png" mode=""></image>
			</view>
			<view class="listContent">
				<scroll-view class="scrollWrap" scroll-x="true">
					<view class="listWrap">
						<view class="imgWrap"></view>
						<view class="listRes">
							<span class="title">Bose蓝牙耳机</span>
							<span class="price">￥20.00/天</span>
						</view>
					</view>
					<view class="listWrap">
						<view class="imgWrap"></view>
						<view class="listRes">
							<span class="title">Bose蓝牙耳机</span>
							<span class="price">￥20.00/天</span>
						</view>
					</view>
					<view class="listWrap">
						<view class="imgWrap"></view>
						<view class="listRes">
							<span class="title">Bose蓝牙耳机</span>
							<span class="price">￥20.00/天</span>
						</view>
					</view>
					<view class="listWrap">
						<view class="imgWrap"></view>
						<view class="listRes">
							<span class="title">Bose蓝牙耳机</span>
							<span class="price">￥20.00/天</span>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="listOne">
			<view class="listTitle">
				<span class="title">酷玩娱乐</span>
				<span class="more">查看更多</span>
				<image src="../../static/53.png" mode=""></image>
			</view>
			<view class="listContent">
				<scroll-view class="scrollWrap" scroll-x="true">
					<view class="listWrap">
						<view class="imgWrap"></view>
						<view class="listRes">
							<span class="title">Bose蓝牙耳机</span>
							<span class="price">￥20.00/天</span>
						</view>
					</view>
					<view class="listWrap">
						<view class="imgWrap"></view>
						<view class="listRes">
							<span class="title">Bose蓝牙耳机</span>
							<span class="price">￥20.00/天</span>
						</view>
					</view>
					<view class="listWrap">
						<view class="imgWrap"></view>
						<view class="listRes">
							<span class="title">Bose蓝牙耳机</span>
							<span class="price">￥20.00/天</span>
						</view>
					</view>
					<view class="listWrap">
						<view class="imgWrap"></view>
						<view class="listRes">
							<span class="title">Bose蓝牙耳机</span>
							<span class="price">￥20.00/天</span>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="listTwo">
			<view class="listTitle">
				<span class="title">热门产品</span>
				<span class="more">查看更多</span>
				<image src="../../static/53.png" mode=""></image>
			</view>
			<view class="listContent">
				<view class="listWrap">
					<view class="imgWrap"></view>
					<view class="listRes">
						<span class="title">Bose蓝牙耳机</span>
						<span class="price">￥20.00/天</span>
					</view>
				</view>
				<view class="listWrap">
					<view class="imgWrap"></view>
					<view class="listRes">
						<span class="title">Bose蓝牙耳机</span>
						<span class="price">￥20.00/天</span>
					</view>
				</view>
				<view class="listWrap">
					<view class="imgWrap"></view>
					<view class="listRes">
						<span class="title">Bose蓝牙耳机</span>
						<span class="price">￥20.00/天</span>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			indicatorColor: 'rgba(255,255,255,0.6)',
			activeColor: 'rgba(255,255,255,1)',
			circular: true
		};
	},
	onLoad() {},
	methods: {
		handleChange() {}
	}
};
</script>

<style lang="less" scoped>
.content {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: rgba(255, 255, 255, 1);
}
::-webkit-scrollbar {
	display: none;
}
// 搜索组件样式
.inputGroup {
	width: 704.16upx;
	height: 59.72upx;
	background: rgba(239, 239, 239, 1);
	border-radius: 8.33upx;
	margin: 0 auto;
	margin-top: 41.66upx;
	box-sizing: border-box;
	padding: 0upx 15.27upx;
	display: flex;
	align-items: center;
	justify-content: space-between;

	image {
		width: 26.38upx;
		height: 26.38upx;
	}

	input {
		width: 625upx;
		font-size: 27.77upx;
		color: #989898;
		text-align: left;
	}
}

// 3D轮播样式
.imageGroup {
	width: 100%;
	height: 322.22upx;
	margin: 41.66upx 0upx;

	.swiper {
		width: 100%;
		height: 100%;

		.swiper-item {
			border-radius: 9.72upx;
			width: 100%;
			height: 100%;
		}
	}
}

// 0元体验
.zeroExperience {
	width: 100%;
	height: auto;
	box-sizing: border-box;
	padding: 0upx 22.22upx;

	.zero-title {
		width: 100%;
		display: flex;
		align-items: center;

		.left {
			display: flex;
			align-items: center;
			width: 50%;

			image {
				width: 30.55upx;
				height: 30.55upx;
			}

			span {
				margin-left: 16.66upx;
			}

			font-size: 34.72upx;
			justify-content: flex-start;
		}

		.right {
			width: 50%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			font-size: 27.77upx;

			span {
				margin-left: 66.66upx;
			}

			.active {
				color: rgba(45, 171, 247, 1);
			}
		}
	}

	.zeroConter {
		width: 100%;
		height: 280.55upx;
		border-radius: 9.72upx;
		background-color: aliceblue;
		margin: 27.77upx 0upx;
	}
	.zeroMintitle {
		width: 100%;
		display: flex;
		align-items: center;
		.iconfont{
			font-size: 25upx !important;
			color: rgba(102, 102, 102, 1);
			display: block;
			line-height: 27.77upx;
		}
		span {
			font-size: 25upx;
			color: rgba(102, 102, 102, 1);
			margin-left: 11.11upx;
			margin-right: 61.11upx;
		}
	}
}
// 邀请有礼物
.shareFriends {
	width: 705.55upx;
	height: 141.66upx;
	margin: 0 auto;
	margin-top: 27.77upx;
	margin-bottom: 27.77upx;
	background-color: #ffffff;
	border-radius: 13.88upx;
	box-shadow: 0upx 0upx 27.77upx #f1f1f1;
	box-sizing: border-box;
	padding: 30.55upx 27.77upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.left {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		.title {
			font-size: 23.61upx;
			font-weight: 400;
			color: rgba(21, 21, 21, 1);
		}
		.mintitle {
			font-size: 20.83upx;
			font-weight: 400;
			color: rgba(181, 181, 181, 1);
		}
	}
	.right {
		height: 100%;
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		.title {
			font-size: 26.38upx;
			font-weight: 400;
			color: rgba(237, 217, 166, 1);
		}
		.img {
			width: 12.5upx;
			height: 22.22upx;
			margin-left: 27.77upx;
		}
	}
}

//列表组件1
.listOne {
	width: 100%;
	box-sizing: border-box;
	padding:  27.77upx 0upx 0upx 22.22upx;
	.listTitle {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 0upx 22.22upx 0upx 0upx;
		display: flex;
		align-items: center;
		margin: 27.77upx 0upx;
		justify-items: flex-end;
		.title {
			font-size: 34.72upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			margin-right: auto;
		}
		.more {
			font-size: 25upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(153, 153, 153, 1);
		}
		image {
			width: 13.88upx;
			height: 25upx;
			margin-left: 13.88upx;
		}
	}
	.listContent {
		width: 100%;
		height: auto;
		.scrollWrap {
			white-space: nowrap;
			width: 100%;
		}
		.listWrap {
			display: inline-block;
			white-space: nowrap;
			width: 204.16upx;
			// height: 312.5upx;
			margin-right: 15.27upx;
			.imgWrap {
				width: 100%;
				height: 204.16upx;
				background-color: red;
			}
			.listRes {
				width: 100%;
				height: 83.33upx;
				margin-top: 25upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.title {
					font-size: 31.94upx;
					font-weight: 400;
					color: rgba(0, 0, 0, 1);
				}
				.price {
					font-size: 25upx;
					font-weight: 400;
					color: rgba(45, 171, 247, 1);
				}
			}
		}
	}
}
//列表组件2
.listTwo{
	width: 100%;
	box-sizing: border-box;
	padding:  27.77upx 0upx 0upx 22.22upx;
	.listTitle {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 0upx 22.22upx 0upx 0upx;
		display: flex;
		align-items: center;
		margin: 27.77upx 0upx;
		justify-items: flex-end;
		.title {
			font-size: 34.72upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			margin-right: auto;
		}
		.more {
			font-size: 25upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(153, 153, 153, 1);
		}
		image {
			width: 13.88upx;
			height: 25upx;
			margin-left: 13.88upx;
		}
	}
	.listContent{
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 0upx 22.22upx 0upx 0upx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.listWrap{
			width: 343.05upx;
			margin-bottom: 27.77upx;
			.imgWrap {
				width: 100%;
				height: 344.44upx;
				background-color: red;
			}
				.listRes {
						width: 100%;
						height: 83.33upx;
						margin-top: 25upx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
			
						.title {
							font-size: 31.94upx;
							font-weight: 400;
							color: rgba(0, 0, 0, 1);
						}
						.price {
							font-size: 25upx;
							font-weight: 400;
							color: rgba(45, 171, 247, 1);
						}
			}
		}
	}

}
.uni-bg-red {
	background-color: red;
}

.uni-bg-green {
	background-color: green;
}
</style>
