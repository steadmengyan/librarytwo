<template>
    <div id="register">
    <div class="search1-1">
    <div class="search1">
               <span class="zifu" @click="login"></span>
              <span>会员注册区</span>
    </div>
    </div>
    <div class="content">
    <div class="bigDiv">
        <img class="vip" src="../../resoure/images/index/logo.png" alt="">
        <div class="oneDiv">
            <div style="height:3.2rem"></div>
            <div class="cont">
                <form>
                    <div class="clicked">
                        <span>手机号: </span><input type="text" placeholder="请输入手机号" v-model="tel" style="width:40%;margin-left:2rem">
                    </div>
                    <div class="clicked">
                       <span>验证码:</span> <input type="password" placeholder="请输入验证码" v-model="code" style="width:30%;margin-left:2.1rem">
                         <yd-sendcode slot="right" style="width: 5.5rem;height:1.78rem; color: #6b6b6b;background:#fff;font-size: 1rem; border: 1px solid #42A5E0;
                           border-radius:3px; margin-left: 10%;  margin-top: 0.85rem; "
                            type="warning"
                            init-str="获取验证码"
                            run-str="重新发送{%s}"
                            v-model="start1" 
                            @click.native="sendCode1" 
                            ></yd-sendcode>
                    </div>
                    <div class="clicked">
                       <span>设置密码:</span><input type="text" placeholder="请设置登录密码" v-model="pwd" style="width:40%;margin-left:1rem">
                    </div>
                    <div class="clicked">
                      <span>确认密码:</span> <input type="password" placeholder="请再次输入密码" v-model="pwdpwd" style="width:40%;margin-left:1rem">
                    </div>
                    <button class="dl-yellow" @click="zhuce">立即注册</button>
                </form>
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
             register:"",
              start1: false,
              tel:"",
              code:"",
              pwd:"",
              pwdpwd:"",
        }
    },
      methods:{
        login(){
             this.$router.goBack()
           },
        //    获取验证码
           sendCode1(){
               var params = new URLSearchParams();
                params.append("phone",this.tel);
                 var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
                if(!this.tel){
                    this.$dialog.toast({
                                mes: '输入手机号码',
                                timeout: 1500
                            })
                }else if(this.tel.lenght >11){
                    this.$dialog.toast({
                                mes: '手机号码有误',
                                timeout: 1500
                            })
                }else if(!myreg.test(this.tel)){
                    this.$dialog.toast({
                                mes: '手机号码有误',
                                timeout: 1500
                            })
                }else{
                    var than = this;
                    this.$axios({
                    url:"http://xcx.xywol.com/index.php/api/version/rverify",
                    method:"post",
                    data:params, 
                }).then(function(res){
                    console.log("成功的回调");
                        than.$dialog.loading.open('发送中...');
                    setTimeout(() => {
                        than.start1 = true;
                        than.$dialog.loading.close();
                        than.$dialog.toast({
                            mes: '已发送',
                            icon: 'success',
                            timeout: 1500
                        });
                    }, 1000);     
                })
                .catch(function(err){
                    console.log(err.response.status); 
                    console.log("失败的回调");
                    if(err.response.status ==404){
                        than.$dialog.toast({
                            mes: err.response.data.msg,
                            timeout: 1500
                        });
                    }
                });
                }
         },
        //  立即注册
        zhuce(){
           
             var params = new URLSearchParams();
                 params.append("phone",this.tel);
                 params.append("code",this.code);
                 params.append("password",this.pwd);
                 params.append("pwdpwd",this.pwdpwd);
                 var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
                 if(!this.tel){
                      than.$dialog.toast({
                            mes:'输入手机号码',
                            timeout: 1500
                        });
                 }else if(this.lenght >11){
                      than.$dialog.toast({
                            mes:'手机号码有误',
                            timeout: 1500
                        });
                 }else if(!myreg.test(this.tel)){
                     than.$dialog.toast({
                            mes:'手机号码有误',
                            timeout: 1500
                        });
                 }else if(!this.code){
                     than.$dialog.toast({
                            mes:'输入验证码',
                            timeout: 1500
                        });
                 }else if(!this.pwd){
                     than.$dialog.toast({
                            mes:'输入密码',
                            timeout: 1500
                        });
                 }else if(this.pwd.lenght<6){
                     than.$dialog.toast({
                            mes:'密码不能小于6位',
                            timeout: 1500
                        });
                 }else if(!this.pwdpwd){
                     than.$dialog.toast({
                            mes:'再次输入密码',
                            timeout: 1500
                        });
                 }else if(this.pwd != this.pwdpwd){
                     than.$dialog.toast({
                            mes:'密码输入不一致',
                            timeout: 1500
                        });
                 }else{
                      var than = this;
                        this.$axios({
                        url:"http://xcx.xywol.com/index.php/api/version/signup",
                        method:"post",
                        data:params, 
                    }).then(function(res){
                        console.log("成功的回调"); 
                          than.$dialog.toast({
                                mes: '恭喜你成为会员了，给你加99分',
                                timeout: 1500,
                            });
                             than.$router.push({name:'/updinfo'})
                           
                    })
                    .catch(function(err){
                        console.log(err.response.status); 
                        console.log("失败的回调");
                        if(err.response.status == 400){
                            than.$dialog.toast({
                                mes: err.response.data.msg,
                                timeout: 1500
                            });
                        }
                    });
                 }
        }
    },
    mounted(){
      this.register=this.$route.params.register
        console.log(this.register);
        
    }
}
</script>
<style scoped>
#register{
    height:100%;
}
.search1-1{
    position: fixed;
    width: 100%;
    z-index:99;
}
.search1{
     height: 3rem;
     margin-bottom: 15px;
      background:#fff;
       text-align: center;
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
    text-align: center;  
}

.vip {
  width: 25%;
  height: 25%;
  margin-top: 2.8rem;
}
.oneDiv { 
  width:100%;
  background: #fff;
  border-radius: 3px;
  margin: -3.3rem auto 0 auto;
}

.oneDiv .cont {
  width: 100%;
  font-size: 1.1rem;
  margin: 0 auto;
  letter-spacing: 1px;
  
}
.oneDiv .cont div {
 width:95%;
  height: 3.14rem;
  color: #535353;
  line-height: 3.14rem;
    display: flex;

}
.oneDiv .cont .clicked {
  border-bottom: 1px #42A5E0 solid;
  margin-left: 0.5rem;
}
.oneDiv .cont input {
  width: 75%; 
  color: #999;
  letter-spacing: 0;
  margin: 0.8rem 0 0 0.4rem;
  border: none;
  font-size: 1.1rem;
}
.oneDiv .cont span{
    margin-top: 0.2rem;
}
.oneDiv .cont .yzm{
     width: 5.5rem;
     height:1.78rem;
     font-size: 0.78rem;
     line-height: 1.75rem;
     color: #6b6b6b;
     padding: 0;
     margin-left: 10%;
     margin-top: 0.85rem;
      border: none;
      border: 1px solid #42A5E0;
      border-radius:3px; 
}
form{
    width: 95%;
    margin: auto;
}
.oneDiv .cont .dl-yellow {
  width: 70%;
  height: 3rem;
  color: #fff;
  font-size: 1.2rem;
  line-height: 2.5rem;
  background: #F58823;
  border-radius: 3px;
  letter-spacing: 0.6rem;
  margin-top: 20%;
  margin-bottom: 10%;
  border: none;
}
.oneDiv .cont .dl-yellow:active{
    background: #42A5E0;
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

