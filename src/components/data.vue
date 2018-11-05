<template>
	<div id="data">
		<!-- <div class="search1">
        <div class="search">
          <span>发现</span>
        </div>
       </div>  -->
		<div class="list">
			<div class="content" style="margin-top:20px" @click="looklist">
				<img src="../../resoure/images/fax/kan.png" alt="">
				<span>看看</span>
			</div>
			<div class="content">
				<img src="../../resoure/images/fax/ce.png">
				<span>测评</span>
				<span class='kfz'>正在开发中...</span>
			</div>
			<div class="content" @click="activity">
				<img src="../../resoure/images/fax/xin.png">
				<span>活动</span>
			</div>
			<div class="content" @click="dati">
				<img src="../../resoure/images/fax/nao.png">
				<span>答题</span>
			</div>
			<!-- <view class="content">
      <image src="/images/fax/nao.png" />
      <text>答题</text>
      <text class='kfz'>正在开发中</text>
    </view> -->
			<div class="content">
				<img src="../../resoure/images/fax/pk.png">
				<span>语游</span>
				<span class='kfz'>正在开发中...</span>
			</div>
			<div class="content">
				<img src="../../resoure/images/fax/wen.png" class="img">
				<span>大语文课程</span>
				<span class='kfz1'>正在开发中...</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		methods: {
			looklist() {
				this.$router.push({
					path: '/looklist'
				})
			},
			activity() {
				this.$router.push({
					path: '/activity'
				})
			},

			dati() {
				this.$router.push({
					path: '/dati'
				})
			}
		}
	}
</script>
<style scoped>
	#data {
		width: 100%;
		height: 100%;
	}
	
	.search1 {
		width: 100%;
		background: #fff;
	}
	
	#data .search {
		width: 95%;
		margin: auto;
		height: 3rem;
		margin-bottom: 15px;
	}
	
	#data .search span {
		line-height: 3rem;
		font-size: 1.2rem;
	}
	
	.list {
		background: #efefef;
	}
	
	.list .content {
		height: 3.18rem;
		background: #fff;
		margin-top: 1.18rem;
		padding-left: 1.37rem;
		font-size: 1.05rem;
		color: #666;
		font-weight: 600;
		letter-spacing: 0.1rem;
		display: -webkit-box;
		display: flex;
		line-height: 3.18rem;
	}
	
	.content span {
		margin-left: 1.5rem;
	}
	
	.list .content img {
		width: 2rem;
		height: 2rem;
		/* padding: 1.5rem 1.5rem; */
		margin-top: 0.5rem;
	}
	
	.list .content .img {
		width: 2.2rem;
		height: 2.2rem;
	}
	
	.list .content .kfz {
		color: #aaa;
		font-size: 0.8rem;
		margin-left: 45%;
		letter-spacing: 0.1rem;
	}
	
	.list .content .kfz1 {
		color: #aaa;
		font-size: 0.8rem;
		margin-left: 31%;
		letter-spacing: 0.1rem;
	}
	
	@media screen and (min-width: 1680PX) and (max-width: 1920px) {
		.list .content {
			height: 4.18rem;
			margin-top: 0.9rem;
		}
		.list .content img {
			width: 2.4rem;
			height: 2.4rem;
			margin-top: 0.8rem;
		}
		.list .content .img {
			width: 2.6rem;
			height: 2.6rem;
		}
		.list .content {
			font-size: 1.3rem;
			line-height: 4rem;
		}
	}
	
	@media screen and (min-width: 1280px) and (max-width: 1366px) {
		.list .content {
			height: 2.5rem;
			margin-top: 0.5rem;
		}
		.list .content img {
			width: 1.7rem;
			height: 1.7rem;
			margin-top: 0.4rem;
		}
		.list .content .img {
			width: 2rem;
			height: 2rem;
		}
		.list .content {
			font-size: 1.1rem;
			line-height: 2.5rem;
		}
		.list .content .kfz1 {
			margin-left: 37%;
		}
	}
	
	@media screen and (min-width: 601px) and (max-width: 768px) {
		.list .content {
			height: 3rem;
			line-height: 3rem;
			margin-top: 0.5rem;
		}
	}
</style>