<template>
    <div class="promoters">
        <div class="search1">
               <span class="zifu" @click="user"></span>
              <span class="zifu1">我的推广中心</span>
        </div>
        <div class="list">
            <div class="item" style="height:3rem;font-size:1rem;line-height:3rem;border-top:none">
                <div class="bigDiv">
                    <span class="wd" >推广人数：<i style="color:#F58823">35</i>人</span>
               
                <div class="smallDiv">
                    <span class="txt" style="color:#f58823;margin-top:-2rem;">VIP开通明细</span>
                     <img src="../../resoure/images/mine/right.png" alt="" class="right">
                    </div>  
            </div>
             </div>
            <div class="item" v-for="key in arr">
                <!-- 注册 -->
                <div class="bigDiv" v-if="!key.vip">
                    <span class="yd">【{{key.create_time}}】</span>
                     <span>
                    <span style="color: #42A5E0;" v-if="key.name">{{key.name}}</span>
                    <span style="color: #42A5E0;" v-if="key.name==''||key.name==null">未知</span>
                   注册了免费会员
                   </span>
                    <div class="smallDiv">
                         <img src="../../resoure/images/mine/right.png" alt="" class="right">
                    </div>
                </div>
               <!-- VIP -->
               <div class="bigDiv" v-if='key.vip'>
                   <span class="wd">【{{key.vip.pay_time}}】</span>
                <!-- 会员卡 -->
                <span v-if="key.vip.order_type ==1">
                    <span style="color:#74bde8" v-if="key.name">{{key.name}}</span>
                    <span style="color:#74bde8" v-if="key.name=='' || key.name == null">未知</span>
                    开通{{key.vip.severalyears}}年VIP
                </span>
                <!-- 线上购买 -->
                <span v-if="key.vip.order_type ==2">
                    <span style="color:#74bde8" v-if='key.name'>{{key.name}}</span>
                    <span style="color:#74bde8" v-if="key.name=='' || key.name == null">未知</span>
                    开通了VIP学院卡
                </span>
                <div class="smallDiv">
                         <img src="../../resoure/images/mine/right.png" alt="" class="right">
                    </div>
               </div>


            </div>    

           
  </div>
    </div>
</template>
<script>
export default {
    data(){
       return{
            tokenId:"",
            arr:[],
       }
    },
    methods:{
        user(){
            this.$router.goBack()
        },
    },
    mounted(){
        this.tokenId=localStorage.getItem("userinfo");
         console.log(this.tokenId);
        var than = this;
        if(this.tokenId){
             console.log("2222222222222222222")
             this.$axios.defaults.headers.common["token"] =this.tokenId;
              this.$axios.post("http:///xcx.xywol.com/index.php/api/version/getUserPromoters?page=1")
              .then(function(res){
                console.log("成功的回调");
                // console.log(res.data.data.result[4].vip);
                than.arr = res.data.data.result;
              

               })
               .catch(err=>{
                   console.log("失败的回调1111")
               });
        }
    }
    
}
</script>
<style scoped>
.promoters{
    width: 100%;
    height: 100%;
    background: #fff;
}

.search1{
    width: 100%;
    height: 3rem;
    background: #fff;
    text-align: center;
    line-height: 3rem;
    font-size: 1rem;
    position: fixed;
    z-index: 99;
}
.search1 .zifu{
    position: absolute;
    left: 0.9rem;
    top:1rem;
    width: 1rem;
    height: 1rem;
    line-height: 3rem;
    border-left:0.1rem solid #000;
    border-bottom:0.1rem solid #000;
    display: inline-block;
    transform: rotate(45deg);
}
.search1 .zifu1{
    font-size: 1.2rem;
    letter-spacing: 1.5px;
}
.list{
    width:100%;
    height: 100%;
    background: #fff;
    position: relative;
    top: 3rem;
   
}
.item{
    width: 100%;
    background: #fff;
     border-bottom:0.14rem #efefef solid;
}
.list .bot{
    width:90%;
    margin: auto;
    height: 3rem;
    color:#b2b2b2;
    font-size: 0.9rem;
    line-height: 3rem;
    text-align: center;
}

.smallDiv{
    float: right;
}
.smallDiv .right{
      width: 0.4rem;
        height: 0.7rem;
}

.list .item .bigDiv {
    width: 90%;
    margin: auto;
    height: 3rem;
    line-height: 3rem;
    color:#b2b2b2;
    font-size: 1rem;
}
.list .item .bigDiv .yd {
  color: #F58823;
}
.list .item .bigDiv .wd {
  color: #42A5E0;
}
.list .item .right {
  width: 0.4rem;
  height: 0.78rem;
  margin-left: 0.35rem;
}
</style>

