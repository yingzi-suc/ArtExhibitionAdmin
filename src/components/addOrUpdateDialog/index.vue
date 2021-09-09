<template>
  <el-dialog :width="dialogWidth||'640px'" class="addOrUpdateDialog" :visible.sync="config.visible" :title='config.title||""' @close='config.close' :lock-scroll="false">
    <el-form
      ref="ruleForm"
      :rules="rules"
      :label-width="config.labelWidth||'120px'"
     
      :model="dataForm"
      class="dialogform"
    >
    <template v-for="item in config.columns">
         <el-form-item 
         v-if="item.type!=='none'"
         label-width="90px"
         :label="item.label" 
         :key="item.key" 
         :prop="item.key">
             <el-input 
             v-if="item.type==='input'" 
             v-model="dataForm[item.key]"
             :placeholder="'请输入' + item.label">
             </el-input>
             <el-input 
             v-if="item.type==='password'" 
             type="password"
             v-model="dataForm[item.key]"
             :placeholder="'请输入' + item.label">
             </el-input>
             <el-input 
             v-if="item.type==='textarea'" 
             type="textarea"
             v-model="dataForm[item.key]"
             :placeholder="'请输入' + item.label">
             </el-input>
             <el-select
                v-else-if="item.type === 'select'"
                v-model="dataForm[item.key]"
                :multiple='item.multiple'
                collapse-tags
                :placeholder="'请选择' + item.label"
                style="width: 100%"
                @change='item.handleChange'
                :filterable='item.search'
              >
                <el-option
                  v-for="option of item.options"
                  :key="option.value"
                  :value="option.value"
                  :label="option.label"
                ></el-option>
             </el-select>
             <el-date-picker
                v-model="dataForm[item.key]"
                v-if="item.type === 'daterange'"
               :type="item.dateType"
               range-separator="至"
               start-placeholder="开始日期"
               end-placeholder="结束日期">
             </el-date-picker>
             <el-time-picker
                 is-range
                  v-model="dataForm[item.key]"
                   v-if="item.type === 'time'"
                 range-separator="至"
                 start-placeholder="开始时间"
                 end-placeholder="结束时间"
                 placeholder="选择时间范围">
             </el-time-picker>
             <el-upload
                 action="http://hrm-th-file.oss-cn-chengdu.aliyuncs.com"
                  v-if="item.type === 'image'"
                 list-type="picture-card"
                 :on-preview="handlePictureCardPreview"
                 :on-remove="handleRemove">
               <i class="el-icon-plus"></i>
             </el-upload>
         </el-form-item>
    </template>
    </el-form>
    <template slot="footer">
      <el-button @click="config.close" size='mini'>取 消</el-button>
      <el-button type="primary" @click="submit" size='mini'>保 存</el-button>
    </template>
  </el-dialog>
</template>

<script>
import {cloneDeep} from "lodash"
export default {
  props: ["config","dialogWidth"],
  data(){
      return {
          dataForm:{},
      }
  },
  created() {
    this.init();
  },

  methods: {
    init() {  
        this.dataForm = cloneDeep(this.config.defaultValue)
    },
    submit(){
        this.$refs["ruleForm"].validate(async valid => {
            if(!valid) {
                return false;
            }

        })
    },
    // 图片上传
    
    handleAvatarSuccess(res, file, key) {
      console.log(res, 'handleAvatarSuccess')
      // this.dataForm[key] = res;
      // this.dataForm = { ...this.dataForm };
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleRemove(file, fileList) {
                console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
         this.dialogImageUrl = file.url;
         this.dialogVisible = true;
    }
  },
   computed: {
    rules() {
      const rules = {};
      (this.config.columns || []).forEach(column => {
        rules[column.key] = column.rules;
      });
      return rules;
    }
  }
};
</script>


<style lang="scss">

</style>>
