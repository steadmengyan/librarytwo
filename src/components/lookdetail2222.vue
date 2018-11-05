<template>
    <div id="lookdetail">
        <div class="search1">
            <span class="zifu" @click="looklist"></span>
            <span class="zifu1">看看详情</span>  
        </div>  
        <div class="content" v-show="xianshi">
            <div class='title'>《{{arr.title}}》</div>
            <div class='cont' >
                <div class="cont1" v-html="arr.content"></div>
            </div>
            <div class='down' @click="dianji">
               <span></span>
            </div>
        </div>
      
           <div class="content" v-show="!xianshi" style="height:100%">
               <div class="title">《{{arr.title}}》</div>
               <div class="cont" style="height:40rem;overflow:hidden" v-html="arr.content">
               </div>
               <div class="down" @click="dianji">
                
                <i style="margin-top:10.7rem"></i>
               </div>
           </div>

         <keep-alive>
            <Jcdp :Show="Show"></Jcdp>
          </keep-alive> 

           <keep-alive>
            <Wydp :Show="Show"></Wydp>
          </keep-alive> 
    </div>
</template>
<script>
import Jcdp from '@/components/Jcdp'
import Wydp from   '@/components/Wydp'
export default {
    data(){
       return{
      Show:{
        show:true,
      },
        Id:'',
        xianshi:true,
        arr:'',
   }
},
    methods:{
     looklist(){
           this.$router.goBack()
        },
       dianji(){
           this.xianshi=!this.xianshi
            this.Show.show=!this.Show.show;
       },
    },
     components:{
     Jcdp,
     Wydp,
   },
  mounted() {
        if (this.$route.params.Id !== undefined) {
            this.Id = this.$route.params.Id;
            localStorage.setItem("id", this.$route.params.Id);
            } else {
            this.Id = localStorage.getItem("id");
            }
               console.log(this.Id);
              var than = this;
                    this.$axios({
                        url:"http:///xcx.xywol.com/index.php/api/version/LookInfo",
                        method:"post",
                        data:{"id":this.Id} 
                    }).then(function(res){
                        console.log("成功的回调");
                        console.log(res.data.data.info.title);
                        than.arr=res.data.data.info
                    })
                    .catch(function(err){
                        console.log("失败的回调")
                        
                    });
  }
}
</script>
<style scoped>
#lookdetail{
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

    top: 0;
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
.content{
    width:100%;
    height: 24rem;
    color: #9a9a9a;
    font-size: 0.8rem;
    background: #fff;
    border-bottom: 0.35rem #efefef solid;
    top: 3rem;
      overflow: hidden;
      position: fixed;

    z-index:99;
}
.content .kfm{
  width: 7.14rem;
  height:9.8rem;
  margin: 0.7rem auto;
}
.content .title{
    width: 100%;
    height: 2.1rem;
    color: #f58823;
    font-size: 1rem;
    text-align: center;
    line-height: 2.1rem;
}
.content .kfm img{
    width: 7.14rem;
    height: 9.8rem;
}
.content .cont {
  width:90%;
  height: 10.7rem;
  margin: 0 auto;
}
.content .cont .cont1{
    height: 19rem;
    overflow: hidden;
}
.content .down {
  width: 2.8rem;;
  height: 0.64rem;
  margin: -1rem auto;
}
.content .down span{
     position: absolute;
      left: 12rem;
     top:22rem;
     width: 1.2rem;
    height: 1.2rem;
    line-height: 3rem;
    border-left:0.2rem solid #f58823;
    border-bottom:0.2rem solid #f58823;
    display: inline-block;
    transform: rotate(-45deg);
}
.content .down i{
     position: absolute;
      left: 12rem;
     top:32.5rem;
     width: 1.2rem;
    height: 1.2rem;
    line-height: 3rem;
    border-left:0.2rem solid #f58823;
    border-bottom:0.2rem solid #f58823;
    display: inline-block;
    transform: rotate(135deg);
}
.wydp{
    width: 100%;
    height: auto;
    color:#9a9a9a;
    font-size: 1rem;
    position: fixed;
    margin-top: 2.7rem;
}
.wydp .titBj{
    width:23.6rem;
    height: 2.5rem;
    background: #fff;
    line-height: 2.5rem;
    letter-spacing: 0.03rem;
    display: flex;
    padding: 0 1rem;
    border-bottom: 0.03rem #efefef solid;
}
.wydp .gwkx {
  width: 5.5rem;;
  height: 0.8rem;
  margin-left: 0.5rem;
  margin-top:0.7rem;
}
.wydp .txt {
  width: 23.4rem;
  height: 6.7rem;
  /* margin: 0.1rem auto 0 auto; */
  margin-top: 0.1rem;
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


