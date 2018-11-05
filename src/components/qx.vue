<template>
    <div v-show="!Show.show">
         <div class="apply">
                <div class="title">
                    <span>我要报名</span>
                </div>
                <div class="content">
                    <div class="bigDiv">
                        <form>
                            <div class="item">
                                你的姓名： <input type="text" placeholder='请输入你的姓名' placeholder-style='color:#999;font-size:26rpx'>
                            </div>
                            <div class='item'>
                               微信号码：<input type='text' placeholder='请输入微信号码' placeholder-style='color:#999;font-size:26rpx' />
                             </div>
                             <div class='item'>
                               家庭住址：<input type='text' placeholder='请输入家庭住址' placeholder-style='color:#999;font-size:26rpx' />
                             </div>
                             <div class="yzm">
                                 <input type="text" placeholder='请输入验证码' placeholder-style='color:#B5B2B0;'>
                                 <img src="../../resoure/images/wen/yzm.png" alt="">
                             </div>
                             <div class="but">
                                 <button>提交</button>
                                 <button @click="show">取消</button>
                             </div>
                        </form>
                    </div>
                </div>
            </div>
             <div class="bottom">
                 <div class="big">
                    <div class='small' style="width:4rem">
                       <img src="../../resoure/images/fax/bm.png" class="bm">立即报名
                    </div>
                    <div class='small'>
                       <img src="../../resoure/images/fax/fx.png" class="fx">分享
                    </div>
                    <div class='small'>
                        <img src="../../resoure/images/fax/sc.png" class="sc">收藏
                    </div>
                 </div>
             </div>
    </div>
</template>
<script>
export default {
     props:["Show"],
    methods:{
        show(){
            this.Show.show=!this.Show.show;
        }
    },
}
</script>
<style scoped>
.apply{
    width: 100%;
    height: 21.4rem;
    position: fixed;
    margin-top: 20.2rem;
    background: #efefef;
}
.apply .title{
    width: 100%;
    height: 3rem;
    color: #f58823;
    font-size: 1rem;
    background: #fff;
    line-height: 3rem;
    display: flex;
    padding: 0 1.2rem;
    z-index:99;
    border-bottom: 0.07rem #efefef solid;
}
.apply .title button{
    width: 2.78rem;
    height: 1.4rem;
    color: #fff;
    font-size: 1rem;
    line-height: 1.4rem;
    background: #f58823;
    padding: 0;
    margin: auto 0 auto 16.7rem;
    border: none;
}
.apply .content{
    width: 100%;
    height: 16rem;
    font-size: 0.9rem;
    z-index:1;
    padding: 0 1.2rem;
    margin-top: 0.5rem;
}
.apply .content .bigDiv{
    width: 90%;
    height: 16rem;
    margin: auto;
}
.apply .content .bigDiv .item{
    height: 2.5rem;
    color: #535353;
    line-height: 2.5rem;
    display: flex;
    border-bottom: 0.035rem #c9c9c9 solid;
}
.apply .content .bigDiv .item input {
  width: 68%;
  color: #999;
  margin: 0.4rem 0 0 1.4rem;
  border: none;
}
.apply .content .bigDiv .yzm {
  width: 14.7rem;
  height: 2.14rem;
  margin: 0.7rem auto;
}
.apply .content .bigDiv .yzm input {
  width: 7.1rem;;
  height: 1.9rem;
  color: #B5B2B0;
  background: #fff;
  padding-left: 0.7rem;
  border: 0.035rem #EFEFEF solid;
  border: none;
}
.apply .content .bigDiv .but{
  width:10.7rem;
  margin:0 auto;
  display:flex;
}
.apply .content .bigDiv .but button{
  width:3.5rem;
  height:1.7rem;
  color:#fff;
  font-size:1rem;
  line-height:1.7rem;
  background:#42A5E0;
  padding:0;
  margin:auto;
  border: none;
}
.apply .content .bigDiv .but button:active {
  background: #F58823;
}
.apply .content .bigDiv .yzm img {
  width: 6.25rem;
  height: 1.7rem;
  float: right;
  margin-top: 0.2rem;
}

.bottom{
    width: 100%;
    height: 3rem;
    font-size: 0.7rem;
    color: #666;
    background: #fff;
    line-height: 3rem;
    text-align: center;
    letter-spacing: 0.07rem;
    border-top: 0.35rem #efefef solid;
    bottom:0;
    position: fixed;
}
.bottom .big .small {
  width: 2rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  float: right;
  margin-right: 2rem;
}
.bottom .big .small .sc {
  width: 1.3rem;
  height: 1rem;
  margin: 0.4rem auto -0.7rem auto;
}
.bottom .big .small .fx {
  width: 1.3rem;
  height: 1rem;
  margin: 0.4rem auto -0.7rem auto;
}
.bottom .big .small .bm {
  width: 1.57rem;
  height: 1rem;
  margin: 0.4rem auto -0.7rem auto;
}
</style>

