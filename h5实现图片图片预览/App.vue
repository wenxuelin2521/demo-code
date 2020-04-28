<template>
  <div class="feedback-container">
    <!-- 图片上传 -->
    <div class="form-item upload-pic">
      <div class="form-item-label hidden">上传图片</div>

      <div class="images-list" v-for="(item , i) in imageLists" :key="i">
        <img :src="item.img" alt />
      </div>
      <div class="upload-pic-btn">
        +++
        <input
          @change="chooseImageHandler($event)"
          type="file"
          value="上传文件"
          id="file"
          accept="image/png, image/jpeg, image/gif, image/jpg"
          multiple
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageLists: []
    };
  },
  methods: {
    chooseImageHandler($event) {
        console.log($event)
      const files = $event.target.files;
      const that = this;
      // let imgArr = []
      Array.prototype.forEach.call(files, item => {
        // let src = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(item))
        const filename = item.name;
        new Promise((resolve) => {
          let reader = new FileReader();
          reader.readAsDataURL(item);
          reader.onload = function() {
            resolve(this.result);
          };
        }).then(imgUrl => {
          that.imageLists.push({
            // src: src,
            img: imgUrl,
            uploadFlag: "0",
            filename: filename
          });
          console.log("图片列表======1", that.imageLists);
        });
      });
    }
  }
};
</script>

<style lang="css">
.feedback-container .feedback-form {
  overflow: hidden;
}

.feedback-container .feedback-form .form-item.upload-pic {
  padding-left: 16px;
}

.feedback-container .feedback-form .form-item.upload-pic .images-list {
  display: inline-block;
  vertical-align: middle;
  width: 60px;
  height: 60px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.feedback-container .feedback-form .form-item.upload-pic .images-list img {
  display: block;
  width: 100%;
  height: 100%;
}

.feedback-container .feedback-form .form-item.upload-pic .upload-pic-btn {
  display: inline-block;
  vertical-align: middle;
  width: 60px;
  height: 60px;
  border: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
  position: relative;
  margin-right: 10px;
  margin-bottom: 10px;
}

.feedback-container .feedback-form .form-item.upload-pic .upload-pic-btn .icon {
  font-size: 42px;
  line-height: 60px;
  color: #ccc;
}

.feedback-container .feedback-form .form-item.upload-pic .upload-pic-btn input#file {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.feedback-container .feedback-form .form-item .hidden {
  display: none;
}

</style>