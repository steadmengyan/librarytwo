<template>
    <div id="test">
     <div class="search1">
               <span class="zifu" @click="data"></span>
              <span class="zifu1">答题</span>
    </div>
    <div class="header1">
        <div class="header-1">
            <span class=txt>单项选择</span>
            <div class="right">
                <img src="../../resoure/images/index/left.png" alt="">
              <span class="txt">1&nbsp;</span><span style="color: #42A5E0;font-size:0.9rem;margin-right:0.8rem">/&nbsp;12</span>
                <img src="../../resoure/images/index/right.png" alt="">
            </div>
        </div>
      </div>

      <div class="questDiv">
          <div class='quest'>
              <div class="item">
                  《对韵歌》中“鸟”相对的是 （   　　）
                <span style='color:#999;'>（掌上大语文真题练习）</span>
            
                <div class="options">
                  <ul class="list">

                    <li v-for="(k,index) in  arr">
                           <p :class="zimu1[index]" @click="up(index)" v-show="down">{{arr1[index]}}</p><span>{{arr[index]}}</span>


                    </li>

                  </ul>
              </div>
              </div>  
          </div>
     
    </div>


    <div class="answer" v-show="da">
        <div style="height:1.4rem;"></div>
        <div class="answer1">
            <div class="da">
                <span class="titles">答案</span>
                <div style="margin-top:1rem">
                    正确答案<span style="color:#42a5e0">&nbsp;D</span>,&nbsp;您的答案 <span style="color:#f09426">B</span>
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
            <span class="content">小鸟喜欢吃虫子,所以"鸟对虫"小鸟喜欢吃虫子,所以"鸟对虫"小鸟喜欢吃虫子,所以"鸟对虫"</span>
        </div>
     </div>

<div class="bottom" v-show="da1">
         <div class="big">
             <div class="small">
                 <img src="../../resoure/images/textdetail/up.png" alt="" class="jt">上一题
             </div>
             <div class="small">
                 <img src="../../resoure/images/textdetail/down.png" alt="" class="jt">下一题
             </div>
             <div class="small">
                 <img src="../../resoure/images/textdetail/xfx.png" alt="" class="xfx">分享
             </div>
            
         </div>
     </div>

   </div>  
</template>
<script>
export default {
    data(){
      return{
          test:"",
          zimu1:[{"zimu":true,
                 "yellow":false,
                "blue":false },
                {"zimu":true,
                 "yellow":false,
                "blue":false },
                {"zimu":true,
                 "yellow":false,
                "blue":false },
                {"zimu":true,
                 "yellow":false,
                "blue":false }],
          down:"true",
          arr:["花","树","虫","鸟"],
          arr1:["A","B","C","D"],
        //   chulai:true,
           chulai:false,
           chualai1:false,
           chulai2:true,
          a:true,
          kk:"",
          da:false,
          da1:true


          
          
          

      }
    },
    methods:{
      data(){
         this.$router.goBack()
        },
        up1(){
            this.chulai=false;
            this.chulai1=true;   
            this.chulai2=false;  
            this.kk={"z-index":555};
           this.da=false;
           this.da1=false;


        },
         up(index){
           
            var aa=localStorage.getItem("dian");
         
            if(!aa){
               
                     //能点 
                    //  点吧  执行代码

        //  this.chulai=this.chulai;
            this.down=this.down;
           this.chulai=!this.chuali;
            this.zimu1[index].blue=true;
            for(var i=0;i<this.zimu1.length;i++){
            if(i!==index){
                this.zimu1[i].yellow=true;
            }
        }

                    localStorage.setItem("dian","1");
                    
            }


            

        this.da=true;
        },
        closeBiji(){
            this.qq=false;
            this.da=true;

        }
    },
    mounted(){
        localStorage.clear();
        this.test=this.$route.params.test
        console.log(this.test)
    }
}
</script>
<style scoped>
  #test{
      width: 100%;
      height:100%;
      background: #fff;
  }
  .search1{
    width: 100%;
    height: 3rem;
    background: #fff;
    text-align: center;
    line-height: 3rem;
    font-size: 1rem;
    position: fixed;
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
.header1{
    width: 100%;
    position: absolute;
    top: 3rem;
    height: 3rem;
    background: #fff;
    line-height: 3rem;
    position: fixed;
    border-top:2px solid #ccc;
    border-bottom: 1px solid #ccc;
      z-index: 99;
}
.header-1{
    width: 93%;
    margin: auto;    
}
.header-1 .txt{
color: #42A5E0;
    font-size: 1.1rem;
    margin-left:0.8rem; 

}
.right img{
    width: 0.7rem;
    height: 0.7rem;
}
.right{
    float: right;
    margin-right: 1.2rem;
}
.right span{
    font-size: 1rem;
}
.questDiv{
    background: #fff;
    position:absolute;
    margin-top: 7rem;
    width: 100%;
    height:16.8rem;
    border-bottom: 1px solid #ccc;
    z-index:1;
} 
.questDiv .quest{
    width: 90%;
    height: 17.1rem;
    color: #999;
    font-size: 1rem;
    margin: auto;

}
.questDiv .quest .title{
    width: 100%;
}
.quest .options{
    height: 12.1rem;
    margin-top: 1.4rem;
}
.quest .options .list{
    height: 12.3rem;
    line-height: 2.4rem;
    margin-top: 0.7rem;

}
.quest .options .list li {
    margin-bottom: 1rem;
}
.quest .options .list li p{
    display: block;
     width:2rem;
     height: 2rem;
     line-height: 2rem;
     text-align: center;
     border-radius: 50%;
     border:0.07rem #999 solid;
     margin-right: 1rem;
     font-size: 0.9rem;
}
.yellow{
    background: #F58823;
    color: #fff;
    border:none;
}
.blue{
    background: #42A5E0;
    color: #fff;
    border:none;
}

.quest .options .list li span{
    position: absolute;
    margin-left: 3.2rem;
    margin-top: -2.2rem;
    font-size: 0.9rem;

}
.questDiv .bj{
    width: 100%;
    height: 3rem;
    font-size: 0.9rem;
    line-height: 3rem;
    border-bottom: 0.2rem #dcdcdc  solid;
    border-top:0.2rem #dcdcdc solid;
}
.questDiv .bj .bjDiv{
    width: 100%;
    margin: auto;
}
.questDiv .bj .titles {
  color: #999;
  float: right;
  display: block;
  margin-right: 2rem;
} 
.questDiv .bj button{
    width:5.5rem;
    height: 1.3rem;
    color: #fff;
    background: #42A5E0;
    font-size: 0.8rem;
    margin-top: 0.57rem;
    border: none;
    padding: 0;
    margin-left: 1rem;
}
.questDiv .bj button .ji {
  width: 0.9rem;
  height: 0.9rem;
  margin-top: 0.2rem;
  margin-right: 0.2rem;
}
.answer{
    width: 100%;
    height: 100%;
    position: relative;
    font-size: 1rem;
    margin-top: 25.3rem;
    background: #fff;
     color: #6b6b6b;
}
.answer1{
    width:90%;
    margin: auto;
   
}
.answer .titles{
    color: #999;
    margin-top:0.3rem; 
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
  border-bottom: 0.07rem #DCDCDC solid;
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
 margin: auto;
  display: flex;
  flex-direction: column;
}
.answer .jx .content {
  text-indent: 2.14rem;
  margin-top: 0.7rem;
} 
.bottom {
  width: 100%;
  height: 3rem;
  color: #666;
  font-size: 0.7rem;
  background: #fff;
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 99;
  border-top: 0.07rem #EFEFEF solid;
}
.bottom .big {
  width: 13.2rem;
  height: 2.5rem;
  line-height: 0.9rem;
  display: flex;
 margin-left: 50%;
}
.bottom .big .small {
  width: auto;
  height: 2.5rem;
  text-align: center;
  margin:0.2rem auto;
  display: flex;
  flex-direction: column;
}
.bottom .jt {
  width: 0.8rem;
  height:1rem;
  margin: auto;
}
.bottom .xfx {
  width: 1rem;
  height: 1rem;
  margin: auto;
}
.bottom .sc {
  width: 31.1rem;
  height: 1.28rem;
  margin: auto;
}
.biji1{
    width: 100%;
   position: fixed;
   margin-top:28.8rem; 
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
  /* z-index: 200;
  position: fixed; */
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
  padding: 0;
  font-size: 1rem;
  margin-top:2.14rem;
  margin-left:3.35rem;
  border: none;
  border-radius:0.3rem; 
}
.biji .contBj {
  width: 90%;
  position: relative;
  /* height:100%; */
  z-index: 0;
  /* margin-top: 104rpx; */
}
.biji .contBj .txt {
  width: 90%;
  height: 7.14rem;
  color: #aaa;
  font-size: 1rem;
  text-indent: 1.78rem;
  /* margin: 1.21rem; */
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
  /* margin-right: 0; */
  /* margin-left: 13.4rem; */
}
.bottom .big1 .small {
  width: 2.6rem;
  height: 2.5rem;
  text-align:center;
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
  width: 2.1rem;
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
  /* right:25rpx; */
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

