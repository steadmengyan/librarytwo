<template>
    <div id="loginvip">
    <div class="search1-1">
     <div class="search1">
               <span class="zifu" @click="login"></span>
              <span>VIP登陆</span>
    </div>
   </div> 
   <div class="content">
    <div class="bigDiv">
        <img class="vip" src="../../resoure/images/index/vip.png" alt="">
        <div class="oneDiv">
            <p class="title">VIP学员专属登陆区</p>
            <div class="cont">
                <form>
                    <div class="clicked">
                        <span>VIP账号:</span><input type="text" placeholder="请输入VIP学员卡账号" v-model="tel">
                    </div>
                    <div class="clicked">
                        <span>VIP密码:</span><input type="text" placeholder="请输入VIP学员卡密码"  v-model="paw">
                    </div>
                    <div class="vipdl" @click="restpwd">
                        <span style="margin-top:0.8rem">忘记密码&nbsp;></span>
                    </div>
                    <button class="dl-yellow" @click="vipdl">登陆</button>
                </form>
            </div>
            <div class="bottom" @click="login">非VIP学员可用于手机号登陆</div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tel:'',
            paw:'',
        }
    },
    methods:{
         restpwd(){
            this.$router.push({
                name:"restpwd",
                params:{
                    restpwd:"vipdenglu"
                }
            })
        },
        login(){
            this.$router.goBack()
        },
        vipdl(){
              var than = this;
            if(!this.tel || !this.paw){
                than.$dialog.toast({
                    mes: '输入登录信息',
                    timeout: 1500
                    })
                return false;
            }else{ 
                this.$dialog.toast({
                        mes: '登录请求中...',
                        timeout: 1500
                    });  
            }
             this.$axios({
                    url:"http:///xcx.xywol.com/index.php/api/version/vip_login",
                    method:"post",
                    data:{"name":this.tel,"paw":this.paw} 
                }).then(function(res){
                    console.log("成功的回调")
                    console.log(res.response.code);
                        than.start1 = true;
                    // if(res.data.code == 200){
                    //     than.$dialog.toast({
                    //     mes: '向' + this.tel+'发送验证码',
                    //     timeout: 1500
                    //     })
                    // }
                })
                .catch(function(err){
                    console.log("失败的回调11111111111");  
                    console.log(err.response.status);
                    if(err.response.status == 404){
                        than.$dialog.toast({
                            mes: err.response.data.msg,
                            timeout: 1500
                            })
                        }else if(err.response.status == 401){
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
  #loginvip{
      height: 100%;
  }
  .search1-1{
    position: fixed;
    width: 100%;
    z-index:99;
}
  .search1{
     height: 3rem;
     margin-bottom: 15px;
     background: #fff;
       text-align: center;
       position:relative;
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
.search1 span{
 
    line-height: 3rem;
    font-size: 1.2rem;
    letter-spacing: 1.5px;
    

}
.content{
    width: 100%;
    height:100%;
    position: absolute;
    top:3rem;
     background: #b8b8b8;
     z-index: 1;
   
    
}
.bigDiv{
   margin: auto;
   width: 90%;
    background: #b8b8b8;
    text-align: center;
      /* border: 1px solid #000; */
}

.vip{
    width: 25%;
    height: 25%;
    margin-top: 5%; 
}
.oneDiv { 
  width: 100%;
  /* height: 34.5rem; */
  background: #fff;
  border-radius: 3px;
  margin: -3.3rem auto 0 auto;
}
.oneDiv .title {
  color: #F58823;
  font-size: 1.35rem;
  text-align: center;
  line-height:8rem;
}
.oneDiv .cont {
  width: 95%;
  height: 17.8rem;
  font-size: 1.1rem;
  margin: auto;
  letter-spacing: 1px;
}
.oneDiv .cont view {
  height: 3.14rem;
  color: #535353;
  line-height: 3.14rem;
  display: flex;
}
.oneDiv .cont .clicked {
    line-height: 3rem;
  border-bottom: 1px #42A5E0 solid;
  width: 95%;
  margin: auto;
}
.oneDiv .cont input {
    height: 1.6rem;
  width: 72%;
  color: #999;
  font-size: 1.1rem;
  letter-spacing: 0;
  margin:1.6rem 0 0 1rem;
  border: none;
  line-height: 1.6rem;
}
.oneDiv .cont .vipdl {
  width: 6rem;
  color: #F58823;
  font-size: 0.9rem;
  margin-top: -0.3rem;
  margin-right: 1.2rem;
  float: right;
  display: flex;
}
.oneDiv .cont .vipdl .xvip {
  width: 1.3rem;
  height: 1.25rem;
  border: none;
  margin: 0.8rem 0.35rem 0 0;
}
.oneDiv .cont .vipdl span:active{
    color:#F58823;
}
.oneDiv .cont .vipdl img {
 width: 1.3rem;
  height: 1.25rem;
}
.oneDiv .cont .dl-yellow {
  width: 100%;
  height: 2.9rem;
  color: #fff;
  font-size: 1rem;
  line-height: 2.9rem;
  background: #F58823;
  border-radius: 3px;
  letter-spacing: 0.64rem;
  margin-top: 4.5rem;
  border: none;
}
.oneDiv .cont .dl-yellow:active{
    background: #42a5e0;
}
.oneDiv .cont .wjmm {
  width: 100%;
  height: 2.14rem;
  color: #B8B8B8;
  font-size: 0.8rem;
  text-align: center;
  line-height: 3rem;
}
.oneDiv .cont .wjmm:active{
    background: #F58823;
}
.oneDiv .bottom {
  height: 4rem;
  color: #42A5E0;
  font-size: 0.9rem;
  text-align: center;
  line-height: 4rem;
  margin-top: 0.3rem;
}
.oneDiv .bottom:active{
    color: #42A5E0;
}

@media screen and (min-width: 1681px) and (max-width: 1920px) {
	.vip{width:12%}
	.oneDiv .cont .dl-yellow{margin-top: 6%;}
}
@media screen and (min-width: 1441px) and (max-width: 1680px) {
	.vip{width:12%}
	.oneDiv .cont .dl-yellow{margin-top: 6%;}
}
@media screen and (min-width: 1281px) and (max-width: 1440px) {
	.vip{width:12%}
	.oneDiv .cont .dl-yellow{margin-top: 6%;}
}
@media screen and (min-width: 1025px) and (max-width: 1280px) {
	.vip{width:12%}
	.oneDiv .cont .dl-yellow{margin-top: 6%;}
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
	.vip{width:12%}
	.oneDiv .cont .dl-yellow{margin-top: 6%;}
	.oneDiv{margin-top:-2.5rem}
}
@media screen and (min-width: 601px) and (max-width: 768px) {
	.vip{width:12%}
	.oneDiv .cont .dl-yellow{margin-top: 6%;}
	.oneDiv{margin-top:-1.5rem}
}
</style>


