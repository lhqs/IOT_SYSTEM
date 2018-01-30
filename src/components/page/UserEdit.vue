<template>
  <div id="userEdit">
    <!--面包屑-->
    <div id="breadhead" style="aligin:right;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/username' }">用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户编辑</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <section>
      <!--工具条-->
      <div id="backsetting">
      <div id="conHeader" >
        <el-row>
        <el-col :span="10">
        <el-input v-model="searchByName.username" placeholder="请输入用户名进行查询"></el-input>
        </el-col>
        <el-col :span="1">&nbsp;</el-col>
        <el-col :span="11"><el-button type="primary" v-on:click="searchUsers">查询</el-button></el-col>
        <el-button type="primary" @click="addUsername">新增用户</el-button>
        </el-row>
      </div>
      </div>

      <!--列表-->
      <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange"
                style="width: 100%;">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="index" width="60">
        </el-table-column>
        <el-table-column prop="username" label="姓名" width="130" sortable>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="100" :formatter="formatStatus" sortable>
        </el-table-column>
        <el-table-column prop="mobilePhone" label="电话" width="120" sortable>
        </el-table-column>
        <el-table-column prop="sensorOne" label="节点一" width="110" sortable>
        </el-table-column>
        <el-table-column prop="sensorTwo" label="节点二" width="110" sortable>
        </el-table-column>
        <el-table-column prop="sensorThree" label="节点三" width="110" sortable>
        </el-table-column>
        <el-table-column prop="createName" label="创建人" min-width="80" sortable>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" min-width="100" :formatter="formatTime" sortable>
        </el-table-column>
        <!--<el-table-column prop="updateName" label="更新人" min-width="80" sortable>
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" min-width="100" :formatter="formatUpdateTime" sortable>
        </el-table-column>-->
        <el-table-column prop="imageUrl" label="企业logo" min-width="140" sortable>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button size="mini" type="info"
                       @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button size="mini" type="danger"
                       @click="handleDelete(scope.$index, scope.row)">删除
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
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next"
          :total=total>
        </el-pagination>
      </div>

      <!--用户编辑界面-->
      <el-dialog title="用户编辑" :visible.sync="editUserVisible" :close-on-click-modal="false">
        <el-form :model="editForm" label-width="80px" :rules="addFormRules" ref="editForm">
          <el-form-item label="姓名" prop="username">
            <el-input v-model="editForm.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-radio-group v-model="editForm.status">
              <el-radio class="radio" :label="1">激活</el-radio>
              <el-radio class="radio" :label="0">失效</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="editForm.password"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="editForm.mobilePhone"></el-input>
          </el-form-item>
          <!--<el-form-item label="权限分配">
            <el-checkbox-group v-model="editForm.sensorses">
              <el-checkbox label="传感器节点一" name="sensorses"></el-checkbox>
              <el-checkbox label="传感器节点二" name="sensorses"></el-checkbox>
              <el-checkbox label="传感器节点三" name="sensorses"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>-->
          <el-form-item label="节点一">
            <el-radio-group v-model="editForm.sensorOne">
              <el-radio class="radio" :label="1">可视</el-radio>
              <el-radio class="radio" :label="0">非可视</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="节点二">
            <el-radio-group v-model="editForm.sensorTwo">
              <el-radio class="radio" :label="1">可视</el-radio>
              <el-radio class="radio" :label="0">非可视</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="节点三">
            <el-radio-group v-model="editForm.sensorThree">
              <el-radio class="radio" :label="1">可视</el-radio>
              <el-radio class="radio" :label="0">非可视</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="更新日期">
            <el-date-picker type="datetime" placeholder="选择日期" v-model="editForm.updateTime"></el-date-picker>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editUserVisible = false">取 消</el-button>
          <el-button type="primary" @click="editSubmit">确 定</el-button>
        </div>
      </el-dialog>

      <!--新增用户-->
      <el-dialog title="新增用户" :visible.sync="addUserVisible" :close-on-click-modal="false">
        <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
          <el-form-item label="用户">
            <el-input v-model="addForm.username"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-radio-group v-model="addForm.status">
              <el-radio class="radio" :label="1">激活</el-radio>
              <el-radio class="radio" :label="0">失效</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="登陆密码">
            <el-input type="password" v-model="addForm.password"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="addForm.mobilePhone"></el-input>
          </el-form-item>
          <el-form-item label="家目录">
            <el-radio v-model="addForm.homeDir" label="orgNodeOne" border size="medium">nodeOne</el-radio>
            <el-radio v-model="addForm.homeDir" label="orgNodeTwo" border size="medium">nodeTwo</el-radio>
            <el-radio v-model="addForm.homeDir" label="orgNodeThree" border size="medium">nodeThree</el-radio>
          </el-form-item>
          <el-form-item label="企业名称">
            <el-input v-model="addForm.orgName"></el-input>
          </el-form-item>
          <el-form-item label="企业logo">
            <el-upload
              class="upload-demo"
              ref="upload"
              action=""
              :on-change="handleChange"
              :on-remove="handleRemove"
              :before-upload="beforeUpload"
              :file-list="fileList"
              :limit="1"
              :auto-upload="false"
              :multiple="false">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
              <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>-->
            </el-upload>

          </el-form-item>
          <el-form-item label="创建时间">
            <el-date-picker type="datetime" placeholder="选择日期" v-model="addForm.createTime"></el-date-picker>
          </el-form-item>
          <el-form-item label="权限分配">
            <el-checkbox-group v-model="addForm.sensors">
              <el-checkbox label="传感器节点一" name="sensors"></el-checkbox>
              <el-checkbox label="传感器节点二" name="sensors"></el-checkbox>
              <el-checkbox label="传感器节点三" name="sensors"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="addUserVisible = false">取消</el-button>
          <el-button type="primary" @click.native="addFormSubmit" :loading="addLoading">提交</el-button>
        </div>
      </el-dialog>
    </section>
</div>
</template>>


<script>
  import util from '../../assets/js/utils'
  import {allUserInfo, addUserInfo, removeUserInfo, editUserInfo, searchUserList,uploadLogeUrl} from "../../api/api"

  export default {
    name: "user-edit",
    data() {
      return {
        msg: "user_edit",
        searchByName: {
          username: ''
        },
        users: [],
        sels: [],//列表选中列
        uploadUrl:uploadLogeUrl,
        fileList: [],

        listLoading: false,
        editUserVisible: false,  // 编辑界面是否可视化
        editForm: {              // 编辑界面数据
          id: 0,
          authId:'',
          sensorses: [],
          username: '',
          status: 1,
          homeDir:'',
          orgName:'',
          mobilePhone: '',
          password: '',
          sensorOne: '0',
          sensorTwo: '0',
          sensorThre: '0',
          createTime:'',
          updateTime: ''
        },
        addFormRules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'}
          ]
        },
        currentPage: 1,
        pageNum:'',
        pageSize:'',
        total:90,
        addLoading: false,
        addUserVisible: false,     // 添加界面是否可视化
        addForm: {                 // 新增界面数据
          id: 0,
          sensors: [],
          authId:'',
          username: '',
          status: 1,
          homeDir:'',
          orgName:'',
          mobilePhone: '',
          password: '',
          sensorOne: '0',
          sensorTwo: '0',
          sensorThre: '0',
          createTime:'',
          updateTime: '',
          imageUrl:''

        }
      }
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleChange(){},
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      beforeUpload: function (file) {
        let fileData = new FormData();
        fileData.append('file', file);
        uploadLogeUrl(fileData).then((res) => {
          console.log("reso-->",res);
          this.addForm.imageUrl = res.data.data;
        }).catch(err=>{
          console.log(err)
        });
      },
      formatStatus: function (row, column) {
        return row.status == 1 ? '激活' : row.status == 0 ? '失效' : '未知';
      },
      formatTime: function (row, column) {
        return util.formatDate.format(new Date(row.createTime), 'yyyy-MM-dd hh:mm');
      },
      formatUpdateTime: function (row, column) {
        return util.formatDate.format(new Date(row.updateTime), 'yyyy-MM-dd hh:mm');
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.getUsers();
      },
      handleCurrentChange(val) {
        this.pageNum = val;
        this.getUsers();
      },
      //获取用户列表
      getUsers() {
        let params = {
          pageNum : this.pageNum,
          pageSize : this.pageSize
        };
        allUserInfo(params).then(res => {
          this.users = res.data.data.list;
          this.total = res.data.data.total;
        }).catch(err => {
          console.log("err===>" , err);
        })
      },
      // 查询用户
      searchUsers() {
        let params = {
          username: this.searchByName.username
        };
        this.listLoading = true;
        searchUserList(params).then((res) => {
          this.users = res.data.data;
          this.listLoading = false;
        });
      },
      selsChange: function (sels) {
        this.sels = sels;
      },
      //显示编辑界面
      handleEdit: function (index, row) {
        this.editUserVisible = true;
        let sensor = this.editForm.sensorses = [];
        this.editForm = Object.assign({}, row,sensor) ;
      },
      editSubmit:function () {
        this.$confirm('确认提交修改吗？', '提示', {}).then(() => {
          let params = Object.assign({}, this.editForm);
          /*for (let index in params.sensors) {
            if (params.sensors[index] == "传感器节点一") {
              params.sensorOne = '1';
            } else if (params.sensors[index] == "传感器节点二") {
              params.sensorTwo = '1';
            } else if (params.sensors[index] == "传感器节点三") {
              params.sensorThree = '1';
            }
          }*/
          editUserInfo(params).then((res) => {
            if(res.data.code == 0){
              this.$notify({
                title: '成功',
                message: '提交修改信息成功',
                type: 'success'
              });
              this.$refs['editForm'].resetFields();
              this.editUserVisible = false;
              this.getUsers();
            }else{
              this.$notify.error({
                title: '错误',
                message: '提交修改信息失败，请刷新后重试'
              });
            }
          }).catch(err=>{
            this.$notify.error({
              title: '错误',
              message: '提交修改信息失败'
            });
          });
        });
      },
      handleDelete:function(index, row) {
        this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          let params = {authId: row.authId,username:row.username};
          removeUserInfo(params).then((res) => {
            if (res.data.code === 0) {
              this.listLoading = false;
              this.$notify({
                title: '成功',
                message: '删除成功',
                type: 'success'
              });
              this.getUsers();
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

      // 添加用户表单
      addUsername: function () {
        this.addUserVisible = true;
        this.addForm = {
          id: 0,
          sensors: [],
          usename: '',
          status: 1,
          mobilePhone: '',
          password: '',
          sensorOne: '0',
          sensorTwo: '0',
          sensorThre: '0',
          updateTime: ''
        };
      },

      addFormSubmit: function () {
        this.$confirm('确认提交吗？', '提示', {}).then(() => {
          this.addLoading = true;
          let params = Object.assign({}, this.addForm);
          // params.createTime = (!params.createTime || params.createTime == '') ? '' : util.formatDate.format(new Date(params.createTime), 'yyyy-MM-dd hh:mm:ss');
          for (let index in params.sensors) {
            if (params.sensors[index] == "传感器节点一") {
              params.sensorOne = '1';
            } else if (params.sensors[index] == "传感器节点二") {
              params.sensorTwo = '1';
            } else if (params.sensors[index] == "传感器节点三") {
              params.sensorThree = '1';
            }
          }
          addUserInfo(params).then((res) => {
            if (res.data.code == 0) {
              this.addLoading = false;
              this.$notify({
                title: '成功',
                message: '提交信息成功',
                type: 'success'
              });
              this.$refs['addForm'].resetFields();
              this.addUserVisible = false;
              this.getUsers();
            } else {
              this.$notify.error({
                title: '错误',
                message: '提交信息失败，请刷新后重试'
              });
            }
          }).catch(err => {
            this.$notify.error({
              title: '错误',
              message: '提交信息失败，请刷新后重试'
            });
          });

        });
      }
    },
    mounted() {
      this.getUsers();
    }
  }
</script>

<style scoped>
  #breadhead{
    margin: 20px;
    margin-left: 0px;
    font-size:18px;
    aligin:right;
  }
  #userEdit{
    margin-top: 4px;
  }
  #conHeader{
    background: #dfdfdf;
    margin: 7px;
    padding-top:10px;
    padding-bottom:10px;
    padding-right:20px;
    padding-left:20px;
  }
  .block{
    margin-top: 20px;
    float: right;
  }
</style>
