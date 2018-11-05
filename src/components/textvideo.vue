<template>
	<div id="mfkc">
		<div class="kwk-box">
			<div class="search1">
				<span class="zifu" @click="index"></span>
				<span class="zifu1">看微课</span>
			</div>
		</div>

		<!-- 头部 -->
		<div class="header">
			<div class="qieh" style="font-weight:600">
				<p class="title" @click="textdetail">听课文</p>
				<div class="current" style=" border-right: 0.07rem #F58823 solid;">看微课</div>
				<p class="title" @click="test">测一测</p>
			</div>
		</div>
		<!-- 中间内容 -->
		<div class="content">
			<div class="titDiv">
				<div style="color:#f58823">{{bb.lesson}}&nbsp; </div>
				<p style="color:#42a5e0">|&nbsp;{{bb.title}}</p>
			</div>
			<!--  -->
			<div class="contDiv video_mask" id="video_mask" v-show="isPlay">
				<!--<video id="ship" v-show="up1" poster='../../resoure/images/textdetail/fm.png' controls controlslist="nodownload" style="object-fit:fill" webkit-playsinline playsinline x5-video-player-type="h5"  x5-video-orientation="landscape" :src="bb.video_url" />
				</video>-->

				<!--<video id="ship" v-show="up1"  controls controlslist="nodownload" style="object-fit:fill" webkit-playsinline playsinline x5-video-player-type="h5"  x5-video-orientation="landscape" :src="bb.video_url" />
				</video>-->
				<video id="ship" v-show="up1" controls style="object-fit:fill" :src="bb.video_url" />
				</video>
				<p>
					<img :src="bb.video_img" alt="" class="tupian">
					<img src="../../resoure/images/tizhi.png" alt="" class="tingzhi" @click="imgdown">
				</p>
			</div>

			<!--<video src="{{list.video_url}}" poster="http://xcx.xywol.com/{{list.video_img 

}}" controls="true" objectFit="fill" id="video" custom-cache="{{false}}"  bindplay="videoPlay" bindtimeupdate="bindtimeupdate"/> -->

			<!--<div class="video_mask" id="video_mask" v-show="isPlay">
				<video id="video_play" :src="bb.video_url" controls="controls" width="100%" ></video>
			</div>-->

			<div class="botDiv">
				<img class="logo" src="../../resoure/images/textdetail/logo.png" alt="">
				<div class="wen">
					<img src="../../resoure/images/textdetail/wen.png" alt="">
					<i> 不懂就<em>问问</em></i>
				</div>
				<div class="vip">
					<img src="../../resoure/images/textdetail/vip.png" alt="">
					<i>我要开通</i>
				</div>
			</div>
		</div>
		<keep-alive>
			<Biji :Show="Show"></Biji>
		</keep-alive>
		<keep-alive>
			<Sctp1 :Show="Show"></Sctp1>
		</keep-alive>

		<!-- 记笔记  提问题 -->
		<!-- <include src="../Writenotes/Writenotes.wxml"/>   -->
	</div>
</template>
<script>
	import Biji from "@/components/biji";
	import Sctp1 from "@/components/sctp1";

	export default {
		data() {
				return {
					Id: "",
					bb: "",
					Show: {
						show: true
					},
					up1: true,
					ship: "",
					isPlay: true
				};
			},
			methods: {
				index() {
					this.$router.goBack();
					// this.$router.push({path:'/'})
				},
				textdetail() {
					this.$router.goBack();
					// this.$router.push({path:'/textdetail'})
					this.ship.pause();
				},
				test() {
					this.$router.push({
						path: "/test"
					});
					this.ship.pause();
				},
				imgdown() {
					document.getElementsByClassName('tupian')[0].style.display = 'none';
					document.getElementsByClassName('tingzhi')[0].style.display = 'none';
					document.getElementById('ship').play();
					
					//					this.up1 = !this.up1;
					//					this.ship.play();
				},

				down(url) {

					this.isPlay = true;
					this.video_src = url;
					document.getElementById('ship').setAttribute('autoplay', 'autoplay');
					document.getElementById('ship').play();
					let _this = this;
					document.getElementById('ship').addEventListener('ended', function() {
						_this.isPlay = false;
					});
					document.getElementById('video_mask').addEventListener('click', function() {
						_this.isPlay = true;
						document.getElementById('ship').pause();
					});

					//					this.tokenId = localStorage.getItem("userinfo");
					//					var than = this;
					//				    if(this.tokenId){
					//                      this.$axios.defaults.headers.common["token"] =this.tokenId;
					//                      this.$axios({
					//                          url:"http:///xcx.xywol.com/index.php/api/version/CourseJurisdiction",
					//                          method:"post",
					//                          data:{"grade":"1"} 
					//                      }).then(function(res){
					//							console.log("成功的回调+1234567890");
					//							than.up1 = !than.up1;
					//					        than.ship.play();
					//                      })
					//                      .catch(function(err){
					//							console.log("失败的回调")
					//							console.log(err);
					//								if(err.response.status === 404) {
					//								than.$dialog.toast({
					//									mes: err.response.data.msg,
					//									timeout: 1500
					//								})
					//							}
					//                          
					//                      });
					//					}

				},

			

//				hengshuping() {
//					if(window.orientation == 180 || window.orientation == 0) {
//						alert("竖屏状态！")
//					}
//					if(window.orientation == 90 || window.orientation == -90) {
//						alert("横屏状态！")
//					}
//					window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
//				}
				

			},
			components: {
				Biji,
				Sctp1
			},
//			created (){
//			  
//					if(window.orientation == 180 || window.orientation == 0) {
//						alert("竖屏状态！")
//					}
//					if(window.orientation == 90 || window.orientation == -90) {
//						alert("横屏状态！")
//					}
//					window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
//				
//			},
			mounted() {
				console.log(document.getElementById("ship"));
				//  组件加载时,获取对象
				this.ship = document.getElementById("ship");
				//  组件加载时,视频播放进度清除
				this.ship.currentTime = 0;
				this.ship.pause();
				// 前端进度条插件()
				if(this.$route.params.Id !== undefined) {
					this.Id = this.$route.params.Id;
					localStorage.setItem("id", this.$route.params.Id);
				} else {
					this.Id = localStorage.getItem("id");
				}

				var than = this;
				this.$axios
					.get(
						"http://xcx.xywol.com/index.php/api/version/getCourseDetail?id=" +
						this.Id
					)
					.then(function(res) {
						than.bb = res.data.data;
						//						console.log(than.bb.video_img);
					})
					.catch();
			}
	};
</script>
<style scoped>
	#video_mask {
		width: 100%;
	}
	
	#video_play {
		transform: rotate(-180deg)
	}
	
	#mfkc {
		height: 100%;
		width: 100%;
		padding: 0;
	}
	
	.search1 {
		width: 100%;
		height: 3rem;
		background: #fff;
		text-align: center;
		line-height: 3rem;
		font-size: 1rem;
		position: fixed;
	}
	
	.search1 .zifu1 {
		font-size: 1.2rem;
		letter-spacing: 1.5px;
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
	
	.header {
		width: 100%;
		height: 3.14rem;
		margin-top: 3rem;
		z-index: 999;
		position: fixed;
		display: flex;
		background: #fff;
		border-bottom: 4rpx #efefef solid;
	}
	
	.header .qieh {
		width: 95%;
		height: 2.14rem;
		font-size: 1.1rem;
		color: #f58823;
		text-align: center;
		line-height: 2.14rem;
		letter-spacing: 0.14rem;
		border: 0.07rem #f58823 solid;
		border-radius: 3px;
		margin: 0.4rem auto;
		display: flex;
	}
	
	.header .qieh div,
	.title {
		width: 33.3%;
		height: 100%;
	}
	
	.header .qieh .current {
		color: #fff;
		background: #f58823;
	}
	
	.header .qieh .clicked {
		color: #fff;
		background: #f58823;
	}
	
	.content {
		width: 100%;
		height: 18rem;
		background: #fff;
		border-bottom: 0.14rem #efefef solid;
		z-index: 999;
		position: fixed;
		margin-top: 6rem;
	}
	
	.content .titDiv {
		width: 100%;
		font-weight: 600;
		height: 2.6rem;
		font-size: 1rem;
		line-height: 2.6rem;
		letter-spacing: 0.1rem;
		display: flex;
		background: #fff;
		border: 0.07rem #efefef solid;
		border-left: 0;
		border-right: 0;
	}
	
	.content .titDiv div {
		color: #42a5e0;
		margin-left: 1rem;
	}
	
	.content .contDiv {
		width: 100%;
		height: 12.9rem;
		/* position: absolute; */
		position: relative
	}
	
	.content .contDiv video {
		width: 100%;
		height: 12.9rem;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.content .contDiv .tupian {
		width: 100%;
		height: 13rem;
		position: absolute;
		left: 0;
		top: -.1rem;
	}
	
	.content .contDiv .tingzhi {
		width: 5rem;
		height: 5rem;
		margin-top: 14%;
		margin-left: 41%;
		position: absolute;
	
	}
	
	.content .botDiv {
		width: 90%;
		height: 2.6rem;
		font-size: 0.9rem;
		color: #f58823;
		letter-spacing: 0.07rem;
		margin: 1rem auto;
	}
	
	.content .botDiv .logo {
		width: 1.9rem;
		height: 1.4rem;
		margin-top: -0.7rem;
		float: left;
	}
	
	.content .botDiv .wen {
		width: 8.57rem;
		margin-left: 2rem;
		float: left;
	}
	
	.content .botDiv .wen .txt {
		margin-top: 2rem;
	}
	
	.content .botDiv .wen i {
		width: 6rem;
		color: #f58823;
		float: right;
		margin-top: -1.4rem;
		font-size: 0.9rem;
		margin-left: 6rem;
	}
	
	.content .botDiv .vip i {
		width: 5rem;
		float: right;
		margin-top: -0.4rem;
		margin-left: 0.5rem;
	}
	
	.content .botDiv .wen i em {
		color: #42a5e0;
		text-decoration: underline;
	}
	
	.content .botDiv .vip img {
		width: 1.2rem;
		height: 1.2rem;
		margin-top: -1.6rem;
	}
	
	.content .botDiv .vip {
		width: auto;
		float: right;
	}
	
	.content .botDiv .wen img {
		width: 1.2rem;
		height: 1.2rem;
		margin: -1.6rem 0.14rem 0 1rem;
	}
	/*media*/
	
	@media screen and (min-width: 1681px) and (max-width: 1920px) {
		/*1920*/
		.kwk-box {
			position: relative;
			z-index: 999;
		}
		.kwk-box .search1 {
			position: fixed;
			left: 0;
			top: 0;
		}
		.content {
			height: 1056px;
			background-color: #fff;
			position: static;
		}
		.content .contDiv .tupian {
			width: 48rem;
			height: 27rem;
			margin-top: 1rem;
		}
		.content .contDiv video {
			width: 48rem;
			height: 27rem;
			margin: 1rem auto;
		}
		#video_play {
		transform: rotate(0deg)
	}
		.content .contDiv {
			height: 29rem;
			width: 100%;
			text-align: center;
		}
		.content .botDiv {
			width: 81%;
			height: 3.6rem;
			position: absolute;
			top: 36rem;
			left: 50%;
			margin-left: -45%;
		}
		.content .botDiv .wen img {
			margin-top: 1rem;
		}
		.content .botDiv .vip img {
			margin-top: 1rem;
		}
		.content .botDiv .vip i {
			margin-top: 1rem;
		}
		.content .botDiv .logo {
			width: 3rem;
			height: 2rem;
			margin-top: 0.5rem;
			margin-left: 7rem;
		}
		.content .contDiv .tingzhi {
			margin-top: 18%;
			margin-left: -38%;
		}
	}
	
	@media screen and (min-width: 1441px) and (max-width: 1680px) {
		/*1366*/
		#mfkc {
			width: 1680px;
			background: #fff;
			overflow-x: hidden;
		}
		.kwk-box {
			position: relative;
			z-index: 999;
		}
		.kwk-box .search1 {
			position: fixed;
			left: 0;
			top: 0;
		}
		.content {
			height: 924px;
			background-color: #fff;
			position: static;
			margin-top: 168px;
		}
		.content .contDiv,
		.content .contDiv .tupian,
		.content.contDiv video {
			width: 48rem;
			height: 27rem;
			margin: 0 auto;
		}
		#video_play {
		transform: rotate(0deg)
	}
		.content .contDiv .tingzhi {
			margin-top: -438px;
			margin-left: 588px;
			width: 5rem;
			height: 5rem;
		}
		.desc .contDesc1 {
			margin-top: -4rem;
		}
		.content .botDiv {
			width: 1680px;
			margin-top: 32px;
			height: 1.6rem;
			margin-left: 0;
			margin-right: 0;
		}
		.content .titDiv {
			height: 70px;
			margin-bottom: 10px;
		}
		.content .botDiv .wen {
			margin-left: 0.5rem;
		}
		.content .botDiv .vip {
			margin-right: 5rem;
		}
		.content .botDiv .logo {
			margin-left: 6rem;
		}
	}
	
	@media screen and (min-width: 1367px) and (max-width: 1440px) {
		/*1366*/
		#mfkc {
			width: 1440px;
			background: #fff;
			overflow-x: hidden;
		}
		.kwk-box {
			position: relative;
			z-index: 999;
		}
		.kwk-box .search1 {
			position: fixed;
			left: 0;
			top: 0;
		}
		.content {
			height: 786px;
			background-color: #fff;
			position: static;
			margin-top: 168px;
			border-bottom: none;
		}
		.content .contDiv,
		.content .contDiv .tupian,
		.content.contDiv video {
			width: 40rem;
			height: 22.5rem;
			margin: 0 auto;
		}
		#video_play {
		transform: rotate(0deg)
	}
		.content .contDiv .tingzhi {
			margin-top: -26%;
			margin-left: 33.5%;
			width: 4rem;
			height: 4rem;
		}
		.desc .contDesc1 {
			margin-top: -4rem;
		}
		.content .botDiv {
			width: 1366px;
			margin-top: 32px;
			height: 1.6rem;
			margin-left: 0;
			margin-right: 0;
		}
		.content .titDiv {
			height: 70px;
			margin-bottom: 10px;
		}
		.content .botDiv .wen {
			margin-left: 0.5rem;
		}
		.content .botDiv .vip {
			margin-right: 2rem;
		}
		.content .botDiv .logo {
			margin-left: 6rem;
		}
	}
	
	@media screen and (min-width: 1281px) and (max-width: 1366px) {
		/*1366*/
		#mfkc {
			width: 1366px;
			background: #fff;
			overflow-x: hidden;
		}
		.kwk-box {
			position: relative;
			z-index: 999;
		}
		.kwk-box .search1 {
			position: fixed;
			left: 0;
			top: 0;
		}
		.content {
			height: 740px;
			background-color: #fff;
			position: static;
			margin-top: 168px;
			/*		background: yellowgreen;*/
		}
		.content .contDiv,
		.content .contDiv .tupian,
		.content .contDiv video {
			width: 1024px;
			height: 576px;
			margin: 0 auto;
		}
		#video_play {
		transform: rotate(0deg)
	}
		.content .contDiv .tingzhi {
			margin-top: -26%;
			margin-left: 33.5%;
			width: 4rem;
			height: 4rem;
		}
		.desc .contDesc1 {
			margin-top: -4rem;
		}
		.content .botDiv {
			width: 1366px;
			margin-top: 32px;
			height: 1.6rem;
			margin-left: 0;
			margin-right: 0;
		}
		.content .titDiv {
			height: 70px;
			margin-bottom: 10px;
		}
		.content .botDiv .wen {
			margin-left: 0.5rem;
		}
		.content .botDiv .vip {
			margin-right: 5rem;
		}
		.content .botDiv .logo {
			margin-left: 6rem;
		}
	}
	
	@media screen and (min-width: 1025px) and (max-width: 1280px) {
		/*1366*/
		#mfkc {
			width: 1280px;
			background: #fff;
			overflow-x: hidden;
		}
		.kwk-box {
			position: relative;
			z-index: 999;
		}
		.kwk-box .search1 {
			position: fixed;
			left: 0;
			top: 0;
		}
		.content {
			height: 740px;
			background-color: #fff;
			position: static;
			margin-top: 168px;
			/*		background: yellowgreen;*/
		}
		.content .contDiv,
		.content .contDiv .tupian,
		.content.contDiv video {
			width: 1024px;
			height: 576px;
			margin: 0 auto;
		}
		#video_play {
		transform: rotate(0deg)
	}
		.content .contDiv .tingzhi {
			margin-top: -27%;
			margin-left: 36.5%;
			width: 4rem;
			height: 4rem;
		}
		.desc .contDesc1 {
			margin-top: -4rem;
		}
		.content .botDiv {
			width: 1280px;
			margin-top: 32px;
			height: 1.6rem;
			margin-left: 0;
			margin-right: 0;
		}
		.content .titDiv {
			height: 70px;
			margin-bottom: 10px;
		}
		.content .botDiv .wen {
			margin-left: 0.5rem;
		}
		.content .botDiv .vip {
			margin-right: 3.3rem;
		}
		.content .botDiv .logo {
			margin-left: 4.7rem;
		}
	}
	
	@media screen and (min-width: 769px) and (max-width: 1024px) {
		/*1366*/
		#mfkc {
			width: 1024px;
			background: #fff;
			overflow-x: hidden;
		}
		.kwk-box {
			position: relative;
			z-index: 999;
		}
		.kwk-box .search1 {
			position: fixed;
			left: 0;
			top: 0;
		}
		.content {
			height: 600px;
			background-color: #fff;
			position: static;
			margin-top: 168px;
			/*		background: yellowgreen;*/
		}
		.content .contDiv,
		.content .contDiv .tupian,
		.content.contDiv video {
			width: 768px;
			height: 432px;
			margin: 0 auto;
		}
		#video_play {
		transform: rotate(0deg)
	}
		.content .contDiv .tingzhi {
			margin-top: -26%;
			margin-left: 33.5%;
			width: 4rem;
			height: 4rem;
		}
		.desc .contDesc1 {
			margin-top: -4rem;
		}
		.content .botDiv {
			width: 1366px;
			margin-top: 32px;
			height: 1.6rem;
			margin-left: 0;
			margin-right: 0;
		}
		.content .titDiv {
			height: 70px;
			margin-bottom: 10px;
		}
		.content .botDiv .wen {
			margin-left: 0.5rem;
		}
		.content .botDiv .vip {
			margin-right: 438px;
		}
		.content .botDiv .logo {
			margin-left: 126px;
		}
	}
	
	@media screen and (min-width: 601px) and (max-width: 768px) {
		/*768*/
		#mfkc {
			width: 768px;
			background: #fff;
			overflow-x: hidden;
		}
		.kwk-box {
			position: relative;
			z-index: 999;
		}
		.kwk-box .search1 {
			position: fixed;
			left: 0;
			top: 0;
		}
		.content {
			height: 615px;
			background-color: #fff;
			position: static;
			margin-top: 168px;
		}
		.content .contDiv,
		.content .contDiv video,
		.content .contDiv .tupian {
			width: 28 rem;
			height: 15.75rem;
			/* margin-top:13px;*/
		}
	
	
	#video_play {
		transform: rotate(0deg)
	}
		.content .contDiv .tingzhi {
			margin-top: 20%;
			margin-left: 42.5%;
			width: 4rem;
			height: 4rem;
		}
		.desc .contDesc1 {
			margin-top: -4rem;
		}
		.content .botDiv {
			width: 768px;
			margin-top: 32px;
			height: 1.6rem;
			margin-left: 0;
			margin-right: 0;
		}
		.content .titDiv {
			height: 70px;
			margin-bottom: 10px;
		}
		.content .botDiv .wen {
			margin-left: 0.5rem;
		}
		.content .botDiv .vip {
			margin-right: 2rem;
		}
		.content .botDiv .logo {
			margin-left: 2rem;
		}
	}
	/*@media screen and (min-width: 414px) and (max-width: 600px) {
  #mfkc {
    width: 600px;
    background: #fff;
  }
  .content .contDiv .tingzhi {
    margin-top: -41%;
    margin-left: 57%;
  }
  .content {
    height: 68%;
  }
  .content .botDiv {
    margin: 12rem auto;
  }
  .content .botDiv {
    width: 69%;
    margin: 11rem 2rem;
  }
}*/
</style>