<template>
    <div>
<div> <h3>导出节点数据</h3></div>
      <p></p>
        <div class="head_setting">
        <span>节点一:选择日期</span>
        <el-date-picker v-model="onestartTime"
                        type="datetime"
                        placeholder="选择起始日期时间"></el-date-picker>
         ~
        <el-date-picker v-model="oneendTime" type="datetime" placeholder="选择终止日期时间"></el-date-picker>

        <span><el-button type="info" @click="oneExportExcel">导出至Excel</el-button>
        </span></div>


<p></p>

        <div class="head_setting">
        <span>节点二:选择日期</span>
        <el-date-picker v-model="twostartTime"
                        type="datetime"
                        placeholder="选择起始日期时间"></el-date-picker>
         ~
        <el-date-picker v-model="twoendTime" type="datetime" placeholder="选择终止日期时间"></el-date-picker>

        <span><el-button type="info" @click="twoExportExcel">导出至Excel</el-button>
        </span></div>
<p></p>


        <div class="head_setting">
        <span>节点三:选择日期</span>
        <el-date-picker v-model="threestartTime"
                        type="datetime"
                        placeholder="选择起始日期时间"></el-date-picker>
         ~
        <el-date-picker v-model="threeendTime" type="datetime" placeholder="选择终止日期时间"></el-date-picker>

        <span><el-button type="info" @click="threeExportExcel">导出至Excel</el-button>
        </span></div>
    </div>
</template>

<script>
  import util from '../../assets/js/utils'
  import {downloadUrl,exportExcelForPartOne,exportExcelForPartTwo,exportExcelForPartThree} from "../../api/api";

    export default {
        name: "export-nodedata",
      data() {
          return {
            msg:'',
            onestartTime:'',
            oneendTime:'',
            twostartTime:'',
            twoendTime:'',
            threestartTime:'',
            threeendTime:''
          }
      },
      methods : {
        oneExportExcel(){
          if(this.hstartTime == '' || this.hendTime == ''){
            this.$notify({
              title: '警告',
              message: '请选择导出时间范围',
              type:'warning'
            });
          }else {
            let params = {
              startDatetime : util.formatDate.format(this.onestartTime, 'yyyy-MM-dd hh:mm:ss'),
              endDatetime :  util.formatDate.format(this.oneendTime, 'yyyy-MM-dd hh:mm:ss')
            };
            exportExcelForPartOne(params).then( res => {
              if (res.headers && (res.headers['content-type'] === 'application/vnd.ms-excel')) {
                downloadUrl(res.request.responseURL);
                return ;
              }
            }).catch(err=>{
              console.log("export err ---> "+err);
            })
          }},
        twoExportExcel(){
          if(this.hstartTime == '' || this.hendTime == ''){
            this.$notify({
              title: '警告',
              message: '请选择导出时间范围',
              type:'warning'
            });
          }else {
            let params = {
              startDatetime : util.formatDate.format(this.twostartTime, 'yyyy-MM-dd hh:mm:ss'),
              endDatetime :  util.formatDate.format(this.twoendTime, 'yyyy-MM-dd hh:mm:ss')
            };
            exportExcelForPartTwo(params).then( res => {
              if (res.headers && (res.headers['content-type'] === 'application/vnd.ms-excel')) {
                downloadUrl(res.request.responseURL);
                return ;
              }
            }).catch(err=>{
              console.log("export err ---> "+err);
            })
          }},
        threeExportExcel(){
          if(this.hstartTime == '' || this.hendTime == ''){
            this.$notify({
              title: '警告',
              message: '请选择导出时间范围',
              type:'warning'
            });
          }else {
            let params = {
              startDatetime : util.formatDate.format(this.threestartTime, 'yyyy-MM-dd hh:mm:ss'),
              endDatetime :  util.formatDate.format(this.threeendTime, 'yyyy-MM-dd hh:mm:ss')
            };
            exportExcelForPartThree(params).then( res => {
              if (res.headers && (res.headers['content-type'] === 'application/vnd.ms-excel')) {
                downloadUrl(res.request.responseURL);
                return ;
              }
            }).catch(err=>{
              console.log("export err ---> "+err);
            })
          }},
      }
    }
</script>

<style scoped>

  .head_setting {


  }

</style>
