<template>
    <div id="help">
         <div class="search1">
               <span class="zifu" @click="user"></span>
              <span class="zifu1">帮助反馈</span>
        </div>
        <div class="container">
            <div class="list">
                <div style="border-top:0.14rem #efefef solid"></div>
                <div class="header">
                    <div class="look">
                        <div class="look1">
                        <img src="../../resoure/images/mine/bfq.png" alt="" class="bfq">
                        <span  @click="helpdetail">观看使用教程</span> 
                        <span class="fk" style="float:right" @click="myfk">我的反馈</span>
                    </div>
                </div>
            </div>
            <div class="gundong">
                <div class="item" v-for='(key,index) in arr'>
                    <div class="bigDiv" @click="helpdetail">
                        <span>{{key.title}}</span>
                        <img src="../../resoure/images/mine/right.png" alt="" class="right">
                    </div>
                </div>
          
           
                <!-- <div class="item">
                    <div class="bigDiv">
                        <span>怎么使用大语文</span>
                        <img src="../../resoure/images/mine/right.png" alt="" class="right">
                    </div>
                </div>
       
                <div class="item">
                    <div class="bigDiv">
                        <span>怎么使用掌上大语文</span>
                        <img src="../../resoure/images/mine/right.png" alt="" class="right">
                    </div>
                </div>
         
          
                <div class="item">
                    <div class="bigDiv">
                        <span>关于学分问题</span>
                        <img src="../../resoure/images/mine/right.png" alt="" class="right">
                    </div>
                </div>

                 <div class="item">
                    <div class="bigDiv">
                        <span>关于学分问题</span>
                        <img src="../../resoure/images/mine/right.png" alt="" class="right">
                    </div>
                </div>

                 <div class="item">
                    <div class="bigDiv">
                        <span>关于学分问题</span>
                        <img src="../../resoure/images/mine/right.png" alt="" class="right">
                    </div>
                </div>

                 <div class="item">
                    <div class="bigDiv">
                        <span>关于学分问题</span>
                        <img src="../../resoure/images/mine/right.png" alt="" class="right">
                    </div>
                </div> -->
           </div>     
          
          <div class="bottom1">
            <div class="bottom">
                <div class="title">还没解决你的问题?</div>
                <textarea placeholder='请输入你想反馈的问题' placeholder-style='color:#aaa' fixed="true"></textarea>
                <div class="tjDiv">
                    <div class="tj">提交反馈</div>
                </div>
                <div class="yzm">
                    <form>
                        <input type="text" placeholder='请正确输入验证码' placeholder-style="color:#B5B2B0">
                        <img src="../../resoure/images/wen/yzm.png" alt="">
                    </form>
                </div>
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
        helpdetail(){
            this.$router.push({path:'/helpdetail'})
        },
        myfk(){
            this.$router.push({path:'/myfk'})
        },
    },
  mounted(){
       var than = this;
         this.$axios.get("http://xcx.xywol.com/index.php/api/version/feedback?page=1").then(function(res){
            than.arr=res.data.data
            console.log(res.data.data);
         })
         .catch();
    }
}
</script>
<style scoped>
.help{height: auto;}
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
    height:100%;
    position: absolute;
    top: 3rem;
    background: #efefef;
}
.list{
    width: 100%;
    margin: auto;
    height:20rem;
 
}
.gundong{
       overflow: auto;
       height:15rem;
        overflow-y: scroll;
}
.list .header{
    width: 100%;
    height: 5.35rem;
    background: #fff;
     overflow:hidden;
    border-bottom: 0.07rem #efefef solid;
}
.list .header .look{
    width: 100%;
     height: 3.5rem;
     color: #fff;
     line-height: 3.5rem;
     font-size: 1rem;
     background: #42a5e0;
     border-radius: 0.35rem;
     margin: auto;
     margin-top:1rem; 

}
.list .header .look .look1 {
    width:95%;
    margin: auto;
}
.list .header .look .bfq {
  width: 1.14rem;
  height: 1.14rem;
line-height: 2rem;
  margin: 0 0.7rem 0 0.5rem;
}
.list .header .look .fk{
    margin-right: 1rem;
}
.list .item1{
    width: 100%;
     
}
.list .item {
     width: 100%;
    height: 3rem;
    background: #fff;
     border-bottom: 0.07rem #EFEFEF solid;
       line-height: 3rem;
     font-size: 1rem;
     color: #999;
     margin: auto; 
}
.list .item .bigDiv {
  width: 94%;
  margin: auto;
  /* overflow: auto; */
}

.list .item .right {
  width: 0.4rem;
  height: 0.7rem;
  float: right;
  margin: 1rem 0 0 0.35rem;
} 
 .bottom1{
    width: 100%;
    height: 19.28rem;
    color: #b2b2b2;
    font-size: 1rem;
    position: fixed;
    bottom: -1rem;
}
.bottom{
    width: 95%;
     height: 18.5rem;
    margin: auto;
    background: #fff;
    letter-spacing: 0.07rem;
    border-radius: 3px;
}
.list .bottom .title {
  height: 2.5rem;
  color: #595757;
  font-size: 1.1rem;
  text-align: center;
  line-height: 2.5rem;
  border-bottom: 0.14rem #EFEFEF solid;
}
.list .bottom textarea {
  width:100%;
  height: 7.8rem;
  margin: 1rem auto 0 auto;
  border: none;
  text-indent: 1.7rem;
}
.list .bottom .tjDiv {
    line-height: 3.5rem;
  height: 3.5rem;
  border-top:0.07rem #EFEFEF dashed;
  border-bottom: 0.14rem #EFEFEF solid;
}
.list .bottom .tj {
  width: 6rem;
  height: 2.14rem;
  color: #42A5E0;
  font-size: 1rem;
  text-align: center;
  line-height:2.14rem;
  background: #fff;
  border: 0.035rem #F58823 solid;
  margin:0.6rem auto;
}
.list .bottom .yzm input {
  width: 9rem;
  height:1.7rem;
  font-size: 0.9rem;
  border: 0.035rem #EFEFEF solid;
  padding-left: 1.1rem;
  margin: 1rem 0 0 3rem;
  
}
.list .bottom .yzm img {
  width: 6.25rem;
  height: 1.78rem;
  float: right;
  margin-top: 1rem;
 margin-right: 4rem;
}
</style>



