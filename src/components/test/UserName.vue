<template>
  <div id="username">

    <div id="one">用户管理:</div>
    <br/>
    <div id="login">
      <el-input v-model="username" placeholder="请输入你的登陆账号"></el-input>
      <el-input v-model="password" type="password" placeholder="请输入你的登陆密码"></el-input>
      <el-button type="primary" @click="login1">登陆</el-button>
    </div>
    <br/>
    <div id="logout">
      <el-button type="success" @click="logout1()">退出</el-button>
    </div>
    <br/>
    <div id="testone" v-if="isLoading"> {{datas}}</div>
    <br/>
    <input/>
    <br/>
    <el-button type="button" @click="inteperTest">拦截器test</el-button>
  </div>
</template>
<script>
  import {login, logout, userLogin} from "../../api/api";
  import {getDemoData} from '../../api/api'

  export default {
    data() {
      return {
        username: '',
        password: '',
        datas: [1, 2, 3],
        isLoading: false
      }
    },
    mounted() {
      this.changeData();
    },
    methods: {
      inteperTest() {
        getDemoData().then((res) => {
          console.log(res);
        }).catch(err => {
          console.log(err + "===");
        });
      },
      login1() {
        this.setStatus();
        let param = {
          username: this.username,
          password: this.password
        };
        userLogin(param).then((res) => {
          console.log("response--->" + res);
          this.$message({
            type: 'info',
            message: '登录成功'
          });
        }).catch((err) => {
          console.log("err-->" + err);
          this.$message({
            type: 'error',
            message: "登录失败，失败原因：" + err
          });
        });
      },
      logout1() {
        this.setCookie(name, "", "", "/", "", "");
        console.log('logout', this.msg);
      },
      watch: {
        ques: function () {
          this.isLoading = ture;
        }
      },
      changeData() {
        let that = this;
        getDemoData().then((res) => {
          let temp = [];
          for (let i = 0; i < 3; i++) {
            temp[i] = (res.data.data[i].carbon);
          }
          this.datas = temp;
          this.isLoading = true;
        }).catch(error => {
          console.log(error);
        });
      },
      setCookie(name, value, expires, path, domain, secure) {
        var today = new Date();
        var expiry = new Date(today.getTime() + 100000 * 24 * 60 * 60 * 1000);
        if (expires == '' || expires == null) {
          expires = expiry;
        }
        var curCookie = name + "=" + escape(value) +
          ((expires) ? "; expires=" + expires.toGMTString() : "") +
          ((path) ? "; path=" + path : "") +
          ((domain) ? "; domain=" + domain : "") +
          ((secure) ? "; secure" : "");
        document.cookie = curCookie;
      },
      setStatus() {
        console.log("starting");
        con.$emit("changeStatus", "lhqs");
      }
    },
  }
</script>

<style scoped>

</style>
