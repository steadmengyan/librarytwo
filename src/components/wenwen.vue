<template>
	<div id="wenwen">
		<div class="list1">
			<div class="list">
				<div class="top">
					<div class="content">
						<img src="../../resoure/images/wen/wen.png" alt="">
						<p>不懂就问问</p>
					</div>
				</div>
				<div class="bot">
					<div class="sousuo">
						<form>
							<input type="text" nane="search" v-model="neirong" placeholder="请输入你的问题,我来帮你解决" placeholder-style="color:#aaa">
							<button @click="tijiao" hover-class='but-hover'><img src="../../resoure/images/wen/sou2.png" alt="">我要问问</button>

						</form>
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
					neirong: '',
				}
			},
			methods: {
				tijiao() {
					if(this.neirong == 0) {
						this.$dialog.toast({
							mes: "输入问题",
							timeout: 1500
						})
					} else {
						this.$router.push({
							name: "wenwenlist",
							params: {
								neirong: this.neirong
							}
						});
					}

				}
			}
	}
</script>
<style scoped>
	#wenwen {
		background: #fff;
		width: 100%;
		height: 100%;
	}
	
	.search1 {
		height: 3rem;
		width: 100%;
		margin-bottom: 15px;
		position: fixed;
		z-index: 99;
		background: #fff;
	}
	
	.search {
		width: 95%;
		margin: auto;
	}
	
	.search span {
		line-height: 3rem;
		font-size: 1.2rem;
	}
	
	.list {
		top: 0;
		position: relative;
		z-index: 1;
	}
	
	.container {
		height: 100%;
		padding: 0;
	}
	
	.top {
		width: 100%;
		height: 8.2rem;
		top: 3rem;
		position: fixed;
		line-height: 17.2rem;
	}
	
	.top .content {
		height: 8.6rem;
		width: 100%;
		text-align: center;
	}
	
	.content img {
		width: 4.5rem;
		height: 4.3rem;
	}
	
	.content p {
		font-size: 1.5rem;
		color: #42A5E0;
		letter-spacing: 0.3rem;
		margin-top: -15rem;
	}
	
	.bot {
		width: 90%;
		height: 2.5rem;
		position: fixed;
		margin: 17.8rem auto 0 5%;
		border: 0.07rem #F58823 solid;
		border-radius: 3px;
		display: flex;
		flex-direction: row;
	}
	
	.bot .sousuo {
		width: 100%;
		height: 2.5rem;
	}
	
	.bot .sousuo input {
		width: 62%;
		height: 2.5rem;
		color: #aaa;
		font-size: 0.9rem;
		padding-left: 1.3rem;
		border: none;
	}
	
	.bot .sousuo button {
		width: 35%;
		height: 2.4rem;
		color: #fff;
		line-height: 2.4rem;
		font-size: 1rem;
		line-height: 30%;
		background: #F58823;
		letter-spacing: 0.1rem;
		float: right;
		border-style: none;
		outline: none;
		border-radius: 0;
		padding: 0;
	}
	
	.bot .sousuo .but-hover {
		background: #42A5E0;
	}
	
	.sousuo img {
		width: 1.1rem;
		height: 1.1rem;
		margin-right: 0.28rem;
		display: inline-block;
		vertical-align: -0.2rem;
	}
	
	@media screen and (min-width: 1681px) and (max-width: 1920px) {
		#wenwen {
			height: 124.5%;
		}
		.list {
			z-index: 0;
		}
		.top {
			position: static;
			text-align: center;
			height: 0;
			line-height: 0;
		}
		.top .content {
			height: 0;
			width: 1920px;
			text-align: center;
			position: relative;
		}
		.top .content img {
			display: block;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -2rem;
			margin-top: 23rem;
		}
		.bot {
			position: relative;
			margin: 0;
			display: block;
		}
		.bot .sousuo {
			width: 1200px;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -17rem;
			margin-top: 29rem;
			border: 2px solid #f58823;
		}
		.bot .sousuo input {
			width: 800px;
		}
		.bot .sousuo button {
			width: 396px;
		}
	}
	
	@media screen and (min-width: 1281px) and (max-width: 1366px) {
		.content img {
			width: 3rem;
			height: 3rem;
		}
		.bot {
			width: 68%;
			position: absolute;
			left: 41%;
			top: 77%;
			margin-left: -23%;
			margin-top: 12rem;
		}
		.bot .sousuo button {
			width: 35%
		}
		.top {
			line-height: 11.2rem;
		}
		.content p {
			margin-top: -8.5rem;
			font-size: 30px;
		}
	}
	
	@media screen and (min-width: 769px) and (max-width: 1024px) {
		.top {
			line-height: 0;
		}
		.content img {
			margin-top: 2rem
		}
		.content p {
			margin-top: 2.5rem;
		}
		.bot {
			margin-top: 13.8rem
		}
	}
	
	@media screen and (min-width: 601px) and (max-width: 768px) {
		.top {
			line-height: 0;
		}
		.content img {
			margin-top: 2rem
		}
		.content p {
			margin-top: 2.5rem;
		}
		.bot {
			margin-top: 13.8rem
		}
	}
</style>