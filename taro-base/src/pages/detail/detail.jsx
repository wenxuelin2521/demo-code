import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './detail.scss'

export default class Detail extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='detail'>
        <Text>detail</Text>
      </View>
    )
  }
}
