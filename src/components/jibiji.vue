<template>
	<div v-show="Show.show">
		<div>
			<div class="desc">
				<div class="titDesc">
					<div class="titDesc1">
						<img src="../../resoure/images/textdetail/kw.png" alt="" class="kw">课文
						<button @click="show">
                 <img src="../../resoure/images/textdetail/ji.png" alt="" class="ji" >记笔记
             </button>
					</div>
				</div>
				<!-- <div class="contDesc">
         
               <img src="../../resoure/images/textdetail/fm.png" alt="">
          </div> -->

				<div class="contDesc1">
					<p v-html="cc.content">
					</p>
				</div>

			</div>
		</div>
		<div class="bottom">
			<div class="big1">
				<div class="small" @click="show">
					<img src="../../resoure/images/textdetail/jiy.png" alt="" class="jiy">笔记
				</div>
				<div class="small">
					<img src="../../resoure/images/textdetail/sc.png" alt="" class="sc">收藏
				</div>
				<div class="small">
					<img src="../../resoure/images/textdetail/fx.png" alt="" class="fx">分享
					<button class="smallbutton">分享</button>
				</div>
			</div>
			<div class="moreText">
				<span>更多课程&nbsp;></span>
			</div>
		</div>

	</div>
</template>
<script>
	export default {
		props: ["Show"],
		data() {
			return {
				cc: "",
				Id: "",
			}
		},
		methods: {
			show() {
				this.Show.show = !this.Show.show;
			}
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
						// console.log(res.data.data.content);
				})
				.catch();
		}
	}
</script>
<style scoped>
	.desc {
		width: 100%;
		height: 24.4rem;
	}
	
	.desc .titDesc {
		width: 100%;
		height: 3rem;
		color: #F58823;
		font-size: 1rem;
		background: #fff;
		letter-spacing: 0.1rem;
		display: flex;
		position: fixed;
		margin-top: -3rem;
	}
	
	.desc .titDesc1 {
		width: 90%;
		margin: auto;
		height: 3rem;
		line-height: 3rem;
		font-weight: 600;
	}
	
	.desc .titDesc .kw {
		width: 0.6rem;
		height: 1.6rem;
		margin-top: 0.65rem;
		display: inline-block;
		vertical-align: -0.4rem;
		margin-right: 3%;
	}
	
	.desc .titDesc button {
		width: 5.5rem;
		height: 1.35rem;
		color: #fff;
		background: #42A5E0;
		line-height: 0;
		padding: 0;
		font-size: 1rem;
		float: right;
		border: none;
		border-radius: 3px;
		line-height: 1.35rem;
		margin-top: 0.8rem;
		margin-right: 1rem;
	}
	
	.desc .titDesc button .ji {
		width: 0.9rem;
		height: 0.9rem;
		margin-top: 0.2rem;
		margin-right: 0.28rem;
	}
	
	.desc .contDesc1 {
		background: #fff;
		padding-bottom: 10px;
		height: 100%;
	}
	
	.desc .contDesc1 p {
		width: 90%;
		/* height: 11.2rem; */
		color: #6b6b6b;
		font-size: 1rem;
		text-indent: 1.7rem;
		/* text-align: none; */
		margin: 24.5rem auto 5rem;
		letter-spacing: 0.5px;
	}
	
	.bottom {
		width: 100%;
		height: 3rem;
		color: #666;
		font-size: 0.78rem;
		background: #fff;
		display: flex;
		position: fixed;
		z-index: 999;
		bottom: 0;
		border-top: 0.07rem #EFEFEF solid;
	}
	
	.bottom .big1 {
		width: 13.2rem;
		height: 2.5rem;
		line-height: 0.9rem;
		display: flex;
		/* margin-left: 13.4rem; */
	}
	
	.bottom .big1 .small {
		width: 15%;
		height: 2.5rem;
		text-align: center;
		/* margin: 0.35rem auto; */
		margin-top: 0.35rem;
		margin-left: 2.5rem;
	}
	
	.bottom .jiy {
		width: 1.35rem;
		height: 1.28rem;
	}
	
	.bottom .sc {
		width: 1.4rem;
		height: 1.28rem;
	}
	
	.bottom .fx {
		width: 1.5rem;
		height: 1.28rem;
	}
	
	.smallbutton {
		height: 2.89rem;
		padding: 0 0.7rem;
		position: absolute;
		/* right:25rpx; */
		bottom: 0;
		margin: auto;
		background-size: 1.35rem 1.28rem;
		background-repeat: no-repeat;
		background: #fff;
		font-size: 0.8rem;
		line-height: 14.6rem;
		color: #626262;
		opacity: 0;
	}
	/* .bottom .big1 {
  width: 13.2rem;
  height: 2.5rem;
  line-height:0.9rem;
  display: flex;
  /* margin-left: 376rpx; */
	/* } */
	
	.moreText {
		line-height: 3.5rem;
		letter-spacing: 1px;
		color: #F58823;
		font-size: 1rem;
		width: 50%;
		height: 2.6rem;
		text-align: right;
		margin-right: 0.8rem;
	}
	/**名家分享笔记model*/
	
	@media screen and (min-width: 1681px) and (max-width: 1920px) {
		/*1920*/
		.desc {
			margin-top: -100px;
		}
		.desc .titDesc {
			position: static;
			border-top: 2px solid #efefef
		}
		.desc .titDesc1 {
			margin-left: 290px;
		}
		.desc .contDesc1 p {
			margin-top: 0px;
			width: 74%
		}
		.desc .titDesc button {
			margin-right: 302px;
		}
		.bottom .big1 {
			margin-left: 8rem;
		}
		/*更多课程footer**/
		.moreText {
			width: 53%
		}
	}
	
	@media screen and (min-width: 1441px) and (max-width: 1680px) {
		.desc {
			margin-top: 68px;
		}
		.desc .titDesc {
			position: static;
			border-top: 2px solid #efefef
		}
		.desc .titDesc1 {
			margin-left: 176px;
		}
		.desc .contDesc1 p {
			margin-top: -2px;
			/*margin-top: 0px;*/
			width: 74%
		}
		.desc .titDesc button {
			margin-right: 170px;
		}
		.bottom .big1 {
			margin-left: 4rem;
		}
		/*更多课程footer**/
		.moreText {
			width: 61%
		}
	}
	
	@media screen and (min-width: 1367px) and (max-width: 1440px) {
		.desc {
			margin-top: 10px;
		}
		.desc .titDesc {
			position: static;
			border-top: 2px solid #efefef
		}
		.desc .titDesc1 {
			margin-left: 170px;
		}
		.desc .contDesc1 p {
			margin-top: -2px;              /*****************/
			/*margin-top: 0px;*/
			width: 74%
		}
		
		.desc .titDesc button {
			margin-right: 163px;
		}
		.bottom .big1 {            /************/
			margin-left: 4rem; 
		}
		.moreText {                 /***************/
			width: 53%
		}
	}
	
	@media screen and (min-width: 1281px) and (max-width: 1366px) {
		.desc {
			margin-top: 68px;
		}
		.desc .titDesc {
			position: static;
			border-top: 2px solid #efefef
		}
		.desc .titDesc1 {
			margin-left: 140px;             /***********/
		}
		.desc .contDesc1 p {
				margin-top: -2px; 
			/*margin-top: 0px;*/
			width: 74%
		}
		.desc .titDesc button {
			margin-right: 132px;        /***********/
		}
		.bottom .big1 {            /************/
			margin-left: 2.5rem; 
		}
		.moreText {                 /***************/
			width: 60%
		}
	}
	
	@media screen and (min-width: 1025px) and (max-width: 1280px) {
		.desc {
			margin-top: 68px;
		}
		.desc .titDesc {
			position: static;
			border-top: 2px solid #efefef
		}
		.desc .titDesc1 {
			margin-left: 97px;    /************/
		}
		.desc .contDesc1 p {
				margin-top: -2px; 
			/*margin-top: 0px;*/
			width: 74%
		}
		.desc .titDesc button {
			margin-right: 60px;
		}
		.bottom .big1 {            /************/
			margin-left: 1.5rem; 
		}
		.moreText {                 /***************/
			width: 60%
		}
	}
	
	@media screen and (min-width: 768px) and (max-width: 1024px) {
		.desc {
			margin-top: 68px;
		}
		.desc .titDesc {
			position: static;
			border-top: 2px solid #efefef
		}
		.desc .titDesc1 {
			margin-left: 122px;    /************/
		}
		.desc .contDesc1 p {
				margin-top: -2px; 
			/*margin-top: 0px;*/
			width: 74%
		}
		.desc .titDesc button {
			margin-right: 124px;
		}
		.bottom .big1 {            /************/
			margin-left: 1.5rem; 
		}
		.moreText {                 /***************/
			width: 48%
		}
	}
	
	@media screen and (min-width: 600px) and (max-width: 768px) {
		.desc {
			margin-top: 68px;
		}
		.desc .titDesc {
			position: static;
			border-top: 2px solid #efefef
		}
		.desc .titDesc1 {
			margin-left: 27px;    /************/
		}
		.desc .contDesc1 p {
				margin-top: -2px; 
			/*margin-top: 0px;*/
			width: 74%
		}
		.desc .titDesc button {
			margin-right: -26px;
		}
		.bottom .big1 {            /************/
			margin-left: -2rem; 
		}
		.moreText {                 /***************/
			width: 58%
		}
	}
</style>