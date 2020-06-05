import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./home.scss";

export default class Home extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "首页"
  };

  render() {
    return (
      <div className='page-home'>
        <p>这是home页面</p>
      </div>
    );
  }
}
