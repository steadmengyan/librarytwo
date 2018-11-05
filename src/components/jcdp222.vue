<template>
    <div v-show="Show.show">       
      <div class="desc">
        <div class="titDesc">
            <span class="blue">精彩点评</span>({{arr2.is_Collection}})
            <img src="../../resoure/images/fax/liul.png" class="ll" alt="">{{arr2.views}}
        </div>
        <div class="comments">
             <div class="item">
                 <img :src="arr1.header_url" class="header" alt="">
                 <div class="right">
                     <div>
                         <span class="blue">{{arr1.name}}</span>
                         <span class="dp">点评此文章</span>
                         <img src="../../resoure/images/fax/wkx.png"  class="wkx" alt="">
                     </div>
                     <span style="margin:0.35rem 0">{{arr.content}}</span>
                     <!-- <span class="blue">展开</span> -->
                     <span>{{arr.create_time}}</span>
                 </div>
              </div>

     
        </div>
    </div>

     <div class="bottom">
              <div class="big">
                  <div class="small" @click="show">
                      <img src="../../resoure/images/mine/upd.png" class="jiy" alt="">点评
                  </div>
                  <div class="small">
                      <img src="../../resoure/images/textdetail/sc.png" class="sc" alt="">收藏
                  </div>
                  <div class="small">
                      <img src="../../resoure/images/textdetail/fx.png" class="fx" alt="">分享
                  </div>
              </div> 
          </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Id:'',
            arr:'',
            arr1:'',
            arr2:'',
        }
    },
    props:["Show"],
    methods:{
        show(){
            this.Show.show=!this.Show.show;
        }
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
                        data:{"id":than.Id} 
                    }).then(function(res){
                        console.log("成功的回调");
                        // console.log(res.data.data.comment[0].user[0].name);
                        for(var i=0;i<res.data.data.comment.length;i++){
                              than.arr=res.data.data.comment[i]
                              for(var r =0; r<res.data.data.comment[i].user.length;r++){
                                  than.arr1=res.data.data.comment[i].user[r]
                                  console.log(res.data.data.comment[i].user[r].name);
                              }
                        }
                          than.arr2=res.data.data.info
                       
                    })
                    .catch(function(err){
                        console.log("失败的回调")
                        
                    });
                }
}
</script>
<style scoped>
.desc{
    width:100%;
    height: 22.5rem;
    color: #9a9a9a;
    font-size: 1rem;
    margin-top: 26.7rem;
    background: #fff;
     z-index: 100; 
}
.desc .titDesc{
    width: 100%;
    height: 2.5rem;
    background: #fff;
    line-height: 2.5rem;
    letter-spacing: 0.03rem;
    padding: 0 1rem;
    border-bottom: 0.03rem #EFEFEF solid;
    border-top: 0.03rem #EFEFEF solid;
      display: flex;
      z-index:1;
      position: fixed;
}
.blue{
    color: #42a5e0;
}
.desc .titDesc .ll{
    /* display: inline; */
    width: 1.32rem;
    height: 1.2rem;
     float: left;
    margin: 0.5rem 0.2rem 0 10.4rem;
}
.desc .comments {
  width: 100%;
  height: auto;
  margin-top: 2.5rem;
  position: absolute;
    background: #fff;

}
.desc .comments .item {
  width: 90%;
  height: 7.6rem;
  margin: 0.7rem auto 0.3rem auto;

  /* margin: auto; */
}
.desc .comments .item .header {
  width: 2.7rem;
  height: 2.6rem;
  margin-left: 0.2rem;
  border-radius: 50%;
}
.desc .comments .item .right {
  width:85%;
  height: 7.6rem;
  float: right;
  display: flex;
  flex-direction: column;
}
.desc .comments .item .right .dp {
  margin: 0 0.35rem 0 0.7rem;
}
.desc .comments .item .right .wkx {
  width: 5.5rem;
  height:0.85rem;
}
.bottom{
    width: 100%;
    height: 3rem;
    color: #666;
    font-size: 0.7rem;
    background: #fff;
    display: flex;
    position: fixed;
    z-index: 999;
    bottom: 0;
    border-top:0.07rem #bababa solid;
}
.bottom .big{
    width: 8.2rem;
    height: 2.5rem;
    line-height: 0.9rem;
    display: flex;
    margin-left: 60%;
}
.bottom .big .small {
  width:2.6rem;
  height: 2.5rem;
  text-align:center;
  margin: 0.3rem 0.5rem;
}
.bottom .jiy {
  width: 1.3rem;
  height: 1.2rem;
}
.bottom .sc {
  width: 1.1rem;
  height: 1.2rem;
}
.bottom .fx {
  width: 1.5rem;
  height: 1.2rem;
}
</style>


