<template>
    <div id="headTitle">
      <div class="rowtitle">
        <span class="fontStyle">{{orgName}}企业物联网系统</span>
        <span class="layout"><a href="javascript:void(0)" @click="logout">退出</a></span>
        <span class="layout"><a href="javascript:void(0)" @click="monitorPage">监控页面</a></span>
        <span class="layout"><a href="javascript:void(0)" @click="consolePage">控制台</a></span>
        <span class="layouttab"><a href="javascript:void(0)" @click="consolePage"><img :src='imageUrl' class="imgStyle"/></a></span>
      </div>

    </div>
</template>

<script>
  import {exitSystem} from "../api/api";

  export default {
    data() {
      return {
        username:'管理员',
        routerDir:'',
        activeIndex: '1',
        orgName:'',
        imageUrl:'',
        temp:'home'
      };
    },
    methods: {
      consolePage() {
        this.$router.push(this.routerDir);
      },
      monitorPage(){
        this.$router.push('/monitor');
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      logout(){
        var _this = this;
        this.$confirm('你确认退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          exitSystem().then(res=>{
            console.log("res(exit)--->",res);
          }).catch(err=>{
            console.log("err(exit)--->",err);
          });
          sessionStorage.removeItem('user');
          _this.$router.push('/login');
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });
        });
      },
    },
    created() {
      var user = sessionStorage.getItem('user');
      if (user) {
        user = JSON.parse(user);
        this.user = user;
        this.routerDir = user.homeDir || '';
        this.username = user.username || '';
        this.orgName = user.orgName || '';
        this.imageUrl = user.imageUrl || '';
        console.log("image---"+this.imageUrl);
      }
    }
  }
</script>

<style scoped>
  .layout{
    float: right;
    line-height: 40px;
    color: #25b382;
    margin-left: 20px;
    margin-right: 15px;
  }
  a{
    color: #25b382;
    text-decoration:none
  }
  .layouttab{
    float: right;
    line-height: 60px;
    color: #25b382;
    margin-right: 15px;
  }
 .fontStyle{
   line-height: 40px;
   margin-left: 14px;
   font-size:24px;
   color: #25b382;
   font-family:"STLiti";
 }
 .imgStyle {
   width: 60px;
   height: 30px;
   line-height: 70px;
 }

  .el-menu--horizontal .el-submenu {
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid transparent;
    color: #909399;
  }

  .rowtitle{
    background: #1A191F;
    height: 40px;
  }

</style>
