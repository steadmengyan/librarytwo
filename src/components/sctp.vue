<template>
	<div v-show="!Show.show">
		<div class="biji1">
			<div class="biji">
				<div class="titBj">
					<img src="../../resoure/images/textdetail/kw.png" class="kw">请在下方输入你的笔记
					<button>上传图片</button>
				</div>
				<div class="contBj" style="height:400rpx;">
					<textarea placeholder="在这里输入你的笔记" placeholder-style="color:#aaa;" class='txt'></textarea>
				</div>
			</div>
		</div>

		<div class="bottom">
			<div class="big1">
				<div class="small">
					<img src="../../resoure/images/textdetail/no.png" alt="" class="jiy" @click="show">取消
				</div>
				<div class="small">
					<img src="../../resoure/images/textdetail/yes.png" alt="" class="sc">保存
				</div>
				<div class="small">
					<img src="../../resoure/images/textdetail/fx.png" alt="" class="fx">分享
				</div>
			</div>
		</div>

	</div>
</template>
<script>
	export default {
		props: ["Show"],
		methods: {
			show() {
				this.Show.show = !this.Show.show;
			}
		},
	}
</script>
<style scoped>
	.biji1 {
		width: 100%;
		position: fixed;
		margin-top: 21.7rem;
		background: #EFEFEF;
	}
	
	.biji {
		width: 100%;
		height: 21.7rem;
		background: #EFEFEF;
		z-index: 100;
		margin: auto;
	}
	
	.biji .titBj {
		width: 95%;
		height: 3.7rem;
		color: #42A5E0;
		font-size: 1rem;
		background: #EFEFEF;
		line-height: 3.7rem;
		letter-spacing: 0.1rem;
		display: flex;
		border-bottom: 0.07rem #fff solid;
	}
	
	.biji .titBj .kw {
		width: 0.6rem;
		height: 1.64rem;
		margin: 1rem 0.57rem 0 1rem;
	}
	
	.biji .titBj button {
		width: 5.5rem;
		height: 1.35rem;
		color: #fff;
		background: #F58823;
		line-height: 1.35rem;
		text-align: center;
		padding: 0;
		font-size: 1rem;
		margin-top: 1.14rem;
		margin-left: 6rem;
		border: none;
		border-radius: 3px;
	}
	
	.biji .contBj {
		width: 90%;
		position: relative;
		z-index: 0;
	}
	
	.biji .contBj .txt {
		width: 90%;
		height: 7.14rem;
		color: #aaa;
		font-size: 1rem;
		text-indent: 1.78rem;
		margin: 1.21rem 2.21rem;
		border: none;
		background: #EFEFEF;
		overflow: auto;
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
		width: 10.2rem;
		height: 2.5rem;
		line-height: 0.9rem;
		display: flex;
		/* margin-right: 0; */
		/* margin-left: 13.4rem; */
	}
	
	.bottom .big1 .small {
		width: 2.6rem;
		height: 2.5rem;
		text-align: center;
		/* margin: 0.35rem auto; */
		margin-top: 0.35rem;
		margin-left: 1.5rem;
		/* margin-right: 0; */
	}
	
	.bottom .jiy {
		width: 1.35rem;
		height: 1.28rem;
	}
	
	.bottom .sc {
		width: 1.5rem;
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
	/**名家分享记笔记model*/
	
	@media screen and (min-width: 1681px) and (max-width: 1920px) {
		.biji1 {
			position: static;
			margin-top: -100px;
			/*background-color: yellowgreen*/
		}
		.biji .titBj .kw {
			margin-left: 290px;
		}
		.biji .titBj button {
			margin-left: 840px;
		}
		.biji .contBj {
			width: 100%;
			height: 500px;
			/*background: red;*/
			margin: 0 auto;
		}
		.biji .contBj .txt {
			/*text-indent:110px;*/
			/*background: yellow;*/
			width: 1200px;
			height: 400px;
			margin-left: 346px;
		}
		.biji .titBj {
			width: 1920px
		}
		.bottom .big1 {
			margin-left: 9rem;
		}
	}
	
	@media screen and (min-width: 1441px) and (max-width: 1680px) {
		/*1366*/
		.biji1 {
			position: static;
			margin-top: 0;
			/*background-color: yellowgreen*/
		}
		.biji .titBj .kw {
			margin-left: 170px;
		}
		.biji .titBj button {
			margin-left: 845px;
		}
		.biji .contBj {
			width: 100%;
			height: 500px;
			/*background: red;*/
			margin: 0 auto;
		}
		.biji .contBj .txt {
			/*text-indent:110px;*/
			/*background: yellow;*/
			width: 76%;
			height: 80%;
			margin-left: 164px;
		}
		.biji .titBj {
			width: 1680px
		}
		.bottom .big1 {
			margin-left: 5rem;
		}
	}
	
	@media screen and (min-width: 1367px) and (max-width: 1440px) {
		/*1366*/
		.biji1 {
			position: static;
			margin-top: -60px;         /****************/
			/*background-color: yellowgreen*/
		}
		.biji .titBj .kw {
			margin-left: 170px;
		}
		.biji .titBj button {
			margin-left: 614px;
		}
		.biji .contBj {
			width: 100%;
			height: 500px;
			/*background: red;*/
			margin: 0 auto;
		}
		.biji .contBj .txt {
			/*text-indent:110px;*/
			/*background: yellow;*/
			width: 76%;
			height: 80%;
			margin-left: 164px;
		}
		.biji .titBj {
			width: 1440px
		}
		.bottom .big1 {
			margin-left: 5rem;
		}
		
		
			}
			
			
			
	/*@media screen and (min-width: 1440px) and (max-width: 1680px) {
		
	
		.biji {
			margin-left: 7rem;
		}
		.biji .titBj {
			width: 83%;
		}
		.biji .titBj .kw {
			margin-left: 2.5rem;
		}
		.biji .titBj button {
			margin-left: 23rem;
		}
		.biji .contBj {
			width: 84%;
			margin-left: 2rem;
		}
		.biji .contBj .txt {
			width: 100%;
			height: 100%;
			margin: 0;
			padding-top: 1rem;
		}
	}
	*/
	/*@media screen and (min-width: 1366px) and (max-width: 1440px) {
		
		.biji1 {
			position: static;
			margin-top: -1.5rem;
		}
		.biji .titBj button {
			margin-left: 15rem;
		}
	}
	*/
	
	@media screen and (min-width: 1281px) and (max-width: 1366px) {
		/*1366*/
		.biji1 {
			position: static;
			margin-top: 0;
			/*background-color: yellowgreen*/
		}
		.biji .titBj .kw {
			margin-left: 135px;        /***/
		}
		.biji .titBj button {
			margin-left: 604px;
		}
		.biji .contBj {
			width: 100%;
			height: 500px;
			/*background: red;*/
			margin: 0 auto;
		}
		.biji .contBj .txt {
			/*text-indent:110px;*/
			/*background: yellow;*/
			width: 76%;
			height: 80%;
			margin-left: 164px;
		}
		.biji .titBj {
			width: 1366px
		}
		.bottom .big1 {
			margin-left: 3.5rem;   /*************/
		}
	}
	
	@media screen and (min-width: 1025px) and (max-width: 1280px) {
		/*1366*/
		.biji1 {
			position: static;
			margin-top: 0;
			/*background-color: yellowgreen*/
		}
		.biji .titBj .kw {
			margin-left: 94px;
		}
		.biji .titBj button {
			margin-left: 606px;
		}
		.biji .contBj {
			width: 100%;
			height: 500px;
			/*background: red;*/
			margin: 0 auto;
		}
		.biji .contBj .txt {
			/*text-indent:110px;*/
			/*background: yellow;*/
			width: 76%;
			height: 80%;
			margin-left: 164px;
		}
		.biji .titBj {
			width: 1366px
		}
		.bottom .big1{margin-left: 60px;}
	}
	
	

	
	@media screen and (min-width: 769px) and (max-width: 1024px) {
		/*1024*/
		.biji1 {
			position: static;
			margin-top: 0;
			/*background-color: yellowgreen*/
		}
		.biji .titBj .kw {
			margin-left: 125px;        /***/
		}
		.biji .titBj button {
			margin-left: 604px;
		}
		.biji .contBj {
			width: 100%;
			height: 500px;
			/*background: red;*/
			margin: 0 auto;
		}
		.biji .contBj .txt {
			/*text-indent:110px;*/
			/*background: yellow;*/
			width: 76%;
			height: 80%;
			margin-left: 164px;
		}
		.biji .titBj {
			width: 1366px
		}
		.bottom .big1 {
			margin-left: 3rem;   /*************/
		}
	}
	
		@media screen and (min-width: 601px) and (max-width: 768px) {
		/*1024*/
		.biji1 {
			position: static;
			margin-top: 0;
			/*background-color: yellowgreen*/
		}
		.biji .titBj .kw {
			margin-left: 18px;        /***/
		}
		.biji .titBj button {
			margin-left: 604px;
		}
		.biji .contBj {
			width: 100%;
			height: 500px;
			/*background: red;*/
			margin: 0 auto;
		}
		.biji .contBj .txt {
			/*text-indent:110px;*/
			/*background: yellow;*/
			width: 76%;
			height: 80%;
			margin-left: 60px;
		}
		.biji .titBj {
			width: 1366px
		}
		.bottom .big1 {
			margin-left: 3rem;   /*************/
		}
	}
	
	
</style>