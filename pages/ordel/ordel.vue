<template>
	<view class="content">
		<view class="headWrap">
			<view class="headList" :class="activeIndex==index?'active':''" v-for="(item,index) in tabList" :key="index" @click="getIndex(index)">
				{{item.title}}({{item.value}})
			</view>
		</view>
			<swiper   :duration="500" class="swiperWrap" :current="activeIndex">
				<swiper-item>
					<view class="swiper-item">1111</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">2222</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">3333</view>
				</swiper-item>
			</swiper>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [{
					title: '已预约',
					value: '12'
				}, {
					title: '使用中',
					value: '12'
				}, {
					title: '已归还',
					value: '12'
				}, ],
				activeIndex: 0,
				height:0
			};
		},
		created() {
			uni.getSystemInfo({
				success: (res) => {
					this.height=res.windowHeight
				}
			})
		},
		methods: {
			getIndex(index) {
				this.activeIndex = index
			}
		}
	}
</script>

<style lang="less" scoped>
	page {
		position: relative;
		width: 100%;
		height: 100%;
		background-color: RGBA(247, 247, 247, 1);
	}
	.content{
		width: 100%;
		height: 100%;
	}
	.headWrap {
		position: fixed;
		width: 100%;
		height: 97.22upx;
		background-color: rgba(255, 255, 255, 1);
		display: flex;
		align-items: center;
		justify-content: space-around;

		.headList {
			width: 33.33%;
			height: 100%;
			font-size: 30.55upx;
			color: rgba(102, 102, 102, 1);
			position: relative;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.active {
			color: rgba(45, 171, 247, 1);
		}

		.active::after {
			position: absolute;
			width: 126.38upx;
			height: 4.16upx;
			background: rgba(45, 171, 247, 1);
			content: '';
			left: 0;
			right: 0;
			margin: 0 auto;
			bottom: 0;
		}
	}

	.swiperWrap {
		width: 100%;
		height: 100%;
		background: red;
		box-sizing: border-box;
		padding-top: 97.22upx;	
	}

	.swiper-item {
		width: 100%;
		height: 100%;
	}
</style>
