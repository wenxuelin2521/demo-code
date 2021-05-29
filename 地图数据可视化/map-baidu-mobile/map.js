window.onload = function () {
  var map = initMap({
    tilt: 80,
    heading: 15.3,
    center: [102.842011, 24.888139],
    zoom: 13,
    style: purpleStyle,
  });

  var view = new mapvgl.View({
    map: map,
  });

  // 文本图形
  const textLayer = new mapvgl.TextLayer({
    color: "#fff",
    fontFamily: "Microsoft Yahei",
    fontSize: 14,
    flat: false,
    collides: true,
    offset: [0, -100],
    padding: [2, 2],
    margin: [0, 0],
  });
  view.addLayer(textLayer);

  let intervalTimer = null;

  // icon图形
  const layer = new mapvgl.IconLayer({
    width: 100 / 2,
    height: 153 / 2,
    offset: [0, -153 / 8],
    opacity: 0.8,
    icon: "dllg.svg", // 使用的图案
    enablePicked: true, // 是否可以拾取
    selectedIndex: -1, // 选中项
    selectedColor: "#ff0000", // 选中项颜色
    autoSelect: true, // 根据鼠标位置来自动设置选中项
    onClick: (e) => {
      // 点击事件
      // ...
    },
    onDblClick: (e) => {
      console.log("double click", e);
    },
    onRightClick: (e) => {
      console.log("right click", e);
    },
  });
  view.addLayer(layer);

  // 涟漪形-点图形
  const rippleLayer = new mapvgl.RippleLayer({
    size: 2000,
    unit: "m",
    color: "rgb(255, 51, 0)",
    enablePicked: true,
    onClick: (e) => {
        console.log(e)
        if(e.dataItem){
            document.querySelector('.actions-pannel').innerText = e.dataItem?.properties?.text || '暂无详情数据'
            document.querySelector('.actions-pannel').classList.add('animate__slideInUp')
        }else{
            document.querySelector('.actions-pannel').classList.remove('animate__slideInUp')
        }
    },
  });
  view.addLayer(rippleLayer);

  /**
   * @param:poinitInfo-点的信息：至少要包含经纬度和文本（latitude , longitude , title）
   */
  function generatorPoint(
    pointInfo = { longitude: "", latitude: "", title: "" }
  ) {
    const { longitude, latitude, title } = pointInfo;
    let geometry = {
      type: "Point",
      coordinates: [longitude, latitude],
    };
    let properties = {
      text: title, // 展示的文字
    };
    return {
      geometry,
      properties,
    };
  }

  function initData(dataList = []) {
    let formatData = dataList.map((item) => generatorPoint(item));
    textLayer.setData(formatData);
    // layer.setData(formatData)
    rippleLayer.setData(formatData);
  }

  let data = [
    { longitude: 102.817003, latitude: 24.94018, title: "10kV明珠路0号公用变" },
    { longitude: 102.217003, latitude: 24.44018, title: "10kV明珠路1号公用变" },
    { longitude: 102.512003, latitude: 24.24018, title: "10kV明珠路2号公用变" },
    { longitude: 102.967003, latitude: 24.38018, title: "10kV明珠路3号公用变" },
  ];
  initData(data);

  document.querySelector('.anchorBL').style.display = "none";
  document.querySelector(".tooltips").style.display = "block";
  const domList = document.querySelectorAll(".tooltips-item");
  domList[0].classList.add("animate__fadeUp");
  (function () {
    let i = 1;
    intervalTimer = setInterval(() => {
      let pre = i - 1 < 0 ? domList.length - 1 : i - 1;
      domList[pre].classList.remove("animate__fadeUp");
      domList[i].classList.add("animate__fadeUp");
      i = i >= domList.length - 1 ? 0 : i + 1;
    }, 4000);
  })();
  // }else{
  //     intervalTimer && clearInterval(intervalTimer)
  //     document.querySelector('.tooltips').style.display = 'none'
  // }
};
