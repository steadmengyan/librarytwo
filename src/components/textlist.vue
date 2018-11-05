<template>
    <div id="textlixt">
        <div class="header-top">
       <div class="search1">
               <span class="zifu" @click="index"></span>
              <span class="zifu1">同步微课</span>
       </div>
       <div class="header">
           <ul class="headiv">
                <li :class="yanse[index]"  @click="swichNav(index + 1)" v-for="(ke,index) in wkArr">{{wkArr[index]}}</li>
           </ul>
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
      <div class="content" @click="textdetail(k.id)">
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

export default {
    data(){
        return{
            index1:"",
            arr:[],
            yanse:[{"current":true},
               {"current":false},
               {"current":false},
               {"current":false},
               {"current":false},
               {"current":false},
               {"current":false},
               {"current":false},
               {"current":false},
            ],
             
            wkArr:["一年级","二年级","三年级","四年级","五年级","六年级","七年级","八年级","九年级"],
              tokenId:"",
        }
    },
    methods:{
        index(){
             this.$router.goBack()
        },
        ktvip(){
            this.$router.push({
                name:"ktvip",
                params:{
                    ktvip:"tongbu"
                }
            })
        },
        textdetail(id){
              if(this.tokenId){
               this.$router.push({
               name:"textdetail",
               params:{
                   Id:id,
                   textdetail:"tongbu"
               }
           })
           }else{
               this.$dialog.confirm({
                title: '提示',
                mes: '请先登录在观看',
               opts:[{
                   txt:'注册',
                   color:true,
                   callback:()=>{
                       this.$router.push({path:'register'})
                   }
               },
               {
                   txt:'登录',
                   color:true,
                   callback:()=>{
                        this.$router.push({path:'login'})
                   }
               }
               ]
            });
           }
           
        },
        swichNav(index){
            var index1=index-1;
          this.yanse[index1].current=true;
              for(var i=0;i<this.yanse.length;i++){
                  if(i!==index1){
                      this.yanse[i].current=false;
                  }
              }
            console.log(index);
             var than = this;
             this.$axios.get("http://xcx.xywol.com/index.php/api/version/getCourseList?page=1&grade="+index).then(function(res){
                if(res.data.code==200){
                    than.arr=res.data.data;
                    console.log("成功的回调");
                }
         })
         .catch(function(err){
              console.log(err.response);
             console.log("失败的回调");
               if (err.response.status === 404){
                    than.$dialog.toast({
                        mes: err.response.data.msg,
                        timeout: 1500
                    })
                }
         });
            
        },
    },
    mounted:function(){
       this.tokenId=localStorage.getItem("userinfo");
        var than = this;
          this.$axios.get("http://xcx.xywol.com/index.php/api/version/getCourseList?page=1&grade=1").then(function(res){
          than.arr=res.data.data;
          than.Id = res.data.data.cate_id;
          console.log(res.data.data);
         })
         .catch();
       this.index1 = this.$route.params.index1;
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
    font-size: 1.2rem;
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
    letter-spacing: 1.5px;
}

.header{
   width: 100%;
   height: 3rem;
   line-height: 2rem;
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
  font-size: 1rem;
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
.header2 .search-1{
    width: 90%;
    margin: auto;
}

.header2 .search{
    width: 13.2rem;
    height: 1.8rem;
   
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
   line-height: 1.8rem;
  letter-spacing: 0;
  margin-left: 1.14rem;
  border: none;
  float: left;
  color:#999;
}
.header2 .search .icon_search{
  width: 1.1rem;
  height:1.1rem;
  float: left;
  margin: -1.5rem 0 0 11rem;
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
  background: #fff;
  position: relative;
  margin-top: 9.5rem;
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
/* .yincang{
    width:74%;
    height:1.2rem;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    /* -webkit-line-clamp: 2; */
    /* -webkit-box-orient: vertical;
} */ 
.contList {
  /* width: 90%; */
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


