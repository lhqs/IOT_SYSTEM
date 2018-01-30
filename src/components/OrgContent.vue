<template>
    <div id="orgContent">

      <div id="topContent"></div>

      <transition name="slide-fade">
        <keep-alive>
          <main-org></main-org>
        </keep-alive>
      </transition>
    </div>
</template>

<script>
  import MainOrg from '../components/MainOrg'
    export default {
        name: "org-content",
      components:{
          MainOrg
      }
    }
</script>

<style scoped>
  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  #orgContent{
    height: 80px;
    padding: 0px 0 0;
    box-sizing: border-box;
    position: relative;
  }
  #topContent{
    height: 20px;
  }

</style>
