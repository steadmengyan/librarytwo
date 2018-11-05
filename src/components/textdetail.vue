<template>
	<div id="mfkc" v-cloak>
		<div class="kwk-box">
			<div class="search1">
				<span class="zifu" @click="index" return false></span>
				<!-- <span class="zifu"></span> -->
				<span class="zifu1">听课文</span>
			</div>
		</div>
		<!-- 头部 -->
		<div class="header">
			<div class="qieh" style="font-weight:600">
				<div class="current">听课文</div>
				<p class="title" style=" border-right: 0.07rem #F58823 solid;" @click="textvideo(aa.id)">看微课</p>
				<p class="title" @click="test(aa.id)">测一测</p>
			</div>
		</div>
		<!-- 中间内容 -->
		<div class="content content-heigth">
			<div class="titDiv">
				<div style="color:#f58823">{{aa.lesson}}&nbsp;</div>
				<p style="color:#42A5E0">|&nbsp;{{aa.title}}</p>
			</div>
			<div class="contDiv">
				<img :src="aa.audio_img" alt="" :class="zhuan">

				<p class="tingzhi tingzhi1" v-show="down">
					<img src="../../resoure/images/tizhi.png" alt="" @click="up">
				</p>
				<p class="tingzhi bofang" v-show="!down">
					<img src="../../resoure/images/bofang.png" alt="" @click="up1">
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
	</div>
</template>
<script>
	import Biji from '@/components/biji'
	import Sctp1 from '@/components/sctp1'
	export default {
		data() {

				return {
					Id: "",
					aa: "",
					textdetail: "",
					Show: {
						show: true,

					},
					yinp: "",
					zhuan: ["yuan"],
					down: true,
					show: false,
					tokenId:'',
				}
			},
			methods: {
				textvideo(id) {
					this.$router.push({
						name: "textvideo",
						params: {
							Id: id
						}
					})
					this.yinp.pause();
				},
				chu() {
					this.chulai = !this.chulai;
				},
				index() {
					this.$router.goBack()
					this.yinp.pause();
				},
				test(id) {
					this.$router.push({
						path: '/test',
						params: {
							Id: id,
						}
					})
					this.yinp.pause();
				},
				up() {
					// this.tokenId = localStorage.getItem("userinfo");
					// var than = this;
				    // if(this.tokenId){
                    //     this.$axios.defaults.headers.common["token"] =this.tokenId;
                    //     this.$axios({
                    //         url:"http:///xcx.xywol.com/index.php/api/version/CourseJurisdiction",
                    //         method:"post",
                    //         data:{"grade":"1"} 
                    //     }).then(function(res){
					// 		console.log("成功的回调+1234567890");
					// 		than.down = !than.down
					// 		than.yinp.play();
					// 		than.zhuan.push("rotate-360");
					// 		console.log(res.data);
                    //     })
                    //     .catch(function(err){
					// 		console.log("失败的回调")
					// 		console.log(err);
					// 			if(err.response.status === 404) {
					// 			than.$dialog.toast({
					// 				mes: err.response.data.msg,
					// 				timeout: 1500
					// 			})
					// 		}
                            
                    //     });
					// }
					        this.down = !this.down
							this.yinp.play();
							this.zhuan.push("rotate-360");
				},
				up1() {
					this.down = true
					this.yinp.pause();
					this.zhuan.pop();
				}

			},
			components: {
				Biji,
				Sctp1,

			},
			mounted() {
				if(this.$route.params.Id !== undefined) {
					this.Id = this.$route.params.Id
					localStorage.setItem("id", this.$route.params.Id);
				} else {
					this.Id = localStorage.getItem("id")
				}
				this.textdetail = this.$route.params.textdetail
				console.log(this.textdetail)

				var than = this;
				this.$axios.get("http://xcx.xywol.com/index.php/api/version/getCourseDetail?id=" + this.Id).then(function(res) {
						than.aa = res.data.data
						than.yinp = new Audio();
						than.yinp.src = than.aa.audio_url;
						console.log(than.aa.audio_url);

					})
					.catch();

			}
	}
</script>
<style scoped>
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
	
	.header {
		width: 100%;
		height: 3.14rem;
		margin-top: 3rem;
		z-index: 999;
		position: fixed;
		display: flex;
		background: #fff;
		border-bottom: 4rpx #EFEFEF solid;
	}
	
	.header .qieh {
		width: 95%;
		height: 2.14rem;
		font-size: 1.1rem;
		color: #F58823;
		text-align: center;
		line-height: 2.14rem;
		letter-spacing: 0.14rem;
		border: 0.07rem #F58823 solid;
		border-radius: 3px;
		margin: 0.4rem 1rem;
		display: flex;
	}
	
	.header .qieh div,
	.title {
		width: 33.3%;
		height: 100%;
	}
	
	.header .qieh .current {
		color: #fff;
		background: #F58823;
	}
	
	.header .qieh .clicked {
		color: #fff;
		background: #F58823;
	}
	
	.content {
		width: 100%;
		height: 18rem;
		background: #fff;
		border-bottom: 0.14rem #EFEFEF solid;
		z-index: 999;
		position: fixed;
		margin-top: 6rem;
	}
	
	.content .titDiv {
		width: 95%;
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
		color: #42A5E0;
		margin-left: 1rem;
	}
	
	.content .contDiv {
		width: 100%;
		height: 12.7rem;
		text-align: center;
		line-height: 21rem;
	}
	
	.contDiv {
		position: relative;
	}
	
	.content .contDiv .yuan {
		width: 9rem;
		border-radius: 50%;
	}
	
	.rotate-360 {
		animation: rotate 10s linear infinite;
	}
	
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	
	.content .contDiv .tingzhi {
		/*听课文video modify*/
		width: 4rem;
		height: 4rem;
		line-height: 4rem;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-top: -2rem;
		margin-left: -2rem;
		/* margin-left: 42%;
    margin-top: -87%; */
	}
	
	.content .contDiv .tingzhi img {
		width: 4rem;
		height: 4rem;
	}
	
	.content .botDiv {
		width: 90%;
		height: 2.6rem;
		font-size: 0.9rem;
		color: #F58823;
		letter-spacing: 0.07rem;
		margin: auto;
		border-top: 0.03rem #707070 solid
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
	
	@media screen and (min-width: 1681px) and (max-width: 1920px) {
		.kwk-box {
			position: relative;
			z-index: 999;
		}
		.kwk-box .search1 {
			position: fixed;
			left: 0;
			top: 0;
		}
		#mfkc {
			width: 1920px;
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
			height: 1056px;
			background-color: #fff;
			position: static;
			margin-top: 168px;
			border: none;
			/*background: red;*/
		}
		.content .contDiv
		{
			width: 28 rem;
			height: 26.7rem;
			/* margin-top:13px;*/
		}
		.content .contDiv .yuan {
			position: relative;
			width:15rem;
			height: 15rem;
			margin-top:150px;
		}
		.content .contDiv .tingzhi {
			position: absolute;
			left: 50%;
			top: 50%;
			margin-top: -58px;
			margin-left: -100px;
			width: 200px;
			height: 200px;
		}
		.desc .contDesc1 {
			margin-top: -4rem;
		}
		.content .botDiv {
			width: 1368px;
			margin-top: 42px;
			height: 85px;
			margin-left: 260px;
			margin-right: 0;
			border-top: 2px solid #efefef;
		}
		.content .titDiv {
			height: 70px;
			width: 100%;
			margin-bottom: 10px;
		}
		.content .botDiv .wen {
			margin-left: 70px;
		}
		.content .botDiv .wen img {
			margin-top: 24px
		}
		.content .botDiv .vip {
			margin-right: -15px;
			margin-top: 10px;
		}
		.content .botDiv .logo {
			margin-left: 26px;
			margin-top: 22px;
		}
		.content .botDiv .wen i {
			margin-top: -36px;
		}
	}
	
	@media screen and (min-width: 1441px) and (max-width: 1680px) {
		.kwk-box {
			position: relative;
			z-index: 999;
		}
		.kwk-box .search1 {
			position: fixed;
			left: 0;
			top: 0;
		}
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
			height: 564px;
			background-color: #fff;
			position: static;
			margin-top: 168px;
			border: none;
		}
		.content .contDiv,
		{
			width: 28 rem;
			height: 15.75rem;
			/* margin-top:13px;*/
		}
		.content .contDiv .yuan {
			position: relative;
		}
		.content .contDiv .tingzhi {
			position: absolute;
			left: 50%;
			top: 50%;
			margin-top: -56px;
			margin-left: -100px;
			width: 200px;
			height: 200px;
		}
		.desc .contDesc1 {
			margin-top: -4rem;
		}
		.content .botDiv {
			width: 1386px;
			margin-top: 42px;
			height: 85px;
			margin-left: 146px;
			margin-right: 0;
			border-top: 2px solid #efefef
		}
		.content .titDiv {
			height: 70px;
			width: 100%;
			margin-bottom: 10px;
		}
		.content .botDiv .wen {
			margin-left: 70px;
		}
		.content .botDiv .wen img {
			margin-top: 24px
		}
		.content .botDiv .vip {
			margin-right: -15px;
			margin-top: 10px;
		}
		.content .botDiv .logo {
			margin-left: 26px;
			margin-top: 22px;
		}
		.content .botDiv .wen i {
			margin-top: -36px;
		}
	}
	
	@media screen and (min-width: 1367px) and (max-width: 1440px) {
		.kwk-box {
			position: relative;
			z-index: 999;
		}
		.kwk-box .search1 {
			position: fixed;
			left: 0;
			top: 0;
		}
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
			height: 560px;
			background-color: #fff;
			position: static;
			margin-top: 168px;
			border: none;
		}
		.content .contDiv,
		{
			width: 28 rem;
			height: 15.75rem;
			/* margin-top:13px;*/
		}
		.content .contDiv .yuan {
			position: relative;
		}
		.content .contDiv .tingzhi {
			position: absolute;
			left: 50%;
			top: 50%;
			margin-top: -56px;
			margin-left: -100px;
			width: 200px;
			height: 200px;
		}
		.desc .contDesc1 {
			margin-top: -4rem;
		}
		.content .botDiv {
			width: 1145px;
			margin-top: 42px;
			height: 85px;
			margin-left: 147px;
			margin-right: 0;
			border-top: 2px solid #efefef
		}
		.content .titDiv {
			height: 70px;
			width: 100%;
			margin-bottom: 10px;
		}
		.content .botDiv .wen {
			margin-left: 70px;
		}
		.content .botDiv .wen img {
			margin-top: 24px
		}
		.content .botDiv .vip {
			margin-right: -15px;
			margin-top: 10px;
		}
		.content .botDiv .logo {
			margin-left: 26px;
			margin-top: 22px;
		}
		.content .botDiv .wen i {
			margin-top: -36px;
		}
	}
	
	@media screen and (min-width: 1281px) and (max-width: 1366px) {
		.kwk-box {
			position: relative;
			z-index: 999;
		}
		.kwk-box .search1 {
			position: fixed;
			left: 0;
			top: 0;
		}
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
			height: 576px;
			background-color: #fff;
			position: static;
			margin-top: 168px;
			border: none;
		}
		.content .contDiv,
		{
			width: 28 rem;
			height: 15.75rem;
			/* margin-top:13px;*/
		}
		.content .contDiv .yuan {
			position: relative;
		}
		.content .contDiv .tingzhi {
			position: absolute;
			left: 50%;
			top: 50%;
			margin-top: -57px;
			margin-left: -100px;
			width: 200px;
			height: 200px;
		}
		.desc .contDesc1 {
			margin-top: -4rem;
		}
		.content .botDiv {
			width: 1060px;
			margin-top: 42px;
			height: 85px;
			margin-left: 150px;
			margin-right: 0;
			border-top: 2px solid #efefef
		}
		.content .titDiv {
			height: 70px;
			width: 100%;
			margin-bottom: 10px;
		}
		.content .botDiv .wen {
			margin-left: 70px;
		}
		.content .botDiv .wen img {
			margin-top: 24px
		}
		.content .botDiv .vip {
			margin-right: -15px;
			margin-top: 10px;
		}
		.content .botDiv .logo {
			margin-left: 26px;
			margin-top: 22px;
		}
		.content .botDiv .wen i {
			margin-top: -36px;
		}
	}
	
	@media screen and (min-width: 1025px) and (max-width: 1280px) {
		.kwk-box {
			position: relative;
			z-index: 999;
		}
		.kwk-box .search1 {
			position: fixed;
			left: 0;
			top: 0;
		}
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
			height: 566px;
			background-color: #fff;
			position: static;
			margin-top: 168px;
			border: none;
		}
		.content .contDiv,
		{
			width: 28 rem;
			height: 15.75rem;
			/* margin-top:13px;*/
		}
		.content .contDiv .yuan {
			position: relative;
		}
		.content .contDiv .tingzhi {
			position: absolute;
			left: 50%;
			top: 50%;
			margin-top: -56px;
			margin-left: -100px;
			width: 200px;
			height: 200px;
		}
		.desc .contDesc1 {
			margin-top: -4rem;
		}
		.content .botDiv {
			width: 1058px;
			margin-top: 42px;
			height: 85px;
			margin-left: 108px;
			margin-right: 0;
			border-top: 2px solid #efefef
		}
		.content .titDiv {
			height: 70px;
			width: 100%;
			margin-bottom: 10px;
		}
		.content .botDiv .wen {
			margin-left: 70px;
		}
		.content .botDiv .wen img {
			margin-top: 24px
		}
		.content .botDiv .vip {
			margin-right: -15px;
			margin-top: 10px;
		}
		.content .botDiv .logo {
			margin-left: 26px;
			margin-top: 22px;
		}
		.content .botDiv .wen i {
			margin-top: -36px;
		}
	}
	
	@media screen and (min-width: 769px) and (max-width: 1024px) {
		.kwk-box {
			position: relative;
			z-index: 999;
		}
		.kwk-box .search1 {
			position: fixed;
			left: 0;
			top: 0;
		}
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
			height: 566px;
			background-color: #fff;
			position: static;
			margin-top: 168px;
			border: none;
		}
		.content .contDiv,
		{
			width: 28 rem;
			height: 15.75rem;
			/* margin-top:13px;*/
		}
		.content .contDiv .yuan {
			position: relative;
		}
		.content .contDiv .tingzhi {
			position: absolute;
			left: 50%;
			top: 50%;
			margin-top: -56px;
			margin-left: -100px;
			width: 200px;
			height: 200px;
		}
		.desc .contDesc1 {
			margin-top: -4rem;
		}
		.content .botDiv {
			width: 814px;
			margin-top: 42px;
			height: 258px;
			margin-left: 100px;
			margin-right: 0;
			border-top: 2px solid #efefef
		}
		.content .titDiv {
			height: 70px;
			width: 100%;
			margin-bottom: 10px;
		}
		.content .botDiv .wen {
			margin-left: 70px;
		}
		.content .botDiv .wen img {
			margin-top: 24px
		}
		.content .botDiv .vip {
			margin-right: -15px;
			margin-top: 10px;
		}
		.content .botDiv .logo {
			margin-left: 26px;
			margin-top: 22px;
		}
		.content .botDiv .wen i {
			margin-top: -36px;
		}
	}
	
	@media screen and (min-width: 601px) and (max-width: 768px) {
		/*768*/
		.kwk-box {
			position: relative;
			z-index: 999;
		}
		.kwk-box .search1 {
			position: fixed;
			left: 0;
			top: 0;
		}
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
			height: 570px;
			background-color: #fff;
			position: static;
			margin-top: 168px;
			border: none;
		}
		.content .contDiv,
		{
			width: 28 rem;
			height: 15.75rem;
			/* margin-top:13px;*/
		}
		.content .contDiv .yuan {
			position: relative;
		}
		.content .contDiv .tingzhi {
			position: absolute;
			left: 50%;
			top: 50%;
			margin-top: -54px;
			margin-left: -100px;
			width: 200px;
			height: 200px;
		}
		.desc .contDesc1 {
			margin-top: -4rem;
		}
		.content .botDiv {
			width: 650px;
			margin-top: 42px;
			height: 258px;
			margin-left: 35px;
			margin-right: 0;
			border-top: 2px solid #efefef
		}
		.content .titDiv {
			height: 70px;
			width: 100%;
			margin-bottom: 10px;
		}
		.content .botDiv .wen {
			margin-left: 70px;
		}
		.content .botDiv .wen img {
			margin-top: 24px
		}
		.content .botDiv .vip {
			margin-right: -25px;
			margin-top: 10px;
		}
		.content .botDiv .logo {
			margin-left: 26px;
			margin-top: 22px;
		}
		.content .botDiv .wen i {
			margin-top: -36px;
		}
	}
</style>