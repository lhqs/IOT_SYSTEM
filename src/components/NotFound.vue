<template class="all">
  <body>
    <div id="all">

      <div class="top-bar-agile">
        <div class="logo-agileits">
          <router-link to="/"><img src="../assets/picture/logo.png" alt="error " /></router-link>
        </div>
        <div class="nav-agileinfo">
          <ul>
            <li><router-link to="/operatorLog">初始页</router-link></li>
            <li><router-link to="/login">登录</router-link></li>
            <!--<li><a href="#">提交反馈</a></li>-->
            <!--<li><router-link to="">退出</router-link></li>-->
          </ul>
        </div>
        <div class="clear"></div>
      </div>
      <div class="content-w3">
        <h1>404</h1>
        <h2>Something went wrong</h2>
        <p>当你看到这个页面时， 说明你的访问路径有误，或者说是你的访问路径不可用</p>
      </div>
      <div class="footer-w3ls">
        <p> &copy; 2018 error page ! .  All Rights Reserved  |  Design by 东北农业大学 - 物联网工程系 </p>
      </div>
    </div>
  </body>
</template>

<script>
    export default {
        name: "not-found"
    }
</script>

<style scoped>


  /* reset */
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,nav ul,nav li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}
  article, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}
  ol,ul{list-style:none;margin:0px;padding:0px;}
  blockquote,q{quotes:none;}
  blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}
  table{border-collapse:collapse;border-spacing:0;}
  a{text-decoration:none;}
  .txt-rt{text-align:right;}
  .txt-lt{text-align:left;}
  .txt-center{text-align:center;}
  .float-rt{float:right;}
  .float-lt{float:left;}
  .clear{clear:both;}
  .pos-relative{position:relative;}
  .pos-absolute{position:absolute;}
  .vertical-base{	vertical-align:baseline;}
  .vertical-top{	vertical-align:top;}
  nav.vertical ul li{	display:block;}
  nav.horizontal ul li{	display: inline-block;}
  img{max-width:100%;}
  /*end reset*/
  .allq {
    margin:0px;
    display: block;
    padding:0px;
  }
  body #all{
    background: url(../assets/picture/contentbg.jpg) no-repeat 0px 0px;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    font-family: 'Open Sans', sans-serif;
    margin:0px;
    display: block;
    padding:0px;
  }
  .top-bar-agile{
    width: 62%;
    margin:0 auto;
    padding:40px 0;
  }
  .logo-agileits{
    width:20%;
    float:left;
  }
  .logo-agileits img {
    width: 25%;
  }
  .nav-agileinfo{
    width:80%;
    float:right;
    text-align:right;
  }
  .nav-agileinfo ul li{
    display:inline;
  }
  .nav-agileinfo ul li a {
    display: inline-block;
    color: #fff;
    font-size: 18px;
    padding: 16px 15px;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .nav-agileinfo ul li a:hover{
    color:#71c1ff;
  }
  .content-w3{
    background: url(../assets/picture/bg.jpg) no-repeat 0px -89px;
    background-size: cover;
    width: 62%;
    margin: 0 auto;
    min-height: 511px;
  }
  .content-w3 h1 {
    font-size: 200px;
    letter-spacing: 5px;
    text-align: center;
    font-weight: 700;
    color: #fff;
    font-family: 'Ravi Prakash', cursive;
    text-shadow:9px 9px 3px hsl(206, 15%, 40%);
  }
  .content-w3 h2{
    font-size:30px;
    letter-spacing:3px;
    text-align:center;
    color:#fff;
  }
  .content-w3 p {
    color: #fff;
    font-size: 16px;
    text-align: center;
    width: 50%;
    margin: 60px auto 0 auto;
    line-height: 30px;
  }
  .footer-w3ls p {
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
    margin:30px 0px 20px 0;
  }
  .footer-w3ls p a{
    color:#fff;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .footer-w3ls p a:hover{
    text-decoration:underline;
  }
  @media(max-width:1366px){
    .content-w3 h1 {
      font-size: 175px;
    }
    .content-w3 p {
      margin: 40px auto 0 auto;
    }
  }
  @media(max-width:1080px){
    .content-w3 {
      background: url(../assets/picture/bg.jpg) no-repeat -94px -71px;
    }
    .content-w3 {
      min-height: 563px;
    }
    .content-w3 p {
      width: 65%;
    }
  }
  @media(max-width:1024px){
    .top-bar-agile {
      width: 71%;
    }
    .content-w3 {
      width: 71%;
      min-height: 454px;
    }
  }
  @media(max-width:768px){
    .content-w3 {
      background: url(../assets/picture/bg.jpg) no-repeat -193px -80px;
    }
    .content-w3 p {
      width: 75%;
    }
  }
  @media(max-width:736px){
    .top-bar-agile {
      padding: 25px 0;
    }
    .logo-agileits img {
      width: 36%;
    }
    .logo-agileits {
      margin-top:10px;
    }
    .content-w3 p {
      width: 82%;
    }
  }
  @media(max-width:667px){
    .content-w3 {
      background: url(../assets/picture/bg.jpg) no-repeat -242px -86px;
    }
    .content-w3 p {
      width: 90%;
    }
  }
  @media(max-width:600px){
    .content-w3 {
      background: url(../assets/picture/bg.jpg) no-repeat -263px -86px;
    }
    .nav-agileinfo ul li a {
      font-size: 16px;
      padding: 16px 12px;
    }
    .content-w3 h1 {
      font-size: 160px;
    }
    .content-w3 p {
      width: 92%;
      font-size:15px;
    }
  }
  @media(max-width:568px){
    .content-w3 h2 {
      font-size: 28px;
    }
  }

  @media(max-width:480px){
    .logo-agileits img {
      width: 44%;
    }
    .nav-agileinfo ul li a {
      font-size: 15px;
      padding: 16px 9px;
    }
    .content-w3 {
      background: url(../assets/picture/bg.jpg) no-repeat -293px -86px;
    }
    .content-w3 h1 {
      font-size: 150px;
    }
    .content-w3 h2 {
      font-size: 24px;
      letter-spacing: 2px;
    }
    .footer-w3ls p {
      color: #fff;
      font-size: 14px;
      width:90%;
      margin:20px auto;
    }
  }
  @media(max-width:414px){
    .top-bar-agile {
      width: 80%;
    }
    .logo-agileits img {
      width: 48%;
    }
    .nav-agileinfo ul li a {
      font-size: 15px;
      padding: 16px 7px;
    }
    .content-w3 {
      width: 80%;
      min-height:425px;
    }
    .content-w3 h1 {
      font-size: 140px;
    }
    .content-w3 h2 {
      font-size: 22px;

    }
  }
  @media(max-width:384px){
    .nav-agileinfo ul li a {
      font-size: 14px;
      padding: 16px 6px;
    }
    .top-bar-agile {
      width: 85%;
    }
    .content-w3 {
      width: 85%;
    }
    .content-w3 h2 {
      font-size: 20px;
    }
    .content-w3 p {
      width: 100%;
      font-size: 14px;
    }
  }
  @media(max-width:320px){
    .top-bar-agile {
      padding:15px 0;
    }
    .nav-agileinfo ul li a {
      font-size: 13px;
      padding: 16px 4px;
    }
    .content-w3 {
      background: url(../assets/picture/bg.jpg) no-repeat -333px -86px;
    }
    .content-w3 h1 {
      font-size: 135px;
    }
    .content-w3 h2 {
      font-size: 18px;
    }
  }

</style>
