import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index";

import "./styles/reset.scss";
import "./styles/app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    pages: [
      "pages/home/home",
      "pages/index/index",
      "pages/about/about",
      "pages/detail/detail"
    ],
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: "black",
      list: [
        {
          pagePath: "pages/home/home",
          iconPath: "./assets/images/tab-bar/home.png",
          selectedIconPath: "./assets/images/tab-bar/home-active.png",
          text: "首页"
        },
        {
          pagePath: "pages/index/index",
          iconPath: "./assets/images/tab-bar/cate.png",
          selectedIconPath: "./assets/images/tab-bar/cate-active.png",
          text: "搜索"
        },
        {
          pagePath: "pages/about/about",
          iconPath: "./assets/images/tab-bar/cart.png",
          selectedIconPath: "./assets/images/tab-bar/cart-active.png",
          text: "about"
        },
        {
          pagePath: "pages/detail/detail",
          iconPath: "./assets/images/tab-bar/user.png",
          selectedIconPath: "./assets/images/tab-bar/user-active.png",
          text: "详情"
        }
      ]
    }
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
