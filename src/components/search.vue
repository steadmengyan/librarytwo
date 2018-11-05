<template>
    <div id="search">
          <div class="search1">
              <div class="search">
                   <span class="zifu" @click="index"></span>
                   <span class="zifu1">掌上同步大语文</span>
              </div>
        
            <div class="SearchBox">
                <div class="SearchInput">
                    <input type="text" v-model="neirong" placeholder="请输入课文标题" v-model.trim="title">
                    <span class="CancelSearch" @click="index">取消</span>
                </div>
            </div>
    </div>       
    <!-- 内容 -->
     <div class="contList1">
  <div class="contList" v-for ='key in search '>
      <div class="content" @click="textdetail">
          <div class="contItems">
              <img :src="key.cover" class="fm" alt="">
              <ul class="contTxts">
                 <li class="top">
                     <p class="kw">{{key.lesson}}</p>
                     <i style="margin-left:0.5rem">仅限VIP学员学习</i>
                 </li>
                 <li class="textTitle">《{{key.subtitle}}》</li>
                 <li style="margin-top:0.14rem;width:100%" class="yichu">
                    {{key.title}}
                 </li>
                 <li class="bot">
                     <p>
                         <img src="../../resoure/images/textlist/vip.png" alt="" class="vip">
                         39888人正在学习
                     </p>
                      <!-- <p>
                          <img src="../../resoure/images/textlist/fx.png" class="fx" alt="">
                          分享
                      </p> -->
                       <p>
                          <img src="../../resoure/images/textlist/sc.png" class="fx" alt="">
                         收藏
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
const delay =(function(){
    let timer  = 0;
    return function(callback,ms){
        clearTimeout(timer);
        timer = setTimeout(callback,ms);
    };
})();
export default {
    data(){
        return{
             neirong:'',
             title:'',
             search:[]
        }
    },
    watch:{
        title(){
            delay(()=>{
                this.fetchData();
            },300);
        },
    },
    methods:{
        index(){
           this.$router.goBack()
        },
       textdetail(){
           this.$router.push({path:'/textdetail'})
       },
       async fetchData(){
           var than = this;
             this.$axios({
                   url:"http:///xcx.xywol.com/index.php/api/version/SearchCours?page=1",
                   method:"post",
                  data:{"search":this.title} 
               }).then(function(res){
                   console.log("成功的回调")
                   console.log(res.data.data);
                   than.search = res.data.data;
                   
            })
             .catch(function(err){
                        console.log("失败的回调11111111111");  
                        console.log(err.response.status);
                        if(err.response.status == 400){
                            than.$dialog.toast({
                                mes: "输入搜索内容",
                                timeout: 1500
                    })
                        }
                    });
       }

    },


    
}
</script>
<style scoped>
#search{
     width: 100%;
     height: 100%;
     background: #fff;
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
    background: #f4f4f4;
    border-radius:15px;
    line-height: 1.9rem;
    width: 70%;
    text-align: center; 
    border: none;
    font-size: 1rem;
    letter-spacing: 1.5px;
}
.CancelSearch{
    width:20%;
    float: right;
     color: #ef603D;
     line-height: 1.9rem;
     text-align: center;
     font-size: 1rem;
}
/* 内容 */
.contList1{
  width: 100%;
  background: #fff;
  position: relative;
  margin-top: 6.5rem;
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
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 0.2rem;
}
.content .contItems .contTxts .bot .fx {
  width: 0.7rem;
  height:0.6rem;
}
.content .contItems .contTxts .bot .sc {
  width: 0.6rem;
  height:0.67rem;
  margin: 0.2rem 0.2rem 0 0.78rem;
}
</style>


