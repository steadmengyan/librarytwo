<template>
    <div v-show="Show.show">
 <div class="wydp">
          <div class="titBj">
              <span class="blue">我要点评</span>
              <span style="margin-left:9.14rem;"></span>
              <img src="../../resoure/images/fax/gwkx.png" alt="" class="gwkx">
          </div>
          <textarea placeholder="请输入你要点评的内容"
           placeholder-style="color:#9a9a9a;margin-left:1rem;" fixed="treue" class="txt"></textarea>
           <div class="but">
               <button class='tj'>我要提交</button>
               <button class='qx' @click="show">取消</button>
           </div>
           <div class="bot">
               <div style="width:100%;height:1.1rem"></div>
               <div class="yzm">
                   <input placeholder="请输入验证码" placeholder-style="color:#b5b2b0">
                   <img src="../../resoure/images/wen/yzm.png" alt="">
               </div>
           </div>
      </div>
    </div>
</template>
<script>
export default {
    props:["Show"],
    methods:{
        show(){
            this.Show.show=!this.Show.show;
        }
    },
}
</script>
<style scoped>
.wydp{
    width: 100%;
    height: 100%;
    color:#9a9a9a;
    font-size: 1rem;
    /* position: fixed; */
    margin-top: 26.7rem;
    z-index:1;
}
.wydp .titBj{
    width:100%;
    height: 2.5rem;
    background: #fff;
    line-height: 2.5rem;
    letter-spacing: 0.03rem;
    margin: auto;
    display: flex;
    padding: 0 1rem;
    border-bottom: 0.03rem #efefef solid;
}
.wydp .gwkx {
  width: 5.5rem;;
  height: 0.8rem;
  margin-left: 1rem;
  margin-top:0.7rem;
  /* float: right; */
}
.wydp .txt {
  width: 100%;
  height: 6.7rem;
  /* margin: 0.1rem auto 0 auto; */
  margin-top: 0.1rem;
  text-indent: 2rem;
  position: static;
  border: none;
}
.wydp .but{
    width: 8.9rem;
    margin: 0 auto;
    display: flex;
}
.wydp .tj{
    width: 4.8rem;
    height: 1.7rem;
    color: #fff;
    font-size: 1rem;
    line-height: 1.7rem;
    background: #42a5e0;
    border: none;
    border-radius: 6px;
    margin-top: -2.5rem;
    margin-right: 1rem;
}
.wydp .qx {
  width: 2.85rem;
  height: 1.7rem;
  color: #fff;
  font-size: 1rem;
  line-height: 1.7rem;;
  background: #42A5E0;
 border: none;
    border-radius: 6px;
    margin-top: -2.5rem;
}
.wydp .bot{
    width: 100%;
    height: 5.3rem;
    margin-top: -0.3rem;
    background: #efefef;
}
.wydp .bot .yzm{
    width: 14.7rem;
    height: 2.14rem;
    margin: 0 auto;
}
.wydp .bot .yzm input{
    width: 7.1rem;
    height: 1.9rem;
    color: #b5b2b0;
    background: #fff;
    padding-left: 0.7rem;
    border: 0.03rem #efefef solid;
}
.wydp .bot .yzm img{
    width: 6.25rem;
    height: 1.7rem;
    float: right;
    margin-top: 0.2rem;
}
</style>


