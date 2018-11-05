<template>
    <div id="wenlist">
        <div class="search1">
               <span class="zifu" @click="help"></span>
              <span class="zifu1">我的帮助反馈</span>
        </div>
        <div class="list">
            <!-- <div style="border-top:0.1rem #efefef solid"></div> -->
            <div class="item" v-for='key in arr'>
                <div class="bigDiv" @click="helplist">
                    <span class="yd">【{{key.status}}】</span>
                    <span>{{key.title}}</span>
                    <div class="smallDiv">
                        <span class="txt">{{key.submit_time}}</span>
                        <img src="../../resoure/images/mine/right.png" class="right" alt="">
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
           arr:[],
       }
    },
    methods:{
        help(){
            this.$router.goBack()
        },
        helplist(){
            this.$router.push({path:'/helplist'})
        }
    },
    mounted(){
        this.tokenId=localStorage.getItem("userinfo");
         console.log(this.tokenId);
        var than = this;
         if(this.tokenId){
             this.$axios.defaults.headers.common["token"] =this.tokenId;
              this.$axios.post("http://xcx.xywol.com/index.php/api/version/MfeedbackList?page=1")
              .then(function(res){
                 console.log("成功的回调");
               console.log(res.data.data);
               than.arr=res.data.data
               })
               .catch(err=>{
                   console.log("失败的回调");
                     if(err.response.status === 404){
                        than.$dialog.toast({
                        mes: err.response.data.msg,
                        timeout: 1500
                    })
                   }
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
    /* border-bottom:0.03rem solid #efefef; */
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
.zifu1{
    font-size: 1.2rem;
    letter-spacing: 1.5px;
}
.list{
    width:100%;
    height: 100%;
    background: #fff;
    position: relative;
    top: 3rem;
    /* background: #fff; */
}
.item{
    width: 100%;
    /* margin: auto; */
    /* border: 1px solid #000; */
    background: #fff;
       border-top:0.14rem #efefef solid;
}
 .button{
    width: 100%;
    /* height: 100%; */
    position: fixed;
    bottom: 0;
    border-top:0.14rem #efefef solid;
    background: #fff;
}
.list .bot{
    width:90%;
    /* height:3rem;  */
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
    font-size: 0.9rem;
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

