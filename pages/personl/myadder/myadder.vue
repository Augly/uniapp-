<template>
  <view>
    <view class="adderWrap">
      <view
        class="addlist"
        v-for="(item,index) in adderrList"
        :key='index'
      >
        <view class="resGroup">
          <view class="nameGroup">
            <text class="name">{{item.name}}</text>
            <text class="tel">{{item.tel}}</text>
          </view>
          <view class="adderRes">
            {{item.adder}}{{item.adderRes}}
          </view>
        </view>
        <view class="scopeGroup">
          <view
            class="selectGroup"
            @click.stop="select(item.id,item.check)"
          >
            <text
              class="iconfont"
              :class="item.check?'icon-xuanze':'icon-unxuanze'"
            ></text>
            默认地址
          </view>
          <view
            class="editGroup"
            @click.stop="edit(item.id,index)"
          >
            <text class="iconfont icon-bianji"></text>
            编辑
          </view>
          <view
            class="delGroup"
            @click.stop="del(item.id,index)"
          >
            <text class="iconfont icon-shanchu"></text>
            删除
          </view>
        </view>
      </view>
    </view>
    <view
      class="bottonGroup"
      @click="addAdder"
    >
      新增地址
    </view>
  </view>
</template>

<script>
export default {
	data() {
		return {
			adderrList:[{
				id:1,
				check:true,
				name:'刘晶晶',
				tel:'13943456778',
				adder:'北京市北京市海淀区',
				adderRes:'天秀路天秀花园街道海淀区天秀路天秀花园街道10号',
			},
			{
				id:2,
				check:false,
				name:'刘晶晶',
				tel:'13943456778',
				adder:'北京市北京市海淀区',
				adderRes:'天秀路天秀花园街道海淀区天秀路天秀花园街道10号',
			}]
		};
	},
	methods:{
		//切换默认地址
		select(id,index){
			this.adderrList.forEach((item,index)=>{
				item.check=false;
				item.id==id?item.check=!item.check:''
			})
		},
		//删除地址
		del(id,index){
			uni.showLoading({
				title:'正在删除...',
				mask:true,
				success: () => {
					setTimeout(()=>{
						uni.hideLoading()
						uni.showToast({
							title:'删除成功',
							mask:true,
							duration:1000,
							success: () => {
								this.adderrList.splice(index,1)
							}
						})
					},1000)
				}
			})
		},
		//编辑地址
		edit(id,index){
			uni.navigateTo({
				url: "/pages/personl/adder_manger/adder_manger?id="+id,
				success: res => {},
				fail: () => {},
				complete: () => {}
			})
		},
		addAdder(){
			uni.navigateTo({
				url: "/pages/personl/adder_manger/adder_manger",
				success: res => {},
				fail: () => {},
				complete: () => {}
			})
		}
	}
};
</script>

<style lang="less" scoped>
@import (reference) "../../../common/public.less";

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
  .scopeGroup {
    width: 100%;
    height: 75upx;
    font-size: 25upx;
    color: rgba(153, 153, 153, 1);
    @flexXR();
    .iconfont {
      margin-right: 13.88upx;
    }
    .selectGroup {
      margin-right: auto;
    }
    .selectGroup .icon-xuanze {
      color: RGBA(45, 171, 247, 1);
    }
    .selectGroup .iconfont {
      font-size: 26.38upx;
    }
    .editGroup {
      margin-right: 47.22upx;
      .iconfont {
        font-size: 34.72upx;
      }
    }
    .delGroup .iconfont {
      font-size: 34.72upx;
    }
  }
}
.bottonGroup {
  .botton(583.33upx);
  margin-top: 55.55upx;
}
</style>
