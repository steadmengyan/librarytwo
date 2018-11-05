<template>
	<div id="index">
		<div class="header1">
			<div class="header2">
				<div class="header2-1">
					<div class="search-one1">
						<form>
							<img class="icon_serch1" src="../../resoure/images/textlist/search.png" alt="">
							<input placeholder="请输入课文标题" placeholder-style="color:#999" @click="search">
						</form>
					</div>
					<div class="login1">
						<div @click="login" class="button1" style="color: rgb(255, 255, 255);" v-show="denglu">登录</div>
						<div @click="register" class="button1" style="color: rgb(255, 255, 255);" v-show="denglu">注册</div>
						<div @click="login" class="button1" style="color: rgb(255, 255, 255);" v-show="!denglu">退出</div>
						<div @click="tuichu" class="button1" style="color: rgb(255, 255, 255);background:#f58823" v-show="!denglu">签到</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 轮播图 -->

		<div class="lunbo1">
			<yd-slider autoplay="3000">
				<yd-slider-item v-for="k in arr">
					<img :src="k.img_url">
				</yd-slider-item>
			</yd-slider>
		</div>
		<view style="height:4px;background:#EFEFEF;"></view>
		<div class="header3">
			<!-- 栏目 -->
			<div class="menu1">
				<div class="tbwk1">
					<div>同步微课</div>
				</div>
				<div class="nianji1">
					<div class="anniu1" @click="textlist" v-for="(k,index) in tbArr">{{tbArr[index]}}</div>
				</div>

				<button class="wykt1">
            <div class="one1">VIP</div>
            <div class="two1" @click="ktvip">我要开通</div>
        </button>
			</div>
		</div>
		<div style="height:5px;background:#EFEFEF"></div>
		<!-- 免费 -->
		<div class="mfei1-1">

			<div class="mfei1">
				<div style="height:3rem">
					<div class="mft1">
						<img src="../../resoure/images/index/left.png" alt=""> 免费体验课
						<img src="../../resoure/images/index/right.png" alt="">
					</div>
				</div>
				<div class="listScroll1">
					<ul class="list1">
						<li @click="textdetail(ke.id)" v-for="ke in mfArr">
							<img :src="ke.cover" alt="">{{ke.title}}
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div style="height:5px;background:#efefef;"></div>
		<!-- 名家 -->
		<div class="mjia1-1">
			<div class="mjia1">
				<div style="height:2.5rem; line-height: 3rem;">
					<div class="mjt1">
						<img src="../../resoure/images/index/bke.png" alt="" class="bke">
						<i></i>
						<span class="mj" style="font-size:1rem;font-weight:600">名家分享</span>
						<p class="gd1" @click="sharelist">
							更多<img src="../../resoure/images/index/right.png" alt="">
						</p>
					</div>
				</div>
				<div class="mjList1">
					<div class="mjBox1" @click="sharedetail(key.id)" v-for="key in mjArr">
						<div class="mjItems1">
							<div>
								<img :src="key.cover" alt="">
							</div>
							<ul class="mjTxts1">
								<li class="top1">
									<div class="vipm1">{{key.lesson}}</div>
									<p style="margin-left:0.5rem;">{{key.subtitle}}</p>
								</li>
								<li class="txtTitle1">{{key.title}}</li>
								<li style="margin-top:0.1rem" class="yichu">{{key.desc}}</li>
								<li class="bot1">
									<div class="xf1">
										仅需<span style="color:#f58823">{{key.credit}}</span>学分
									</div>
									<div class="right1">
										<div>
											<img src="../../resoure/images/index/sc.png" alt="" style="width:0.67rem">收藏
										</div>
									</div>
								</li>
							</ul>
						</div>
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
					arr: [],
					mfArr: [],
					mjArr: [],
					tbArr: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级", "七年级", "八年级", "九年级"],
					denglu: true,
					// tokenId:"",
				}

			},
			mounted: function(a) {
				var than = this;
				this.$axios.get("http://xcx.xywol.com/index.php/api/version/home").then(function(res) {
						than.arr = res.data.data.adverts
						than.mfArr = res.data.data.free_courses
						than.mjArr = res.data.data.mj_courses
					})
					.catch();

			},
			methods: {
				login() {
					this.$router.push({
						path: '/login'
					})
				},
				tuichu() {
					this.$router.push({
						path: '/login'
					})
				},
				register() {
					this.$router.push({
						name: "register",
						params: {
							register: "index"
						}
					})
				},
				textlist() {
					this.$router.push({
						name: "textlist",
						params: {
							index1: "1"
						}
					});
				},
				ktvip() {
					this.$router.push({
						name: "ktvip",
						params: {
							ktvip: "zhuye"
						}
					});
				},
				textdetail(id) {
					this.$router.push({
						name: "textdetail",
						params: {
							Id: id
						}
					})
				},
				sharedetail(id) {
					this.$router.push({
						name: "sharedetail",
						params: {
							Id: id
						}
					})
				},
				sharelist() {
					this.$router.push({
						path: '/sharelist'
					})
				},
				search() {
					this.$router.push({
						path: '/search'
					})
				}
			},
		//  mounted(){
		// 	this.tokenId=localStorage.getItem("userinfo");
		// 	 if(this.tokenId){
		// 		 this.denglu=false;
		// 	 }else{
		// 		 this.denglu=true;
		// 	 }
		//  }
			
			

	}
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	#index {
		width: 100%;
		height: 100%;
		padding: 0;
		background: #fff;
	}
	
	.header1 {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		background: #fff;
		z-index: 99;
		padding-bottom: 5px
	}
	
	.header2-1 {
		width: 95%;
		height: 3.5rem;
		margin: auto;
	}
	
	.header1 .search1 {
		width: 95%;
		margin: auto;
		height: 3rem;
	}
	
	.header1 .left {
		line-height: 3rem;
		font-size: 1.2rem;
		float: left;
	}
	
	.height1 .search1 .right {
		line-height: 3rem;
		float: right;
	}
	
	.height .search1 img {
		width: 1rem;
		height: 1rem;
	}
	
	.height1 .search1 .right .sand img {
		width: 2.4rem;
		height: 1.5rem;
	}
	
	.search1 .right {
		float: right;
		line-height: 4rem;
	}
	
	.search1 .right img {
		width: 1.6rem;
		height: 1.6rem;
		margin-right: 1rem;
	}
	
	.header1 .search-one1 {
		width: 56%;
		height: 1.9rem;
		font-size: 0.5rem;
		padding: 0 0.2rem;
		border-radius: 15px;
		background: #f5f5f5;
		opacity: 0.9;
		float: left;
		margin-top: 1.2rem;
	}
	
	.header1 .search-one1 input {
		width: 75%;
		color: #999;
		font-size: 0.9rem;
		letter-spacing: 0;
		margin: 0rem 0 0.5rem 0.5rem;
		line-height: 1.9rem;
		border: none;
	}
	
	.header1 .search-one1 img {
		width: 1.1rem;
		height: 1.1rem;
		display: inline-block;
		vertical-align: -0.3rem;
		margin-left: 0.4rem;
		/* margin: 0.5rem 0 0 0.5rem; */
	}
	
	.login1 {
		margin-left: 2rem;
	}
	
	.header1 .login1 .button1 {
		height: 1.6rem;
		width: 15%;
		border: none;
		border-radius: 3px;
		line-height: 1.6rem;
		text-align: center;
		/* margin: 0.7rem 0 0 1rem; */
		margin-top: 1.2rem;
		float: left;
		margin-left: 8%;
		font-size: 0.9rem;
		background: #42A5E0;
	}
	
	.header1 .login1 .button1:active {
		background: #f58823;
	}
	
	.header3 {
		width: 100%;
		height: auto;
		margin: auto;
	}
	/* 轮播图 */
	
	#index .lunbo1 {
		margin-top: 3.65rem;
		position: relative;
		z-index: 1;
	}
	/* 栏目 */
	
	.menu1 {
		height: 7.78rem;
		width: 100%;
		display: flex;
		flex-direction: row;
		background: #fff;
	}
	
	.menu1 .tbwk1 {
		width: 3rem;
		height: 5.7rem;
		background: #f58823;
		font-size: 1rem;
		color: #eee;
		border-radius: 0.2rem;
		float: left;
		margin: 1rem 0 0 1.1rem;
	}
	
	.menu1 .tbwk1 div {
		width: 1rem;
		margin: 0.5rem auto;
		line-height: 1.2rem;
		text-align: center;
	}
	
	.nianji1 {
		width: 70%;
		height: 5.7rem;
		margin-top: 0.4rem;
		margin: auto;
		float: left;
		/* border: 1px solid #000; */
	}
	
	.nianji1 .anniu1 {
		width: 25%;
		height: 1.5rem;
		font-size: 0.9rem;
		background: #42A5E0;
		letter-spacing: 2px;
		color: #eee;
		margin-left: 6.5%;
		text-align: center;
		line-height: 1.5rem;
		margin-bottom: 7px;
		border-radius: 2px;
		float: left;
	}
	
	.nianji1 .anniu1:active {
		background-color: #f58823;
	}
	
	.menu1 .wykt1 {
		width: 3rem;
		height: 5.7rem;
		background: #eee;
		font-size: 0.9rem;
		color: #f58823;
		text-align: center;
		border: 1px solid #cacaca;
		border-radius: 3px;
		margin: 1rem 1.2rem 0 0;
	}
	
	.menu1 .wykt1 .one1 {
		color: #42a5e0;
		height: 1.2rem;
		border-bottom: 1px #ccc solid;
	}
	
	.menu1 .wykt1 .two1 {
		width: 1rem;
		margin: 0.2rem auto;
		line-height: 1rem;
	}
	/* 免费 */
	
	.mfei1-1 {
		width: 100%;
		background: #fff;
	}
	
	.mfei1 {
		height: 13.5rem;
		width: 86%;
		/*体验课modify*/
		margin: auto;
		background: #fff;
	}
	
	.mfei1 .mft1 {
		color: #F58823;
		font-weight: 600;
		font-size: 1rem;
		letter-spacing: 0.1rem;
		text-align: center;
		padding: 0.7rem;
	}
	
	.mfei1 .mft1 img {
		width: 0.7rem;
		height: 0.7rem;
	}
	
	.mfei1 .listScroll1 {
		margin: 0 0 1rem 0.1rem;
		overflow: auto;
	}
	
	.mfei1 .listScroll1::-webkit-scrollbar {
		display: none;
	}
	
	.mfei1 .listScroll1 .list1 {
		height: 10.5rem;
		display: flex;
	}
	
	.mfei1 .listScroll1 .list1 li {
		float: left;
		width: 6.5rem;
		height: 9.6rem;
		text-align: center;
		margin-right: 3.3rem;
		color: #8b8b8c;
		font-size: 0.8rem;
	}
	
	.mfei1 .list1 img {
		width: 5.5rem;
		height: 7.3rem;
	}
	/* 名家 */
	
	.mjia1-1 {
		width: 100%;
		margin: auto;
		background: #fff;
	}
	
	.mjia1 {
		height: 12.5rem;
		margin-bottom: 55px;
	}
	
	.mjia1 .mjt1 {
		width: 90%;
		margin: auto;
		color: #42A5E0;
		font-size: 0.9rem;
		letter-spacing: 0.1rem;
	}
	
	.mjia1 .mjt1 .bke {
		width: 0.9rem;
		height: 1.2rem;
		/* background: url('../../resoure/images/index/bke.png') no-repeat; */
		display: inline-block;
		vertical-align: -0.2rem;
	}
	
	.mjia1 .mjt1 .gd1 {
		color: #F58823;
		float: right;
	}
	
	.mjia1 .mjt1 .gd1 img {
		width: 0.7rem;
		height: 0.7rem;
		margin-left: 0.5rem;
	}
	
	.mjia1 {
		height: auto;
	}
	
	.mjList1 {
		margin-bottom: 50px;
		height: 63.5rem;
	}
	
	.mjBox1 {
		border-bottom: 0.1rem solid #EFEFEF;
		height: 9.5rem;
		width: 100%;
	}
	
	.mjia1 .mjList1 .mjItems1 {
		width: 89%;
		height: 9.5rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin: 1rem auto;
	}
	
	.mjia1 .mjList1 .mjItems1 img {
		width: 5.5rem;
		height: 7.3rem;
	}
	
	.mjia1 .mjList1 .mjTxts1 {
		color: #8b8b8c;
		font-size: 0.9rem;
		margin-left: 1rem;
	}
	
	.mjia1 .mjList1 .mjTxts1 .top1 {
		height: 1.4rem;
		width: 100%;
		/* border:1px solid #000; */
		display: flex;
		line-height: 1.4rem;
	}
	
	.mjia1 .mjList1 .mjTxts1 {
		width: 100%;
	}
	
	.mjia1 .mjList1 .top1 .vipm1 {
		width: 43%;
		color: #eee;
		background: #42A5E0;
		border-radius: 3px;
		text-align: center;
	}
	
	.yichu {
		height: 2.5rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.mjia1 .mjList1 .mjTxts1 .txtTitle1 {
		font-size: 1rem;
		color: #F58823;
		margin-top: 0.2rem;
	}
	
	.mjia1 .mjList1 .mjTxts1 .bot1 {
		height: 0.9rem;
		width: 100%;
		margin-top: 0.5rem;
	}
	
	.mjia1 .mjList1 .mjTxts1 .bot1 .xf1 {
		color: #42A5E0;
		font-size: 0.9rem;
		width: 30%;
		float: left;
	}
	
	.mjia1 .mjList1 .mjTxts1 .bot1 .right1 {
		width: 17%;
		float: right;
		margin-left: 0.6rem;
	}
	
	.mjia1 .mjList1 .mjTxts1 .bot1 img {
		width: 0.8rem;
		height: 0.8rem;
		margin-right: 0.28rem;
		display: inline-block;
		vertical-align: -0.13rem;
	}
	
	.mjia1 .mjList1 .mjTxts1 .bot1 .right1 div {
		margin: 0 auto;
		width: 3rem;
	}
	/*media*/
	
	@media screen and (min-width:1681px) and (max-width:1920px) {
		/*1920*/
		.header2-1 {
			width: 89%;
			padding-left: 1rem;
		}
		.header1 .login1 .button1 {
			width: 14%;
			margin-left: 7%;
		}
		.header1 .search-one1 {
			margin-top: 1rem;
		}
		.mjia1 .mjt1 {
			width: 86%
		}
		.mjia1 .mjList1 .mjItems1 {
			margin-left: 5rem;
		}
		.mjia1 .mjt1 .gd1 {
			margin-right: 1rem
		}
		.menu1 .tbwk1 {
			margin-left: 5rem;
			margin-right: 0.5rem;
		}
		.menu1 .wykt1 {
			margin-right: 5rem;
			margin-left: 3rem;
		}
		.nianji1 {
			margin: 0;
			margin-top: 1.4rem;
		}
		.nianji1 .anniu1 {
			margin-left: 7.6%;
		}
		.yichu {
			letter-spacing: 0.1rem;
		}
	}
	
	@media screen and (min-width:1441px) and (max-width:1680px) {
		/*1680*/
		.header2-1 {
			width: 89%;
			padding-left: 1rem;
		}
		.header1 .login1 .button1 {
			width: 14%;
			margin-left: 7%;
		}
		.menu1 .tbwk1 {
			margin-left: 4.5rem
		}
		.menu1 .wykt1 {
			margin-left: 1.8rem
		}
		.mfei1 .listScroll1 .list1 li {
			margin-left: 0.2rem;
			margin-right: 1.85rem
		}
		.nianji1 {
			margin: 1.4rem 0 0 0
		}
		.mjia1 .mjList1 .mjTxts1 .bot1 .right1 div {
			margin-right: 3.5rem
		}
	}
	
	@media screen and (min-width:1367px) and (max-width:1440px) {
		/*1440*/
		.menu1 .tbwk1 {
			margin-left: 4rem
		}
		.menu1 .wykt1 {
			margin-left: 0.9rem
		}
		.mfei1 .listScroll1 .list1 li {
			margin-right: 1.85rem
		}
		.mjia1 .mjt1 .gd1 {
			margin-right: 2rem
		}
		.mjia1 .mjList1 .mjItems1 {
			padding-left: 1rem
		}
		.mjia1 .mjt1 {
			padding-left: 1.2rem
		}
		.mjia1 .mjList1 .mjTxts1 .bot1 .right1 div {
			margin-right: 1.8rem
		}
		.yichu {
			width: 80%
		}
	}
	
	@media screen and (min-width:1281px) and (max-width:1366px) {
		/*1366*/
		.header2-1 {
			width: 89%;
			padding-left: 1rem;
		}
		.header1 .login1 .button1 {
			width: 14%;
			margin-left: 7%;
		}
		.menu1 .tbwk1 {
			margin-left: 3.6rem
		}
		.nianji1 {
			margin: 1.4rem 0 0 0
		}
		.menu1 .wykt1 {
			margin-left: 0.5rem
		}
		.mfei1 .listScroll1 .list1 li {
			margin-right: 1.55rem
		}
		.mjia1 .mjt1 .gd1 {
			margin-right: 2rem
		}
		.mjia1 .mjList1 .mjTxts1 .bot1 .right1 div {
			margin-right: 1.8rem
		}
		.yichu {
			width: 80%;
			letter-spacing: 0.05rem;
		}
	}
	
	@media screen and (min-width:1025px) and (max-width:1280px) {
		/*1280*/
		.menu1 .wykt1 {
			margin-left: -0.1rem
		}
		.mfei1 .listScroll1 {
			margin-left: 0.3rem
		}
		.mfei1 .listScroll1 .list1 li {
			margin-right: 2.6rem
		}
		.mjia1 .mjt1 {
			width: 85%
		}
		.mjia1 .mjt1 .gd1 {
			margin-right: 1rem
		}
		.mjia1 .mjList1 .mjItems1 {
			padding-left: 1rem
		}
		.yichu {
			width: 80%
		}
	}
	
	@media screen and (min-width:1023px) and (max-width:1024px) {
		/*1024*/
		.mfei1 {
			width: 95%
		}
		.mfei1 .listScroll1 {
			margin-left: 0.1rem
		}
		.mfei1 .listScroll1 .list1 li {
			margin-right: 1.65rem;
		}
		.mjia1 .mjt1 {
			width: 94%
		}
		/* .mjia1 .mjList1 .mjTxts1 .bot1 .right1 div{margin-right:0} */
		.mjia1 .mjList1 .mjItems1 {
			padding-left: 0;
			margin-left: 1rem
		}
		.mjia1 .mjt1 .gd1 {
			margin-right: 0.2rem
		}
		.mjia1 .mjList1 .mjTxts1 .bot1 .right1 div {
			margin-right: -1.8rem
		}
	}
	
	@media screen and (max-width:786px) {
		.mfei1 {
			width: 90%
		}
		.mfei1 .listScroll1 .list1 li {
			margin-right: 1rem
		}
	}
	
	@media screen and (max-width:600px) {
		.mfei1 .listScroll1 .list1 li {
			margin-right: 3.9rem
		}
	}
	
	@media screen and (max-width:414px) {
		.mfei1 .listScroll1 .list1 li {
			margin-right: 3.8rem
		}
		.mjList1 {
			height: 61rem;
		}
	}
	
	@media screen and (max-width:375px) {
		.mfei1 {
			width: 93%;
		}
		.mjia1 .mjt1 {
			width: 91%
		}
		.mfei1 .listScroll1 .list1 li {
			margin-right: 4.2rem;
		}
		.mjList1 {
			height: 61rem;
		}
	}
	
	@media screen and (max-width:360px) {
		.mjList1 {
			height: 60.5rem;
		}
	}
</style>