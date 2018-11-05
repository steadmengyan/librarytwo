<template>
    <div id="updinfo">
        <div class="search1">
               <span class="zifu" @click="user"></span>
              <span class="zifu1">个人信息</span>
        </div>
        <div class="container">
            <ul class="list">
                <li class="item">
                   <div class="item1">
                        <div class="left">
                       <img src="../../resoure/images/mine/right.png" class="fanhui" alt="">
                            <span>返回</span>
                       </div>
                        <div class="fudong">
                            <span class="smallDiv" style="line-height: 3rem;">退出登录</span>
                        </div>
                   </div>
                </li>
                <li class="item2">
                      <div class="item1">
                           <div class="left">
                            <img src="../../resoure/images/mine/xvip.png" alt="" class="xvip">
                            <span>学员编号：87980808</span>
                            </div>
                            <div class="fudong">
                                <img src="../../resoure/images/mine/right.png" class="right" alt="">
                                <img src="../../resoure/images/mine/head2.png" class="head" alt="">
                            </div>
                      </div>
                </li>
                <li class="item">
                   <div class="item1">
                        <div class="left">
                        我的姓名
                        </div>
                        <div class="fudong">
                                <span class="txt">李娜</span>
                                <img src="../../resoure/images/mine/right.png" class="right" alt="">    
                        </div>
                   </div>
                </li>
               <li class="item">
                   <div class="item1">
                        <div class="left">
                        我的性别
                        </div>
                        <div class="fudong">
                                <span class="txt">男</span>
                                <img src="../../resoure/images/mine/right.png" class="right" alt="">    
                        </div>
                   </div>
                </li>
              <li class="item">
                   <div class="item1">
                        <div class="left">
                        手机号
                        </div>
                        <div class="fudong">
                                <span class="txt">13385625647</span>
                                <img src="../../resoure/images/mine/right.png" class="right" alt="">    
                        </div>
                   </div>
                </li>
               <li class="item">
                   <div class="item1">
                        <div class="left">
                        常用邮箱
                        </div>
                        <div class="fudong">
                                <span class="txt">13385625647@qq.com</span>
                                <img src="../../resoure/images/mine/right.png" class="right" alt="">    
                        </div>
                   </div>
                </li>
                 <li class="item">
                   <div class="item1">
                        <div class="left">
                        所在年级
                        </div>
                        <div class="fudong">
                                <span class="txt">二年级</span>
                                <img src="../../resoure/images/mine/right.png" class="right" alt="">    
                        </div>
                   </div>
                </li>
                 <li class="item">
                   <div class="item1">
                        <div class="left">
                          所在小学
                        </div>
                        <div class="fudong">
                                <span class="txt">北京实验小学</span>
                                <img src="../../resoure/images/mine/right.png" class="right" alt="">    
                        </div>
                   </div>
                </li>
                 <li class="item">
                   <div class="item1">
                        <div class="left">
                        收件地址
                        </div>
                        <div class="fudong">
                                <span class="txt">北京通顺港商务中心</span>
                                <img src="../../resoure/images/mine/right.png" class="right" alt="">    
                        </div>
                   </div>
                </li>
                  <li class="item">
                   <div class="item1">
                        <div class="left">
                            修改密码
                        </div>
                        <div class="fudong">
                                <img src="../../resoure/images/mine/right.png" class="right" alt="">    
                        </div>
                   </div>
                </li>
            </ul>
        </div>
        <div class="kykt" @click="ktvip">
             我要开通VIP
        </div>
    </div>
</template>
<script>
export default {
      methods:{
        user(){
            this.$router.goBack()
        },
        ktvip(){
            this.$router.push({path:'/ktvip'})
        },
      },

}
</script>
<style scoped>
#updinfo{
    width: 100%;
    height: 100%;
    margin: auto;
}
.search1{
    width: 100%;
    height: 3rem;
    background: #fff;
    text-align: center;
    line-height: 3rem;
    font-size: 1rem;
    position: fixed;
    border-bottom:0.03rem solid #efefef;
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
    position: relative;
    top:3rem;
    background: #fff;
    z-index: 1;
}
.container .list li{
    width: 100%;
    margin: auto;
}
.fudong{
    float: right;
    }
.left{
    float: left;
    line-height: 3rem;
}
.item{
    height:3rem;
    font-size: 1rem;
    color: #6b6b6b;
    border-top:0.14rem #efefef solid;
}
.item1{
    width: 90%;
    margin: auto;

    height: 3rem;
}
.item2{
    width: 100% ;
    height:4.6rem;
    font-size: 1rem;
    color: #6b6b6b;
    line-height: 3.6rem;
     border: 0.6rem solid #efefef;
    border-left:none;
    border-right: none;
} 
.list .item2 .xvip{
    width: 1rem;
    height: 1rem;
    margin: 0 0.35rem 0 0;
}
.list .item2  .item1 .left{
    line-height: 3.5rem;
    /* border: 1px solid red; */
}
.list .item .smallDiv{
   float:right;
   font-size: 0.9rem;
   color: #F58823;
}
.list .item .txt{
    color: #999;
    font-size: 0.8rem;
}
.list .item .fanhui {
    transform:rotate(180deg);
    width: 0.4rem;
   height: 0.7rem;
   margin-top: 1.2rem;
   margin-right: 0.3rem;
}
.list .item .right {
  width: 0.4rem;
  height: 0.7rem;
 margin-top: 1.2rem;
 margin-left: 0.5rem;
}
.list .item2 .head {
  width: 3.2rem;
  height: 3.2rem;
  float: right;
}
.list .item2 .right{
     width: 0.4rem;
  height: 0.7rem;
  float: right;
 margin-top: 1.2rem;
 margin-left: 0.5rem;
}
 .kykt{
     width: 90%;
  height:3.2rem;
  color: #fff;
  font-size: 1.1rem;
  text-align: center;
  line-height: 3.2rem;
  background: #F58823;
  border-radius: 0.28rem;
  margin: auto;
  margin-top: 5rem;
}

</style>

