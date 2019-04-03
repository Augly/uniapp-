<template>
	<view class="search">
		<view class="search_input">
			<view class="search_input_wrap">
				<view class="search_input_icon"><image src="../../static/icon35.png"></image></view>
				<view class="search_input_close">
					<image src="../../static/3.png"></image>
				</view>
				<input type="text" placeholder="搜索" value="" />
			</view>
			<view class="search_submit">搜索</view>
		</view>
		<view class="search_title">热门搜索</view>
		<view class="search_hot">
			<view v-for="item in 10">海尔冰箱</view>
		</view>
		<view class="search_title">历史搜索</view>
		<view class="search_history">
			<view v-for="item in 10">电动牙刷</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.search {
		width: 100%;
	}

	.search_input {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.search_input_wrap {
		flex: 1;
		background: #efefef;
		border-radius: 8.33upx;
		margin-left: 23.61upx;
		position: relative;
	}
	.search_input_wrap input{
		margin-left: 61.11upx;
	}
	.search_input_icon {
		width: 26.38upx;
		height: 26.38upx;
		position: absolute;
		left: 13.88upx;
		top: 9.72upx;
	}
	.search_input_icon image {
		width: 100%;
		height: 100%;
	}
	.search_input_close {
		width: 25upx;
		height: 25upx;
		position: absolute;
		right: 13.88upx;
		top: 9.72upx;
	}
	.search_input_close image {
		width: 100%;
		height: 100%;
	}
	.search_input input {
		
	}
	.search_title {
		width: 95%;
		margin: 0 auto;
		padding: 33.33upx 0;
	}
	.search_submit {
		flex: 0 0 122.22upx;
		text-align: center;
	}

	.search_hot {
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.search_hot view {
		border: 1px solid #e2e2e2;
		padding: 20.83upx;
		border-radius: 6.94upx;
		margin-right: 20.83upx;
		margin-bottom: 20.83upx;
	}
	.search_history {
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.search_history view {
		border: 1px solid #e2e2e2;
		padding: 20.83upx;
		border-radius: 6.94upx;
		margin-right: 20.83upx;
		margin-bottom: 20.83upx;
	}
		
</style>
