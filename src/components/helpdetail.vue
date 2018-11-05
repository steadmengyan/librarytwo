<template>
    <div id="helpdetail">
        <div class="search1">
               <span class="zifu" @click="help"></span>
              <span class="zifu1">帮助详情</span>
        </div>
        <div class="container">
            <div class="list">
                <div class="bigDiv">
                    <div class="title"> <span>如何积分</span> </div>
                    <div class="content"><span>如何积分的内容，如何积分的内容。如何积分的内容，如何积分的内容。如何积分的内容，如何积分的内容。如何积分的内容，如何积分的内容。</span></div>
                </div>
                <div class="bigDiv">
                    <div class="title"><span>如何积分</span></div>
                     <div class="content"><span>如何积分的内容，如何积分的内容。如何积分的内容，如何积分的内容。如何积分的内容，如何积分的内容。如何积分的内容，如何积分的内容。</span></div> 
                </div>
            </div>
            <div class="bottom">
                <img src="../../resoure/images/mine/yijie.png" alt="">
                <img src="../../resoure/images/mine/nojie.png" alt="" style="margin-left:2.8rem">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        help(){
            this.$router.goBack()
            // this.$router.push({path:'/help'})
        },
    }
}
</script>
<style scoped>
#helpdetail{
    width: 100%;
    height: 100%;
}
.search1{
    width: 100%;
    height: 3rem;
    background: #fff;
    text-align: center;
    line-height: 3rem;
    font-size: 1rem;
    position: fixed;
    /* border-bottom:0.03rem solid #efefef; */
    z-index: 99;
}
.search1 .zifu{
    position: absolute;
      left: 0.9rem;
     top:1rem;
     width: 1rem;
    height: 1rem;
    line-height: 3rem;
    border-left:0.1rem solid #000;
    border-bottom:0.1rem solid #000;
    display: inline-block;
    transform: rotate(45deg);
}
.search1 .zifu1{
    font-size: 1.2rem;
    letter-spacing: 1.5px;
}
.container{
      width: 100%;
      height: 100%;
      top: 3rem;
      position: absolute;
      background: #efefef;
}
.list{
   width: 90%;
   margin: auto;
}
.bigDiv{
    width:100%;
    /* height:12.3rem; */
    height: auto;
    color: #6b6b6b;
    font-size: 0.9rem;
    background: #fff;
    border-radius: 0.35rem;
    margin: 1.4rem auto 0 auto;
}
.bigDiv .title{
    height: 2.5rem;
    color: #f58823;
    font-size: 1rem;
    letter-spacing: 0.07rem;
    line-height: 2.5rem;
    border-bottom: 0.14rem #efefef solid;
}
.bigDiv .title span{
    margin-left: 0.5rem;
}
.bigDiv .content{
    width: 95%;
    height:auto;
    text-indent: 1.78rem;
    margin:1rem auto;
     padding-bottom:40px; 
}

.bottom{
    width: 16.7rem;
    height: 2.6rem;
    margin:3.5rem auto;
}
.bottom img{
   width: 6.7rem;
   height: 2.6rem;
}

</style>


