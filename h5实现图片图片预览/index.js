function chooseImageHandler(e) {
    const files = e.target.files
    const that = this
    // let imgArr = []
    Array.prototype.forEach.call(files, (item) => {
      // let src = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(item))
      const filename = item.name
      new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(item);
        reader.onload = function (e) {
          resolve(this.result)
        }
      }).then(imgUrl => {
        that.imageLists.push({
          // src: src,
          img: imgUrl,
          uploadFlag: '0',
          filename: filename
        })
        console.log('图片列表======1',that.imageLists)
      })
    })

  }