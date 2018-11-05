<template>
    <div id="user">
            <div class="content">
            <div class="bigDiv">
                <div class="navdiv" @click="login">
                  <img src="../../resoure/images/mine/head.png" alt="" class="head">
                </div>
                <div class="oneDiv">
                    <div class="top">
                        <p class="djdl">点击登录</p>
                        <p class="tip">你还有 <span class="blue">306</span> 天到期，可提前 <span class="blue" style="text-decoration:underline">续费</span>！</p>
                    </div>
                    <div class="mid">
                        <div class="item" @click="dianji">
                            <img class="qian" src="../../resoure/images/mine/qian.png" alt="">
                            <p>签到</p>
                        </div>

                          <div class="item" @click="record">
                            <img class="jilu" src="../../resoure/images/mine/jilu.png" alt="">
                            <p>学习记录</p>
                        </div>

                          <div class="item" @click="updinfo">
                            <img class="shen" src="../../resoure/images/mine/shen.png" alt="">
                            <p>个人信息</p>
                        </div>

                          <div class="item" @click="wenlist">
                            <img class="wen" src="../../resoure/images/mine/wen.png" alt="">
                            <p>问问</p>
                        </div>

                          <div class="item" @click="collect">
                            <img class="sc" src="../../resoure/images/mine/sc.png" alt="">
                            <p>我的收藏</p>
                        </div>

                          <div class="item" @click="notice">
                            <img class="laba" src="../../resoure/images/mine/laba.png" alt="">
                            <p>最新公告</p>
                        </div>
                    </div>
                    <div class="bot">
                        <div class="bot1">
                        <img  class="vip" src="../../resoure/images/mine/vip.png" alt="">开通VIP学员
                        <p>一天仅需一元钱</p>
                       </div> 
                    </div>
                </div> 

                <div class="towDiv">
                    <div style="height:1rem"></div>
                    <div class="top2">
                        <span>邀&nbsp;</span>请你的同学一起来学习吧!&nbsp;还可以赚学分<span>兑换课程</span>
                    </div>
                    <div class="cont">
                        <div class="item" @click="credit">
                            <img class="fen" src="../../resoure/images/mine/fen.png" alt="">
                           <div>我的学分</div>
                        </div>

                        <div class="item" @click="note">
                            <img class="ji" src="../../resoure/images/mine/ji.png" alt="">
                           <div>我的笔记</div>
                        </div>

                        <div class="item" @click="help">
                            <img class="kui" src="../../resoure/images/mine/kui.png" alt="">
                           <div>帮助反馈</div>
                        </div>

                         <div class="item" @click="tui">
                            <img class="kui" src="../../resoure/images/mine/t.jpg" alt="">
                           <div>我的推广</div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="smallDiv" v-show="show"  @click="dianji">
                <div class="smallDiv1">
                <img src="../../resoure/images/mine/qd-bj.png" alt="" class="qd-bj">
                 <p class="logo1">
                        <img src="../../resoure/images/mine/qd-logo.png" alt="" class="qd-logo">
                    </p>
                <div class="gg1">
                  <img src="../../resoure/images/mine/qd-gg.png" alt="" class="qd-gg">
                 </div>
              <div class="textDiv">
                <p style="margin--top:0.2rem">签到成功<span style="margin-left:1rem">学分+1</span></p>
                <div class="xfgy">
                    共有<span class="xhx" @click="credit">66</span>学分
                </div>
                <div style="font-size:0.9rem">所获得学分可用于学习<span class="xhx" @click="sharelist">名家分享课程</span></div>
              </div>
             </div>
        </div>
            <div class="bjtm" v-show="show" @click="dianji"></div>



   </div> 
  </div> 

  
  </div>
     
</template>
<script>
export default {
  data() {
    return {
      show: false,
      tokenId: ""
    };
  },
  methods: {
    login() {
      this.$router.push({ path: "/login" });
    },
    record() {
      this.$router.push({ path: "/record" });
    },
    wenlist() {
      this.$router.push({ path: "/wenlist" });
    },
    collect() {
      this.$router.push({ path: "/collect" });
    },
    notice() {
      this.$router.push({ path: "/notice" });
    },
    credit() {
      this.$router.push({ path: "/credit" });
    },
    note() {
      this.$router.push({ path: "/note" });
    },
    help() {
      this.$router.push({ path: "/help" });
    },
    credit() {
      this.$router.push({ path: "/credit" });
    },
    sharelist() {
      this.$router.push({ path: "/sharelist" });
    },
    updinfo(){
      this.$router.push({path:"/updinfo"})
    },
    dianji() {
      this.show = !this.show;
    },
    tui(){
      this.$router.push({path:'/promoters'})
    }
    
  },
  mounted() {
    this.tokenId = localStorage.getItem("userinfo");
    if (this.tokenId) {
    }
  }
};
</script>
<style scoped>
#user {
  height: 100%;
}

.search {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 99;
}
.search1 {
  width: 95%;
  margin: auto;
}
.search span {
  line-height: 3rem;
  font-size: 1.2rem;
}
.content {
  margin: auto;
}
.bigDiv {
  margin-top: 1.5rem;
  height: 100%;
}

.bigDiv .navdiv {
  width: 100%;
  height: 3.8rem;
  text-align: center;
}
.bigDiv .head {
  width: 3.8rem;
  height: 3.8rem;
}
.bigDiv .oneDiv {
  width: 90%;
  height: 19.7rem;
  background: #fff;
  border-radius: 3px;
  margin: -2.5rem auto 0 auto;
}
.bigDiv .twoDiv {
  width: 24.6rem;
  height: 14.2rem;
  background: #fff;
  border-radius: 14px;
  margin: 0.6rem auto;
}
.bigDiv .oneDiv .top {
  width: 69%;
  height: 5rem;
  margin: auto;

  letter-spacing: 1px;
}
.bigDiv .oneDiv .top .djdl {
  width: 100%;
  font-size: 1rem;
  color: #42a5e0;
  margin-top: 0.35rem;
  text-align: center;
  padding-top: 3.1rem;
}
.bigDiv .oneDiv .top .tip {
  /* border: 1px solid #000; */
  font-size: 0.9rem;
  width: 100%;
  color: #aaa;
  margin-top: 0.65rem;
}
.bigDiv .oneDiv .top .tip .blue {
  color: #42a5e0;
  font-size: 1rem;
}
.bigDiv .oneDiv .mid {
  width: 100%;
  height: 9.9rem;
  margin-top: 1rem auto;
}
.bigDiv .oneDiv .bot {
  height: 3.3rem;
  color: #f7deaf;
  font-size: 0.9rem;
  background: #4a4a4a;
  display: flex;
  line-height: 3.3rem;
  letter-spacing: 2px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.bigDiv .oneDiv .mid .item {
  width: 20%;
  height: 2.5rem;
  color: #393939;
  font-size: 0.9rem;
  text-align: center;
  float: left;
  margin-left: 0;
  letter-spacing: 0.07rem;
  margin: 1.9rem 0.6rem 0 1.8rem;
}
.bigDiv .oneDiv .mid .qian {
  width: 1.6rem;
  height: 1.78rem;
}
.bigDiv .oneDiv .mid .jilu {
  width: 1.1rem;
  height: 1.57rem;
}
.bigDiv .oneDiv .mid .shen {
  width: 1.5rem;
  height: 1.5rem;
}
.bigDiv .oneDiv .mid .wen {
  width: 1.5rem;
  height: 1.5rem;
}
.bigDiv .oneDiv .mid .sc {
  width: 1.5rem;
  height: 1.5rem;
}
.bigDiv .oneDiv .mid .laba {
  width: 1.6rem;
  height: 1.7rem;
}
.bot {
  margin-top: 1.2rem;
  width: 100%;
}
.bot1 {
  width: 95%;
  margin: auto;
}
.bot p {
  float: right;
}
.bigDiv .oneDiv .bot .vip {
  width: 1.2rem;
  height: 1.2rem;
  display: inline-block;
  vertical-align: -0.25rem;
  margin-right: 0.5rem;
}
.towDiv {
  background: #fff;
  margin-top: 1rem;
  width: 90%;
  height: 11.4rem;
  margin: 0.6rem auto 0 auto;
}
.towDiv .top2 {
  width: 95%;
  height: 2.6rem;
  color: #393939;
  font-size: 0.8rem;
  background: #efefef;
  text-align: center;
  line-height: 2.6rem;
  border-radius: 34px;
  margin: 0 auto;
}
.towDiv .top2 span {
  color: #f58823;
  font-size: 1rem;
}
.towDiv .cont {
  width: 90%;
  height: 4rem;
  display: flex;
  margin-left: 1rem;
  margin-top: 2rem;
}
.towDiv .cont .item {
  width: 4.28rem;
  height: 4rem;
  color: #393939;
  font-size: 1rem;
  text-align: center;
  margin: auto;
}
.towDiv .cont img {
  width: 2.2rem;
  height: 2.2rem;
}

.smallDiv {
  position: fixed;
  top: 3rem;
  z-index: 100;
  width: 100%;
}
.smallDiv1 {
  width: 80%;
  height: 27.1rem;
  margin: 3rem auto 0 auto;
  text-align: center;
}
.smallDiv .qd-bj {
  width: 100%;
  height: 27.1rem;
  z-index: 200;
}
.logo1 {
  width: 80%;
  text-align: center;
  position: absolute;
  margin-top: -26.4rem;
}
.smallDiv .qd-logo {
  width: 7.2rem;

  text-align: center;
}
.gg1 {
  width: 80%;
  text-align: center;
  height: 2rem;
  position: absolute;
  margin-top: -8.8rem;
}
.smallDiv .qd-gg {
  width: 90%;
  height: 8.5rem;
  text-align: center;
}
.smallDiv .textDiv {
  width: 70%;
  height: 7.8rem;
  color: #42a5e0;
  font-size: 1.1rem;
  text-align: center;
  position: absolute;
  margin: -18.9rem 0 0 1.4rem;
}
.smallDiv .textDiv .xfgy {
  color: #f58823;
  font-size: 1.1rem;
  margin: 1.1rem 0;
}
.smallDiv .textDiv .xhx {
  text-decoration: underline;
}
.bjtm {
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
  position: fixed;
  top: 0rem;
  left: 0;
  z-index: 10;
}
	@media screen and (min-width: 1680px) and (max-width: 1920px) {
		/*1680*/
		.bigDiv .oneDiv .top {
			text-align: center;
		}
		.bigDiv .oneDiv .mid .item {
			width: 28%;
		}
		.towDiv {
			height: 14rem;
		}
		/*签到弹层*/
		.content {
			position: relative;
		}
		.smallDiv {
			width: 50%;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -492px;
			margin-top: -408px;
		}
		.smallDiv .qd-bj {
			width: 65%;
			height: 20rem;
		}
		.logo1 {
			height: 20rem;
			margin-top: -23.4rem;
		}
		.smallDiv .textDiv {
			margin: -14.9rem 0 0 1.4rem;
		}
		.smallDiv .qd-logo {
			width: 6rem
		}
	}
	
	@media screen and (min-width: 1441px) and (max-width: 1680px) {
		.content {
			position: relative;
		}
		.smallDiv {
			width: 50%;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -430px;
			margin-top: -508px;
		}
	}
	
	@media screen and (min-width: 1367px) and (max-width: 1440px) {
		/*1440*/
		.bigDiv .oneDiv .top {
			text-align: center;
		}
		.bigDiv .oneDiv .mid .item {
			width: 28%;
		}
		.towDiv {
			height: 14rem;
		}
		/*签到弹层*/
		.logo1 {
			margin-top: -30rem;
		}
		.smallDiv1,
		.logo1,
		.smallDiv .textDiv {
			width: 60%
		}
		.smallDiv .textDiv {
			margin-left: 0;
		}
	}
	
	@media screen and (min-width: 1280px) and (max-width: 1366px) {
		/*1366*/
		.bigDiv .oneDiv .top {
			text-align: center;
		}
		.bigDiv .oneDiv .mid .item {
			width: 27%;
		}
		.towDiv {
			height: 14rem;
		}
		/*签到弹层*/
		
		.smallDiv1 {
			margin-top: 2rem;
		}
		.smallDiv1,
		.logo1,
		.smallDiv .textDiv {
			width: 40%
		}
		
		.smallDiv .qd-bj {
			height: 550px;
		}
		.logo1 {
			margin-top: -22rem;
		}
		.smallDiv .textDiv {
			margin-top: -378px;
			margin-left: 0;
		}
	}
	
	@media screen and (min-width: 1025px) and (max-width: 1280px) {
		.bigDiv .oneDiv .top {
			text-align: center;
		}
		.bigDiv .oneDiv .mid .item {
			width: 27%;
		}
		.towDiv {
			height: 14rem;
		}
		/*签到弹层*/
		.smallDiv1 {
			margin-top: 2rem;
		}
		.smallDiv1,
		.logo1,
		.smallDiv .textDiv {
			width: 60%
		}
		.smallDiv .qd-bj {
			height: 550px;
		}
		.logo1 {
			margin-top: -22rem;
		}
		.smallDiv .textDiv {
			margin-top: -358px;
			margin-left: 0;
		}
	}
	/*1280*/
	
	@media screen and (min-width: 768px) and (max-width: 1024px) {
		.bigDiv .oneDiv .top {
			text-align: center;
		}
		.bigDiv .oneDiv .mid .item {
			width: 24%;
		}
		.towDiv {
			height: 14rem;
		}
		/*签到弹层*/
		.smallDiv1 {
			margin-top: -20px;
		}
		.smallDiv1,
		.logo1,
		.smallDiv .textDiv {
			width: 60%
		}
		.smallDiv .qd-bj {
			height: 550px;
		}
		.logo1 {
			margin-top: -22rem;
		}
		.smallDiv .textDiv {
			margin-top: -360px;
			margin-left: 0;
		}
	}
	
	@media screen and (min-width: 600px) and (max-width: 768px) {
		.bigDiv .oneDiv .top {
			text-align: center;
		}
		.bigDiv .oneDiv .mid .item {
			width: 22%;
		}
		.towDiv {
			height: 14rem;
		}
	}
</style>


