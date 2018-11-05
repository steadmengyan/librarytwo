<template>
    <div id="looklist">
        <div class="search1">
            <span class="zifu" @click="data"></span>
            <span class="zifu1">看看</span>  
        </div>  
        <div class="header">
            <div class="search">
                <form>
                      <img src="../../resoure/images/textlist/search.png" alt="" class="icon_search">
                       <input type="text" placeholder="搜索" placeholder-style="color:#999;' ">
                </form>
            </div>  
            <div class="tuij">
                <div class="dianji">
              <button v-for="key in arr1">{{key.name}}</button>
              <!-- <button style='width:4.2rem'>人气</button> -->
              <!-- <img src="../../resoure/images/fax/shx.png"> -->
              <!-- <button>如何学语文</button>
              <button style='width:6.3rem'>阅读记录</button>
              <button style='width:4.2rem'>人气</button> -->
                </div>
                <div class="shuaxin" @click="huan">
                   <img src="../../resoure/images/fax/shx.png">
                   <p >换一换</p>
                </div>
             
            </div>   
        </div>   
        <div class="contList">

            <div class="content1" v-for='key in arr'>
           <div class="content" @click="lookdetail(key.id)">
             <div class="contItems">
                 <img :src="key.cover_url" class="fm" alt="">
                 <ul class="contTxts">
                     <li class="txtTitle">{{key.title}}</li>
                     <li style="margin-top:0.28rem" class="yichu">{{key.desc}}</li>
                      <li class="bot">
                          <p style="margin-right:0.2rem">
                              <img src="../../resoure/images/fax/liul.png" alt="">
                          </p>
                          <span>{{key.views}}</span>
                          <div class="right">
                             
                              <p style="width:2.4rem">收藏</p> 
                               <p>分享赚学分</p>
                          </div>
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
            arr:'',
            arr1:[],
        }
    },
    methods:{
       data(){
           this.$router.goBack()
           
        },
        lookdetail(id){
            console.log(id);
            this.$router.push({
                name:"lookdetail",
                  params:{
                    Id:id
                }
            })
        },
        huan(){
            var than = this;
             this.$axios.get("http:///xcx.xywol.com/index.php/api/version/getCate").then(function(res){
              console.log(res.data.data)
              than.arr1=res.data.data;
              console.log("成功的回调");
         })
         .catch();
        }
    },
     mounted(){
        var than = this
        this.$axios.get("http:///xcx.xywol.com/index.php/api/version/LookList?page=1").then(function(res){
              than.arr=res.data.data
              console.log(res.data.data)
              console.log("成功的回调");
         })
         .catch();
        this.$axios.get("http:///xcx.xywol.com/index.php/api/version/getCate").then(function(res){
              console.log(res.data.data)
              than.arr1=res.data.data;
              console.log("成功的回调");
         })
         .catch();

        
    }
}
</script>
<style scoped>
#looklist{
    width: 100%;
    height: 100%;
}
.yichu{
      height:2.5rem;
      overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 0.9rem;
}
.search1{
    width: 100%;
    height: 3rem;
    background: #fff;
    text-align: center;
    line-height: 3rem;
    font-size: 1rem;
    position: fixed;
    top: 0;
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
.header{
    width: 100%;
    height: 11.3rem;
    color: #999;
    font-size: 1rem;
    background: #fff;
    top: 3rem;
    position: fixed;
    border-bottom: 0.035rem #efefef solid;
    z-index: 99;
}
.header .search{
    width: 90%;
    height: 3.5rem;
    line-height: 3rem;
    border: 0.14rem #ccccd1 solid;
    border-radius: 0.28rem;
    background: #fff;
    opacity: 0.9;
    margin: 1rem auto;

}
.header .search img {
  margin: 1.4rem 0 0 1rem;
}
.header .search input{
    font-size: 1.1rem;
    border: none;
    width: 8.9rem;
    line-height: 3.5rem;
}
.header .search .icon_search{
  width: 1.1rem;
  height: 1.1rem;
  display: inline-block;
  vertical-align: -0.4rem;
}
.header .tuij{
    width: 90%;
    height: 5.7rem;
    margin: 0 auto;
     display: flex;
     flex-wrap: wrap;
}
.header .tuij .dianji{
    width: 80%;
    float: left;
}
.header .tuij .shuaxin{
    width: 20%;
    float: right;
    text-align: center;
    line-height: 1.5rem;
}
.header .tuij button{
   
    height: 1.9rem;
    color: #999;
    font-size: 1rem;
    background: #fff;
    text-align: center;
    line-height: 0.1rem;
    border-radius: 3px;
    margin: 0 1% 0.7rem 0;
    padding: 0.8rem;
    border: none;
    border: 0.05rem solid #999;
}
.header .tuij button:active{
    background-color: #F58823;
    color: #fff;
}
.header .tuij .shuaxin img {
  width: 1.3rem;
  height: 1.5rem;
  margin-top: 0.9rem;
}
.contList{
    width: 100%;
    height: auto;  
    z-index: 1; 
    background: #fff;
    margin-top: 14.2rem;  
 
}
.content1{
    width: 100%;
    height: 7.8rem;
      border-top: 0.07rem #efefef solid;
       border-bottom: 0.07rem #efefef solid;
}
.contList .content{
    width: 90%;
    height: 7.8rem;
    margin: auto;
 
    position: relative;
  
}
.contList .content .fm{
    width: 4.7rem;
    height:6.4rem;
    float: left;

}
.contList .content .contItems {
    width:100%;
    height: 6.4rem;
    margin: auto;
    margin-top: 0.7rem;
  
}
.content .contItems .contTxts{
  width: 72%;
  color: #B2B2B2;
  font-size: 0.9rem;
  margin-left: 5%;
  float: left;
}
.content .contItems .contTxts .txtTitle {
  font-size:1rem;
  color: #F58823;
  font-weight: 600;
  letter-spacing: 0.07rem;
}
.content .contItems .contTxts .bot {
    width:100%;
  height:1.6rem;
  display: flex;
  font-size: 0.9rem;
  letter-spacing: 0.03rem;
  margin-top: 1rem;
}
.content .contItems .contTxts .bot .right {
  width: 8.9rem;
  font-size:0.8rem;
  float: right;
  margin-left: 4.3rem;
}
.content .contItems .contTxts .bot img {
  width: 1.2rem;
  height: 1.2rem;
  display: inline-block;
  vertical-align: middle;
}
.content .contItems .contTxts .bot .right p {
  width: 5rem;
  height:1.4rem;
  line-height: 1.4rem;
  text-align: center;
  margin-left: 0.7rem;
  border: 0.07rem #EFEFEF solid;
  border-radius:3px; 
  float: right;
}
</style>


