<template>
	<view class="commodity_detail">
		<view class="commodity_detail_banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item">
						<image src="https://img.zcool.cn/community/01f5da58bf9f91a801219c77d21d39.jpg@1280w_1l_2o_100sh.jpg" mode="aspectFill"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="https://img.zcool.cn/community/01f20458bf9f91a801219c771b0d3b.jpg@1280w_1l_2o_100sh.jpg" mode="aspectFill"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="https://img.zcool.cn/community/0185b658bf9f95a801219c771bd969.jpg@1280w_1l_2o_100sh.jpg" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="commodity_detail_title">任天堂switch游戏机</view>
		<view class="commodity_detail_description">
			[套装包括：主机一台以及一张游戏]可以选择游戏清单：《塞尔达》《超级马里奥德赛》
		</view>
		<view class="commodity_detail_tags">
			<view class="commodity_detail_tags_item">
				<view class="commodity_detail_tags_icon">
					<image src="../../../static/41.png" mode=""></image>
				</view>
				<view class="">0元体验活动</view>
			</view>
			<view class="commodity_detail_tags_item">
				<view class="commodity_detail_tags_icon">
					<image src="../../../static/41.png" mode=""></image>
				</view>
				<view class="">0元体验活动</view>
			</view>
			<view class="commodity_detail_tags_item">
				<view class="commodity_detail_tags_icon">
					<image src="../../../static/41.png" mode=""></image>
				</view>
				<view class="">0元体验活动</view>
			</view>
		</view>
		<view class="commodity_detail_price">
			<view class="commodity_detail_unit_price">
				<view><text class="price_icon">￥</text><text class="pirce_num">10</text><text>.00</text>/日</view>
				<view class="commodity_detail_old_price"><text>市场价</text><text>￥1111.00</text></view>
			</view>
			<view class="commodity_detail_unit_price_text">
				租期越长价格越少
			</view>
		</view>
		<view class="my_credit_service">
			<view class="my_credit_service_item">
				<view class="my_credit_service_title">
					<view class="title">会员服务</view>
					<view class="free_play">开通会员免费玩</view>
					<view class="open_icon">
						<image src="../../../static/55.png"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="commodity_detail_date">
			<view class="merch_bil_date_wrap">
				<view class="merch_bil_date_title">请选择租赁日期(3天起)</view>
				<view class="merch_bil_date_check">
					<view class="merch_bil_date_start">选择起租日期</view>
					<view class="merch_bil_date_block"></view>
					<view class="merch_bil_date_end">选择到期日期</view>
				</view>
			</view>
			<view class="commodity_detail_date_count">
				<view>周租金：<text>￥8.20/日</text></view>
				<view>月租金：<text>￥8.20/日</text></view>
				<view>半年租金：<text>￥8.20/日</text></view>
			</view>
			<view class="commodity_detail_block"></view>
		</view>

		<view class="commodity_detail_list">
			<view class="commodity_detail_item">
				<text>配置清单：</text> 00F六合、附近的看时间发了多少就疯了打扫房间打开了扇风就
			</view>
			<view class="commodity_detail_item">
				<text>信用免押：</text> 00F六合、附近的看时间发了多少就疯了打扫房间打开了扇风就
			</view>
			<view class="commodity_detail_item">
				<text>顺丰速达：</text> 00F六合、附近的看时间发了多少就疯了打扫房间打开了扇风就
			</view>
			<view class="commodity_detail_item">
				<text>极速退款：</text> 00F六合、附近的看时间发了多少就疯了打扫房间打开了扇风就
			</view>
			<view class="commodity_detail_list_more">
				<image src="../../../static/53.png" mode="" @click.stop="showPopup()"></image>
			</view>
		</view>
		<view class="commodity_detail_rules">
			<view class="commodity_detail_rules_title">
				<view>租赁规则</view>
				<view class="more">
					<image src="../../../static/53.png" mode=""></image>
				</view>
			</view>
			<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="0">
				<view class="commodity_detail_timeline">
					<view class="commodity_detail_timeline_item1">
						<view class="timeline_icon">1</view>
						<view>挑选产品</view>
					</view>
					<view class="commodity_detail_timeline_item2">
						<view class="commodity_detail_timeline_tips">确定租期，收货地址</view>
					</view>
					<view class="commodity_detail_timeline_item1">
						<view class="timeline_icon">2</view>
						<view>预定成功</view>
					</view>
					<view class="commodity_detail_timeline_item2">
						<view class="commodity_detail_timeline_tips">离起租日期不足2日</view>
					</view>
					<view class="commodity_detail_timeline_item1">
						<view class="timeline_icon">3</view>
						<view>库房发货</view>
					</view>
					<view class="commodity_detail_timeline_item2">
						<view class="commodity_detail_timeline_tips">顺丰为您持续导航</view>
					</view>
					<view class="commodity_detail_timeline_item1">
						<view class="timeline_icon">3</view>
						<view>确认收货</view>
					</view>
					<view class="commodity_detail_timeline_item2">
						<view class="commodity_detail_timeline_tips">体验中，计费时间段</view>
					</view>
					<view class="commodity_detail_timeline_item1">
						<view class="timeline_icon">3</view>
						<view>寄回产品</view>
					</view>
					<view class="commodity_detail_timeline_item2">
						<view class="commodity_detail_timeline_tips">请在到期日次日12点归还产品</view>
					</view>
					<view class="commodity_detail_timeline_item1">
						<view class="timeline_icon">3</view>
						<view>库房验货</view>
					</view>
					<view class="commodity_detail_timeline_item2">
						<view class="commodity_detail_timeline_tips">2个工作日内结算</view>
					</view>
					<view class="commodity_detail_timeline_item1">
						<view class="timeline_icon">3</view>
						<view>押金结算</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="commodity_detail_rule_block"></view>
		<view class="commodity_detail_info">
			<view class="commodity_detail_info_title">商品详情</view>
			<view class="commodity_detail_content">
				<!-- 插入转成view的富文本内容 -->
				sfsdfdsf
			</view>
		</view>
		<view class="commodity_detail_bottom_block"></view>
		<view class="commodity_detail_sumbit_group">
			<view class="commodity_detail_sumbit_action">
				<view class="commodity_detail_action_item">
					<view class="action_icon1">
						<image src="../../../static/16.png"></image>
					</view>
					<view>客服</view>
				</view>
				<view class="commodity_detail_action_item">
					<view class="action_icon2">
						<image src="../../../static/24.png" mode=""></image>
					</view>
					<view>清单</view>
				</view>
				<view class="commodity_detail_action_item">
					<view class="action_icon3">
						<image src="../../../static/30.png" mode=""></image>
					</view>
					<view>收藏</view>
				</view>
			</view>
			<view class="commodity_detail_add_detailed_list">加入清单</view>
			<view class="commodity_detail_free">免押租赁</view>
		</view>
		<popup-layer ref="popup" :direction="direction">
			<view class="popup_top">
				<view class="popup_top_title">
					标配清单
				</view>
				<view class="popup_top_desc">
					<view class="popup_top_desc_thumb"><image src="../../../static/thumb_pic_1.jpg"></image></view>
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
	export default {
		components: {
			popupLayer
		},
		data() {
			return {

			};
		},
		mounted() {
		},
		methods: {
			showPopup() {
				this.$refs.popup.show() // 弹出
			},
			closePopup() {
				this.$refs.popup.close()
			}
		},
	}
</script>

<style>
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

	.commodity_detail {
		width: 100%;
	}

	.commodity_detail_banner {
		height: 748.61upx;
	}

	swiper {
		height: 748.61upx;
	}

	.swiper-item image {
		width: 100%;
		height: 748.61upx;
	}

	.commodity_detail_title {
		font-size: 27.77upx;
		padding: 29.16upx 20.83upx;
	}

	.commodity_detail_description {
		font-size: 23.61upx;
		color: #999999;
		padding: 0 20.83upx;
	}

	.commodity_detail_tags {
		width: 95%;
		margin: 27.77upx auto 30.55upx auto;
		height: 98.61upx;
		background-color: #ffffff;
		box-shadow: 1.75upx 4upx 12upx 7upx rgba(0, 0, 0, 0.06);
		border-radius: 5.55upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	.commodity_detail_tags_icon {
		width: 25upx;
		height: 22.91upx;
		margin-right: 6.94upx;
	}

	.commodity_detail_tags_icon image {
		width: 100%;
		height: 100%;
	}

	.commodity_detail_tags_item {
		display: flex;
		flex-direction: row;
		color: #2dabf7;
	}

	.commodity_detail_tags_item:first-child {
		margin-left: 13.88upx;
	}

	.commodity_detail_tags_item:not(:first-child) {
		margin-left: 41.66upx;
	}

	.commodity_detail_price {
		width: 95%;
		margin: 0 auto;
		height: 97.22upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.price_icon {
		color: #fb3838;
		font-size: 22.22upx;
	}

	.pirce_num {
		font-size: 47.22upx;
		color: #fb3838;
	}

	.commodity_detail_old_price text {
		font-size: 22.22upx;
		color: #999999;
	}

	.commodity_detail_unit_price_text {
		color: #333333;
	}

	.my_credit_service {
		margin-top: 18.05upx;
		width: 100%;
		height: auto;
		background: #FFFFFF;
		padding: 22.22upx 0;
	}

	.my_credit_service_item {
		width: 95%;
		margin: 0 auto;
		padding: 34.72upx 0;
		background-image: linear-gradient(90deg, #d8b37b 0%, #ebcf97 100%);
		box-shadow: 0upx 11.11upx 5.55upx 1.38upx rgba(0, 0, 0, 0.06);
		border-radius: 12.5upx;
	}

	.my_credit_service_item:not(:first-child) {
		margin-top: 20.83upx;
	}

	.my_credit_service_title {
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
		width: 194.44upx;
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

	.more {
		width: 13.88upx;
		height: 22.22upx;
	}

	.more image {
		width: 100%;
		height: 100%;
	}

	.commodity_detail_date {
		width: 95%;
		margin: 0 auto;
	}

	.commodity_detail_date_title {
		font-size: 25upx;
		color: #333333;
		height: 47.22upx;
		line-height: 47.22upx;
	}

	.merch_bil_date_wrap {
		width: 100%;
		height: auto;
		background: #FFFFFF;
	}

	.merch_bil_date_title {
		font-size: 27.77upx;
		padding: 0 0 28.11upx 10.83upx;
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
		font-size: 27.77upx;
		color: #979797;
	}

	.merch_bil_date_end {
		border: 1px solid #cccccc;
		width: 325upx;
		height: 86.11upx;
		line-height: 86.11upx;
		border-radius: 86.11upx;
		text-align: center;
		font-size: 27.77upx;
		color: #979797;
	}

	.merch_bil_date_block {
		width: 27.77upx;
		height: 1.38upx;
		background: #CCCCCC;
	}

	.commodity_detail_date_count {

		color: #999999;
		padding: 22.91upx 0 43.75upx 0;
		display: flex;
		flex-direction: row;
	}

	.commodity_detail_date_count text {
		color: #2dabf7;
	}

	.commodity_detail_date_count view {
		font-size: 19.44upx;
	}

	.commodity_detail_date_count view:not(:first-child) {
		margin-left: 27.77upx;
	}

	.commodity_detail_block {
		width: 100%;
		height: 1.38upx;
		background: #e3e3e3;
	}

	.commodity_detail_list {
		width: 95%;
		margin: 0 auto;
		position: relative;
	}

	.commodity_detail_list_more {
		width: 13.88upx;
		height: 22.22upx;
		position: absolute;
		right: 0;
		top: 13.88upx;
	}

	.commodity_detail_rule_block {
		width: 100%;
		height: 22.22upx;
		background: #f5f5f5;
	}

	.commodity_detail_list_more image {
		width: 100%;
		height: 100%;
	}

	.commodity_detail_item {
		width: 95%;
		font-size: 25upx;
		padding: 19.09upx 0;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.commodity_detail_item text {
		color: #999999;
	}

	.commodity_detail_rules {
		width: 95%;
		margin: 0 auto;
	}

	.commodity_detail_rules_title {
		font-size: 31.94upx;
		color: #333333;
		padding: 20.83upx 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.commodity_detail_timeline {
		width: 100;
		display: flex;
		flex-direction: row;
		height: 228.33upx;
		position: relative;
	}

	.commodity_detail_timeline::after {
		position: absolute;
		content: ' ';
		width: 100%;
		height: 1.38upx;
		border-bottom: 1px dashed #eeecef;
		left: 0;
		top: 45%;
		z-index: -1;
	}

	.commodity_detail_timeline_tips {
		width: 292.36upx;
		height: 114.58upx;
		line-height: 83.33upx;
		font-size: 20.83upx;
		color: #333333;
		text-align: center;
		background: url('@~/../../../static/icon72.png');
		background-size: cover;
	}

	.commodity_detail_timeline_item1 {
		flex: 0 0 120upx;
		color: #333333;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.timeline_icon {
		width: 45.13upx;
		height: 45.13upx;
		background: #2dabf7;
		color: #FFFFFF;
		border-radius: 45.13upx;
	}

	.commodity_detail_timeline_item1 view:last-child {
		font-size: 20.83upx;
		color: #333333;
	}

	.commodity_detail_info {
		width: 95%;
		margin: 0 auto;
	}

	.commodity_detail_info_title {
		padding: 38.19upx 0 20.83upx 0;
		font-size: 25upx;
		color: #333333;
	}

	.commodity_detail_info_content {
		font-size: 25upx;
		line-height: 41.66upx;
	}

	.commodity_detail_info_content image {
		width: 100%;
		height: 100%;
	}

	.commodity_detail_sumbit_group {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		height: 90.27upx;
		display: flex;
		flex-direction: row;
		background: #FFFFFF;
	}

	.commodity_detail_sumbit_action {
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.commodity_detail_add_detailed_list {
		flex: 0 0 223.61upx;
		background: #2dabf7;
		color: #FFFFFF;
		line-height: 90.27upx;
		text-align: center;
	}

	.commodity_detail_free {
		flex: 0 0 223.61upx;
		background: #78d7ce;
		color: #FFFFFF;
		line-height: 90.27upx;
		text-align: center;
	}

	.action_icon1 {
		width: 25upx;
		height: 29.16upx;
	}

	.action_icon1 image {
		width: 100%;
		height: 100%;
	}

	.action_icon2 {
		width: 25upx;
		height: 26.38upx;
	}

	.action_icon2 image {
		width: 100%;
		height: 100%;
	}

	.action_icon3 {
		width: 27.77upx;
		height: 27.77upx;
	}

	.action_icon3 image {
		width: 100%;
		height: 100%;
	}

	.commodity_detail_action_item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.commodity_detail_action_item view:last-child {
		font-size: 19.44upx;
		color: #666666;
		margin-top: 9.72upx;
	}

	.commodity_detail_bottom_block {
		height: 125upx;
	}
</style>
