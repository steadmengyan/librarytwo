<template>
    <div id="textlixt">
        <div class="header-top">
       <div class="search1">
               <span class="zifu" @click="user"></span>
              <span class="zifu1">学习记录</span>
       </div>
       <div class="header2">
           <div class="header2-1">
           <div class="search">
               <form>
                   <input type="text" placeholder="请输入课文标题" placeholder-style="color:#999">
                   <img  class="icon_search" src="../../resoure/images/textlist/search.png" alt="">
               </form>
           </div>
           <div>
               <p @click="ktvip" class="ktvip">
                    你已有<i style="color:#f58823">&nbsp;条&nbsp;</i>学习记录
               </p>
           </div>        
       </div>
    </div>
 </div>   

 <div class="contList1">
  <div class="contList" v-for='key in arr'>
      <div class="content" @click="textdetail">
          <div class="contItems">
              <img :src="key.course[0].cover" class="fm" alt="">
              <ul class="contTxts">
                 <li class="top">
                     <p class="kw">{{key.course[0].lesson}}</p>
                     <i style="margin-left:0.5rem">{{key.course[0].subtitle}}</i>
                 </li>
                 <li class="textTitle">《{{key.course[0].title}}》</li>
                 <li style="margin-top:0.14rem;width:100%" class="yichu">
                   {{key.course[0].desc}}
                 </li>
                 <li class="bot">
                     <p>
                         <img src="../../resoure/images/textlist/time.png" alt="" class="vip">
                         {{key.create_time}}
                     </p>
                       <p>
                          <img src="../../resoure/images/textlist/time1.png" class="fx" alt="">
                         {{key.video_time}}
                      </p>
                 </li>
              </ul>
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
          tokenId:'',
     }
    },
    methods:{
        user(){
            this.$router.goBack()
        },
        ktvip(){
            this.$router.push({
                name:"ktvip",
                params:{
                    ktvip:"jilu"
                }
            })
        },
        textdetail(){
            this.$router.push({
                name:"textdetail",
                params:{
                    textdetail:"xuexi"
                }
            })
        }
    },
     mounted(){
            var than = this;
            this.tokenId=localStorage.getItem("userinfo");//取token
            if(this.tokenId){
                    this.$axios.defaults.headers.common["token"] =this.tokenId;//提交token
                    this.$axios({
                        url:"http://xcx.xywol.com/index.php/api/version/UserRecordList",//接口
                        method:"post",
                        data:{"label":"1","page":"1"} 
                    }).then(function(res){
                        var list = res.data.result;
                        console.log(res.data.data.result);
                        than.arr=res.data.data.result;
                    })
                    .catch(function(err){
                        console.log("失败的回调")
                        
                    });
                }

     }
}
</script>
<style scoped>
#textlist{
    height: 100%;
    padding: 0;
}
.header-top{
    position: fixed;
	left: 0;
	top: 0;
    width: 100%;
    background: #fff;
    z-index: 99;
    padding-bottom: 10px
}
.search1{
    width: 100%;
    height: 3rem;
    background: #fff;
    text-align: center;
    line-height: 3rem;
    font-size: 1rem;
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
.header{
      width: 100%;
      height: 2.5rem;
      background: #fff;
      position: relative;
      overflow: auto;
      border:0.14rem solid  #efefef;
      border-left:none;
      border-right: none;
      margin-top: 0rem;
}
.header .headiv{
     height: 2rem;
    float: left;
    font-size: 0.9rem;
    text-align: center;
    margin: 0.5rem auto;
     display:flex; 
  
}
.header .headiv li{
  width: 4rem;
  letter-spacing: 1px;
  margin-left: 1rem;
  float: left;
  text-align: center;
  font-size: 0.9rem;
}
.header .headiv .current {
  color: #42A5E0;
  text-decoration: underline;
} 
.header2 {
  width: 100%;
  height:2.5rem;
  background: #fff;
  border-bottom: 0.07rem #EFEFEF solid;
  letter-spacing: 0.07rem;
  top: 0.3rem;
  position: relative;
}
.header2-1{
    width: 90%;
    margin: auto;
    height: 2rem;
}
.header2 .search{
    width: 55%;
    height: 1.64rem;
    line-height: 1.64rem;
    color:#999;
    font-size: 0.9rem;
    border: 0.07rem #7ecef4 solid;
    border-radius: 1rem;
    background: #f5f5f5;
    opacity: 0.9;
    margin: 0.64rem 0 0 0rem;

}
.header2 .search input {
  width: 55%;
  letter-spacing: 0;
  margin-left: 1.14rem;
  border: none;
  /* float: left; */
}
.header2 .search .icon_search{
  width: 1.1rem;
  height:1.1rem;
  float: left;
  margin: -1.5rem 0 0 11.5rem;
}
.header2 .ktvip {
  width: 38%;
  height:1.64rem;
  color: #B2B2B2;
  font-size: 0.9rem;
  line-height: 1.64rem;
  margin: -1.4rem 0 0 0;
  float: right;
}

.contList1{
  width: 100%;
  background: #fff;
  position: relative;
  margin-top: 6.4rem;
  z-index: 1;

}
.yichu{
    height:2.5rem;
     overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
}
.contList {
  width:100%;
  height: 9.5rem;
  margin: auto;
  border-bottom:0.07rem #EFEFEF solid;
}
.contList .content {
  height: 9rem; 
  width:90%;
  margin: auto;
 
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.contList .content .fm {
  width: 5.5rem;
  height:7.3rem;
}
.contList .content .contItems {
  width: 100%;
  height: 7.9rem;
  margin:0.7rem auto;
  display: flex; 
}
.content .contItems .contTxts{
  width: 85%;
  color: #B2B2B2;
  font-size: 0.9rem;
  margin-left:1.2rem;
}
.content .contItems .contTxts .top {
  height: 1.2rem;
  display: flex;
  line-height: 1.2rem;
}
.content .contItems .contTxts .top .kw {
  width: 35%;
  height: 1.4rem;
  line-height: 1.5rem;
  color: #eee;
  /* border: 1px solid #000; */
  background: #42A5E0;

  text-align: center;
  border-radius: 3px;
  padding:0 0.5rem;
}
.content .contItems .contTxts .textTitle {
  font-size: 1rem;
  color: #F58823;
  margin-top: 0.39rem;
  letter-spacing: 0.07rem;
}
.content .contItems .contTxts .textTile{
    margin-top: 3rem;
}
.content .contItems .contTxts .bot {
    width: 100%;
    height: 1.1rem;
    display: flex;
    margin-top: 0.5rem;
}
.content .contItems .contTxts .bot p:nth-child(1){
    float: left;
}

.content .contItems .contTxts .bot p:nth-child(2){
    float: right;
    margin-left: 28%;
}
.content .contItems .contTxts .bot .vip {
  width: 1rem;
  height: 1rem;
  margin-right: 0.2rem;
}
.content .contItems .contTxts .bot .fx {
  width: 1rem;
  height:1rem;
}
.content .contItems .contTxts .bot .sc {
  width: 0.6rem;
  height:0.67rem;
  margin: 0.2rem 0.2rem 0 0.78rem;
}
</style>


