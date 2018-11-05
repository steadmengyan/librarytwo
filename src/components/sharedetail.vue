<template>
	<div id="sharedetail">
		<div class="kwk-box">
			<div class="search1">
				<span class="zifu" @click="index"></span>
				<span class="zifu1">名家分享</span>
			</div>
		</div>

		<div class="content">
			<div class="titDiv">
				<div style="color:#f58823">{{cc.lesson}}&nbsp;</div>
				<p style="color:#42a5e0">|&nbsp;{{cc.title}}</p>
			</div>
			<div class="contDiv">
				<p style="text-align: center">
					<iframe class="video_iframe" id="ship" style="z-index:1;" :src="cc.video_url"></iframe>
				</p>
			</div>
			<div class="botDiv">
				<img class="logo" src="../../resoure/images/textdetail/logo.png" alt="">
				<div class="wen">
					<img src="../../resoure/images/textdetail/wen.png" alt="">
					<i> 不懂就<em>问问</em></i>
				</div>
				<div class="vip">
					<img src="../../resoure/images/textdetail/vip.png" alt="">
					<i>我要咨询</i>
				</div>
			</div>
		</div>
		<!-- 记笔记 -->
		<keep-alive>
			<Jibiji :Show="Show"></Jibiji>
		</keep-alive>
		<!-- 上传图片 -->
		<keep-alive>
			<Sctp :Show="Show"></Sctp>
		</keep-alive>
	</div>
</template>
<script>
	import Jibiji from '@/components/jibiji'
	import Sctp from '@/components/sctp'
	export default {
		data() {
				return {
					Id: "",
					cc: "",
					Show: {
						show: true
					},
					ship: "",
				}
			},
			methods: {
				index() {
					this.$router.goBack()
				}
			},
			components: {
				Jibiji,
				Sctp,
			},
			mounted() {
				if(this.$route.params.Id !== undefined) {
					this.Id = this.$route.params.Id
					localStorage.setItem("id", this.$route.params.Id);
				} else {
					this.Id = localStorage.getItem("id")
				}

				var than = this;
				this.$axios.get("http://xcx.xywol.com/index.php/api/version/getCourseDetail?id=" + this.Id).then(function(res) {
						than.cc = res.data.data
						console.log(res.data.data);
					})
					.catch();
			}
	}
</script>
<style scoped>
	#sharedetail {
		height: 100%;
		width: 100%;
	}
	
	.search1 {
		width: 100%;
		height: 3rem;
		margin-bottom: 15px;
		background: #fff;
		text-align: center;
		position: fixed;
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
	
	.search1 .zifu1 {
		font-size: 1.2rem;
		letter-spacing: 1.5px;
	}
	
	.search1 span {
		line-height: 3rem;
		font-size: 1rem;
	}
	
	.content {
		width: 100%;
		height: 18.8rem;
		background: #fff;
		border-bottom: 0.14rem #EFEFEF solid;
		z-index: 999;
		position: fixed;
		margin-top: 3rem;
	}
	
	.content .titDiv {
		width: 100%;
		height: 2.3rem;
		font-size: 1rem;
		line-height: 2.2rem;
		letter-spacing: 0.1rem;
		display: flex;
		background: #fff;
		border: 0.07rem #efefef solid;
		border-left: 0;
		border-right: 0;
	}
	
	.content .titDiv div {
		color: #42A5E0;
		margin-left: 1rem;
	}
	
	.content .contDiv {
		width: 100%;
		height: 13.7rem;
		position: absolute;
	}
	
	.content .contDiv .video_iframe {
		width: 100%;
		height: 13.7rem;
	}
	
	.content .contDiv .tupian {
		width: 100%;
		height: 13.7rem;
		/* z-index:1; */
	}
	
	.content .contDiv .tingzhi {
		margin-top: -36%;
		margin-left: 41%;
		position: absolute
		/* z-index:3; */
	}
	
	.content .botDiv {
		width: 90%;
		height: 2.6rem;
		font-size: 0.9rem;
		color: #F58823;
		letter-spacing: 0.07rem;
		margin: 14rem auto;
	}
	
	.content .botDiv .logo {
		width: 1.9rem;
		height: 1.4rem;
		margin-top: 0.5rem;
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
		color: #F58823;
		float: right;
		margin-top: -1.4rem;
		font-size: 0.9rem;
		margin-left: 6rem;
	}
	
	.content .botDiv .vip i {
		width: 5rem;
		float: right;
		margin-top: 0.6rem;
		margin-left: 0.5rem;
	}
	
	.content .botDiv .wen i em {
		color: #42A5E0;
		text-decoration: underline;
	}
	
	.content .botDiv .vip img {
		width: 1.2rem;
		height: 1.2rem;
		margin-top: 0.64rem;
	}
	
	.content .botDiv .vip {
		width: auto;
		float: right;
	}
	
	.content .botDiv .wen img {
		width: 1.2rem;
		height: 1.2rem;
		margin: 0.6rem 0.14rem 0 1rem;
	}
	/*@media*/
	
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
		/*.content .contDiv .tupian {
			width: 48rem;
			height: 27rem;
			margin-top: 1rem;
		}*/
		.content .contDiv .video_iframe {
			width: 48rem;
			height: 27rem;
			margin: 1rem auto;
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
			top: 20rem;
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
		.content .titDiv div {
			margin-left: 10.5rem;
		}
	}
	
	@media screen and (min-width: 1441px) and (max-width: 1680px) {
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
			height: 970px;
			background-color: #fff;
			position: static;
		}
		/*.content .contDiv .tupian {
			width: 48rem;
			height: 27rem;
			margin-top: 1rem;
		}*/
		.content .contDiv .video_iframe {
			width: 48rem;
			height: 27rem;
			margin: 1rem auto;
		}
		.content .contDiv {
			height: 29rem;
			width: 100%;
			text-align: center;
		}
		.content .botDiv {
			width: 1680px;
			height: 3.6rem;
			position: absolute;
			top: 20rem;
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
			margin-left: 3.5rem;
		}
		.content .contDiv .tingzhi {
			margin-top: 18%;
			margin-left: -38%;
		}
		.content .titDiv div {
			margin-left: 6rem;
		}
		.content .botDiv .vip {
			margin-right: 8rem;
		}
		.content .titDiv {
			border: 0;
			border-bottom: 0.03rem solid #efefef;
		}
	}
	
	@media screen and (min-width: 1367px) and (max-width: 1440px) {
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
			height: 882px;
			/*************/
			background-color: #fff;
			position: static;
		}
		/*.content .contDiv .tupian {
			width: 48rem;
			height: 27rem;
			margin-top: 1rem;
		}*/
		.content .contDiv .video_iframe {
			width: 40rem;
			height: 22.5rem;
			margin: 1rem auto;
		}
		.content .contDiv {
			height: 29rem;
			width: 100%;
			text-align: center;
		}
		.content .botDiv {
			width: 1366px;
			/*******************/
			height: 3.6rem;
			position: absolute;
			top: 15rem;
			/***************/
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
			margin-left: 3.5rem;
		}
		/*.content .contDiv .tingzhi {
			margin-top: 18%;
			margin-left: -38%;
		}*/
		.content .titDiv div {
			margin-left: 6rem;
		}
		.content .botDiv .vip {
			margin-right: 4.8rem;
		}
		.content .titDiv {
			border: 0;
			border-bottom: 0.03rem solid #efefef;
		}
	}
	
	@media screen and (min-width: 1281px) and (max-width: 1366px) {
		/*1366*/
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
			height: 818px;
			/*************/
			background-color: #fff;
			position: static;
		}
		/*.content .contDiv .tupian {
			width: 48rem;
			height: 27rem;
			margin-top: 1rem;
		}*/
		.content .contDiv .video_iframe {
			width: 40rem;
			height: 22.5rem;
			margin: 1rem auto;
		}
		.content .contDiv {
			height: 29rem;
			width: 100%;
			text-align: center;
		}
		.content .botDiv {
			width: 1024px;
			/*******************/
			height: 3.6rem;
			position: absolute;
			top: 15rem;
			/***************/
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
			margin-left: 2.5rem;           /***********/
		}
		/*.content .contDiv .tingzhi {
			margin-top: 18%;
			margin-left: -38%;
		}*/
		.content .titDiv div {
			margin-left: 6rem;
		}
		.content .botDiv .vip {
			margin-right: -6.2rem;         /********/
		}
		.content .titDiv {
			border: 0;
			border-bottom: 0.03rem solid #efefef;
		}
	}
	
	@media screen and (min-width: 1025px) and (max-width: 1280px) {
		/*1366*/
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
			height: 818px;
			/*************/
			background-color: #fff;
			position: static;
		}
		/*.content .contDiv .tupian {
			width: 48rem;
			height: 27rem;
			margin-top: 1rem;
		}*/
		.content .contDiv .video_iframe {
			width: 40rem;
			height: 22.5rem;
			margin: 1rem auto;
		}
		.content .contDiv {
			height: 29rem;
			width: 100%;
			text-align: center;
		}
		.content .botDiv {
			width: 1024px;
			/*******************/
			height: 3.6rem;
			position: absolute;
			top: 15rem;
			/***************/
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
			margin-left: 1.5rem;           /***********/
		}
		/*.content .contDiv .tingzhi {
			margin-top: 18%;
			margin-left: -38%;
		}*/
		.content .titDiv div {
			margin-left: 3em;
		}
		.content .botDiv .vip {
			margin-right: -5.2rem;         /********/
		}
		.content .titDiv {
			border: 0;
			border-bottom: 0.03rem solid #efefef;
		}
	}

@media screen and (min-width: 769px) and (max-width: 1024px) {
		/*1366*/
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
			height: 632px;
			/*************/
			background-color: #fff;
			position: static;
		}
		/*.content .contDiv .tupian {
			width: 48rem;
			height: 27rem;
			margin-top: 1rem;
		}*/
		.content .contDiv .video_iframe {
			width: 768px;
			height: 432px;
			margin: 1rem auto;
		}
		.content .contDiv {
			height: 0rem;
			width: 100%;
			text-align: center;
		}
		.content .botDiv {
			width: 734px;
			/*******************/
			height: 3.6rem;
			position: absolute;
			top: 8rem;
			/***************/
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
			margin-left: 2.6rem;           /***********/
		}
		/*.content .contDiv .tingzhi {
			margin-top: 18%;
			margin-left: -38%;
		}*/
		.content .titDiv div {
			margin-left: 4.5em;
		}
		.content .botDiv .vip {
			margin-right: -5.2rem;         /********/
		}
		.content .titDiv {
			border: 0;
			border-bottom: 0.03rem solid #efefef;
		}
	}
	
	@media screen and (min-width: 601px) and (max-width: 768px) {
		/*1366*/
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
			/*************/
			background-color: #fff;
			position: static;
		}
		/*.content .contDiv .tupian {
			width: 48rem;
			height: 27rem;
			margin-top: 1rem;
		}*/
		.content .contDiv .video_iframe {
			width: 28rem;
			height: 15.75rem;
			margin: 1rem auto;
		}
		.content .contDiv {
			height: 0rem;
			width: 100%;
			text-align: center;
		}
		.content .botDiv {
			width: 594px;
			/*******************/
			height: 3.6rem;
			position: absolute;
			top: 8rem;
			/***************/
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
			margin-left: -0.5rem;           /***********/
		}
		/*.content .contDiv .tingzhi {
			margin-top: 18%;
			margin-left: -38%;
		}*/
		.content .titDiv div {
			margin-left: 0.5em;
		}
		.content .botDiv .vip {
			margin-right: -5.2rem;         /********/
		}
		.content .titDiv {
			border: 0;
			border-bottom: 0.03rem solid #efefef;
		}
	}

</style>