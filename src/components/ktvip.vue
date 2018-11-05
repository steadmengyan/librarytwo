<template>
    <div id="ktvip">
    <div class="search1-1">
    <div class="search1">
               <span class="zifu" @click="index"></span>
              <span>开通VIP</span>
    </div>
   </div> 
   <div class="content">
    <div class="list">
        <div class="header">
            <img src="../../resoure/images/mine/logo.png" alt="">
            <div class="right">
                <span class="yellow">掌上大语文VIP学员</span>
                <span style="line-height:1rem;">学同步语文，听名家讲语文就用掌上大语文小程序，一天只需一元钱。</span>
            </div>
        </div>
        <div class="bottom">
            <div class="title">
                <span class="tip">提示: <span style="color:#666;">目前只能开通一,二,三,七年级</span></span>
            </div>
            <div class="cont">
                <form>
                    <div class="view-bd">
                        姓<i style="margin-left:1rem">名:</i>
                        <input type="text" placeholder="胡娜" placeholder-style="color:#999">
                    </div>
                     <div>
                         <span>手机号：</span><input type='text' placeholder='13321060489' placeholder-style='color:#999' class='input-bd'/>
                      </div>
                      <div>
                          <span>开<i style="margin-left:1rem">通:</i></span>
                          <ul class="checkDiv" style="font-size:0.9rem;">
                               <li class='item'><input type="checkbox"class="input_check" id="check1"><label for="check1"></label>&nbsp;一年级</li>
                               <li class='item'><input type="checkbox"class="input_check" id="check2"><label for="check2"></label>&nbsp;二年级</li>
                               <li class='item'><input type="checkbox"class="input_check" id="check3"><label for="check3"></label>&nbsp;三年级</li>
                               <li class='item'><input type="checkbox"class="input_check" id="check4"><label for="check4"></label>&nbsp;四年级</li>
                               <li class='item'><input type="checkbox"class="input_check" id="check5"><label for="check5"></label>&nbsp;五年级</li>
                               <li class='item'><input type="checkbox"class="input_check" id="check6"><label for="check6"></label>&nbsp;六年级</li>
                               <li class='item'><input type="checkbox"class="input_check" id="check7"><label for="check7"></label>&nbsp;七年级</li>
                               <li class='item'><input type="checkbox"class="input_check" id="check8"><label for="check8"></label>&nbsp;八年级</li>
                               <li class='item'><input type="checkbox"class="input_check" id="check9"><label for="check9"></label>&nbsp;九年级</li>
                          </ul>
                      </div>
                      <div class="xyqx">
                          <span>学员期限</span>
                          <span style="margin-left:66%">金额</span>
                      </div>
                      <div class="je">
                          <span>1年</span>
                          <span style="margin-left:72%">368元</span>
                      </div>
                      <div style="color#999" class="wxzf">
                     <yd-checkbox-group v-model="checkbox6" size="20" color="#F58823">
                                <yd-checkbox val="1" shape="circle" onclick="return false;">微信支付
                                </yd-checkbox>
                        </yd-checkbox-group>
                      </div>
                      <div class="tyxy" >
                       <yd-checkbox-group v-model="checkbox6" size="20">
                                <yd-checkbox val="1" shape="circle" onclick="return false;"> &nbsp;
                                </yd-checkbox>
                                <span @click="agreement"> 同意掌上大语文VIP学员服务协议</span>
                        </yd-checkbox-group>
                      </div>
                        <div class="ljky-1">
                      <button class="ljkt"> 
                        立即支付
                      </button>
                          </div>
                </form>
            </div>
        </div>
    </div> 
    </div>
 </div>   
</template>
<script>
export default {
    data(){
        return{
            ktvip:"",
            checkbox6:['1'],
            checkbox1:true,
        }
    },
    methods:{
       index(){
           this.$router.goBack()
        //    if(this.ktvip==="tongbu"){
        //        this.$router.push({path:'/textlist'})
        //    }else if(this.ktvip==="jilu"){
        //        this.$router.push({path:'/record'})
        //    }else if(this.ktvip==="shoucang"){
        //        this.$router.push({path:'/collect'})
        //    }else if(this.ktvip==="mingjiafenxiang"){
        //         this.$router.push({path:'/sharelist'})
        //    }else{
        //         this.$router.push({path:'/'})
        //         }
        },
        agreement(){
            this.$router.push({path:'/agreement'})
        },
    },
    mounted(){
        this.ktvip = this.$route.params.ktvip;
        console.log(this.ktvip);
    }
}
</script>
<style scoped>
#ktvip{
height: 100%;
}
 .search1-1{
    position: fixed;
    width: 100%;
    z-index:99;
}
.search1{
     height: 3rem;
     margin-bottom: 15px;
     background: #fff;
      text-align: center;
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
.search1 span{
    line-height: 3rem;
    font-size: 1.2rem;
    letter-spacing: 1.5px;
}

.content{
    width: 100%;
    height:100%;
    position: absolute;
    top:2rem;
     background: #b8b8b8;
     z-index: 1;
}
.list{
   margin: auto;
   width: 90%;
    background: #b8b8b8;
}
.header{
    width:100%;
    height:6rem;
    background: #fff;
    border-radius: 3px;
    display: flex;
    margin: 1.4rem auto  0.2rem auto;
}
.header img{
    width:4.2rem;
    height:2.6rem;
    margin: 1.4rem;
}
.header .right {
  width: 16.2rem;
  height: 3.8rem;
  color: #aaa;
  font-size: 0.8rem;
  margin: 0.7rem 0;
  display: flex;
  flex-direction: column;
}
.header .right .yellow {
  height:1.9rem;
  color: #F58823;
  font-size: 1.1rem;
  font-weight: 600;
}
.bottom {
  width: 100%;
  height: 100%;
  color: #999;
  font-size: 1rem;
  background: #fff;
  border-radius: 3px;
  margin: 0 auto;
  padding-bottom:10% ;
  
}
.bottom .title {
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0 0.7rem;
  border-bottom: 0.1rem #F58823 solid;
}
.bottom .title .tip {
  color: #F58823;
  font-size: 0.8rem;
  line-height: 3.2rem;
  float: right;
}
.bottom .cont {
  width:95%;
  /* height: 28.5rem; */
  margin: 0 auto;
  font-size: 1.1rem;
}
.bottom .cont div {
  width: 100%;
  height:2.8rem;
  color: #535353;
  line-height: 2.8rem;
  display: flex;
}
.bottom .cont .tyxy{
    margin-top: 0rem;
}
.bottom .cont div input{
    height: 1rem;
     border: none;
     margin:0.6rem 0 0 1.78rem;
    font-size: 1.1rem;
}

.bottom .cont .view-bd input{
   height: 1.8rem;
   font-size: 1.1rem;
   border: none;
  
}
.bottom .cont .view-bd {
  border-bottom: 1px #C9C9C9 solid;
   width: 95%;
   margin-left: 0.5rem;
  
}
.bottom .cont div span{
    margin-left: 0.5rem;
}
.bottom .cont .input-bd {
  width: 70%;
  height: 2.3rem;
  border-bottom: 1px #C9C9C9 solid;
    margin:0.6rem 0 0 0.78rem;
  
}            
.checkDiv {
     margin: 1px auto;
      width: 70%;
      height: 6.5rem;
      margin-left: 1.7rem;
      border-bottom: 1px #42A5E0 solid;
            }  
.checkDiv li {
    position: relative;
    float: left;
    height: 1.78rem;
    font-size: 0.7rem;
    margin-right: 1.3rem;
    line-height: 3rem;
}
.checkDiv .input_check {
    position: absolute;
    visibility: hidden;
}
    
.checkDiv .input_check+label {
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 2px solid #F58823;
    border-radius: 3px;
   margin-bottom:-3px;
}
    
.checkDiv .input_check:checked+label:after {
    content: "";
    position: absolute;
    left: 2px;
    bottom:4px;
    width: 10px;
    height: 7px;
    border: 2px solid #4CD864;
    border-top-color: transparent;
    border-right-color: transparent;
    -ms-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -webkit-transform: rotate(-60deg);
    transform: rotate(-45deg);
}
.bottom .cont .xyqx {
  height: 1.5rem;
  width: 95%;
  color: #999;
  line-height: 1rem;
  margin-top: 5.5rem;
  margin-left: 0.5rem;
  border-bottom: 0.8px #C9C9C9 solid;
}
.bottom .cont .xyqx span{
    margin: 0;
}
.bottom .cont .je {
  color: #F58823;
  font-size: 1.1rem;
  margin-top: -0.3rem;
}
.bottom .cont .ljkt1{
  width: 90%;
    display: flex;
  bottom: 0;

}
.bottom .cont .wxzf{
    margin-left: 0.4rem;
    margin-top: 0.5rem;
}
.bottom .cont .ljkt {
  width: 85%;
  height: 2.9rem;
  color: #fff;
  font-size: 1.1rem;
  line-height: 2.9rem;
  background: #F58823;
  letter-spacing: 1px;
  border: none;
  border-radius: 3px;
  margin: 0rem 0 0 2rem; 
}
.bottom .cont .ljkt:active{
    background: #42A5E0;
}
.bottom .cont .wxzf input{
width: 1rem;
height: 1rem;
margin-top: 0.8rem;
margin-right: 0.1rem;
}
.bottom .cont .wxzf div{
    line-height: 1.4rem;
}
.bottom .cont .tyxy{
    margin-left: 0.4rem;
}
.bottom .cont .tyxy div{
    line-height: 1.4rem;
}
.bottom .cont .tyxy input{
    width: 1rem;
    height: 1rem;
    margin-top: 0.8rem;
    margin-right: 0.1rem;
}
.bottom .cont .tyxy span{
    font-size: 1rem;
    margin-left: -1rem;
    margin-top: 0.1rem;
}
.bottom .cont .tyxy span:active{
    color: #F58823;
}
</style>



