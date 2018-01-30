<template>
  <div id="cookieTest">
    <button id="btn1" @click="setCookie('lhqs','guxin',1)">setCookie</button>
    <button id="btn2" @click="getCookie('lhqs')">getCookie</button>
    <button id="btn3" @click="checkCookie">checkCookie</button>
    <button id="btn4" @click="clearCookie">clearCookie</button>
  </div>

</template>

<script>
    export default {
      name: "cookie-test",
      data() {
          return {
            msg:''
          }
      },
      methods:{
        //设置cookie
        setCookie: function (cname, cvalue, exdays) {
          var d = new Date();
          d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
          var expires = "expires=" + d.toUTCString();
          console.info(cname + "=" + cvalue + "; " + expires);
          document.cookie = cname + "=" + cvalue + "; " + expires;
          console.info(document.cookie);
        },
        //获取cookie
        getCookie: function (cname) {
          var name = cname + "=";
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) != -1) {
              alert(c.substring(name.length, c.length));
              return c.substring(name.length, c.length);
            }
            }
          return "";
        },
        //清除cookie
        clearCookie: function () {
          this.setCookie("lhqs", "", -1);

        },
        checkCookie: function () {
          var user = this.getCookie("username");
          if (user != "") {
            alert("Welcome again " + user);
          } else {
            user = prompt("Please enter your name:", "");
            if (user != "" && user != null) {
              this.setCookie("username", user, 365);
            }
          }
        }
      }
    }
</script>

<style scoped>

</style>
