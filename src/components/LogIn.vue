<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title">物联网系统平台登录</h3>
      <br />
      <el-form-item prop="username">
        <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="请输入账号">
          <template slot="prepend">帐号</template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请输入密码">
          <template slot="prepend">密码</template>
        </el-input>
      </el-form-item>
      <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  import { userLogin } from '../api/api';

  export default {
    data() {
      return {
        logining: false,
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ]
        },
        checked: true
      };
    },
    methods: {
      handleSubmit() {
        var _this = this;
        this.logining = true;
        var loginParams = {username: this.ruleForm.username, password: this.ruleForm.password};
        userLogin(loginParams).then(response => {
          this.logining = false;
          let user = response.data.data;
          let code = response.data.code;
          if (code != 0) {
            this.$message({
              message: '账号或密码有误',
              type: 'error'
            });
          } else {
            console.log("res---", response);
            sessionStorage.setItem('user', JSON.stringify(user));
            this.$router.push({path: response.data.data.homeDir});
          }
        })
      }
    }
  }
</script>

<style  scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
