<template>
  <div>
    <!--面包屑-->
    <div id="breadhead" style="aligin:right;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/nodeThree' }">传感节点</el-breadcrumb-item>
        <el-breadcrumb-item>传感节点三</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div id="realflow">
      <el-row>
        <el-col :span="4">
          <div id="msgStyle">{{msg}}</div>
        </el-col>
        <el-col :span="4">
          <div class="params">土壤湿度：{{humidity}}%</div>
        </el-col>
        <el-col :span="4">
          <div class="params">土壤温度：{{ground}}℃</div>
        </el-col>
        <el-col :span="4">
          <div class="params">叶片温度：{{temperature}}℃</div>
        </el-col>
        <el-col :span="4">
          <div class="params">PH值：{{ph}}</div>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" v-on:click="updateData">刷新</el-button>
        </el-col>
      </el-row>
    </div>


    <el-row>
      <el-col :span="12">
        <div id="gaugeHumidity" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="lineHumidity" style="width:100%; height:400px;"></div>
      </el-col>

      <el-row :gutter="24">
        <el-col :span="12">
        <span class="head_setting">
            <span>提醒</span>
              <el-input-number v-model="hstart" :step="1">
              </el-input-number> ~ <el-input-number v-model="hend" :step="1"></el-input-number>
              <el-button type="info" @click="">自动模式</el-button>
              <el-button type="info" @click="">手动模式</el-button>
        </span>
        </el-col>
        <el-col :span="12">
        <span class="head_setting">
        <span>选择日期</span>
        <el-date-picker v-model="hstartTime"
          type="datetime"
          placeholder="选择起始日期时间"></el-date-picker>
         ~
        <el-date-picker v-model="hendTime" type="datetime" placeholder="选择终止日期时间"></el-date-picker>

        <span><el-button type="info" @click="hExportExcel">导出至Excel</el-button>
        </span></span></el-col>
      </el-row>
<p></p>
      <hr>
      <el-col :span="12">
        <div id="gaugeGround" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="lineGround" style="width:100%; height:400px;"></div>
      </el-col>
      <el-row :gutter="24">
        <el-col :span="12">
        <span class="head_setting">
            <span>提醒</span>
              <el-input-number v-model="gstart" :step="1">
              </el-input-number> ~ <el-input-number v-model="gend" :step="1"></el-input-number>
              <el-button type="info" @click="">自动模式</el-button>
              <el-button type="info" @click="">手动模式</el-button>
        </span>
        </el-col>
        <el-col :span="12">
        <span class="head_setting">
        <span>选择日期</span>
        <el-date-picker v-model="gstartTime"
                        type="datetime"
                        placeholder="选择起始日期时间"></el-date-picker>
         ~
        <el-date-picker v-model="gendTime" type="datetime" placeholder="选择终止日期时间"></el-date-picker>

        <span><el-button type="info" @click="gExportExcel">导出至Excel</el-button>
        </span></span></el-col>
      </el-row>
      <p></p>
      <hr>
      <el-col :span="12">
        <div id="gaugeTemperature" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="lineTemperature" style="width:100%; height:400px;"></div>
      </el-col>
      <el-row :gutter="24">
        <el-col :span="12">
        <span class="head_setting">
            <span>提醒</span>
              <el-input-number v-model="tstart" :step="1">
              </el-input-number> ~ <el-input-number v-model="tend" :step="1"></el-input-number>
              <el-button type="info" @click="">自动模式</el-button>
              <el-button type="info" @click="">手动模式</el-button>
        </span>
        </el-col>
        <el-col :span="12">
        <span class="head_setting">
        <span>选择日期</span>
        <el-date-picker v-model="tstartTime" type="datetime" placeholder="选择起始日期时间"></el-date-picker>
         ~
        <el-date-picker v-model="tendTime" type="datetime" placeholder="选择终止日期时间"></el-date-picker>

        <span><el-button type="info" @click="tExportExcel">导出至Excel</el-button>
        </span></span></el-col>
      </el-row>
      <p></p>
      <hr>
      <el-col :span="12">
        <div id="gaugePh" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="linePh" style="width:100%; height:400px;"></div>
      </el-col>

      <el-row :gutter="24">
        <el-col :span="12">
        <span class="head_setting">
            <span>提醒</span>
              <el-input-number v-model="pstart" :step="1">
              </el-input-number> ~ <el-input-number v-model="pend" :step="1"></el-input-number>
              <el-button type="info" @click="">自动模式</el-button>
              <el-button type="info" @click="">手动模式</el-button>
        </span>
        </el-col>
        <el-col :span="12">
        <span class="head_setting">
        <span>选择日期</span>
        <el-date-picker v-model="pstartTime" type="datetime" placeholder="选择起始日期时间"></el-date-picker>
         ~
        <el-date-picker v-model="pendTime" type="datetime" placeholder="选择终止日期时间"></el-date-picker>

        <span><el-button type="info" @click="pExportExcel">导出至Excel</el-button>
        </span></span></el-col>
      </el-row>
    </el-row>
    <p></p>

  </div>
</template>

<script>
  import util from '../../assets/js/utils'
  import {realData, allDataInfo} from "../../api/api";
  import { getNodeThreeDataForNum,downloadUrl,exportExcelForHumidityThree,exportExcelForGroundThree,exportExcelForTemperatureThree,exportExcelForPhThree} from "../../api/api";
  import echarts from 'echarts'

  export default {
    name: "real-data",
    data() {
      return {
        msg: '',
        sensorData: {
          ground: '',
          temperature: '',
          humidity: '',
          ph: ''
        },
        humidity: '',
        ground: '',
        temperature: '',
        ph: '',
        humiditys: [],
        grounds: [],
        temperatures: [],
        phs: [],
        lineIndex: [],
        dataFlow: [],
        datas: [],
        chartDatas: [],
        chartIndex: [],
        chartLine: '',
        lineDatas: [],

        hstart: 0,
        hend: 100,
        gstart: -44,
        gend: 44,
        tstart: -44,
        tend: 44,
        pstart: 0,
        pend: 14,

        hstartTime: '',
        hendTime: '',
        gstartTime: '',
        gendTime: '',
        tstartTime: '',
        tendTime: '',
        pstartTime: '',
        pendTime: ''


      }
    },
    watch: {
      ground: function () {
        // this.drawGaugeHumidity("gaugeHumidity");
        // this.drawGaugeGround("gaugeGround");
        // this.drawGaugeTemperature("gaugeTemperature");
        // this.drawGaugePh("gaugePh");
      }

    },
    methods: {
      hExportExcel() {
        if(this.hstartTime == '' || this.hendTime == ''){
          this.$notify({
            title: '警告',
            message: '请选择导出时间范围',
            type:'warning'
          });
        }else {
        let params = {
          startDatetime : util.formatDate.format(this.hstartTime, 'yyyy-MM-dd hh:mm:ss'),
          endDatetime :  util.formatDate.format(this.hendTime, 'yyyy-MM-dd hh:mm:ss')
        };
        exportExcelForHumidityThree(params).then( res => {
          if (res.headers && (res.headers['content-type'] === 'application/vnd.ms-excel')) {
            downloadUrl(res.request.responseURL);
            return ;
          }
        }).catch(err=>{
          console.log("export err ---> "+err);
        })
      }},
      gExportExcel() {
        if(this.gstartTime == '' || this.gendTime == ''){
          this.$notify({
            title: '警告',
            message: '请选择导出时间范围',
            type:'warning'
          });
        }else {
        let params = {
          startDatetime : util.formatDate.format(this.gstartTime, 'yyyy-MM-dd hh:mm:ss'),
          endDatetime :  util.formatDate.format(this.gendTime, 'yyyy-MM-dd hh:mm:ss')
        };
        exportExcelForGroundThree(params).then( res => {
          if (res.headers && (res.headers['content-type'] === 'application/vnd.ms-excel')) {
            downloadUrl(res.request.responseURL);
            return ;
          }
        }).catch(err=>{
          console.log("export err ---> "+err);
        })
      }},
      tExportExcel() {
        if(this.tstartTime == '' || this.tendTime == ''){
          this.$notify({
            title: '警告',
            message: '请选择导出时间范围',
            type:'warning'
          });
        }else {
        let params = {
          startDatetime : util.formatDate.format(this.tstartTime, 'yyyy-MM-dd hh:mm:ss'),
          endDatetime :  util.formatDate.format(this.tendTime, 'yyyy-MM-dd hh:mm:ss')
        };
        exportExcelForTemperatureThree(params).then( res => {
          if (res.headers && (res.headers['content-type'] === 'application/vnd.ms-excel')) {
            downloadUrl(res.request.responseURL);
            return ;
          }
        }).catch(err=>{
          console.log("export err ---> "+err);
        })
      }},
      pExportExcel() {
        if(this.pstartTime == '' || this.pendTime == ''){
          this.$notify({
            title: '警告',
            message: '请选择导出时间范围',
            type:'warning'
          });
        }else {
        let params = {
          startDatetime : util.formatDate.format(this.pstartTime, 'yyyy-MM-dd hh:mm:ss'),
          endDatetime :  util.formatDate.format(this.pendTime, 'yyyy-MM-dd hh:mm:ss')
        };
        exportExcelForPhThree(params).then( res => {
          if (res.headers && (res.headers['content-type'] === 'application/vnd.ms-excel')) {
            downloadUrl(res.request.responseURL);
            return ;
          }
        }).catch(err=>{
          console.log("export err ---> "+err);
        })
      }},
      updateData() {
        this.getRealData();
      },
      getRealData() {
        let params = {num: 1};
        getNodeThreeDataForNum(params).then(res => {
          this.msg = '当前:'+util.formatDate.format(new Date(), 'yyyy-MM-dd hh:mm:ss');
          this.humidity = res.data.data.humidity;
          this.ground = res.data.data.ground;
          this.temperature = res.data.data.temperature;
          this.ph = res.data.data.ph;
        }).catch(err => {
          console.log("node_one_data_err:" + err);
        });
      },

      drawGaugeHumidity(gaugeParms) {
        let _this = this;
        let temperatureChart = echarts.init(document.getElementById(gaugeParms));
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
              name: '当前湿度',
              type: 'gauge',
              detail: {formatter: '{value}%'},
              data: [{value: 50, name: '土壤湿度'}]
            }
          ]
        };
        option.series[0].data[0].value = _this.humidity;
        temperatureChart.setOption(option, true);
        setInterval(function () {
          option.series[0].data[0].value = _this.humidity;
          temperatureChart.setOption(option, true);
        }, 1000);
      },
      drawGaugeGround(gaugeParms) {
        let _this = this;
        let humityChart = echarts.init(document.getElementById(gaugeParms));
        let option = {
          tooltip: {
            formatter: "{a} <br/>{b} : {c}℃"
          },
          series: [
            {
              min : -44,
              max : 44,
              splitNumber:16,
              name: '当前温度',
              type: 'gauge',
              detail: {formatter: '{value}℃'},
              data: [{value: 50, name: '土壤温度'}]
            }
          ]
        };
        option.series[0].data[0].value = _this.ground;
        humityChart.setOption(option, true);
        setInterval(function () {
          option.series[0].data[0].value = _this.ground;
          humityChart.setOption(option, true);
        }, 1000);
      },
      drawGaugeTemperature(gaugeParms) {
        let _this = this;
        let humityChart = echarts.init(document.getElementById(gaugeParms));
        let option = {
          tooltip: {
            formatter: "{a} <br/>{b} : {c}℃"
          },
          series: [
            {
              min : -44,
              max : 44,
              splitNumber:16,
              name: '当前温度',
              type: 'gauge',
              detail: {formatter: '{value}℃'},
              data: [{value: 50, name: '页面温度'}]
            }
          ]
        };
        option.series[0].data[0].value = _this.temperature;
        humityChart.setOption(option, true);
        setInterval(function () {
          option.series[0].data[0].value = _this.temperature;
          humityChart.setOption(option, true);
        }, 1000);
      },
      drawGaugePh(gaugeParms) {
        let _this = this;
        let humityChart = echarts.init(document.getElementById(gaugeParms));
        let option = {
          tooltip: {
            formatter: "{a} <br/>{b} : {c}"
          },
          series: [
            {
              min:0,
              max:14,
              splitNumber:14,
              name: '当前PH值',
              type: 'gauge',
              detail: {formatter: '{value}'},
              data: [{value: 50, name: 'PH值'}]
            }
          ]
        };
        option.series[0].data[0].value = _this.ph;
        humityChart.setOption(option, true);
        setInterval(function () {
          option.series[0].data[0].value = _this.ph;
          humityChart.setOption(option, true);
        }, 1000);
      },

      drawDynamicHumidity(id) {
        let _this = this;
        let myChart = echarts.init(document.getElementById(id));
        let option = {
          title: {
            text: '动态数据',
            subtext: '土壤湿度'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56'
              }
            }
          },
          legend: {
            data: ['土壤湿度']
          },
          toolbox: {
            show: true,
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: {
            show: false,
            start: 0,
            end: 100
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: (function () {
                var now = new Date();
                var res = [];
                var len = 80;
                while (len--) {
                  res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                  now = new Date(now - 2000);
                }
                return res;
              })()
            },
            {
              type: 'category',
              boundaryGap: true,
              data: (function () {
                var res = [];
                var len = 80;
                while (len--) {
                  res.push(len + 1);
                }
                return res;
              })()
            }
          ],
          yAxis: [
            {
              type: 'value',
              scale: true,
              name: '',
              max: 100,
              min: 0,
              boundaryGap: [0.2, 0.2]
            }
          ],
          series: [
            {
              name: '土壤湿度',
              type: 'line',
              data: (function () {
                var res = [];
                var len = 0;
                while (len < 80) {
                  res.push(1.0);
                  len++;
                }
                return res;
              })()
            }
          ]
        };
        setInterval(function () {
          let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
          let data0 = option.series[0].data;
          data0.shift();
          data0.push(_this.humidity);
          option.xAxis[0].data.shift();
          option.xAxis[0].data.push(axisData);
          myChart.setOption(option);
        }, 4000);
      },
      drawDynamicGround(id) {
        let _this = this;
        let myChart = echarts.init(document.getElementById(id));
        let option = {
          title: {
            text: '动态数据',
            subtext: '土壤温度(单位：℃)'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56'
              }
            }
          },
          legend: {
            data: ['土壤温度']
          },
          toolbox: {
            show: true,
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: {
            show: false,
            start: 0,
            end: 100
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: (function () {
                var now = new Date();
                var res = [];
                var len = 80;
                while (len--) {
                  res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                  now = new Date(now - 2000);
                }
                return res;
              })()
            },
            {
              type: 'category',
              boundaryGap: true,
              data: (function () {
                var res = [];
                var len = 80;
                while (len--) {
                  res.push(len + 1);
                }
                return res;
              })()
            }
          ],
          yAxis: [
            {
              type: 'value',
              scale: true,
              name: '',
              max: 44,
              min: -44,
              boundaryGap: [0.2, 0.2]
            }
          ],
          series: [
            {
              name: '土壤温度',
              type: 'line',
              data: (function () {
                var res = [];
                var len = 0;
                while (len < 80) {
                  // res.push((Math.random()*10 + 4).toFixed(1) - 0);
                  res.push(20);
                  len++;
                }
                return res;
              })()
            }
          ]
        };
        setInterval(function () {
          let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
          let data0 = option.series[0].data;
          data0.shift();
          data0.push(_this.ground);
          option.xAxis[0].data.shift();
          option.xAxis[0].data.push(axisData);
          myChart.setOption(option);
        }, 4000);
      },
      drawDynamicTemperature(id) {
        let _this = this;
        let myChart = echarts.init(document.getElementById(id));
        let option = {
          title: {
            text: '动态数据',
            subtext: '叶片温度（单位：℃)'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56'
              }
            }
          },
          legend: {
            data: ['叶片温度']
          },
          toolbox: {
            show: true,
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: {
            show: false,
            start: 0,
            end: 100
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: (function () {
                var now = new Date();
                var res = [];
                var len = 80;
                while (len--) {
                  res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                  now = new Date(now - 2000);
                }
                return res;
              })()
            },
            {
              type: 'category',
              boundaryGap: true,
              data: (function () {
                var res = [];
                var len = 80;
                while (len--) {
                  res.push(len + 1);
                }
                return res;
              })()
            }
          ],
          yAxis: [
            {
              type: 'value',
              scale: true,
              name: '',
              max: 44,
              min: -44,
              boundaryGap: [0.2, 0.2]
            }
          ],
          series: [
            {
              name: '叶片温度',
              type: 'line',
              data: (function () {
                var res = [];
                var len = 0;
                while (len < 80) {
                  // res.push((Math.random()*10 + 4).toFixed(1) - 0);
                  res.push(20);
                  len++;
                }
                return res;
              })()
            }
          ]
        };
        setInterval(function () {
          let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
          let data0 = option.series[0].data;
          data0.shift();
          data0.push(_this.temperature);
          option.xAxis[0].data.shift();
          option.xAxis[0].data.push(axisData);
          myChart.setOption(option);
        }, 4000);
      },
      drawDynamicPh(id) {
        let _this = this;
        let myChart = echarts.init(document.getElementById(id));
        let option = {
          title: {
            text: '动态数据',
            subtext: 'PH值'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56'
              }
            }
          },
          legend: {
            data: ['PH值']
          },
          toolbox: {
            show: true,
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: {
            show: false,
            start: 0,
            end: 100
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: (function () {
                var now = new Date();
                var res = [];
                var len = 80;
                while (len--) {
                  res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                  now = new Date(now - 2000);
                }
                return res;
              })()
            },
            {
              type: 'category',
              boundaryGap: true,
              data: (function () {
                var res = [];
                var len = 80;
                while (len--) {
                  res.push(len + 1);
                }
                return res;
              })()
            }
          ],
          yAxis: [
            {
              type: 'value',
              scale: true,
              name: '',
              max: 14,
              min: 0,
              boundaryGap: [0.2, 0.2]
            }
          ],
          series: [
            {
              name: 'PH值',
              type: 'line',
              data: (function () {
                var res = [];
                var len = 0;
                while (len < 80) {
                  // res.push((Math.random()*10 + 4).toFixed(1) - 0);
                  res.push(7.0);
                  len++;
                }
                return res;
              })()
            }
          ]
        };
        setInterval(function () {
          let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
          let data0 = option.series[0].data;
          data0.shift();
          data0.push(_this.ph);
          option.xAxis[0].data.shift();
          option.xAxis[0].data.push(axisData);
          myChart.setOption(option);
        }, 4000);
      },
    },
    mounted() {
      this.getRealData();
      /*this.$nextTick(function () {
        setInterval(this.getRealData, 4000);
      })*/
    },
    created: function () {
      setTimeout(()=>{
        this.drawDynamicHumidity("lineHumidity");
        this.drawDynamicGround("lineGround");
        this.drawDynamicTemperature("lineTemperature");
        this.drawDynamicPh("linePh");

        this.drawGaugeHumidity("gaugeHumidity");
        this.drawGaugeGround("gaugeGround");
        this.drawGaugeTemperature("gaugeTemperature");
        this.drawGaugePh("gaugePh");
      },2000);
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

  .params {
    height: 40px;
    width: 500px;
    line-height: 40px;
  }

  #msgStyle {
    height: 40px;
    width: 500px;
    line-height: 40px;
  }

  .head_setting {
    text-align: center;
    margin: 60px;
  }
</style>
