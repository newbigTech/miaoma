<template>
    <div>
    <div class="demo-upload-list" v-for="item in uploadList">
        <template v-if="item.status === 'finished'">
            <img :src="item.url">
            <div class="demo-upload-list-cover">
          
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
            </div>
        </template>
        <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
    </div>
      <Upload
        ref="upload"
        :show-upload-list="false"
        :default-file-list="comdefaultList"
        :on-success="handleSuccess"
        :format="format"
        :max-size="maxsize"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        :data="headers"
        :action="posturl"
        multiple
        type="drag"
        style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="camera" size="20"></Icon>
        </div>
    </Upload>
    <Modal title="View Image" v-model="visible" class-name="view-image-modal">
        <img :src="imgName" v-if="visible" style="width: 100%">
    </Modal>
    </div>
   
  
</template>
<script>
import Util from "../../libs/util.js";
export default {
  props: {
    maxlength: {
      type: Number,
      default: 1
    },
    defaultList: Array,
    maxsize: {
      type: Number,
      default: 10 * 1024
    },
    format: {
      type: Array,
      default: ["jpg", "jpeg", "png"]
    },
    indexid: {
      type: Number,
      default: -1
    },
    uptype: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      imgName: "",
      visible: false,
      uploadList: [],
      posturl: Util.ajaxUrl() + "/api/upload/Image",
      headers: {
        UserId: this.$store.state.user.id,
        Token: this.$store.state.user.token
      },
      defaultVedioImg:
        "http://mmsoft.51jiuqu.com/Content/images/icon/nav-icon3.png",
      defaultMusicImg: "http://mmsoft.51jiuqu.com/Content/images/music.png",
      showids: []
    };
  },
  methods: {
    handleView(name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove(file) {
      console.log(file);
      const fileList = this.uploadList;
      console.log(fileList);
      this.uploadList.splice(fileList.indexOf(file), 1);
      this.$emit("get-result", this.uploadList, this.indexid);
    },
    handleSuccess(data, file) {
      let result = data.data;

      if (data.totalCount > 0) {
        result.forEach(res => {
          let url = res.Url;
          if (this.uptype == 1) {
            url = this.defaultVedioImg;
          }
          file.url = url;
          file.data = res.Url;
          file.name = res.Name;

          //let haves = this.uploadList.filter(e => {
            //return e.uid == res.uid;
         // });
         // if (!haves || haves.length <= 0) {
            //this.uploadList.push(file);
         // }
        });
         this.uploadList = this.$refs.upload.fileList;

        this.$emit("get-result", this.uploadList, this.indexid);
      }
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "文件格式不符",
        desc: "文件" + file.name + " 格式错误."
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "超过最大文件",
        desc:
          "文件  " + file.name + " 太大了, 最大可上传." + this.maxsize + "kb"
      });
    },
    handleBeforeUpload() {
      const check = this.uploadList.length < this.maxlength;
      if (!check) {
        this.$Notice.warning({
          title: "最多可上传数量：" + this.maxlength + ""
        });
      }
      return check;
    }
  },
  mounted() {
     this.uploadList = this.$refs.upload.fileList;
    // this.uploadList=this.comdefaultList;
  },
  watch: {
   
  },
  computed: {
    comdefaultList: function() {
      let temp = this.defaultList;
      if (temp && temp.length > 0) {
        if (temp[0].url.indexOf(".mp4") >= 0) {
          temp.forEach(res => {
            res.url = this.defaultVedioImg;
          });
        }
   if (temp[0].url.indexOf(".mp3") >= 0) {
          temp.forEach(res => {
            res.url = this.defaultVedioImg;
          });
        }
      }else{
        temp=[];
      }
       this.uploadList = temp;
      return temp;
    }
  }
};
</script>
<style>
.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
.view-image-modal {
  position: fixed;
  z-index: 99999999;
}
</style>



