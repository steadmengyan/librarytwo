<template>
    <div id="note">
    <div class="header-top">
       <div class="search1">
               <span class="zifu" @click="user"></span>
              <span class="zifu1">我的笔记</span>
       </div>
       <div class="header2">
           <div class="header2-1">
              <div class="search">
               <form>
                   <input type="text" placeholder="请输入年月日/课文标题" placeholder-style="color:#999">
                   <img  class="icon_search" src="../../resoure/images/textlist/search.png" alt="">
               </form>
           </div>
           <div class="right">
            <span style='margin:20rpx 0 0 60rpx'>你已有<span style='color:#F58823'>{{tiaoshu}}条</span>学习笔记</span>
           </div>
       </div>
      </div>
     </div>   

  <div class="container">
      <div class="list" v-for='(k,index) in biji'>
          <div class="list1">
          <input type="checkbox"class="input_check" v-model="checkedNames" v-bind:id="k.id" v-bind:value="k.id">
          <label v-bind:for="k.id"></label>

          <div @click="notedetail(k.id)" class="item">
                  <div class="bigDiv">
                      <span class="rq">【{{k.create_time}}】</span>
                      <i class="bt">{{k.title}}</i>
                      <div class="smallDiv">
                          <span class="txt">笔记详情</span>
                          <img src="../../resoure/images/mine/right.png" alt="" class="right">
                      </div>
                  </div>
          </div>
      </div>
      </div> 
<!-- {{checkedNames}} -->
    </div>  
         
         <div class="bot">
             <div class="big">
                 <p class="small" @click="del">
                     <img src="../../resoure/images/mine/del.png" alt="" class="del">删除
                 </p>
                  <p class="small" @click="xiugai">
                     <img src="../../resoure/images/mine/upd.png" alt="" class="upd">修改
                 </p>
                  <p class="small" @click="top">
                     <img src="../../resoure/images/mine/top.png" alt="" class="top">置顶
                 </p> 
             </div>
         </div>
    </div>
</template>
<script>
export default {
    inject:['reload'],
    data(){
      return{
          biji:[],
          tiaoshu:"",
          checkId:"",
          dianji:true,
          checkedNames:[],   
      }
    },
     methods:{
        user(){
            this.$router.goBack()
        //    this.$router.push({path:'/user'})
        },
        notedetail(id){
            console.log(id);
             this.$router.push({
                name:"notedetail",
                params:{
                    Id:id,
                }
            })
        },
        // 删除
        del(){
            this.tokenId=localStorage.getItem("userinfo");
            var than = this;
             console.log(this.checkedNames);
            if(this.checkedNames.length>0){
                   this.$dialog.confirm({
                    title: '提示',
                    mes: '确定要删除选中的笔记吗！',
                    opts: () => {
                        this.$dialog.toast({mes: '你点了确定', timeout: 1000});
                              var than = this;
                if(this.tokenId){
              this.$axios.defaults.headers.common["token"] =this.tokenId;
               this.$axios({
                   url:"http://xcx.xywol.com/index.php/api/version/MyNoteNotdisplay",
                   method:"post",
                  data:{"ids":this.checkedNames} 
               }).then(function(res){
                   console.log("成功的回调")
                    than.reload();
            })
             .catch(function(err){
                        console.log("失败的回调11111111111");   
                    });
                  }
                }
              });
            }else{
                if(this.checkedNames.length == 0){
                 this.$dialog.toast({
                    mes: '选择要删除的笔记',
                    timeout: 1500
                });
              }
            }          
           },
        //    修改
           xiugai(){
                 var than = this;
                 console.log(this.checkedNames);
                 if(this.checkedNames.length>0){
                     if(this.checkedNames.length !=1){
                         this.$dialog.toast({
                         mes: '一次只能修改一条数据',
                         timeout: 1500
                });
                 }else{
                        this.$router.push({
                        name:"notedetail",
                        params:{
                         Id:this.checkedNames[0],
                        }
                    })
                  }
              }else{
                  this.$dialog.toast({
                         mes: '选择要修改的数据',
                         timeout: 1500
                  });
              }
           },
        //    置顶
        top(){
              this.tokenId=localStorage.getItem("userinfo");
                 var than = this;
                 console.log(this.checkedNames);
                 if(this.checkedNames.length>0){
                     if(this.checkedNames.length !=1){
                         this.$dialog.toast({
                         mes: '不能多选',
                         timeout: 1500
                });
                 }else{
                       if(this.tokenId){
                        this.$axios.defaults.headers.common["token"] =this.tokenId;
                        this.$axios({
                            url:"http://xcx.xywol.com/index.php/api/version/MyTopNote",
                            method:"post",
                            data:{"ids":than.checkedNames} 
                        }).then(function(res){
                            console.log("成功的回调");
                            console.log(res.data);
                            if(res.data.code){
                                than.$dialog.toast({
                                mes: res.data.message,
                                timeout: 1500,      
                                });
                                  than.reload();
                            }
                        
                        })
                        .catch(function(err){
                            console.log("失败的回调")
                            
                        });
                    }
                  }
              }
        }
     },
         mounted(){
        this.tokenId=localStorage.getItem("userinfo");
         console.log(this.tokenId);
        var than = this;
        if(this.tokenId){
             this.$axios.defaults.headers.common["token"] =this.tokenId;
              this.$axios.post("http://xcx.xywol.com/index.php/api/version/getMyNote?page=1")
              .then(function(res){
                  console.log(res.data.data.list);
                  than.tiaoshu=res.data.code;
               than.biji=res.data.data.list
                console.log("11111--->"+ than.xuefen);
               })
               .catch(err=>{
                   console.log("失败的回调")
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
#note{
    width: 100%;
    height: 100%;
    background: #fff;
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
    /* position: fixed; */
}
.search1 .zifu1{
    font-size: 1.2rem;
    letter-spacing: 1.5px;
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
.header{
    /* top: 3rem; */
   width: 100%;
   height: 2.35rem;
   background: #fff;
     position: relative;
      overflow: auto;
    border:0.14rem solid  #efefef;
    border-left:none;
    border-right: none;
    margin-top: 0rem;
    /* z-index: 1; */
 
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
  border-bottom: 1px #EFEFEF solid;
  letter-spacing: 0.07rem;
  top: 0.3rem;
  position: relative;
}
.header2-1{
    width: 95%;
    margin: auto;
}
.header2 .search{
    width: 55%;
    height: 1.64rem;
    color:#999;
    line-height: 1.64rem;
    font-size: 0.9rem;
    border: 0.07rem #7ecef4 solid;
    border-radius: 1rem;
    background: #f5f5f5;
    opacity: 0.9;
    margin: 0.64rem 0 0 0rem;

}
.header2 .search input {
  width: 78%;
  letter-spacing: 0;
  margin-left: 0.14rem;
  border: none;
}
.header2 .search .icon_search{
  width: 1.1rem;
  height:1.1rem;
  float: left;
  margin: -1.5rem 0 0 10.5rem;
}
.header2 .right{
    float: right;
    margin-top:-1.5rem;
    font-size: 1rem;
    color: #aaa;
}
.container{
    width: 100%;
    height: auto;
    position: absolute;
    background: #fff;
    top: 6.5rem;  
}
.list{
    width: 100%;
    margin: auto;   
    height: 3rem;
    line-height: 3rem;
    background: #fff;
  
      border-bottom: 0.07rem solid #efefef;  
}
.list1{
    width: 95%;
    margin: auto;
       position: relative;
    
}
 .input_check {
    position: absolute;
     visibility: hidden;
     margin-top: 1rem;
 }
 .input_check+label {
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 2px solid #42A5E0;
    border-radius: 3px;
     margin-bottom:-3px;
     margin-left: 0.8rem;
   
  
} 
    
  .input_check:checked+label:after {
    content: "";
    position: absolute;
    left: 15px; 
    /* bottom:24px; */
     width: 10px;
    height: 7px;
    border: 2px solid #F58823;
    border-top-color: transparent;
    border-right-color: transparent;
    -ms-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -webkit-transform: rotate(-60deg);
    transform: rotate(-45deg);
} 

.list .item{
    width:92%;
    margin: auto;
    height: 3rem;
    color: #999;
    letter-spacing: 0.03rem;
    line-height: 2.5rem;
}
.list .item .bigDiv {
    width: 100%;
    height: 3rem;
    margin-left: 0.8rem;
    margin-top: -2.7rem;
    font-size: 1rem;
}
.list .item .bigDiv .rq {
  color: #42A5E0;
}
.list .item .bigDiv .bt {
  color: #F58823;
  margin-left: -0.9rem;
}
  
.list .item .smallDiv{
    float: right;
    margin-right: 1rem;
}
.list .item .right{
    width:0.4rem;
    height: 0.7rem;
    margin-left: 0.35rem;
}
 .bot{
    width: 100%;
    height: 3rem;
    color: #666;
    font-size: 0.9rem;
    line-height: 3rem;
    text-align: center;
    background: #fff;
    letter-spacing: 0.07rem;
    border-top: 0.14rem #efefef solid;
  
    bottom: 0;
    display: flex;
    position: fixed;
}
.bot .big {
  width: 13.2rem;
  height: 2.5rem;
  line-height: 0.9rem;
  display: flex;
  margin-left: 13.5rem;;
}
.bot .big .small{
    width: 18%;
    height: 2.5rem;
    text-align: center;
    margin: 0.4rem auto;
}
.bot .big .small .del {
  width: 1.5rem;
  height: 1.3rem;
}
.bot .big .small .upd {
  width: 1.5rem;
  height: 1.3rem;
}
.bot .big .small .top {
  width: 1.5rem;
  height: 1.3rem;
}

</style>


