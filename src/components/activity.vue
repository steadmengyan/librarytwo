<template>
    <div id="activity">
       <div class="search1">
               <span class="zifu" @click="data"></span>
              <span class="zifu1">活动</span>
        </div>
        <div class="header">
            <div class="header-1">
            <div class="search">
                <form>
                   <input type="text"  placeholder='请输入感兴趣的活动' placeholder-style='color:#999;'>
                   <img src="../../resoure/images/textlist/search.png" alt="" class="icon_search">
                </form>
            </div>
            <div class="hd">
                近期活动 <img src="../../resoure/images/fax/new.png" alt="">
            </div>
        </div>
</div>
        <div class="list">
            <div class="item" v-for='key in arr'>
                <div class="content" @click="actdetail(key.id)">
                    <div class="one">
                        <img src="../../resoure/images/fax/logo.png" alt="">
                        <div style="margin-top:0.7rem">{{key.title}}</div>
                        <span class="bm">正在报名...</span>
                    </div>
                    <div class="two">
                        <img :src="key.cover_url" alt="">
                        <div class="title">
                           {{key.desc}}
                        </div>
                        <div clas="desc">
                            <span class="yel">活动时间:</span>{{key.start_time}}
                        </div>
                        <div class="bot">
                            <span class="yel">报名截止:</span>{{key.end_time}}
                        </div>
                        <div class="bot">
                            <span class="yel">已报名:</span>
                            <span>{{key.people}}人</span>
                        </div>
                          <div class="bot">
                            <span class="yel">报名费用:</span>
                            <span>{{key.price}}元/人</span>
                        </div>
                        
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
            arr:[],
        }
    },
     methods:{
        data(){
            this.$router.goBack()
        },
        // actdetail(){
        //     this.$router.push({path:'/actdetail'})
        // }
        actdetail(id){
            console.log(id);
            this.$router.push({
                name:'actdetail',
                params:{
                    Id:id
                }
            })
        }
    },
    mounted(){
        var than = this;
            this.$axios
            .get(
                "http:///xcx.xywol.com/index.php/api/version/Activity?page=1" 
            )
            .then(function(res) {
                than.arr = res.data.data;
                console.log(res.data.data);
            })
            .catch();
            }
    }
</script>
<style scoped>
#activity{
    width:100%;
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
    top:0;
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
.header{
    width: 100%;
    height: 3rem;
    background: #fff;
    top: 3rem;
    position: fixed;
}
.header-1{
    width:95%;
    margin: auto;
}
.header .search{
    width:60%;
    height: 1.78rem;
    color: #999;
    font-size: 0.9rem;
    border: 0.07rem #7ecef4 solid;
    border-radius: 1rem;
    background: #f5f5f5;
    opacity: 0.9rem;
    line-height: 1.78rem;
    margin: 0.6rem 0 0 0rem;
}
.header .search input{
    width: 75%;
    margin-left: 0.5rem;
    border: none;
}
.header .search .icon_search{
  width: 1.1rem;
  height: 1.1rem;
  vertical-align: 3rem;
  display: inline-block;
  margin: -1.5rem 0 0 11rem;
}
.header .hd {
  width: auto;
  height: 1.6rem;
  color: #B2B2B2;
	font-size: 0.9rem;
  line-height: 2.8rem;
  margin: -2rem 0 0 3.57rem;
  float: right;
}
.header .hd img{
    width: 1rem;
    height: 0.4rem;
    margin: 0 0 0.7rem -0.07rem;
}
.list{
    width: 100%;
    height: 100%;
    margin-top: 6rem;
    background: #fff;
}
.list .item{
    width: 100%;
    height: 25.5rem;
    border-top: 0.14rem;
    border-top:0.14rem solid #efefef;
}
.list .item .content{
    width:95%;
    margin: auto;
}
.list .item .content .one {
  height: 3rem;
  color: #B2B2B2;
  font-size: 0.8rem;
  display: flex;
  
}
.list .item .content .one img {
  width: 2rem;
  height: 2rem;
  margin: 0.4rem 0.6rem 0 0.15rem;
}
.list .item .content .one span {
  margin: 0.7rem 0 0 3.85rem;
}
.list .item .content .one .bm{
    color: #f58823;
}
.list .item .content .two {
  height: 18.2rem;
  color: #B2B2B2;
  font-size: 0.9rem;
  letter-spacing: 1px;
}
.list .item .content .two img {
  width: 100%;
  height: 13rem;
}
.list .item .content .two .title {
  color: #6B6B6B;
  font-size:1rem;
  margin-top: 0.2rem;
}
.list .item .content .two .desc {
  margin-top: 0.3rem;
}
.list .item .content .two .bot {
  display: flex;
  margin-top: 0.2rem;
}
.list .item .content .two .bot .mf {
  color: #F58823;
  font-size: 0.8rem;
  margin-left:2rem;
}
.list .item .content .two .yel {
  color: #F58823;
  margin-right: 0.5rem;
}
</style>


