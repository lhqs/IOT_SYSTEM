<template>
  <div id="outer">
    <div id="top">
      <head-nav></head-nav>
    </div>
      <div id="main">
        <org-content></org-content>
      </div>
  </div>
</template>

<script>
  import HeadNav from './components/HeadNav'
  import OrgContent from './components/OrgContent'
    export default {
        name: "org",
      data() {
          return {
            msg:''
          }
      },
      components: {
          HeadNav,
        OrgContent
      }

    }
</script>

<style>
  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  #outer {
    height: 100%;
    padding: 40px 0 0;
    box-sizing: border-box ;
    position: relative;
  }
  #top{
    height: 40px;
    background: #BBE8F2;
    position: absolute;
    top: 0 ;
    left: 0 ;
    width: 100%;
  }
  #main{
    height: 100%;
  }


</style>
