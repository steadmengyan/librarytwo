<template>
    <div class="wenlist">
        <div class="search1">
               <span class="zifu" @click="user"></span>
              <span class="zifu1">我的学分</span>
        </div>
        <div class="list">
            <div class="item" style="height:3rem;font-size:1rem;line-height:3rem;border-top:none">
                <div class="bigDiv">
                    <span class="yd" >总学分</span>
               
                <div class="smallDiv">
                    <span class="txt" style="color:#f58823;margin-top:-2rem;">{{zongfen}}分</span>
                    </div>  
            </div>
             </div>
            <!-- <div style="border-top:0.1rem #efefef solid"></div> -->
            <div class="item" v-for='(k,index) in xuefen'>
                <div class="bigDiv">
                    <span class="yd">【{{k.create_time}}】</span>
                    <span>{{k.note}}</span>
                    <div class="smallDiv">
                        <span class="txt">+{{k.score}}分</span>
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
            xuefen:[],
            zongfen:"",
            searchSongList: [], //放置返回数据的数组
            searchPageNum: 1,   // 设置加载的第几次，默认是第一次
            callbackcount: 15,      //返回数据的个数

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
        // var id=this.tokenId
        if(this.tokenId){
             this.$axios.defaults.headers.common["token"] =this.tokenId;
              this.$axios.post("http://xcx.xywol.com/index.php/api/version/getMyCredit?page=1")
              .then(function(res){
                //   console.log(res.data.data.list);
             console.log(res.data.code); 
             than.zongfen=res.data.code;
               than.xuefen=res.data.data.list
                console.log("11111--->"+ than.xuefen);
               })
               .catch(err=>{
                   console.log("失败的回调1111")
               });
              }

    }
    
}
</script>
<style scoped>
#wenlist{
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
    border-top:0.14rem #efefef solid;
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

.list .item .bigDiv {
    width: 90%;
    margin: auto;
    height: 3rem;
    line-height: 3rem;
    color:#b2b2b2;
    font-size: 1rem;
}
.list .item .bigDiv .yd {
  color: #42A5E0;
}
.list .item .bigDiv .wd {
  color: #F58823;
}
.list .item .right {
  width: 0.4rem;
  height: 0.78rem;
  margin-left: 0.35rem;
}
</style>

