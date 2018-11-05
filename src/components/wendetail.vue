<template>
    <div id="wendetail">
        <div class="search1">
               <span class="zifu" @click="wenlist"></span>
              <span class="zifu1">问问详情</span>
        </div>
        <div class="container">
            <div class="list">
                <div class="bigDiv">
                    <div class="title"> <span>{{arr.question}}</span> </div>
                    <div class="content"><span v-html="arr.answer"></span></div>
                </div>
                
            </div>
            <div class="bottom">
                <img src="../../resoure/images/mine/yijie.png" alt="">
                <img src="../../resoure/images/mine/nojie.png" alt="" style="margin-left:2.8rem">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:'',
       
        }
    },
    methods:{
        wenlist(){
            this.$router.goBack()
        },
    },
     mounted(){
   
      if(this.$route.params.Id!==undefined){
        this.Id=this.$route.params.Id
        localStorage.setItem("id",this.$route.params.Id);
      }else{
       this.Id=localStorage.getItem("id")
      }
          var than = this;
        console.log(than.Id);
         this.tokenId=localStorage.getItem("userinfo");
         console.log(this.tokenId);
       if(this.tokenId){
                this.$axios.defaults.headers.common["token"] =this.tokenId;
                this.$axios({
                    url:"http://xcx.xywol.com/index.php/api/version/MyQuestDetails",
                    method:"post",
                     data:{"id":than.Id} 
                }).then(function(res){
                    console.log(res.data.data);
                    console.log("成功的回调");
                    than.arr=res.data.data
                  
                })
                .catch(function(err){
                    console.log("失败的回调")
                    
                });
            }

     }
}
</script>
<style scoped>
#wendetail{
    width: 100%;
    height: 100%;
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
.search1 .zifu1{
    font-size: 1.2rem;
    letter-spacing: 1.5px;
}
.container{
      width: 100%;
      height: 100%;
      top: 3rem;
      position: absolute;
      background: #efefef;
}
.list{
   width: 90%;
   margin: auto;
}
.bigDiv{
    width:100%;
    height:30rem;
    color: #aaa;
    font-size: 0.9rem;
    background: #fff;
    border-radius: 0.35rem;
    margin: 1.4rem auto 0 auto;
}
.bigDiv .title{
    height: 2.5rem;
    color: #f58823;
    font-size: 1rem;
    letter-spacing: 0.07rem;
    line-height: 2.5rem;
    border-bottom: 0.14rem #efefef solid;
}
.bigDiv .title span{
    margin-left: 0.5rem;
}
.bigDiv .content{
    width: 95%;
    height:26rem;
    text-indent: 1.78rem;
    margin: auto;
    /* border: 1px solid #000; */
    overflow: auto;
}
.bottom{
    width: 16.7rem;
    height: 2.6rem;
    margin:3.5rem auto;
}
.bottom img{
   width: 6.7rem;
   height: 2.6rem;
}

</style>


