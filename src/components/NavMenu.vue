<template>

<el-row class="tac">
  <el-col>
    <h4><strong>
      <router-link to="/home" tag="p">
        <div id="theTitle">物联网系统管理平台</div>
      </router-link>
    </strong></h4>
    <el-menu
      @open="handleOpen"
      @close="handleClose"
      background-color="#333333"
      text-color="#fff"
      active-text-color="#16b183">

      <el-submenu index="10">
        <template slot="title">
          <i class="el-icon-loading"></i>
          <span>传感节点</span>
        </template>
        <el-menu-item-group v-if="sensor_one">
          <el-menu-item index="10-1">
            <router-link to="/nodeOne" tag="li">
              传感器节点一
            </router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group v-if="sensor_two">
          <el-menu-item index="10-2">
            <router-link to="/nodeTwo" tag="li">
              传感器节点二
            </router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group v-if="sensor_three">
          <el-menu-item index="10-3">
            <router-link to="/nodeThree" tag="li">
              传感器节点三
            </router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-3">
            <router-link to="/userEdit" tag="li">
              用户编辑
            </router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-4">
            <router-link to="/operatorLog" tag="li">
              操作日志
            </router-link>
          </el-menu-item>
        </el-menu-item-group>

      </el-submenu>
      <el-menu-item index="2" v-show="isShow">
        <router-link to="/cameraMonitor" tag="li" >
          <i class="el-icon-location"></i>
          摄像监控
        </router-link>

      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/terminalController" tag="li">
          <i class="el-icon-setting"></i>
          终端控制
        </router-link>
      </el-menu-item>

      <el-menu-item index="4">
        <!--<span slot="title">操作日志</span>-->
        <router-link to="/operatorLog" tag="li">
          <i class="el-icon-time"></i>
          操作日志
        </router-link>
      </el-menu-item>

      <el-menu-item index="5">
        <router-link to="/runtimeStatus" tag="li">
          <i class="el-icon-bell"></i>
          系统环境
        </router-link>
      </el-menu-item>
    </el-menu>
  </el-col>

</el-row>

</template>

<script>
  export default {
    data(){
      return {
        isShow:true,
        temp:"temp msg",
        sensor_one:"true",
        sensor_two:"true",
        sensor_three:"true"
      }
    },
    /*watch: {
      sendMsg: function () {
        let str = this.sendMsg;
        this.sensor_one = str[0] == 1 ? true : false;
        this.sensor_two = str[1] == 1 ? true : false;
        this.sensor_three = str[2] == 1 ? true : false;
      }
    },*/
    props:['sendMsg'],
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    },
    created() {
      var user = sessionStorage.getItem('user');
      if (user) {
        user = JSON.parse(user);
        this.sensor_one = user.sensorOne == 1 ? true : false;
        this.sensor_two = user.sensorTwo == 1 ? true : false;
        this.sensor_three = user.sensorThree == 1 ? true : false;
      }
    }
  }
</script>

<style>

  #theTitle{
    color: #16b183;
    margin-left: 20px;
  }

</style>
