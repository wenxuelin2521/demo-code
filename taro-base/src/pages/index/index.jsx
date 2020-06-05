import Taro, { Component } from "@tarojs/taro";
import "./index.scss";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "首页"
  };

  linkTo(){
    Taro.navigateTo({
      url: 'pages/home/home'
    })
  }

  render() {
    return (
      <div className='page-index'>
        <div class='part search-box'>
          <div class='goback'></div>
          <div class='search-input'>
            <input
              type='text'
              class='text-input'
              placeholder='搜索市场交易、智慧用电'
            />
          </div>
          <div class='search-btn'>搜索</div>
        </div>

        <div class='part history-box'>
          <div class='box-title'>
            <span>搜索历史</span>
            <span class='icon icon-del'></span>
          </div>
          <ul>
            <li>价格测算</li>
            <li>基本测算</li>
            <li>智慧用电</li>
            <li>反馈</li>
            <li>预览</li>
            <li>用电政策</li>
            <li>特权</li>
            <li>推送</li>
            <li>告警信息</li>
            <li>其他</li>
          </ul>
        </div>

        <div class='part hot-search-box'>
          <div class='box-title'>
            <span>
              热搜榜 <i class='icon icon-hot'></i>
            </span>
          </div>
          <ul class='clearfix'>
            <li class='ellipsis fl'>
              组队赢秒比组队赢秒比组队赢秒比组队赢秒比组队赢秒比123
              <i class='hot-text'>热</i>
            </li>
            <li class='ellipsis fl'>
              个税扣除助手<i class='hot-text'>热</i>
            </li>
            <li class='ellipsis fl'>工资个税计算器</li>
            <li class='ellipsis fl'>肯德基官方会员店</li>
            <li class='ellipsis fl'>
              肯德基官方会员店肯德基官方会员店肯德基官方会员店
            </li>
          </ul>
        </div>
      
      <button onClick={this.linkTo}>点击跳转</button>
      </div>
    );
  }
}
