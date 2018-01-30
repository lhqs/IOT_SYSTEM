<template>
  <div id="pictable">
    {{datas}}
    <br/>
    <div id="pictureShow" style="width: 1400px;height: 400px;"></div>
  </div>

</template>


<script>
  import echarts from 'echarts'
  import {baseUrl, axios} from '../../api/config'
  import {getDemoData} from '../../api/api'

  export default {
    data() {
      return {
        isloading:false,
        data: [],
        datas: []
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.drawLine('pictureShow')
      })
    },
    created() {
      this.getData();
    },
    watch: {
      // 如果'datas'发生改变，这个函数就会运行
      datas: function () {
        this.drawLine('pictureShow')
      }
    },
    methods: {
      drawLine(paramss) {
        let myChart = echarts.init(document.getElementById(paramss));
        myChart.setOption({
          title: {text: 'ECharts_test'},
          tooltip: {},
          xAxis: {
            data: ["1", "2", "3", "4", "5", "6","7", "8", "9", "10", "11", "12","13","14"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: this.datas
          }]
        });
      },
      getData() {
        getDemoData().then((res) => {
          this.datas = [];
          for (let i = 0; i < 14; i++) {
            this.datas.push(res.data.data[i].carbon);
          }
        }).catch(error => {
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped>

</style>
