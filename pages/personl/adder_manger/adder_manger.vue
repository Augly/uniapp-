<template>
	<view class="content">
		<view class="list">
			<view class="title">
				收货人
			</view>
			<view class="mintitle">
				<input type="text" v-model="name" placeholder="请输入姓名" @input="getName" />
			</view>
		</view>
		<view class="list">
			<view class="title">
				联系电话
			</view>
			<view class="mintitle">
				<input type="number" value="" placeholder="请输入联系电话" />
			</view>
		</view>
		<view class="list">
			<view class="title">
				所在地区
			</view>
			<view class="mintitle" @click="showMulLinkageThreePicker">
				{{pickerText}}
			</view>
		</view>
		<textarea value="" placeholder="请输入详细地址" class="textContent"/>
		<view class="sumbit" @click="sure">
			保存
		</view>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import cityData from '@/common/city.data.js';
	export default {
		data() {
			return {
				name: '',
				mulLinkageTwoPicker: cityData,
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				pickerText: '请选择地区'
			};
		},
		components: {
			mpvuePicker,
			mpvueCityPicker
		},
		created() {
			console.log(cityData)
		},
		onLoad(options) {
			options.id==undefined?'新增地址':'编辑地址'
		},
		methods: {
			showwToast(){
				uni.showToast({
					title:'保存成功!',
					mask:true,
					success: () => {
						
					},
					duration:500
				})
			},
			sure(){
				uni.navigateTo({
					url: '/pages/personl/myadder/myadder'
				})
			},
			getName() {
				console.log(this.name)
			},
			getAdder() {
				console.log(this.adderArr)
			},
			// 三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				this.pickerText = e.label
				console.log(this.pickerText, e)
			}
		},
		onBackPress() {
			if (this.$refs.mpvuePicker.showPicker) {
				this.$refs.mpvuePicker.pickerCancel();
				return true;
			}
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel();
				return true;
			}
		},
		onUnload() {
// 			console.log(this.$refs.mpvuePicker)
// 			if (this.$refs.mpvuePicker.showPicker) {
// 				this.$refs.mpvuePicker.pickerCancel()
// 			}
// 			if (this.$refs.mpvueCityPicker.showPicker) {
// 				this.$refs.mpvueCityPicker.pickerCancel()
// 			}
		}
	}
</script>

<style lang="less">
	@import (reference) '../../../common/public.less';

	page {
		@relative();
		@wh100();
		.backcolor(RGBA(247, 247, 247, 1));
	}

	.list {
		width: 100%;
		height: 83.33upx;
		.boxCent;
		border-bottom: 1.38upx solid rgba(233, 233, 233, 1);
		background-color: rgba(255, 255, 255, 1);
		@flexXB();
		padding: 0upx 23.61upx;
		font-size: 26.38upx;

		.title {
			color: rgba(51, 51, 51, 1);
		}

		.mintitle {
			width: 50%;
			text-align: right;
			color: rgba(153, 153, 153, 1);

			input {
				width: 100%;
				height: 100%;
			}
		}
	}
	.textContent{
		width: 100%;
		height: 261.11upx;
		background-color: rgba(255, 255, 255, 1);
		.boxCent;
		padding: 23.61upx;
		color: rgba(51, 51, 51, 1);
		font-size: 26.38upx;
	}
	.sumbit{
		.botton(583.33upx);
		margin-top: 43.05upx;
	}
</style>
