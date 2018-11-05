<template>
    <div id="wenlist">
        <div class="search1">
               <span class="zifu" @click="user"></span>
              <span class="zifu1">问问列表</span>

               <div class="SearchBox">
                <div class="SearchInput">
                    <input type="text" placeholder="请输入课文标题">
                    <span class="CancelSearch" @click="wenwen">返回</span>
                </div>
            </div>
        </div>
        <div class="list">
            <div class="item" v-show="wenti" @click="wentidetail(wenlist.id)">
                <div class="bigDiv">
                    <span class="yd">【相关问题】</span>
                    <span>{{wenlist.question}}</span>
                    <div class="smallDiv">
                        <span class="txt">{{wenlist.ques_time}}</span>
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
            tiaomu:'',
            neirong:"",
            wenlist:"",
            wenti:true,

        }
    },
    methods:{
        user(){
            this.$router.goBack()
        },
        wentidetail(id){
             console.log(id);
            this.$router.push({ 
                name:"wentidetail",
                params:{
                    Id:id
                }})
        },
        wenwen(){
             this.$router.push({path:'/wenwen'})
        }
    },
     mounted(){
          if (this.$route.params.neirong !== undefined) {
         this.neirong = this.$route.params.neirong;
            localStorage.setItem("neirong", this.$route.params.neirong);
            } else {
            this.neirong= localStorage.getItem("neirong");
            }
         console.log( this.neirong );
              var than = this;
              var params = new URLSearchParams();
               params.append("search",this.neirong);
                this.$axios({
                   url:"http://xcx.xywol.com/index.php/api/version/PoseAQuestion?page=1",
                   method:"post",
                  data:params, 
               }).then(function(res){
                   console.log("成功的回调");
                   for(var i =0;i<res.data.data.length;i++){
                     console.log(res.data.data[i].ques_time);
                       than.wenlist=res.data.data[i]
                   }
                   console.log(res.data.data.length);
                 
            })
             .catch(function(err){
                console.log("失败的回调");
                if(err.response.status === 404){
                    than.wenti=false;
                    than.$dialog.toast({
                        mes: err.response.data.msg,
                        timeout: 1500
                    })
                } 

            });
    }
    
}
</script>
<style scoped>
#wenlist{
    width: 100%;
    height: 100%;
    /* background: #fff; */
}

.search1{
    width: 100%;
    height: 6rem;
    background: #fff;
    text-align: center;
    font-size: 1rem;
    position: fixed;
    top:0;
    z-index: 99;
     border-bottom:0.14rem #efefef solid;
}
.search{
    height: 3rem;
    line-height: 3rem;
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
      line-height: 3rem;
}
.SearchBox{
    width:100%;
    height:1.78rem;
    margin-top: 0.5rem;
}
.SearchInput {
    width: 100%;
    height: 1.9rem;
    margin: auto;
}
.SearchInput input{

    border-radius:15px;
    line-height: 1.9rem;
    width: 70%;
    text-align: center; 
    border:1px solid #F58823;
    font-size: 1rem;
    letter-spacing: 1.5px;
}
.CancelSearch{
    width:20%;
    float: right;
     line-height: 1.9rem;
     text-align: center;
     font-size: 1rem;
}
.list{
    width:100%;
    height: 100%;
    background: #fff;
    position: absolute;
    top: 6rem;
}
.item{
    width: 100%;
    background: #fff;
    border-bottom:0.14rem #efefef solid;
}
.item .bigDiv {
    width: 90%;
    margin: auto;
  height: 3rem;
  line-height: 3rem;
   color:#b2b2b2;
    font-size: 0.9rem;
}
.list .item .bigDiv .yd {
  color: #F58823;
}
.list .item .bigDiv .wd {
  color: #F58823;
}
.list .item .right {
  width: 0.4rem;
  height: 0.78rem;
  margin-left: 0.35rem;
}
.smallDiv{
    float: right;
}

</style>

