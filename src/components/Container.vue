<template>
  <div id="container">
    <div id="conHeader"  align="right">
      <el-row :gutter="20">
        <el-col :span="12" :offset="12"><div class="grid-content bg-purple">
          <el-dropdown split-button type="info" size="mini" @click="handleClick">
            <strong ><div id="bordershow">{{username}}</div></strong>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><span @click="logout">退出</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div></el-col>
      </el-row>
    </div>
    <!--<hr/>-->
    <transition name="slide-fade">
      <keep-alive>
        <router-view class="content"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import {exitSystem} from "../api/api";

  export default {
    data() {
      return {
        msg: "",
        username:'管理员',  // 默认值为：管理员
      }
    },
    methods: {
      logout: function () {
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
      exit(){
        this.$confirm('你确认注销吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          sessionStorage.removeItem('user');
          _this.$router.push('/login');
          this.$message({
            type: 'success',
            message: '注销成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消注销'
          });
        });

      },
      handleClick() {
        this.$message({
          type: 'info',
          message: '请点击右侧下拉框'
        });
      }
    },
    mounted() {
      var user = sessionStorage.getItem('user');
      if (user) {
        user = JSON.parse(user);
        this.user = user;
        this.username = user.username || '';
        // this.sysUserAvatar = user.avatar || '';
      }
    }
  }
</script>

<style scoped>
  .content {
    padding: 10px;
    margin: 30px;
  }

  h1 {
    margin-left: 30px;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  #conHeader{
    background-color: #909399;
  }

  .slide-fade-leave-active {
    transition: all 0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
  #bordershow{
    border:1px;
  }
</style>
