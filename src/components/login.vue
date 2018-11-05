<template>
	<div id="login">

		<div class="search1-1">
			<div class="search1">
				<span class="zifu" @click="index"></span>
				<span class="zifu1">会员登陆</span>
			</div>
		</div>
		<div class="content">
			<div class="bigDiv">
				<div class="tupian">
					<img class="logo" src="../../resoure/images/index/logo.png" alt="">
				</div>
				<div class="oneDiv">
					<p style="height:3.2rem"></p>
					<div class="cont">

						<div>
							手机号码<input type="number" v-model="loginPhone" placeholder="请输入手机号" placeholder-style="color:#999;font-size=1rem" name="name">
						</div>
						<div class="clicked">
							登录密码<input type="password" v-model="loginPassword" placeholder="请输入登录密码" placeholder-size="color:#999;font-size:1rem" name="pwd">
						</div>
						<span class="zhmm" @click="restpwd">找回密码</span>
						<span class="ljzc" @click="register">我要注册&nbsp;></span>
						<button class="dl-blue" @click="login">登录</button>

					</div>
				</div>
				<div class="twoDiv">
					<div style="height:50%"></div>
					<div class="cont">
						<img src="../../resoure/images/index/dvip.png" alt="">
						<div>VIP学员专属登陆区</div>
						<p @click="loginvip" class="dl-yellow">登陆</p>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
	export default {
		data() {
				return {
					loginPhone: "",
					loginPassword: "",
					boo: false,
					denglu: false,
					zhuce: false,
					login1: ""
				}
			},
			methods: {
				restpwd() {
					this.$router.push({
						name: "restpwd",
						params: {
							restpwd: "huiyuandenglu"
						}
					})
				},
				register() {
					this.$router.push({
						name: "register",
						params: {
							register: "denglu"
						}
					})
				},
				loginvip() {
					this.$router.push({
						path: '/loginvip'
					})
				},
				index() {
					this.$router.goBack();
					if(this.login1 == "user") {
						this.$router.push({
							path: "/user"
						})
					}

				},
				login() {
					var than = this;
					var params = new URLSearchParams();
					params.append("name", this.loginPhone);
					params.append("pwd", this.loginPassword);
					var reg = /^1[3456789]\d{9}$/;
					if(!this.loginPhone || !this.loginPassword) {
						this.$dialog.toast({
							mes: '请输入登录信息',
							timeout: 1500
						});
						return false;
					} else if(!reg.test(this.loginPhone)) {
						this.$dialog.toast({
							mes: '请输入有效的手机号码',
							timeout: 1500
						});
						return false;
					} else {
						this.$dialog.toast({
							mes: '登录请求中...',
							timeout: 1500
						});
					}
					this.$axios({
							url: "http://xcx.xywol.com/index.php/api/version/login",
							method: "post",
							data: params,
						}).then(function(res) {
							console.log("成功的回调");
							if(res.data.code == 200) {
								localStorage.setItem("userinfo", res.data.data);
								than.$router.push({
									path: '/user'
								})
							}
						})
						.catch(function(err) {
							console.log("失败的回调");
							console.log(err.c);
							if(err.response.status === 400) {
								for(var x in err.response.data.msg) {
									than.$dialog.toast({
										mes: err.response.data.msg[x],
										timeout: 1500
									})
								}
							}
							if(err.response.status === 404) {
								than.$dialog.toast({
									mes: err.response.data.msg,
									timeout: 1500
								})
							}

						});
					this.login1 = this.$route.params.login;
				}
			},

	}
</script>
<style scoped>
	#login {
		height: 100%;
		width: 100%;
		background: #b8b8b8;
	}
	
	.tanchu {
		width: 10rem;
		height: 3rem;
		background: #000;
		color: #fff;
		text-align: center;
		line-height: 3rem;
		border-radius: 3px;
		opacity: 0.7;
		font-size: 1.1rem;
		letter-spacing: 1.5px;
		margin-top: -17rem;
		margin-left: 8.5rem;
	}
	
	.tanchu1 {
		width: 10rem;
		height: 3rem;
		background: #000;
		color: #fff;
		text-align: center;
		line-height: 3rem;
		border-radius: 3px;
		opacity: 0.7;
		font-size: 1.1rem;
		letter-spacing: 1.5px;
		margin-top: -17rem;
		margin-left: 8.5rem;
	}
	
	.tanchu2 {
		width: 10rem;
		height: 3rem;
		background: #000;
		color: #fff;
		text-align: center;
		line-height: 3rem;
		border-radius: 3px;
		opacity: 0.7;
		font-size: 1.1rem;
		letter-spacing: 1.5px;
		margin-top: -17rem;
		margin-left: 8.5rem;
	}
	
	.search1-1 {
		position: fixed;
		width: 100%;
		z-index: 99;
	}
	
	.search1 {
		height: 3rem;
		text-align: center;
		margin-bottom: 15px;
		background: #fff;
	}
	
	.search1 .zifu {
		position: absolute;
		left: 0.9rem;
		top: 1rem;
		width: 1rem;
		height: 1rem;
		line-height: 3rem;
		border-left: 0.1rem solid #000;
		border-bottom: 0.1rem solid #000;
		display: inline-block;
		transform: rotate(45deg);
	}
	
	span {
		line-height: 3rem;
		font-size: 1.2rem;
		letter-spacing: 1.5px;
	}
	
	.content {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 3rem;
		background: #b8b8b8;
		z-index: 1;
	}
	
	.bigDiv {
		margin: auto;
		width: 90%;
		background: #b8b8b8;
		/* border: 1px solid #000; */
	}
	
	.tupian {
		width: 100%;
		/* border: 1px solid #000; */
		text-align: center;
	}
	
	.logo {
		width: 25%;
		height: 25%;
		margin: 1rem 0 0 auto;
	}
	
	.oneDiv {
		width: 100%;
		/* height:21.4rem; */
		background: #fff;
		border-radius: 3px;
		margin: -3.3rem auto 0 auto;
	}
	
	.oneDiv .cont {
		width: 95%;
		/* height:16.7rem; */
		font-size: 1.1rem;
		margin: 0 auto;
		letter-spacing: 1px;
	}
	
	.oneDiv .cont div {
		width: 95%;
		height: 3.14rem;
		color: #535353;
		line-height: 3.14rem;
		display: flex;
		border-bottom: 1px #c9c9c9 solid;
		/* margin-left: 1rem; */
		margin: auto;
	}
	
	.oneDiv .cont .clicked {
		border-bottom: 1px #42a5e0 solid;
	}
	
	.oneDiv .cont div input {
		width: 73%;
		color: #999;
		margin: 0.2rem 0 0 0.8rem;
		border: none;
		font-size: 1.1rem;
	}
	
	.oneDiv .cont div .yzm {
		width: 4.8rem;
		height: 1.7rem;
		font-size: 0.78rem;
		line-height: 1.57rem;
		padding: 0;
		margin-top: 0.7rem;
		border: 1px #b8b8b8 solid;
	}
	
	.oneDiv .cont .xiamian {
		width: 95%;
		margin: auto;
	}
	
	.oneDiv .cont .ljzc {
		height: 2.14rem;
		color: #42a5e0;
		font-size: 1rem;
		line-height: 2.8rem;
		margin-left: 48%;
	}
	
	.oneDiv .cont .zhmm {
		height: 2.14rem;
		color: #999;
		font-size: 1rem;
		line-height: 2.8rem;
		margin-left: 1rem;
	}
	
	form {
		width: 100%;
		margin: auto;
	}
	
	.oneDiv .cont .dl-blue {
		width: 60%;
		height: 2.5rem;
		color: #fff;
		font-size: 1rem;
		background: #42A5E0;
		letter-spacing: 0.6rem;
		margin: 7% 0 5% 21%;
		/* margin-top: 10%; */
		border: none;
		border-radius: 3px;
		/* text-align: center; */
		/* margin-left: 21%; */
	}
	
	.oneDiv .cont .dl-blue:active {
		background: #F58823;
	}
	
	.twoDiv {
		width: 100%;
		/* height: 12rem; */
		background: #fff;
		border-radius: 3px;
		margin: 1rem auto;
	}
	
	.twoDiv .cont {
		width: 100%;
		height: 11.7rem;
		color: #42A5E0;
		font-size: 1rem;
		text-align: center;
		letter-spacing: 1px;
	}
	
	.twoDiv .cont img {
		width: 13%;
		height: 25%;
		/* margin-left: 9.8rem; */
		margin-top: 1rem;
		/* margin: -2rem auto 0; */
	}
	
	.twoDiv .cont div {
		width: 100%;
		height: 3rem;
		font-size: 1.2rem;
		font-weight: 600;
		line-height: 2rem;
		text-align: center;
	}
	
	.twoDiv .cont .dl-yellow {
		width: 95%;
		height: 2.5rem;
		color: #fff;
		text-align: center;
		line-height: 2.5rem;
		background: #F58823;
		border-radius: 3px;
		letter-spacing: 0.6rem;
		margin: 0.6rem auto;
	}
	
	.twoDiv .cont .dl-yellow:active {
		background: #42A5E0;
	}
	
	@media screen and (min-width: 1681px) and (max-width: 1920px) {
		.logo {
			width: 12%
		}
		.oneDiv {
			margin-top: -4.4rem
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
	}
	
	@media screen and (min-width: 1441px) and (max-width: 1680px) {
		.logo {
			width: 12%
		}
		.oneDiv {
			margin-top: -3.4rem
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
			margin-top: -3.4rem
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
			width: 8%;
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
	}
	
	@media screen and (min-width: 1025px) and (max-width: 1280px) {
		.logo {
			width: 8%;
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
		.content {
			height: auto;
		}
	}
	
	@media screen and (min-width: 601px) and (max-width: 768px) {
		.content {
			height: auto;
		}
		.twoDiv .cont .dl-yellow {
			width: 400px
		}
	}
</style>