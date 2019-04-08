<template>
	<view class="content">
		<view class="">
			<scroll-view scroll-x class="headWrap" :scroll-into-view="'s' + activeIndex" scroll-with-animation="true">
				<view class="headList" :id="'s' + index" :class="activeIndex == index ? 'active' : ''" v-for="(item, index) in tabList" :key="index" @click="getIndex(index)">
					{{ item.title }}({{ item.value }})
				</view>
			</scroll-view>
		</view>

		<!-- 		<swiper :duration="300" class="swiperWrap" :current="activeIndex" @change="changeCurrent">
			<swiper-item> -->

		<view class="swiper-item" v-if="activeIndex == 0">
			<view class="listItem" @click="lookRes">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">待付款</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title title100">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
					<view class="item_other">
						<view class="other_content">
							<span class="price">押金：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_content">
							<span class="price">共1件商品，租金：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_content">
							<span class="price">合计：</span>
							<span class="money">￥1726.55</span>
						</view>
					</view>
					<view class="itempay">
						<view class="cendel_ordel">取消订单</view>
						<view class="button">去支付</view>
					</view>
				</view>
			</view>
			<view class="listItem" @click="lookRes">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">待付款</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title title100">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
					<view class="item_other">
						<view class="other_content">
							<span class="price">代付押金：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_content">
							<span class="price">共1件商品，设备级别：</span>
							<span class="money">猪五戒</span>
						</view>
					</view>
					<view class="itempay">
						<!-- 						<view class="cendel_ordel">取消订单</view> -->
						<view class="button">去支付</view>
					</view>
				</view>
			</view>
			<view class="listItem" @click="lookRes">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">待付款</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title title100">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
					<view class="item_other">
						<view class="other_content">
							<span class="price">代付押金：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_content">
							<span class="price">共1件商品，设备级别：</span>
							<span class="money">猪五戒</span>
						</view>
					</view>
					<view class="itempay">
						<!-- 						<view class="cendel_ordel">取消订单</view> -->
						<view class="button">去支付</view>
					</view>
				</view>
			</view>
			<view class="listItem" @click="lookRes">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">待付款</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title title100">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
					<view class="item_other">
						<view class="other_content">
							<span class="price">代付押金：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_content">
							<span class="price">共1件商品，设备级别：</span>
							<span class="money">猪五戒</span>
						</view>
					</view>
					<view class="itempay">
						<!-- 						<view class="cendel_ordel">取消订单</view> -->
						<view class="button">去支付</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 			</swiper-item>
			<swiper-item> -->
		<view class="swiper-item" v-if="activeIndex == 1">
			<view class="listItem" @click="lookRes">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">已预约</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
			<view class="listItem" @click="lookRes">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">已预约</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
						<span class="price">预授权支付：</span>
						<span class="money">￥1726.55</span>
					</view>
				</view>
			</view>
			<view class="listItem" @click="lookRes">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">已预约</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
						<span class="price">预授权支付：</span>
						<span class="money">￥1726.55</span>
					</view>
				</view>
			</view>
			<view class="listItem" @click="lookRes">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">已预约</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
						<span class="price">预授权支付：</span>
						<span class="money">￥1726.55</span>
					</view>
				</view>
			</view>
			<view class="listItem" @click="lookRes">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">已预约</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
						<span class="price">预授权支付：</span>
						<span class="money">￥1726.55</span>
					</view>
				</view>
			</view>
		</view>
		<!-- 			</swiper-item>
			<swiper-item> -->
		<view class="swiper-item" v-if="activeIndex == 2">
			<view class="listItem" @click="lookRes">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">使用中</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title title100">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
					<view class="item_other">
						<view class="other_content">
							<span class="price">已支付：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_content">
							<span class="price">您的订单归还时间：</span>
							<span class="money">2019.04.05</span>
						</view>
					</view>
					<view class="itempay">
						<view class="goOn" @click.stop="toTop()">续租</view>
						<view class="button" @click.stop="toGive()">去归还</view>
					</view>
				</view>
			</view>
			<view class="listItem" @click="lookRes">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">使用中</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title title100">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
					<view class="item_other">
						<view class="other_content">
							<span class="price">已支付：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_content">
							<span class="price">您的订单归还时间：</span>
							<span class="money">2019.04.05</span>
						</view>
					</view>
					<view class="itempay">
						<view class="goOn" @click.stop="toTop()">续租</view>
						<view class="button" @click.stop="toGive()">去归还</view>
					</view>
				</view>
			</view>
			<view class="listItem" @click="lookRes">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">使用中</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title title100">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
					<view class="item_other">
						<view class="other_content">
							<span class="price">已支付：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_content">
							<span class="price">您的订单归还时间：</span>
							<span class="money">2019.04.05</span>
						</view>
					</view>
					<view class="itempay">
						<view class="goOn" @click.stop="toTop()">续租</view>
						<view class="button" @click.stop="toGive()">去归还</view>
					</view>
				</view>
			</view>
			<view class="listItem" @click="lookRes">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">使用中</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title title100">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
					<view class="item_other">
						<view class="other_content">
							<span class="price">已支付：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_content">
							<span class="price">您的订单归还时间：</span>
							<span class="money">2019.04.05</span>
						</view>
					</view>
					<view class="itempay">
						<view class="goOn" @click.stop="toTop()">续租</view>
						<view class="button" @click.stop="toGive()">去归还</view>
					</view>
				</view>
			</view>
			<view class="listItem" @click="lookRes">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">使用中</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title title100">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
					<view class="item_other">
						<view class="other_content">
							<span class="price">预授权支付：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_content">
							<span class="price">您的订单归还时间：</span>
							<span class="money">2019.04.06</span>
						</view>
					</view>
					<view class="itempay">
						<view class="goOn" @click.stop="toTop()">续租</view>
						<view class="button" @click.stop="toGive()">去归还</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 			</swiper-item>
			<swiper-item> -->
		<view class="swiper-item" v-if="activeIndex == 3">
			<view class="listItem">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">已归还</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title title100">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
					<view class="item_other_float">
						<view class="other_right">
							<span class="price">预授权支付：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_left">
							<span class="price">解冻金额：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_right">
							<span class="price">延期费用：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_left">
							<span class="price">物品损坏：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_content">
							<span class="price">租金：</span>
							<span class="money">￥1726.55</span>
						</view>
					</view>
					<!-- <view class="itempay">
								<span class="price">已支付：</span>
								<span class="money">￥1726.55</span>
							</view> -->
				</view>
			</view>
			<view class="listItem">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">已归还</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>
						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title title100">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
					<view class="item_other_float">
						<view class="other_right">
							<span class="price">预授权支付：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_left">
							<span class="price">解冻金额：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_right">
							<span class="price">延期费用：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_left">
							<span class="price">物品损坏：</span>
							<span class="money">￥1726.55</span>
						</view>
						<view class="other_content">
							<span class="price">租金：</span>
							<span class="money">￥1726.55</span>
						</view>
					</view>
					<view class="itempay"><view class="button">去支付</view></view>
				</view>
			</view>
		</view>
		<!-- 			</swiper-item>
			<swiper-item> -->
		<view class="swiper-item" v-if="activeIndex == 4">
			<view class="listItem">
				<view class="itemHead"><span class="ordelTitle">订单编号：20190324122159000</span></view>
				<view class="itemContent">
					<view class="itemTitle">
						<span class="date">2019.03.14-2019.04.25 (43天)</span>
						<span class="type">已取消</span>
					</view>
					<view class="shopRes">
						<image src="http://minpig.zzvlm.com/banner2.png" class="shopLogo"></image>

						<view class="shopDetail">
							<view class="titleGroup">
								<view class="title title100">更能打 8GB+128GB 网 通4G 双卡双待更能打 8GB+128GB 网 通4G 双卡双待</view>
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
						<view class="goOn" @click.stop="toTop()">续租</view>
						<view class="button" @click.stop="toGive()">去归还</view>
					</view>
				</view>
			</view>
		</view>
		<!-- </swiper-item> -->
		<!-- </swiper> -->

		<popup-layer ref="popup" :direction="direction">
			<view class="zidingyi">
				<view class="top">
					<view class="title">续租</view>
					<span class="moneyTitle">请选择续租天数，每个订单之可续租一次</span>
					<view>
						<span class="moneyTitle">续租价格：</span>
						<span class="moneyRes">￥1726.55</span>
					</view>
					<view class="tabWrap">
						<view class="tabList" :class="popupIndex == index ? 'tabactive' : ''" v-for="(item, index) in popup" :key="'popup' + index" @click.stop="selectDate(index)">
							{{ item.label }}
						</view>
					</view>
					<text class="tip">*续租不可参与折扣*</text>
				</view>
				<view class="sumbit" @click="sure">确定续租(￥23.50)</view>
			</view>
		</popup-layer>
		<uni-load-more v-show="isLoading" status="loading" :show-icon="true" color="#000000"></uni-load-more>
	</view>
</template>

<script>
import popupLayer from '@/components/popup-layer/popup-layer.vue';
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
export default {
	data() {
		return {
			isLoading: false,
			direction: 'top',
			ani: false,
			tabList: [
				{
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
			popupIndex: 0,
			popup: [
				{
					label: '1天',
					vaue: 1
				},
				{
					label: '7天',
					vaue: 7
				},
				{
					label: '15天',
					vaue: 15
				},
				{
					label: '30天',
					vaue: 30
				},
				{
					label: '90天',
					vaue: 90
				},
				{
					label: '180天',
					vaue: 180
				}
			]
		};
	},
	created() {
		uni.getSystemInfo({
			success: res => {
				this.height = res.windowHeight;
			}
		});
	},
	onReachBottom: function() {
		//触底的时候请求数据，即为上拉加载更多
		//为了更加清楚的看到效果，添加了定时器
		console.log('触发上滑加载');
		this.getListMoreAjax();
	},
	components: {
		popupLayer,
		uniLoadMore
	},
	methods: {
		getListMoreAjax() {
			uni.showNavigationBarLoading(); //显示加载动画
			let _this = this;
			this.isLoading = true;
			// 模拟上滑加载，这里启用定时器
			setTimeout(function() {
				_this.isLoading = false;
				uni.hideNavigationBarLoading(); //关闭加载动画
				console.log('加载完毕');
			}, 2000);
		},
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
		selectDate(index) {
			this.popupIndex = index;
		},
		//选择订单状态
		changeCurrent(e) {
			this.activeIndex = e.detail.current;
			uni.showLoading({
				title: '正在加载中...',
				success: () => {
					setTimeout(() => {
						uni.hideLoading();
					}, 1000);
				}
			});
		},
		toTop() {
			this.$refs.popup.show();
		},
		toGive() {
			uni.navigateTo({
				url: '/pages/ordel/ordelRes/ordelRes'
			});
		},
		//确定续租
		sure() {
			this.$refs.popup.close();
		},
		lookRes() {
			uni.navigateTo({
				url: '/pages/ordel/preview_order/preview_order',
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
	position: relative;
	width: 100%;
	// height: 100%;
	box-sizing: border-box;
	padding: 0upx 13.88upx 100upx 13.88upx;
	// overflow: hidden;
	// background-color: #ffffff;
}

.headWrap {
	position: fixed;
	background-color: rgba(255, 255, 255, 1);
	z-index: 20;
	.setWh(100%, 97.22upx);
	.backcolor(rgba(255, 255, 255, 1));
	white-space: nowrap;
	// flex-wrap: nowrap;
	.headList {
		.setWh(250upx, 97.22upx);
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
.cendel_ordel {
	.button;
	background-color: rgba(210, 210, 210, 1);
	margin-right: 19.44upx;
}
.swiper-item {
	// @wh100();
	// overflow-y: auto;
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
			.item_other_float {
				padding: 13.88upx;
				// border-bottom: 1.38upx solid rgba(230, 230, 230, 1);
				// 				display: flex;
				// 				flex-direction: column;
				// 				align-items: center;
				// 				justify-content: center;
				.other_content {
					height: auto;
					width: 100%;
					display: flex;
					line-height: 41.66upx;
					align-items: center;
					justify-content: flex-end;
					.price {
						font-size: 26.38upx;
						color: rgba(153, 153, 153, 1);
					}

					.money {
						font-size: 26.38upx;
						color: rgba(252, 51, 56, 1);
					}
				}
				.other_left {
					height: auto;
					width: 50%;
					float: left;
					display: flex;
					line-height: 41.66upx;
					align-items: center;
					justify-content: flex-start;
					.price {
						font-size: 26.38upx;
						color: rgba(153, 153, 153, 1);
					}

					.money {
						font-size: 26.38upx;
						color: rgba(252, 51, 56, 1);
					}
				}
				.other_right {
					height: auto;
					width: 50%;
					float: right;
					display: flex;
					line-height: 41.66upx;
					align-items: center;
					justify-content: flex-end;
					clear: both;
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
			.item_other {
				padding: 13.88upx;
				// border-bottom: 1.38upx solid rgba(230, 230, 230, 1);
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.other_content {
					height: auto;
					width: 100%;
					display: flex;
					line-height: 41.66upx;
					align-items: center;
					justify-content: flex-end;
					.price {
						font-size: 26.38upx;
						color: rgba(153, 153, 153, 1);
					}

					.money {
						font-size: 26.38upx;
						color: rgba(252, 51, 56, 1);
					}
				}
				.other_left {
					height: auto;
					width: 50%;
					float: left;
					display: flex;
					line-height: 41.66upx;
					align-items: center;
					justify-content: flex-start;
					.price {
						font-size: 26.38upx;
						color: rgba(153, 153, 153, 1);
					}

					.money {
						font-size: 26.38upx;
						color: rgba(252, 51, 56, 1);
					}
				}
				.other_right {
					height: auto;
					width: 50%;
					float: right;
					display: flex;
					line-height: 41.66upx;
					align-items: center;
					justify-content: flex-end;
					clear: both;
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
}

.zidingyi {
	width: 100%;
	height: auto;

	.top {
		width: 100%;
		height: auto;
		.boxCent;
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
			color: rgba(255, 255, 255, 1);
			margin-right: 19.44upx;
			margin-bottom: 20.83upx;
			text-align: center;
			line-height: 81.94upx;
		}
		.tabactive {
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
