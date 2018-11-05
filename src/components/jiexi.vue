<template>
    <div v-show="!down">
        <div class="answer">
        <div style="height:1.4rem;"></div>
        <div class="answer1">
            <div class="da">
                <span class="titles">答案</span>
                <div style="margin-top:1rem">
                    正确答案<span style="color:#42a5e0">D</span>,您的答案 <span style="color:#f09426">B</span>
                </div>
            </div>
        </div>


        <div class="tj">
            <span class="tit">统计</span>
            <div class="bigDiv">
                <div>
                    <span>参与人次</span>
                    <span class="num">238631次</span>
                </div>
                <div>
                    <span>正确率</span>
                    <span class="zql">93%</span>
                </div>
                <div style="border:none">
                    <span>易错项</span>
                    <span class="ycx">B</span>
                </div>
            </div>
        </div>

        <div class="jx">
            <span class="titles">解析</span>
            <span class="content">小鸟喜欢吃虫子,所以"鸟对虫"</span>
        </div>
     </div>

    </div>
</template>
<script>
export default {
    props:[ "down" ],
    data(){
       return{
            down:"true",
       }
    }
}
</script>
<style scoped>
.answer1{
    width:90%;
    margin: auto;
}
.answer .titles{
    color: #999;
    margin-top:2rem; 
}
.answer .da{
    width: 100%;
    height: 4.9rem;
    margin-top: 2rem;
}
.answer .tj{
    width:90%;
    height: 7.6rem;
    /* border: 1px solid #000; */
    margin: auto;
}
.answer .tj .tit {
  color: #999;
}
.answer .tj .bigDiv {
  height: 4.2rem;
  margin-top: 0.7rem;
  border-top: 0.07rem #DCDCDC solid;
  border-bottom: 0.07rpx #DCDCDC solid;
  display: flex;
}
.answer .tj .bigDiv div {
  width: 33.3%;
  height: 2.5rem;
  color: #999;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 0.89rem;
  display: flex;
  flex-direction: column;
  border-right: 0.07rem #DCDCDC solid;
}
.answer .tj .bigDiv .num {
  color: #595757;
  font-size: 0.9rem;
}
.answer .tj .bigDiv .zql {
  color: #42A5E0;
  font-size: 0.9rem;
}
.answer .tj .bigDiv .ycx {
  color: #F09426;
  font-size: 0.9rem;
}
.answer .jx{
    width: 90%;
  height: 204rpx;
 margin: auto;
  display: flex;
  flex-direction: column;
}
.answer .jx .content {
  text-indent: 2.14rem;
  margin-top: 0.7rem;
} 
</style>
