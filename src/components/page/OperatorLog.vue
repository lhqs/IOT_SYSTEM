<template>
  <div>
    <div id="breadHeader" style="aligin:right;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >用户管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/username' }">操作日志</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-table
      :data="logData"
      border
      fit
      style="width: 100%">
      <el-table-column type="index"></el-table-column>

      <el-table-column prop="operatorUser" label="操作者"></el-table-column>
      <el-table-column prop="content" label="操作内容"></el-table-column>
      <el-table-column prop="operatorTime" label="操作时间" :formatter="formatTime" sortable></el-table-column>
      <!--<el-table-column prop="updateUser" label="更新操作者"></el-table-column>
      <el-table-column prop="updateTime" label="更新时间"></el-table-column>-->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!--<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
          <!--<el-button type="text" size="small">删除</el-button>-->
          <el-button size="mini" type="danger"
                     @click="handleDelete(scope.$index, scope.row)">删除记录
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40, 50, 60, 70, 80,90,100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next"
        :total=total>
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import {operatorLog,removeOperatorLog} from "../../api/api";
  import util from '../../assets/js/utils'

  export default {
    name: "operator-log",
    data() {
      return {
        msg: "logging",
        logData: [],
        total:10,
        pageNum:1,
        pageSize:10,
        currentPage:1
      }
    },
    methods: {
      handleSizeChange(val) {
        this.pageSize = val;
        this.getOperatorLog();
      },
      handleCurrentChange(val) {
        this.pageNum = val;
        this.getOperatorLog();
      },
      handleClick(row) {
        console.log(row);
      },
      indexMethod(index) {
        return index;
      },
      formatTime: function (row, column) {
        return util.formatDate.format(new Date(row.operatorTime), 'yyyy-MM-dd hh:mm');
      },
      getOperatorLog(){
        let params = {
          pageNum : this.pageNum,
          pageSize : this.pageSize
        };
        operatorLog(params).then(res => {
          this.logData = res.data.data.list;
          this.total = res.data.data.total;
        }).catch(err => {
          console.log("err-->" + err);
        });
      },
      handleDelete:function(index, row) {
        this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          let params = {id: row.id};
          removeOperatorLog(params).then((res) => {
            if (res.data.code == 0) {
              this.$notify({
                title: '成功',
                message: '删除成功',
                type: 'success'
              });
              this.getOperatorLog();
            } else {
              this.$notify.error({
                title: '错误',
                message: '删除信息失败，请刷新后重试'
              });
            }
          }).catch(err => {
            this.$notify.error({
              title: '错误',
              message: '提交信息失败，请刷新后重试'
            });
          });
        });
      },
    },
    created() {
      this.getOperatorLog();
    }
  }
</script>

<style scoped>
  #breadHeader {
    margin-bottom: 30px;
  }
  .block{
    margin-top: 20px;
    float: right;
  }
</style>
