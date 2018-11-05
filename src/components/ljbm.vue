<template>
    <div v-show="Show.show">
        <div class="desc">
                <div class="title">
                    <span>活动介绍</span>
                    <button>咨询</button>
                </div>
                <div class="content">
                    <!-- <p class="tupian">
                          {{arr.title}}
                   </p>  -->
                    <div v-html="arr.content"></div>
                </div>
            </div>
             <div class="bottom">
                 <div class="big">
                    <div class='small' style="width:4rem">
                       <img src="../../resoure/images/fax/bm.png" class="bm" @click="show">立即报名
                    </div>
                    <div class='small'>
                       <img src="../../resoure/images/fax/fx.png" class="fx">分享
                    </div>
                    <div class='small'>
                        <img src="../../resoure/images/fax/sc.png" class="sc">收藏
                    </div>
                 </div>
             </div>

       
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:'',
            Id:'',
        }
    },
     props:["Show"],
    methods:{
        show(){
            this.Show.show=!this.Show.show;
        }
    },
    mounted(){
       if (this.$route.params.Id !== undefined) {
      this.Id = this.$route.params.Id;
      localStorage.setItem("id", this.$route.params.Id);
    } else {
      this.Id = localStorage.getItem("id");
    }
              var than = this;
              var params = new URLSearchParams();
               params.append("id",this.Id);
                this.$axios({
                   url:"http:///xcx.xywol.com/index.php/api/version/InfoActivity",
                   method:"post",
                  data:params, 
               }).then(function(res){
                   console.log("成功的回调");
                   console.log(res.data.data.comment)
                   than.arr=res.data.data;
                  
                 
            })
             .catch(function(err){
                console.log("失败的回调");
                
            });
      
   }
}
</script>
<style scoped>
.desc{
  width: 100%;
  position: absolute;
  margin-top: 20.2rem;
  background: #fff;
}
.desc .title{
    width: 100%;
    height: 3rem;
    color: #f58823;
    font-size: 1rem;
    background: #fff;
    line-height: 3rem;
    margin: auto;
    letter-spacing: 0.03rem;
    position: fixed;
    padding: 0 1.2rem;
    z-index:99;
    border-bottom: 0.07rem #efefef solid;
}
.desc .title button {
  width: 2.78rem;
  height:1.42rem;
  color: #fff;
  font-size: 1rem;;
  line-height: 1.4rem;;
  background: #F58823;
  padding: 0;
  margin-top: 10px;
  float: right;
  border: none;
}
.desc .content{
    width: 100%;
    color: #aaa;
    font-size: 0.8rem;
    z-index: 1;
    padding: 0 1.2rem;
    margin:4rem auto; 
}
.desc .content .tupian{
    width:100%;
    font-size: 1.5rem;
    color: #F58823;
    text-align: center;
    margin-bottom: 1rem;
}
.desc .content img{
    width: 8.7rem;
    height: 4.46rem;
}
.desc .content div{
    text-indent: 22px;
}
.bottom{
    width: 100%;
    height: 3rem;
    font-size: 0.7rem;
    color: #666;
    background: #fff;
    line-height: 3rem;
    text-align: center;
    letter-spacing: 0.07rem;
    bottom:0;
    position: fixed;
    border:1px solid #eeeeee;
}
/* .bottom .big{
    width: 13.8rem;
    height: 3rem;
    line-height: 0.9rem;
    display: flex;
    margin-left: 12.8rem;
} */
.bottom .big .small {
  width: 2rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  margin: 0  2rem auto auto;
  float: right;
}
.bottom .big .small .sc {
  width: 0.85rem;
  height: 1rem;
  margin: 0.4rem auto -0.7rem auto;
}
.bottom .big .small .fx {
  width: 1rem;
  height: 1rem;
  margin: 0.4rem auto -0.7rem auto;
}
.bottom .big .small .bm {
  width: 1.57rem;
  height: 1rem;
  margin: 0.4rem auto -0.7rem auto;
}
</style>


