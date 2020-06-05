import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './about.scss'

export default class About extends Component {

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
      <View className='about'>
        <Text>about</Text>
      </View>
    )
  }
}
