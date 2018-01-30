<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isLogin: false,
        userInfo: {
        }
      }
    },
    mounted(){
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
