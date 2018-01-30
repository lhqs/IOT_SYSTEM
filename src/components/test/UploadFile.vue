<template>
  <div class="uptemp">
    <el-upload
      class="upload-demo"
      ref="upload"
      multiple="false"
      action=""
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-change="handleChange"
      :before-upload="beforeUpload"
      :file-list="fileList"
      :auto-upload="false"
      :multiple="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">导入</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
    </el-upload>
  </div>

</template>
<script>

  import {uploadLogeUrl} from "../../api/api";

  export default {
    data() {
      return {
        fileList: []
      }
    },
    mounted: function () {
      //加载完页面执行的函数
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleChange(file, fileList) {
        console.log(file);
        console.log(fileList);
      },
      beforeUpload: function (file) {
        let fileData = new FormData();
        fileData.append('file', file);
        uploadLogeUrl(fileData).then((res) => {
          console.log(res);
        }).catch(err => {
          console.log(err)
        });
        // return false;
      }
    }
  }
</script>
<style scoped>

</style>


