<template>
    <div id="agreement">
       <div class="search1">
               <span class="zifu" @click="ktvip"></span>
              <span>VIP学员服务协议</span>
    </div>
      <div class="list">
          <div class="bigDiv">
              <div class="header">
                  <span>《掌上大语文VIP学员服务协议》</span>
              </div>
              <div class="contDiv">
                  <div class="content">
                      掌上大语文VIP学员服务协议详情，掌上大语文VIP学员服务协议详情，掌上大语文VIP学员服务协议，掌上大语文VIP学员服务协议。掌上大语文VIP学员服务协议详情，掌上大语文VIP学员服务协议详情，掌上大语文VIP学员服务协议，掌上大语文VIP学员服务协议。掌上大语文VIP学员服务协议详情，掌上大语文VIP学员服务协议详情，掌上大语文VIP学员服务协议，掌上大语文VIP学员服务协议。掌上大语文VIP学员服务协议详情，掌上大语文VIP学员服务协议详情，掌上大语文VIP学员服务协议，掌上大语文VIP学员服务协议。掌上大语文VIP学员服务协议详情，掌上大语文VIP学员服务协议详情，掌上大语文VIP学员服务协议，掌上大语文VIP学员服务协议。掌上大语文VIP学员服务协议详情
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    methods:{
        ktvip(){
            this.$router.goBack()
            // this.$router.push({path:'/ktvip'})
        },
    }
    
}
</script>
<style scoped>
#agreement{
    height: 100%;
}
.search1{
     height: 3rem;
       text-align: center;
     margin-bottom: 15px;
     background: #fff;
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
    font-size: 1rem;
}
.list{
    width:100%;
    height: 100%;
    top:3rem;
    position: fixed;
    background: #EFEFEF;
}
.bigDiv {
  width:90%;
  height: 36.7rem;
  background: #fff;
  border-radius: 3px;
  margin: 1.28rem auto 0 auto;
}
.header {
  height: 2.5rem;
  color: #F58823;
  font-size: 1rem;
  line-height: 2.5rem;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 0.14rem #EFEFEF solid;
  letter-spacing: 1px;
  /* text-align: center; */
}
.contDiv {
  width: 100%;
  font-size: 1rem;
  background: #fff;
}
.contDiv .content {
  width: 95%;
  height: auto;
  margin: auto;
  color: #6b6b6b;
  text-indent: 1.78rem;
  line-height: 1.1rem;
  letter-spacing: 1px;
  margin: 0.7rem;
}
</style>


