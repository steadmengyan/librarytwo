<template>
    <div v-show="!Show1.show">
   <div class="biji1">  
    <div class="biji">
      <div class="titBj">
        <img src="../../resoure/images/textdetail/kw.png" class="kw">请在下方输入你的问题
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
                         <img src="../../resoure/images/textdetail/no.png" alt="" class="jiy">取消
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
 props:[
        "Show1"
    ],
    methods:{
        show1(){
            this.Show1.show1=!this.Show1.show1;
        }
    },
}
</script>
<style scoped>
.biji1{
    width: 100%;
   position: fixed;
   margin-top:23.7rem; 
    background: #EFEFEF;
}
.biji {
  width:100%;
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
  height:1.64rem;
  margin: 1rem 0.57rem 0 1rem;
}
.biji .titBj button {
  width: 5.5rem;
  height: 1.35rem;
  color: #fff;
  background: #F58823;
  line-height: 1.35rem;
  text-align: center;
  font-size: 1rem;
  margin-top:1.14rem;
  margin-left: 6rem;
  border: none;
  border-radius:3px; 
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
.bottom{
    width: 100%;
  height: 3rem;
  color: #666;
  font-size:0.78rem;
  background: #fff;
  display: flex;
  position: fixed;
  z-index: 999;
  bottom: 0;
  border-top: 0.07rem #EFEFEF solid;
}
.bottom .big1 {
  width:10.2rem;
  height: 2.5rem;
  line-height:0.9rem;
  display: flex;
}
.bottom .big1 .small {
  width: 2.6rem;
  height: 2.5rem;
  text-align:center;
  margin-top: 0.35rem;
  margin-left: 1.5rem;
}
.bottom .jiy {
  width: 1.35rem;
  height: 1.28rem;
}
.bottom .sc {
  width: 1.6rem;
  height: 1.28rem;
}
.bottom .fx {
  width: 1.5rem;
  height: 1.28rem;
}
.smallbutton {
  height:2.89rem;
  padding:0 0.7rem;
  position:absolute;
  bottom:0;
  margin:auto;
  background-size:1.35rem 1.28rem;
  background-repeat:no-repeat;
  background:#fff;
  font-size:0.8rem;
  line-height:14.6rem;
  color: #626262;
  opacity:0;

}
</style>



