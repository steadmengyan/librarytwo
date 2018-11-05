<template>
    <div id="actdetail">
        <div class="search1">
               <span class="zifu" @click="activity"></span>
              <span class="zifu1">活动详情</span>
        </div>
        <div class="container">
            <div class="header">
                <div class="one">
                    <img :src="arr.detail_top" alt="" class="fm">
                    <div class="title">{{arr.desc}}</div>
                    <span>报名截止：{{arr.end_time}}</span>
                    <span style="margin-left:2.14rem">已报名: <span style="color:#f58823">{{arr.people}}</span>人</span>
                    <span style=margin-left:1.4rem;color:#f58823>￥{{arr.price}}</span>元
                </div>
             </div>

                <div style="height:0.07rem;background:#efefef;margin-top:-0.6rem;width:100%"></div>

                <div class="header1">
                <div class="tow">
                    <div class="item">
                        <img src="../../resoure/images/fax/rili.png" class="rl" alt="">
                        <div>{{arr.start_time}}</div>
                    </div>
                    <div class="item">
                        <img src="../../resoure/images/fax/weiz.png" class="wz" alt="" style="width: 1rem; height: 1.4rem; margin: 0.4rem 0 0 0.2rem">
                        <div style="border:none">{{arr.address}}</div>
                        <span style="float:right;margin-top:-1.9rem">></span>
                    </div>
                </div>
                </div> 
 </div>
            <!-- 活动介绍 -->
     <keep-alive>
        <Ljbm :Show="Show"></Ljbm>
    </keep-alive> 

      <!-- 报名窗口       -->
     <keep-alive>
        <Qx :Show="Show"></Qx>
    </keep-alive>
       
    </div>
</template>
<script>
import Ljbm from '@/components/ljbm'
import Qx from '@/components/qx'

export default {
    data(){
 return{
      Show:{
        show:true,
        Id:'',
        
      },
      arr:'',
 }
},
     methods:{
        activity(){
            this.$router.goBack()
        },
     },
      components:{
      Ljbm,
      Qx,
   },
   mounted(){
       if (this.$route.params.Id !== undefined) {
      this.Id = this.$route.params.Id;
      localStorage.setItem("id", this.$route.params.Id);
    } else {
      this.Id = localStorage.getItem("id");
    }
              var than = this;
              var params = new URLSearchParams();
               params.append("id",this.Id);
                this.$axios({
                   url:"http:///xcx.xywol.com/index.php/api/version/InfoActivity",
                   method:"post",
                  data:params, 
               }).then(function(res){
                   console.log("成功的回调");
                   console.log(res.data.data)
                   than.arr=res.data.data;
                  
                 
            })
             .catch(function(err){
                console.log("失败的回调");
                
            });
      
   }
}
</script>
<style scoped>
#actdetail{
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
    border-bottom:0.03rem solid #efefef;
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
.container{
    width: 100%;
    height: 17.3rem;
    position: fixed;
    background: #fff;
    z-index: 1;
    top: 3.1rem;
    border-bottom: 0.4rem #efefef solid;
}
.header{
    width: 90%;
    color: #b2b2b2;
    margin: auto;
}
.header .one{
    width: 100%;
    height: 12.7rem;
    margin: auto;
    font-size: 0.8rem;
}

.header .one .fm{
    width: 100%;
    height: 7.14rem;
}
.header .one .title{
    width: 100%;
    color:#f58823;
    font-size: 1rem;
    margin: 0.4rem auto;
}
.header1{
    width: 90%;
    color: #b2b2b2;
    margin: auto;
}
.header1 .tow{
    width: 95%;
    height: 5.14rem;
    margin: auto;
}
.header1 .tow .item{
    height: 2.57rem;
}
.header1 .tow .item .rl{
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.4rem;
}

.header1 .tow .item div{
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    margin: -2.14rem 0 0 2.5rem;
    border-bottom: 0.07rem #efefef solid;
}

</style>



