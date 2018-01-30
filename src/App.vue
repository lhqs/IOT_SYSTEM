<template>
  <div id="app">
    <div id="main">
      <div id="sidebar">
        <NavMenu v-bind:sendMsg="sendMsg"></NavMenu>
      </div>
      <div id="content">
        <Container></Container>
      </div>
    </div>
  </div>

</template>

<script>

  import NavMenu from './components/NavMenu'
  import Container from './components/Container'
  import LogIn from './components/LogIn'
  import {sensorLimit} from "./api/api";

  export default {
    name: 'app',
    data() {
      return {
        msg: '',
        sendMsg:'111' // 默认为可以查看所有传感器节点（1:可视; 0:不可视）
      }
    },
    components: {
      NavMenu,
      LogIn,
      Container
    },
    methods:{
      /*changeState(){
        con.$on("changeStatus",function (msg) {
          console.log("the on is doing");
        })
        console.log("the emit is doing");
      }*/
    },
    amount:{
      /*listen() {
        con.$on("changeStatus",function (msg) {
          console.log("the on is doing--"+msg);
        })
      }*/
    },
    beforeCreate(){
      /*sensorLimit().then(res=>{
        this.sendMsg = res.data;
        console.log("this limit ===> "+this.sendMsg);
      }).catch(err=>{
        console.info("err--->"+err);
      });*/
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

  #app {
    height: 100%;
    padding: 0px 0 0;
    box-sizing: border-box;
    position: relative;
  }

  #main {
    height: 100%;
  }

  #sidebar {
    float: left;
    width: 210px;
    height: 100%;
    background-color: #333333;
    /*box-shadow:2px 2px 5px #333333, 2px 2px 5px #333333;*/
  }

  #content {
    margin-left: 200px;
    height: 100%;
    width: auto;
    overflow: auto;
    background-color: #ffffff;
  }
</style>
