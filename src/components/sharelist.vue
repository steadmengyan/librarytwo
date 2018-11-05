<template>
    <div id="sharelist">
         <div class="header-top">
       <div class="search1">
               <span class="zifu" @click="index"></span>
              <span class="zifu1">名家分享</span>
       </div>
       <div class="header2">
              <div class="search-1">
           <div class="search">
            
               <form>
                   <input type="text" placeholder="请输入课文标题" placeholder-style="color:#999">
                   <img  class="icon_search" src="../../resoure/images/textlist/search.png" alt="">
               </form>
           </div>
           <div>
               <p @click="ktvip" class="ktvip">
                   <img src="../../resoure/images/textlist/vip.png" alt="">
                    开通<i style="color:#f58823">VIP</i>学员
               </p>
           </div>
           </div>
           <!-- <div>
               <div class="ktvip">
                   <img src="../../resoure/images/textlist/vip.png" alt="">
                  <div class="guest-button-list"></div>
                  <span style="color:#f58823;margin-left:0.78rem;">我要咨询</span> 
               </div>
           </div> -->           
       </div>
    </div>

<div class="contList1">
  <div class="contList" v-for="k in arr">
      <div class="content" @click="sharedetail(k.id)">
          <div class="contItems">
              <img :src="k.cover" class="fm" alt="">
              <ul class="contTxts">
                 <li class="top">
                     <p class="kw">{{k.lesson}}</p>
                     <i style="margin-left:0.5rem">{{k.subtitle}}</i>
                 </li>
                 <li class="textTitle">{{k.title}}</li>
                 <li style="margin-top:0.14rem;width:100%" class="yichu">
                    {{k.desc}}
                 </li>
                 <li class="bot">
                     <div class="xf1">
                        仅需<span style="color:#f58823">{{k.credit}}</span>学分
                    </div>
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
export default {
    data(){
        return{
             arr:[],
        }
    },
    methods:{
        index(){
            this.$router.goBack()
        //    this.$router.push({path:'/'})
        },
        ktvip(){
            this.$router.push({
                name:"ktvip",
                params:{
                    ktvip:"mingjiafenxiang"
                }
            })
        },
        sharedetail(id){
           this.$router.push({
               name:'sharedetail',
               params:{
                   Id:id
               }
           })
        }
    },
    mounted(){
        var than = this
        this.$axios.get("http://xcx.xywol.com/index.php/api/version/getshareCourselist").then(function(res){
              than.arr=res.data.data
         })
         .catch();
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
.zifu1{
    font-size: 1.1rem;
    letter-spacing: 1.5px;
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
.header2 .search-1{
    width: 90%;
    margin: auto;
}

.header2 .search{
    width: 13.2rem;
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
  width: 9.9rem;
  letter-spacing: 0;
  margin-left: 1.14rem;
  line-height: 1.6rem;
  border: none;
  float: left;
}
.header2 .search .icon_search{
  width: 1.1rem;
  height:1.1rem;
  float: left;
  margin: -1.3rem 0 0 11rem;

}
.header2 .ktvip {
  width: 34%;
  height:1.64rem;
  color: #B2B2B2;
	font-size: 0.9rem;
  line-height: 1.64rem;
  margin: -1.4rem 0 0 1.7rem;
  float: right;
}
.header2 .ktvip img {
  width: 0.9rem;
  height: 0.9rem;
}
.contList1{
  width: 100%;
  height:100%;
  background: #fff;
  position: relative;
  margin-top: 6.5rem;
  z-index: 1;

}
.yichu{
    height:2.4rem;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.contList {
  width:100%;
  height:9.5rem;
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
  width: 43%;
  height: 1.4rem;
  line-height: 1.5rem;
  color: #eee;
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
    margin-left: 48%;
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