<template>
  <div>
    <!--面包屑-->
    <div id="breadhead" style="aligin:right;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/sensorOne' }">传感节点</el-breadcrumb-item>
        <el-breadcrumb-item>传感节点一</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div id="realflow">
      <el-row>
        <el-col :span="4">
          <div id="msgStyle">{{msg}}</div>
        </el-col>
        <el-col :span="4">
          <div id="oneStyle1">湿度：{{sensorData.humidity}}</div>
        </el-col>
        <el-col :span="6">
          <div id="oneStyle">温度：{{sensorData.temperature}}</div>
        </el-col>
        <el-col :span="8">
          <el-button type="primary" v-on:click="updateData">刷新</el-button>
        </el-col>
      </el-row>
    </div>

    <el-row>
      <el-col :span="12">
        <div id="mygauge" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="mygauge1" style="width:100%; height:400px;"></div>
      </el-col>
    </el-row>

    <div id="longStorm">
      过去一段时间内的变化
    </div>
    <el-row>
      <el-col :span="24">
        <div id="lastChartPic" style="width:100%; height:400px;"></div>
      </el-col>

    </el-row>

    <div id="historyStorm">
      历史数据看板
    </div>
    <el-row>
      <el-col :span="12">
        <div id="chartLine" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="chartLine1" style="width:100%; height:400px;"></div>
      </el-col>
    </el-row>

    <!--<div id="pictureOne" style="width: 1400px;height: 400px;"></div>-->
    <!--<button @click="getDataFlow">click me for getDataFlow</button>-->
    <!--<hr/>
    <div>{{dataFlow}}</div>
    <hr />
    <div>{{datas}}</div>
    <div id="one">{{chartDatas}}</div>
    <div id="two">{{chartIndex}}</div>
    <hr/>
    <div id="three">{{lineDatas}}</div>-->

    <!--<el-row>
      <el-col :span="12">
        <div id="chartLine" style="width:100%; height:400px;"></div>
      </el-col>
    </el-row>-->

    <button id="button" @click="exportExcel">export for excel</button>

  </div>
</template>

<script>
  import {realData, allDataInfo} from "../../api/api";
  import {exportDataForExcel,downloadUrl} from "../../api/api";
  import echarts from 'echarts'

  export default {
    name: "real-data",
    data() {
      return {
        msg: '当前数据',
        sensorData: '',
        dataFlow: [],
        datas: [],
        chartDatas: [],
        chartIndex: [],

        chartLine: '',
        lineDatas: []
      }
    },
    watch: {
      chartDatas: function () {
        this.lastCharts("lastChartPic");

      }
    },
    methods: {
      exportExcel(){
        exportDataForExcel().then( res => {
            if (res.headers && (res.headers['content-type'] === 'application/vnd.ms-excel')) {
              downloadUrl(res.request.responseURL);
              return ;
            }
        }).catch(err=>{
          console.log("export err ---> "+err);
        })
      },


      getDataFlow() {
        allDataInfo().then(res => {
          this.dataFlow = res.data.message;
          let resData = res.data.data;
          /*for(let index in resData){
            this.chartIndex.push(index);
            this.datas.push(resData[index].carbon);
          }*/
          for (let index = 0; index < resData.length; index++) {
            this.chartIndex.push(index);
            this.chartDatas.push(resData[index].carbon);
          }
          for (let index = 0; index < 7; index++) {
            // this.lineDatas.push(index);
            this.lineDatas.push(resData[index].carbon * 100);
          }
        }).catch(err => {
          console.log("err===>" + err);
        });
      },
      updateData() {
        this.getRealData();
      },
      getRealData() {
        realData().then(res => {
          console.log("data-->" + res);
          this.sensorData = res.data.data;
        }).catch(err => {
          console.log(err);
        });
      },
      drawGaugeLight(temperature) {
        let temperatureChart = echarts.init(document.getElementById(temperature));
        let option = {
          tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
          },
          /*toolbox: {
            feature: {
              restore: {},
              saveAsImage: {}
            }
          },*/
          series: [
            {
              name: '当前温度',
              type: 'gauge',
              detail: {formatter: '{value}%'},
              data: [{value: 50, name: '当前温度'}]
            }
          ]
        };
        setInterval(function () {
          option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
          temperatureChart.setOption(option, true);
        }, 4000);

      },
      drawGaugeRight(humity) {
        let humityChart = echarts.init(document.getElementById(humity));
        let option = {
          tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              name: '当前湿度',
              type: 'gauge',
              detail: {formatter: '{value}%'},
              data: [{value: 50, name: '当前湿度'}]
            }
          ]
        };
        setInterval(function () {
          option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
          humityChart.setOption(option, true);
        }, 4000);
      },

      lastCharts(id) {
        let myChart = echarts.init(document.getElementById(id));
        // myChart.showLoading();
        let option = {
          /*title: {
            text: '',
            subtext: '数据来自传感器'
          },*/
          tooltip: {},
          legend: {
            data: ['二氧化碳浓度']
          },
          xAxis: {
            data: this.chartIndex
          },
          yAxis: {},
          series: [{
            name: '二氧化碳浓度',
            type: 'bar',
            data: this.chartDatas
          }]
        };
        // myChart.hideLoading();
        myChart.setOption(option);
      },
      drawLineChart(id) {
        this.chartLine = echarts.init(document.getElementById(id));
        this.chartLine.setOption({
          title: {
            text: 'Line Chart'
          },
          tooltip: {
            trigger: 'axis'
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          legend: {
            data: ['邮件营销', '联盟广告', '搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: this.lineDatas
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        });
      },
    },
    mounted() {
      this.getRealData();
      this.getDataFlow();
      this.lastCharts("lastChartPic");
      // this.drawLineChart();
      this.drawGaugeLight("mygauge");
      this.drawGaugeRight("mygauge1");
      this.drawLineChart("chartLine");
      this.drawLineChart("chartLine1");
    },
    updated: function () {

    }

  }
</script>

<style scoped>
  #breadhead {
    margin: 20px;
    margin-left: 0px;
    margin-top: 0px;
    font-size: 18px;
    aligin: right;
  }

  #realflow {
    margin: 0px;
    margin-left: 0px;
    background: #d1dbe5;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 20px;
    padding-left: 20px;
  }

  #oneStyle {
    height: 40px;
    width: 500px;
    line-height: 40px;
  }

  #oneStyle1 {
    height: 40px;
    width: 500px;
    line-height: 40px;
  }

  #msgStyle {
    height: 40px;
    width: 500px;
    line-height: 40px;
  }

  #historyStorm, #longStorm {
    background: #d1dbe5;
    height: 40px;
    line-height: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 20px;
    padding-left: 20px;
  }
</style>
