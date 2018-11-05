<template>
    <div id="restpwd">
    <div class="search1-1">
    <div class="search1">
               <span class="zifu" @click="login"></span>
              <span>重置密码</span>
      </div>
    </div>
 <div class="content">  
<div class="bigDiv">
    <img  class="logo" src="../../resoure/images/index/logo-b.png" alt="">
    <div class="oneDiv">
        <p class="title">重置密码</p>
        <div class="cont">
            <form>
                <div class="clicked">
                    <img  class="mobile" src="../../resoure/images/index/mobile.png" alt="">
                    <input type="text" placeholder="请输入手机号" v-model="tel" placeholder-style="color:#999">
                </div>
                <div class="clicked">
                    <input type="password" placeholder="请输入验证码" placeholder-style="color:#999" style="margin-left:0">
                    <yd-sendcode slot="right" style="width: 5.5rem;height:1.78rem; color: #fff;background:#F58823;font-size: 1rem;
                           border-radius:3px;  margin-top: 0.85rem; "
                            type="warning"
                            init-str="获取验证码"
                            run-str="重新发送{%s}"
                            v-model="start1" 
                            @click.native="sendCode1" 
                            ></yd-sendcode>
                </div>
                <div class="clicked">
                    <img class="suo" src="../../resoure/images/index/suo.png" alt="">
                    <input type="password" placeholder="设置6-18位字母数字组合密码"  v-model="mima" style="width:78%;margin-left:0.78rem">
                </div>
                <button class="dl-yellow" @clicl="chongzhi">重置</button>
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
          restpwd:"",
           start1: false,
           tel:'',
           mima:'',

      }
    },
     methods:{
        login(){
            this.$router.goBack()
           },
        //    获取验证码
           sendCode1(){
                var than = this;
                   var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
                   if(!this.tel){
                       than.$dialog.toast({
                        mes: '输入手机号',
                        timeout: 1500
                    })
                   }else if(this.tel.length>11){
                           than.$dialog.toast({
                                mes:'手机号码有误',
                                timeout: 1500
                            })
                   }else if(!myreg.test(this.tel)){
                       than.$dialog.toast({
                        mes:'手机号码有误',
                        timeout: 1500
                    })
                   }else{
                            this.$axios({
                                url:"http:///xcx.xywol.com/index.php/api/version/CodeRstpwd",
                                method:"post",
                                data:{"phone":this.tel} 
                            }).then(function(res){
                                console.log("成功的回调")
                                console.log(res.response.code);
                                 than.start1 = true;
                                if(res.data.code == 200){
                                    than.$dialog.toast({
                                    mes: '向' + this.tel+'发送验证码',
                                    timeout: 1500
                                   })
                                }
                            })
                            .catch(function(err){
                                console.log("失败的回调11111111111");  
                                console.log(err.response.status);
                                if(err.response.status == 404){
                                    than.$dialog.toast({
                                        mes: err.response.data.msg,
                                        timeout: 1500
                                        })
                                    }
                            });
                        }
                   },
                //    重置密码
                   chongzhi(){
                 var than = this;
                   var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
                        if(!this.tel){
                       than.$dialog.toast({
                        mes: '输入手机号',
                        timeout: 1500
                    })
                   }else if(this.tel.length>11){
                           than.$dialog.toast({
                                mes:'手机号码有误',
                                timeout: 1500
                            })
                   }else if(!myreg.test(this.tel)){
                       than.$dialog.toast({
                        mes:'手机号码有误',
                        timeout: 1500
                    })
                   }else if( !this.start1){
                        than.$dialog.toast({
                        mes:'输入验证码',
                        timeout: 1500
                    })
                   }else if(!this.mima){
                        than.$dialog.toast({
                        mes:'输入验证码',
                        timeout: 1500
                    })
                   }else{
                            this.$axios({
                                url:"http:///xcx.xywol.com/index.php/api/version/CodeRstpwd",
                                method:"post",
                                data:{"phone":this.tel,"code":this.start1,"paw":this.mima} 
                            }).then(function(res){
                                console.log("成功的回调")
                                console.log(res.response.code);
                                if(res.data.code == 200){
                                    than.$dialog.toast({
                                    mes: '修改成功',
                                    timeout: 1500
                                   })
                                }
                            })
                            .catch(function(err){
                                console.log("失败的回调11111111111");  
                                console.log(err.response.status);
                                if(err.response.status == 404){
                                    than.$dialog.toast({
                                        mes: err.response.data.msg,
                                        timeout: 1500
                                        })
                                    }
                            });
                        }
                   }

    },
   mounted(){
        this.restpwd = this.$route.params.restpwd;
        console.log(this.restpwd);
    }
}
</script>
<style scoped>
#restpwd{
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
     background: #fff;
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
    background: #b8b8b8;
    text-align: center;
      /* border: 1px solid #000; */
}

.logo{
    width:25%;
    height: 25%;
    margin-top: 1rem;
}
.oneDiv{
    width:100%;
    background: #fff;
    border-radius: 3px;
    margin:-3.3rem auto 0 auto;
}
form{
    width:95%;
    margin: auto;
}
.oneDiv .title {
  height: 30%;
  color: #F58823;
  font-size: 1.35rem;
  text-align: center;
  line-height: 8rem;
}
.oneDiv .cont {
  width: 95%;
  font-size: 1rem;
  margin: auto;
  letter-spacing: 1px;
}
.oneDiv .cont div {
  width: 100%;
  height: 3.14rem;
  color: #535353;
  line-height: 3.14rem;
  display: flex;
}
.oneDiv .cont .clicked {
  border-bottom: 1px #42A5E0 solid;
}
.oneDiv .cont .mobile {
  width: 0.7rem;
  height: 1.2rem;
  margin-top: 1.4rem;
}
.oneDiv .cont .suo {
  width: 1rem;
  height: 1.28rem;
  margin-top: 1.4rem;
}
.oneDiv .cont input {
  width:60%; 
  color: #999;
  letter-spacing: 0;
  margin: 0.78rem 0 0 1rem;
  border: none;
  font-size: 1.1rem;
}
.oneDiv .cont .yzm{
     width: 4.9rem;
     height:1.78rem;
     color: #fff;
     font-size: 0.78rem;
     line-height: 1.75rem;
     background: #F58823;
     padding: 0;
     margin-top: 0.85rem;
     border: none;
}
.oneDiv .cont .dl-yellow {
  width: 75%;
  height: 2.5rem;
  color: #fff;
  line-height: 2.5rem;
  background: #F58823;
  border-radius: 3px;
  letter-spacing: 0.6rem;
  margin: 25% auto 10% auto;
  border: none;
  text-align: center;
}
.oneDiv .cont .dl-yellow:active{
    background: #42A5E0;
}

@media screen and (min-width: 1681px) and (max-width: 1920px) {
		.logo {
			width: 12%
		}
		.oneDiv {
			margin-top: -2.5rem
		}
		.oneDiv .cont .dl-blue {
			margin: 20px 0 20px 318px;
		}
		.twoDiv .cont {
			height: 410px;
		}
		.twoDiv .cont img {
			width: 10%;
			height: auto;
		}
		.twoDiv .cont .dl-yellow {
			width: 980px;
			margin: 0 auto;
		}
		.oneDiv .cont .dl-yellow {
			margin: 6% auto
		}
	}
	
	@media screen and (min-width: 1441px) and (max-width: 1680px) {
		.logo {
			width: 12%
		}
		.oneDiv {
			margin-top: -2.4rem
		}
		.oneDiv .cont .dl-blue {
			margin: 20px 0 20px 290px;
		}
		.twoDiv .cont {
			height: 410px;
		}
		.twoDiv .cont img {
			width: 10%;
			height: auto;
		}
		.twoDiv .cont .dl-yellow {
			width: 57%;
			margin: 0 auto;
		}
	}
	
	@media screen and (min-width: 1367px) and (max-width: 1440px) {
		.logo {
			width: 12%
		}
		.oneDiv {
			margin-top: -2.4rem
		}
		.oneDiv .cont .dl-blue {
			width: 725px;
			height: 68px;
			margin: 20px 0 20px 252px;
		}
		.twoDiv .cont {
			height: 410px;
		}
		.twoDiv .cont img {
			width: 10%;
			height: auto;
		}
		.twoDiv .cont .dl-yellow {
			width: 725px;
			height: 68px;
			width: 56%;
			margin: 0 auto;
		}
	}
	
	@media screen and (min-width: 1281px) and (max-width: 1366px) {
		.logo {
			width: 10%;
			margin-top: 0
		}
		.oneDiv {
			margin-top: -2rem
		}
		.oneDiv .cont .dl-blue {
			width: 688px;
			height: 68px;
			margin: 20px 0 20px 240px;
		}
		.oneDiv .cont .dl-yellow {
			margin: 4% auto;
		}
		.twoDiv .cont {
			height: 380px;
		}
		.twoDiv .cont img {
			width: 10%;
			height: auto;
		}
		.twoDiv .cont .dl-yellow {
			width: 725px;
			height: 68px;
			width: 56%;
			margin: 0 auto;
		}
		
	}
	
	@media screen and (min-width: 1025px) and (max-width: 1280px) {
		.logo {
			width: 10%;
			margin-top: 0
		}
		.oneDiv {
			margin-top: -2rem
		}
		.oneDiv .cont .dl-blue {
			width: 688px;
			height: 68px;
			margin: 20px 0 20px 240px;
		}
		.twoDiv .cont {
			height: 380px;
		}
		.twoDiv .cont img {
			width: 10%;
			height: auto;
		}
		.twoDiv .cont .dl-yellow {
			width: 725px;
			height: 68px;
			width: 56%;
			margin: 0 auto;
		}
		.oneDiv .cont .dl-yellow {
			margin: 4% auto;
		}
	}
	
	@media screen and (min-width: 769px) and (max-width: 1024px) {
		.logo {
			width: 14%;
			margin-top: 0
		}
		.oneDiv {
			margin-top: -2rem
		}
		.oneDiv .cont .dl-blue {
			width: 400px;
			height: 68px;
			margin: 20px 0 20px 240px;
		}
		.twoDiv .cont {
			height: 380px;
		}
		.twoDiv .cont img {
			width: 10%;
			height: auto;
		}
		.twoDiv .cont .dl-yellow {
			width: 400px;
			height: 68px;
			margin: 0 auto;
		}
		/*.content {
			height: auto;
		}*/
		.oneDiv .cont .dl-yellow {
			margin: 4% auto;
		}
		.oneDiv .title {
			line-height: 6rem;
		}
	}
	
	@media screen and (min-width: 601px) and (max-width: 768px) {
		/*.content {
			height: auto;
		}*/
		.twoDiv .cont .dl-yellow {
			width: 400px
		}
		.oneDiv .cont .dl-yellow {
			margin: 4% auto;
		}
		.oneDiv .cont{margin-top: 0;}
		.oneDiv .title{padding-top:110px;line-height: 0;height: 148px;}
	}
</style>


