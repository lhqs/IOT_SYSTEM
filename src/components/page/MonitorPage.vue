<template>
    <div id="monitorHead">
      <video id="myPlayer" poster="http://open.ys7.com/asdf.jpg" controls playsInline webkit-playsinline autoplay >
        <source src="rtmp://rtmp.open.ys7.com/openlive/45279cdf900d48d38609d6b619a8bdb8" type="rtmp/flv" />
        <source src="http://hls.open.ys7.com/openlive/45279cdf900d48d38609d6b619a8bdb8.m3u8" type="application/x-mpegURL" />
      </video>
    </div>
</template>

<script>
  import '../../assets/js/ezuikit'
    export default {
      name: "monitor-page",
      data() {
          return {
            msg:''
          }
      },
      methods:{

      },
      mounted() {
        let player = new EZUIPlayer('myPlayer');
        //    player.on('error', function(){
        //        console.log('error');
        //    });
        //    player.on('play', function(){
        //        console.log('play');
        //    });
        //    player.on('pause', function(){
        //        console.log('pause');
        //    });
        //    player.on('waiting', function(){
        //        console.log('waiting');
        //    });
        // 日志
        // player.on('log', log);
        //
        // function log(str){
        //   var div = document.createElement('DIV');
        //   div.innerHTML = (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') + JSON.stringify(str);
        //   document.body.appendChild(div);
        // }

      }
    }
</script>

<style scoped>

  #myPlayer {
    height: 100%;
    width: 100%;
  }

  #monitorHead{

  }



</style>
