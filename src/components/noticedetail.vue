<template>
    <div id="noticedetail">
        <div class="search1">
               <span class="zifu" @click="notice"></span>
              <span class="zifu1">公告详情</span>
        </div>
        <div class='list'>
    <div class='bigDiv'>
        <div class="bigDiv1">
      <div class='title'>{{arr.title}}</div>
      <div class='content'  v-html="arr.content">
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
            Id:'',
            arr:[],
        }
    },
 methods:{
        notice(){
            this.$router.goBack()
          
        }
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
       if(this.tokenId){
                this.$axios.defaults.headers.common["token"] =this.tokenId;
                this.$axios({
                    url:"http://xcx.xywol.com/index.php/api/version/InfoNotice",
                    method:"post",
                     data:{"id":than.Id} 
                }).then(function(res){
                    console.log(res.data.data);
                    than.arr=res.data.data
                    console.log("成功的回调");
                  
                })
                .catch(function(err){
                    console.log("失败的回调")
                    
                });
            }

     }
}
</script>
<style scoped>
#noticedtail{
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
.search1 .zifu1{
    font-size: 1.2rem;
    letter-spacing: 1.5px;
}
.list{
    width: 100%;
    height: 100%;
    top:3rem;
    position: absolute;
    background: #efefef;
}
.bigDiv{
    width: 90%;  
   margin: auto;
    font-size: 0.9rem;
 
  
}
.bigDiv1{
    width: 100%;
    height: 100%;
    background: #fff;
      border-radius: 3px;
       color: #6b6b6b;
       margin-top: 1.5rem;
}
.bigDiv .title {
  height: 2.5rem;
  color: #F58823;
  font-size: 1rem;
  letter-spacing: 0.07rem;
  line-height:2.5rem;
  text-indent:0.7rem;
  border-bottom:0.14rem #EFEFEF solid;
}
.bigDiv .content {
  width: 95%;
  height:14.23rem;
  text-indent: 1.78rem;
  margin: 1rem auto;
}
</style>


