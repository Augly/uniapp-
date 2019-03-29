<template>
	<view>
		<view class="adderWrap">
			<view class="addlist">
				<view class="resGroup">
					<view class="nameGroup">
						<text class="name">刘晶晶</text>
						<text class="tel">13943456778</text>
					</view>
					<view class="adderRes">
						北京市海淀区天秀路天秀花园街道海淀区天秀路天秀花园街道10号
					</view>
				</view>
				<view class="scopeGroup">
					<view class="selectGroup">
						<text class="iconfont icon-unxuanze"></text>
						默认地址
					</view>
					<view class="editGroup">
						<text class="iconfont icon-bianji"></text>
						编辑
					</view>
					<view class="delGroup">
						<text class="iconfont icon-shanchu"></text>
						删除
					</view>
				</view>
			</view>
			<view class="addlist">
				<view class="resGroup">
					<view class="nameGroup">
						<text class="name">刘晶晶</text>
						<text class="tel">13943456778</text>
					</view>
					<view class="adderRes">
						北京市海淀区天秀路天秀花园街道海淀区天秀路天秀花园街道10号
					</view>
				</view>
				<view class="scopeGroup">
					<view class="selectGroup">
						<text class="iconfont icon-xuanze"></text>
						默认地址
					</view>
					<view class="editGroup">
						<text class="iconfont icon-bianji"></text>
						编辑
					</view>
					<view class="delGroup">
						<text class="iconfont icon-shanchu"></text>
						删除
					</view>
				</view>
			</view>
		</view>
		<view class="bottonGroup">
			新增地址
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="less" scoped>
@import (reference) '../../../common/public.less';

page {
	@relative();
	@wh100();
	.backcolor(RGBA(255, 255, 255, 1));
}
.adderWrap {
	border-bottom: 22.22upx solid rgba(245, 245, 245, 1);
}
.addlist {
	width: 100%;
	height: auto;
	.boxCent;
	padding: 0upx 23.61upx;
	border-top: 22.22upx solid rgba(245, 245, 245, 1);
	.resGroup {
		width: 100%;
		.nameGroup {
			width: 100%;
			height: 80.55upx;
			@flex();
			font-size: 26.38upx;
			color: rgba(51, 51, 51, 1);
			.tel {
				margin-left: 27.77upx;
			}
		}
		.adderRes {
			margin: 0upx 0upx 33.33upx 0upx;
			font-size: 22.22upx;
			color: rgba(102, 102, 102, 1);
		}
		border-bottom: 1.38upx solid rgba(233, 233, 233, 1);
	}
	.scopeGroup{
		width: 100%;
		height: 75upx;
		font-size: 25upx;
		color: rgba(153, 153, 153, 1);
		@flexXR();
		.iconfont{
			margin-right: 13.88upx;
		}
		.selectGroup{
			margin-right: auto;
		}
		.selectGroup .icon-xuanze{
			color: RGBA(45, 171, 247, 1)
		}
		.selectGroup .iconfont{
			font-size: 26.38upx;
		}
		.editGroup {
			margin-right: 47.22upx;
			.iconfont{
				font-size: 34.72upx;
			}
		}
		.delGroup .iconfont{
			font-size: 34.72upx;
		}
	}
}
.bottonGroup{
	.botton(583.33upx);
	margin-top: 55.55upx;
}
</style>
