<template>
	<view class="content">
		<!-- 搜索组件 -->
		<view class="inputGroup">
			<image src="../../static/搜索-互动@2x.png"></image>
			<input type="text" value="" placeholder="搜索" />
		</view>
		<!-- 轮播图组件 -->
		<view class="imageGroup">
			<swiper class="swiper" previous-margin="9px" next-margin="9px" :indicator-dots="indicatorDots" :autoplay="autoplay"
			 :interval="interval" :duration="duration" :indicator-color="indicatorColor" :indicator-active-color="activeColor"
			 :circular="circular">
				<!-- 				<block v-for="(item,index) in ">
					
				</block> -->
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 0元体验 -->
		<view class="zeroExperience">
			<view class="zero-title">
				<view class="left">
					<image src="../../static/活动-2@2x.png" mode=""></image>
					<span>0元体验</span>
				</view>
				<view class="right">
					<span class="active">相机</span>
					<span>洗脸仪</span>
				</view>
			</view>
			<view class="zeroConter">

			</view>
			<view class="zeroMintitle">
				<block>
					<image src="../../static/shuliang@2x.png" mode="" class="icon"></image>
					<span>数量：7</span>
				</block>
				<block>
					<image src="../../static/youxiaoqi@2x.png" mode="" class="icon"></image>
					<span>租期：7日</span>
				</block>
				<block>
					<image src="../../static/jinqian@2x.png" mode="" class="icon"></image>
					<span>价格：￥0.00/日</span>
				</block>
			</view>
		</view>
		<!-- 邀请好友 -->
		<view class="shareFriends">
			
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
				duration: 2000,
				indicatorColor: 'rgba(255,255,255,0.6)',
				activeColor: 'rgba(255,255,255,1)',
				circular: true
			};
		},
		onLoad() {},
		methods: {
			handleChange() {

			},
		}
	};
</script>

<style lang="less">
	.content {
		text-align: center;
		height: 400upx;
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
			height: 26.38upx
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
				height: 100%
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
					height: 30.55upx
				}

				span {
					margin-left: 16.66upx
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
					color: rgba(45, 171, 247, 1)
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
		.zeroMintitle{
			width: 100%;
			display: flex;
			align-items: center;
			.icon{
				width: 25upx;
				height: 25upx;
			}
			span{
				font-size: 25upx;
				color: rgba(102, 102, 102, 1);
				margin-left: 11.11upx;
				margin-right: 61.11upx;
			}
		}
	}
	.shareFriends{
		width: 730.55upx;
		height: 141.66upx;
		margin: 0 auto;
	}
	.uni-bg-red {
		background-color: red;
	}

	.uni-bg-green {
		background-color: green;
	}
</style>
