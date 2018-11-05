<template>
  <div id="app">
  <transition :name="transitionName"> 
        <keep-alive include="register">
           <router-view class="Router" v-if="isRouterAlive">
           </router-view>
        </keep-alive>
　　　</transition>
  </div>
</template>

<script>

export default {
 
  provide(){
  
    return{
         reload:this.reload,
    }
  },
  data() {
    return {
      transitionName: "slide-left", // 默认动态路由变化为slide-right
       isRouterAlive: true

    };
  },
  watch: {
    $route(to, from) {
      let isBack = this.$router.isBack; //  监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true;
        console.log('reload');
      })
    }
  }
};
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  /* background: #b8b8b8; */
}
.Router {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>