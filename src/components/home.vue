<template>
  <div id="home">
   <router-view></router-view>
  <yd-tabbar active-color="#42A5E0" fixed fontsize="0.8rem" style="padding:0.2rem">
        <yd-tabbar-item title="首页" link="/" :active="msg1" @click.native=show1>
            <yd-icon name="home-outline" slot="icon" size="1.9rem" style="height:2rem;"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="问问" link="/wenwen" :active="msg2" @click.native=show2>
            <yd-icon name="question" slot="icon" size="1.9rem"  style="height:2rem;"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="发现" link="/data" :active="msg3" @click.native=show3>
            <yd-icon name="discover" slot="icon" size="1.9rem" style="height:2rem;"></yd-icon>
        <!-- <img slot="icon" style="height: 25px;" src="../../resoure/images/fax1.png"> -->
        </yd-tabbar-item>
        <yd-tabbar-item title="我的" link="/user" :active="msg4" @click.native=show4>
              <yd-icon name="ucenter-outline" slot="icon" size="1.9rem" style="height:2rem;"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg1: true,
      msg2: false,
      msg3: false,
      msg4: false
    };
  },
  methods: {
    show1: function() {
      this.msg1 = true;
      this.msg2 = false;
      this.msg3 = false;
      this.msg4 = false;
      console.log("dfsaiudfgiodfhyiew");
    },
    show2: function() {
      this.msg1 = false;
      this.msg2 = true;
      this.msg3 = false;
      this.msg4 = false;
      console.log("dfsaiudfgiodfhyiew");
    },
    show3: function() {
      this.msg1 = false;
      this.msg2 = false;
      this.msg3 = true;

      this.msg4 = false;
      console.log("dfsaiudfgiodfhyiew");
    },
    show4: function() {
      this.msg1 = false;
      this.msg2 = false;
      this.msg3 = false;
      this.msg4 = true;
      console.log("dfsaiudfgiodfhyiew");
    }
  },
  watch: {
    $router(to, from) {
      console.log(to.path);
    }
  },
  mounted() {
    console.log(33333);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .router-link-active>.yd-tabbar-icon{
  color:RGB(28,152,252)
}
.router-link-active>.yd-tabbar-txt{
    color:RGB(28,152,252);
} */
#home {
  width: 100%;
  height: 100%;
}
.yd-tabbar .yd-tabbar-txt {
  font-size: 1rem;
}
</style>
