<template>
  <div id="runtimeStatus">
    <div><strong>{{msg}}</strong></div><br/><hr/>

    <div><span>{{this.osname[1]}}----------------------------------</span><span>{{this.osinfo[1]}}</span></div><hr/>

    <div><span>{{this.osname[2]}}----------------------------------</span><span>{{this.osinfo[2]}}</span></div><hr/>

    <div><span>{{this.osname[3]}}----------------------------------</span><span>{{this.osinfo[3]}}</span></div><hr/>

    <div><span>{{this.osname[4]}}----------------------------------</span><span>{{this.osinfo[4]}}</span></div><hr/>
    <div><span>{{this.osname[5]}}----------------------------------</span><span>{{this.osinfo[5]}}</span></div><hr/>
    <div><span>{{this.osname[6]}}----------------------------------</span><span>{{this.osinfo[6]}}</span></div><hr/>
    <div><span>{{this.osname[7]}}----------------------------------</span><span>{{this.osinfo[7]}}</span></div><hr/>
    <div><span>{{this.osname[8]}}----------------------------------</span><span>{{this.osinfo[8]}}</span></div><hr/>
    <div><span>{{this.osname[9]}}----------------------------------</span><span>{{this.osinfo[9]}}</span></div><hr/>
    <div><span>{{this.osname[10]}}----------------------------------</span><span>{{this.osinfo[10]}}</span></div><hr/>
    <div><span>{{this.osname[11]}}----------------------------------</span><span>{{this.osinfo[11]}}</span></div><hr/>
    <div><span>{{this.osname[12]}}----------------------------------</span><span>{{this.osinfo[12]}}</span></div><hr/>
    <div><span>{{this.osname[13]}}----------------------------------</span><span>{{this.osinfo[13]}}</span></div><hr/>
    <div><span>{{this.osname[14]}}----------------------------------</span><span>{{this.osinfo[14]}}</span></div><hr/>
    <div><span>{{this.osname[15]}}----------------------------------</span><span>{{this.osinfo[15]}}</span></div><hr/>
    <div><span>{{this.osname[16]}}----------------------------------</span><span>{{this.osinfo[16]}}</span></div><hr/>
    <div><span>{{this.osname[17]}}----------------------------------</span><span>{{this.osinfo[17]}}</span></div><hr/>
    <div><span>{{this.osname[18]}}----------------------------------</span><span>{{this.osinfo[18]}}</span></div><hr/>
    <div><span>{{this.osname[19]}}----------------------------------</span><span>{{this.osinfo[19]}}</span></div><hr/>

    <div><span>{{this.osname[20]}}----------------------------------</span><span>{{this.osinfo[20]}}</span></div><hr/>
    <div><span>{{this.osname[21]}}----------------------------------</span><span>{{this.osinfo[21]}}</span></div><hr/>
    <div><span>{{this.osname[22]}}----------------------------------</span><span>{{this.osinfo[22]}}</span></div><hr/>
    <div><span>{{this.osname[23]}}----------------------------------</span><span>{{this.osinfo[23]}}</span></div><hr/>
    <div><span>{{this.osname[24]}}----------------------------------</span><span>{{this.osinfo[24]}}</span></div><hr/>
    <div><span>{{this.osname[25]}}----------------------------------</span><span>{{this.osinfo[25]}}</span></div><hr/>
    <div><span>{{this.osname[26]}}----------------------------------</span><span>{{this.osinfo[26]}}</span></div><hr/>
    <div><span>{{this.osname[27]}}----------------------------------</span><span>{{this.osinfo[27]}}</span></div><hr/>
    <div><span>{{this.osname[28]}}----------------------------------</span><span>{{this.osinfo[28]}}</span></div><hr/>
    <div><span>{{this.osname[29]}}----------------------------------</span><span>{{this.osinfo[29]}}</span></div><hr/>

    <div><span>{{this.osname[30]}}----------------------------------</span><span>{{this.osinfo[30]}}</span></div><hr/>
    <div><span>{{this.osname[31]}}----------------------------------</span><span>{{this.osinfo[31]}}</span></div><hr/>
    <div><span>{{this.osname[32]}}----------------------------------</span><span>{{this.osinfo[32]}}</span></div><hr/>
    <div><span>{{this.osname[33]}}----------------------------------</span><span>{{this.osinfo[33]}}</span></div><hr/>
    <div><span>{{this.osname[34]}}----------------------------------</span><span>{{this.osinfo[34]}}</span></div><hr/>
    <div><span>{{this.osname[35]}}----------------------------------</span><span>{{this.osinfo[35]}}</span></div><hr/>

  </div>
</template>

<script>

  import {runtimeStatus,runtimeStatusList} from '../../api/api'

  export default {
    name: "runtime-status",
    data() {
      return {
        msg: '系统属性',
        index:'',
        /*datas:[{
          sysAttr: '',
          sysInfo: '',
        }],*/
        osname:[],
        osinfo:[]
      }
    },
    methods: {},
    mounted() {
      runtimeStatus().then((res) => {
        if (res.data.code == 0) {
          let tempArr = [];
          let tempArr1 = [];
          for( let i in res.data.data) {
            // console.info( i+"----"+res.data.data[i]);
            tempArr.push(i);
            tempArr1.push(res.data.data[i]);
          }
          this.osname = tempArr;
          this.osinfo = tempArr1;
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }
</script>

<style scoped>

</style>
