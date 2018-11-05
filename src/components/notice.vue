<template>
    <div id="notice">
        <div class="search1">
               <span class="zifu" @click="user"></span>
              <span class="zifu1">最新公告</span>
        </div>
        <div class="list">
            <!-- <div style="border-top:0.1rem #efefef solid"></div> -->
            <div class="item" @click="noticedetail(key.id)" v-for='key in arr'>
                <div class="bigDiv">
                    <span class="yd">【{{key.items_count}}】</span>
                    <span class="title">{{key.title}}</span>
                    <div class="smallDiv">
                        <span class="txt">2018-03-13</span>
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
        user(){
            this.$router.goBack()
        },
        noticedetail(id){
            console.log(id);
            this.$router.push({ 
                name:"noticedetail",
                params:{
                    Id:id
                }})
        }
    },
      mounted(){
        this.tokenId=localStorage.getItem("userinfo");
         console.log(this.tokenId);
        var than = this;
         if(this.tokenId){
             this.$axios.defaults.headers.common["token"] =this.tokenId;
              this.$axios.post("http://xcx.xywol.com/index.php/api/version/Notice?page=1")
              .then(function(res){
                 console.log("成功的回调");
               console.log(res.data.data);
               than.arr=res.data.data;
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
#notice{
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
     border-bottom:0.14rem #efefef solid;

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
    position: absolute;
    top: 3rem;
}
.item{
    width: 100%;
    background: #fff;
       border-bottom:0.14rem #efefef solid;
}

.smallDiv{
    float: right;
}

 .item .bigDiv {
    width: 90%;
    margin: auto;
  height: 3rem;
  line-height: 3rem;
   color:#b2b2b2;
    font-size: 1rem;
}
 .item .bigDiv .yd {
  color: #42A5E0;

}
.item .bigDiv .title{
     /* border: 1px solid #000; */
     width: 13rem;
   overflow: hidden;
   text-overflow:ellipsis;
   white-space:nowrap;
   display: inline-block;
   vertical-align: -1.2rem;
}
 .item .bigDiv .wd {
  color: #F58823;
}
 .item .right {
  width: 0.4rem;
  height: 0.78rem;
  margin-left: 0.35rem;
}
</style>

