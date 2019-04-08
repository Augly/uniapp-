<template>
	<view class="merch_bil">
		<view class="merch_bil_date_wrap">
			<view class="merch_bil_date_title">请选择租期</view>
			<view class="merch_bil_date_check">
				<view class="merch_bil_date_start" @click.stop="checkStartDate()">{{chooseStartDate}}</view>
				<view class="merch_bil_date_block"></view>
				<view class="merch_bil_date_end" @click.stop="checkEndDate()">{{chooseEndDate}}</view>
			</view>
			<view class="merch_bil_date_will">
				<text>预计收货时间：</text>
				<text class="date">2019.03.21</text>
				<text class="back_time">归还时间：</text>
				<text class="date">2019.04.29</text>
			</view>
		</view>
		<view class="merch_bil_service">
			<view class="merch_bil_service_item">
				<view class="merch_bil_service_title" @click.stop="gotoVip()">
					<view class="title">会员服务</view>
					<view class="free_play">开通会员免费玩</view>
					<view class="open_icon">
						<image src="../../static/55.png"></image>
					</view>
				</view>
				<view class="merch_bil_service_detail">
					<view class="merch_bil_service_detail_info">
						<view>2020.10.10</view>
						<view class="merch_bil_service_detail_two">会员到期日期</view>
					</view>
					<view class="merch_bil_service_detail_info">
						<view>7.5折</view>
						<view class="merch_bil_service_detail_two">当前折扣</view>
					</view>
					<view class="merch_bil_service_detail_info">
						<view>1000000</view>
						<view class="merch_bil_service_detail_two">剩余蓝猪</view>
					</view>
				</view>
			</view>
			<view class="merch_bil_service_item">
				<view class="merch_bil_service_title" @click.stop="gotoVip()">
					<view class="title">会员服务</view>
					<view class="free_play">开通会员免费玩</view>
					<view class="open_icon">
						<image src="../../static/55.png"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="merch_bil_buy_list">
			<block v-for="(item, index) in goods">
			<uni-swipe-action @click="bindClick(index)" :options="options">
				<view class="merch_bil_buy_item">
					<view class="merch_bil_buy_item_icon" @click.stop="checkThis(index)">
						<image :src="checkIn(index)"></image>
					</view>
					<view class="merch_bil_buy_item_thumb">
						<image :src="item.thumb" mode=""></image>
					</view>
					<view class="merch_bil_buy_item_info">
						<view class="merch_bil_buy_item_info_title">{{item.title}}</view>
						<view class="merch_bil_buy_item_info_deposit"><text>押金：</text><text class="unit_text">￥</text><text class="unit_price">{{item.deposit_price}}</text></view>
						<view class="merch_bil_buy_item_info_unit_price"><text>￥</text><text>{{item.unit_price}}/天</text></view>
					</view>
				</view>
			</uni-swipe-action>
			</block>

		</view>
		<view class="merch_bil_block_bottom"></view>
		<view class="merch_bil_tobuy">
			<view class="merch_bil_tobuy_icon" @click.stop="chooseAll()">
				<image v-if="isChooseAll" src="../../static/icon64.png"></image>
				<image v-else src="../../static/icon60.png"></image>
			</view>
			<view class="merch_bil_tobuy_checktext" @click.stop="chooseAll()">全选</view>
			<view class="merch_bil_tobuy_total_price">
				<view>租金：￥18.2/天</view>
				<view>押金：￥3000</view>
			</view>
			<view class="merch_bil_tobuy_submit" @click.stop="goOrder()">去结算(1)</view>
		</view>
		<view class="clander" v-show="isCalendar">
			<calendar :lunar="false" :disable-before="true" :fixedHeihgt="true" :start-date="startDate" :end-date="endDate"
			 @to-click="chooseDate" />
		</view>
		<view class="clander_mask" @click.stop="isCalendar=false" v-show="isCalendar"></view>
	</view>
</template>

<script>
	import calendar from "@/components/uni-calendar/uni-calendar"
	import uniSwipeAction from "@/components/uni-swipe-action/uni-swipe-action.vue"
	export default {
		components: {
			calendar,
			uniSwipeAction
		},
		data() {
			return {
				startDate: '2019-04-03',
				chooseStartDate: '2019-04-03',
				chooseEndDate: '2019-04-3',
				endDate: '2019-12-31',
				isCalendar: false,
				isStart: true,
				currentIndex: null,
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#FE3D2F'
					}
				}],
				goods: [
					{	
						id: 1,
						thumb: '../../static/thumb_pic_1.jpg',
						title: 'B+128GB 极夜黑 全网通4G 双卡双待双卡双待双卡双待',
						deposit_price: 10.00,
						unit_price: 28.00
					},
					{	
						id: 2,
						thumb: '../../static/thumb_pic_1.jpg',
						title: '富家大室丽枫酒店了司法鉴定所理发店设',
						deposit_price: 10.00,
						unit_price: 28.00
					}
				],
				isChooseAll: false,
				billArr: []
			};
		},
		created() {
			let date = new Date()
			let nowDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
			this.startDate = nowDate
		},
		methods: {
			bindClick(index) {
				this.goods.splice(index, 1)
			},
			checkIn(index) {
				if (this.billArr.length > 1) {
					this.isChooseAll = true
				} else {
					this.isChooseAll = false
				}
				return this.billArr.indexOf(index) != -1 ? '../../static/icon64.png' : '../../static/icon60.png'
			},
			goOrder() {
				uni.navigateTo({
					// url传参
					url: '/pages/ordel/preview_order/preview_order?param='
				});
			},
			chooseAll() {
				if (this.billArr.length > 0) {
					this.billArr = []
				} else {
					for (let i = 0; i < this.goods.length; i++) {
						this.billArr.push(i)
					}
				}
			},
			chooseDate(e) {
				if (this.isStart) {
					this.chooseStartDate = e.year + '-' + e.month + '-' + e.date
					this.isStart = false
				} else {
					this.chooseEndDate = e.year + '-' + e.month + '-' + e.date
					this.isStart = true
				}

				this.isCalendar = false
			},
			checkStartDate() {
				this.isCalendar = true
				this.isStart = true
			},
			checkEndDate() {
				this.isCalendar = true
				this.isStart = false
			},
			gotoVip() {
				uni.navigateTo({
					url: '/pages/personl/my_privilege/my_privilege'
				})
			},
			checkThis(index) {
				this.currentIndex = index
				if (this.billArr.indexOf(index) != -1) {
					let index = this.billArr.indexOf(index)
					this.billArr.splice(index, 1)
				} else {
					this.billArr.push(index)
				}
			}
		},
	}
</script>

<style>
	page {
		background: #FFFFFF;
	}
	.clander {
		position: fixed;
		width: 100%;
		left: 0;
		top: 88.88upx;
		z-index: 2;
	}

	.clander_mask {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.3);
	}

	.merch_bil {
		width: 100%;
		height: auto;
		background: #f7f7f7;
	}

	.merch_bil_date_wrap {
		width: 100%;
		height: auto;
		background: #FFFFFF;
	}

	.merch_bil_date_title {
		font-size: 27.77upx;
		padding: 0upx 0upx 36.11upx 20.83upx;
	}

	.merch_bil_date_check {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.merch_bil_date_start {
		border: 1px solid #cccccc;
		width: 325upx;
		height: 86.11upx;
		line-height: 86.11upx;
		border-radius: 86.11upx;
		text-align: center;
		font-size: 36.11upx;
		color: #979797;
	}

	.merch_bil_date_end {
		border: 1px solid #cccccc;
		width: 325upx;
		height: 86.11upx;
		line-height: 86.11upx;
		border-radius: 86.11upx;
		text-align: center;
		font-size: 36.11upx;
		color: #979797;
	}

	.merch_bil_date_block {
		width: 27.77upx;
		height: 1.38upx;
		background: #CCCCCC;
	}

	.merch_bil_date_will {
		width: 90%;
		margin: 0 auto;
		padding: 23.61upx 0;
		color: #999999;
	}

	.date {
		color: #2dabf7;
	}

	.back_time {
		margin-left: 25upx;
	}

	.merch_bil_service {
		margin-top: 18.05upx;
		width: 100%;
		height: auto;
		background: #FFFFFF;
		padding: 22.22upx 0;
	}

	.merch_bil_service_item {
		width: 95%;
		margin: 0 auto;
		padding: 34.72upx 0;
		background-image: linear-gradient(90deg, #d8b37b 0%, #ebcf97 100%);
		box-shadow: 0upx 11.11upx 5.55upx 1.38upx rgba(0, 0, 0, 0.06);
		border-radius: 12.5upx;
	}

	.merch_bil_service_item:not(:first-child) {
		margin-top: 20.83upx;
	}

	.merch_bil_service_title {
		display: flex;
		flex-direction: row;
	}

	.title {
		flex: 1;
		font-size: 25upx;
		color: #855e2b;
		font-weight: 600;
		margin-left: 26.38upx;
	}

	.free_play {
		width: 180.44upx;
		font-size: 25upx;
		color: #855e2b;
		font-weight: 600;
	}

	.open_icon {
		width: 12.5upx;
		height: 20.83upx;
		margin-right: 22.22upx;
	}

	.open_icon image {
		width: 100%;
		height: 100%;
	}

	.merch_bil_service_detail {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		color: #FFFFFF;
	}

	.merch_bil_buy_list {
		width: 100%;
		margin-top: 19.44upx;
		background: #FFFFFF;
	}

	.merch_bil_buy_item {
		display: flex;
		flex-direction: row;
		padding: 44.44upx 0;

	}

	.merch_bil_buy_item_icon {
		width: 38.19upx;
		height: 38.19upx;
		margin: 69.44upx 22.91upx 0 22.91upx;
	}

	.merch_bil_buy_item_icon image {
		width: 100%;
		height: 100%;
	}

	.merch_bil_buy_item_thumb {
		width: 169.44upx;
		height: 169.44upx;
		margin-right: 22.22upx;
	}

	.merch_bil_buy_item_thumb image {
		width: 100%;
		height: 100%;
	}

	.merch_bil_buy_item_info {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.merch_bil_buy_item_info_title {
		padding-top: 6.94upx;
	}

	.merch_bil_buy_item_info_deposit {
		font-size: 25upx;
		color: #333333;
	}

	.merch_bil_buy_item_info_unit_price {
		font-size: 27.77upx;
		color: #2dabf7;
		padding-bottom: 6.94upx;
	}

	.merch_bil_buy_item_info_delete {
		display: none;
	}

	.merch_bil_tobuy {
		position: fixed;
		left: 0;
		bottom: 50px;
		width: 100%;
		height: 97.22upx;
		background: #FFFFFF;
		display: flex;
		flex-direction: row;
	}

	.merch_bil_tobuy_icon {
		width: 34.72upx;
		height: 34.72upx;
		line-height: 111.11upx;
		margin: 0 20.83upx;
	}

	.merch_bil_tobuy_icon image {
		width: 100%;
		height: 100%;
	}

	.merch_bil_tobuy_checktext {
		margin-right: 27.77upx;
		line-height: 97.22upx;
		font-size: 27.77upx;
		color: #333333;
	}

	.merch_bil_tobuy_total_price {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		font-size: 25upx;
		color: #333333;
	}

	.merch_bil_tobuy_submit {
		width: 330.55upx;
		text-align: center;
		background: #2dabf7;
		color: #FFFFFF;
		font-size: 31.94upx;
		line-height: 97.22upx;
	}

	.merch_bil_block_bottom {
		width: 100%;
		height: 138.88upx;
	}

	.merch_bil_service_detail_two {
		font-size: 24.83upx;
		color: #865e27;
	}

	.merch_bil_service_detail_info {
		text-align: center;
	}

	.merch_bil_service_detail_info view:first-child {
		padding: 6.94upx 0;
		margin-top: 6.94upx;
		font-size: 34.72upx;
	}

	.unit_text {
		color: #f23030;
		font-size: 23.61upx;
	}

	.unit_price {
		color: #f23030;
		font-size: 27.77upx;
	}
</style>
