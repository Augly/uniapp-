<template>
	<view class="content">
		<!-- 搜索组件 -->
		<view class="inputGroup">
			<text class="iconfont icon-sousuo"></text>
			<input type="text" value="" placeholder="搜索" disabled />
		</view>
		<view class="tabWrap">
			<scroll-view scroll-x class="scrollWrap">
				<span class="scrollItem active">11</span>
				<span class="scrollItem">11</span>
			</scroll-view>
		</view>
		<view class="listTwo">
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
		return {};
	},
	onLoad() {},
	methods: {
		handleChange() {}
	}
};
</script>

<style lang="less" scoped>
	@import (reference) '../../common/public.less';
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
.tabWrap {
	width: 100%;
	height: 83.33upx;
	box-sizing: border-box;
	padding-left: 23.61upx;
}
.scrollWrap {
	white-space: nowrap;
	width: 100%;
	height: 83.33upx;
}
.scrollItem {
	line-height:83.33upx;
	font-size: 30.55upx;
	color: rgba(51, 51, 51, 1);
	padding: 0upx 14px;
	display: inline-block;
	white-space: nowrap;
	position: relative;
}
.active {
	color: rgba(45, 171, 247, 1);
	
}
.active::after {
		content: '';
		@bottom();
		width:36.11upx;
		height: 5.55upx;
		background: rgba(45, 171, 247, 1);
		border-radius: 2.77upx;
	}
//列表组件2
.listTwo {
	width: 100%;
	box-sizing: border-box;
	padding: 27.77upx 0upx 0upx 22.22upx;
	.listContent {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 0upx 22.22upx 0upx 0upx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.listWrap {
			width: 343.05upx;
			margin-bottom: 27.77upx;
			.imgWrap {
				width: 100%;
				height: 344.44upx;
				background-color: red;
				border-radius: 6.94upx;
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
</style>
