<template>
    <div id="notedetail">
        <div class="search1">
               <span class="zifu" @click="note"></span>
              <span class="zifu1">笔记详情</span>
        </div>
        <div class="container">
            <div class="list">
                <div class="bigDiv">
                    <div class="header">
                        <span>【{{biji.create_time}}】<span style='color:#F58823'>{{biji.title}}</span></span>
                    </div>
                    <div class="contDiv">
                        <div class="title">——我的笔记——</div>
                        <div class="content">
                         <textarea v-model="biji.content"></textarea>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
         <div class="bot">
             <div class="big">
                 <p class="small" @click="del">
                     <img src="../../resoure/images/mine/del.png" alt="" class="del">删除
                 </p>
                  <p class="small" @click="baocun">
                     <img src="../../resoure/images/mine/upd.png" alt="" class="upd">保存
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
            Id:"",
            biji:"",
           

        }
    },
    methods:{
        note(){
            this.$router.goBack()
            // this.$router.replace('/note')
        },
        // 删除
        del(){
        if(this.$route.params.Id!==undefined){
          this.Id=this.$route.params.Id
        localStorage.setItem("id",this.$route.params.Id);
         }else{
            this.Id=localStorage.getItem("id")
         }
          var params = new URLSearchParams();
          params.append("ids",this.Id);
           this.tokenId=localStorage.getItem("userinfo");
           console.log(this.tokenId);
           var than = this;
           if(this.tokenId){
             this.$axios.defaults.headers.common["token"] =this.tokenId;
               this.$axios({
                   url:"http://xcx.xywol.com/index.php/api/version/MyNoteNotdisplay",
                   method:"post",
                  data:params, 
               }).then(function(res){
                   
                   console.log("成功的回调");
                   console.log(res);
            })
             .catch(function(err){
                console.log("失败的回调");
                console.log(err.res);
                  
            });
           }
        },
        // 保存
        baocun(){
         if(this.$route.params.Id!==undefined){
                this.Id=this.$route.params.Id
                localStorage.setItem("id",this.$route.params.Id);
            }else{
            this.Id=localStorage.getItem("id")
            }
            this.tokenId=localStorage.getItem("userinfo");
            var than = this;
            if(this.tokenId){
                this.$axios.defaults.headers.common["token"] =this.tokenId;
                this.$axios({
                    url:"http://xcx.xywol.com/index.php/api/version/MyNoteChange",
                    method:"post",
                     data:{"id":than.Id,"content":than.biji.content} 
                }).then(function(res){
                    than.biji=res.data.data;
                    console.log("成功的回调");
                    console.log(res.data.code)
                    console.log(res.data);
                    if(res.data.code){
                        than.$dialog.toast({
                        mes: res.data.message,
                        timeout: 1500,
                        
                });
                   than.reload()
                    }
                  
                })
                .catch(function(err){
                    console.log("失败的回调")
                    
                });
            }

        },
        // 置顶
        top(){
            if(this.$route.params.Id!==undefined){
                this.Id=this.$route.params.Id
                localStorage.setItem("id",this.$route.params.Id);
            }else{
            this.Id=localStorage.getItem("id")
            }
             var arrayObj = new Array(this.Id);
    
             this.tokenId=localStorage.getItem("userinfo");
             console.log(arrayObj);
             var than = this;
            if(this.tokenId){
                this.$axios.defaults.headers.common["token"] =this.tokenId;
                this.$axios({
                    url:"http://xcx.xywol.com/index.php/api/version/MyTopNote",
                    method:"post",
                     data:{"ids":arrayObj} 
                }).then(function(res){
                    console.log("成功的回调");
                    console.log(res.data.code)
                    console.log(res.data);
                    if(res.data.code){
                        than.$dialog.toast({
                        mes: res.data.message,
                        timeout: 1500,
                        
                });
                   than.reload()
                    }
                  
                })
                .catch(function(err){
                    console.log("失败的回调")
                    
                });
            }   
        }
    },
    mounted(){
        if(this.$route.params.Id!==undefined){
        this.Id=this.$route.params.Id
        localStorage.setItem("id",this.$route.params.Id);
      }else{
       this.Id=localStorage.getItem("id")
      }
          var params = new URLSearchParams();
          params.append("id",this.Id);
           this.tokenId=localStorage.getItem("userinfo");
           var than = this;
           if(this.tokenId){
             this.$axios.defaults.headers.common["token"] =this.tokenId;
               this.$axios({
                   url:"http://xcx.xywol.com/index.php/api/version/NoteInfo",
                   method:"post",
                  data:params, 
               }).then(function(res){
                   than.biji=res.data.data;
            })
             .catch(function(err){
                console.log(err.response);
                  
            });
        }
    }
    
}
</script>
<style scoped>
#notedtail{
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
    width:100%;
    height:100%;
    position: absolute;
    background: #fff;
    top: 3rem;
}
.container{
    height: 100%;
    height: 100%;
    top:3rem;
    position: absolute;
    background: #efefef;
}
.list{
    width: 90%;
    margin: auto;
}
.bigDiv{
    width:100%;
    height:28.5rem;
    background: #fff;
    border-radius: 3px;
    margin: 1.28rem auto 0 auto;
}
.header{
    height:2.5rem;
    color: #42A5e0;
    font-size: 1rem;
    line-height: 2.5rem;
    background: #fff;
    border-bottom:0.14rem #efefef solid;
    letter-spacing: 0.03rem;
}
.contDiv{
    width: 100%;
    font-size: 1rem;
    background: #fff;
}
.contDiv .title{
    height: 2.28rem;
    color: #42A5e0;
    text-align: center;
    line-height: 2.28rem;
}
.contDiv .content{
    width: 95%;
    height:27rem;
    color: #6b6b6b;
   
     margin: auto
}
textarea{
    width: 100%;
    height: 27rem;
      border: none;
        text-indent: 1.78rem;
         letter-spacing: 0.03rem;
         font-size: 1rem;
}
.bot{
    width: 100%;
    height: 3rem;
    color: #666;
    font-size: 0.8rem;
    line-height: 3rem;
    text-align: center;
    letter-spacing: 0.07rem;
    border-top: 0.14rem #efefef solid;
    bottom: 0;
    display: flex;
    position: fixed;
      background: #fff;
}
.bot .big {
  width: 13.2rem;
  height: 2.5rem;
  line-height: 0.9rem;
  display: flex;
  margin-left: 13.5rem;;
}
.bot .big .small{
    width: 15%;
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


