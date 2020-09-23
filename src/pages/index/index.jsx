import React, {Component} from 'react'
import {View, Text, Picker} from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super();

    this.state = {
      testList: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
      value: [0, 0, 0]
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }


  handleChange = (...arg) => {
    console.log('change', this.state.testList)
  }

  handleColumnChange = (e) => {
    const {column, value} = e.detail

    const multiArray = [...this.state.testList]
    const multiIndex = [...this.state.value]

    switch (column) {
      case 0:
        switch (multiIndex[0]) {
          case 0:
            multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:
            multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        multiIndex[1] = 0;
        multiIndex[2] = 0;
        break;
      case 1:
        switch (multiIndex[0]) {
          case 0:
            switch (multiIndex[1]) {
              case 0:
                multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                multiArray[2] = ['蛔虫'];
                break;
              case 2:
                multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch (multiIndex[1]) {
              case 0:
                multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        multiIndex[2] = 0;
        break;
    }
    console.log('handleColumnChange')
    this.setState({
      // value: multiIndex,
      // testList: multiArray
    })
  }


  render() {
    const {testList, value} = this.state
    return (
      <View className='index'>
        <Picker mode='multiSelector'
                range={testList}
                onChange={this.handleChange}
                onColumnChange={this.handleColumnChange}
                value={value}
        >
          <View className='result-list-page__picker-title'>
            yes
          </View>
        </Picker>
      </View>
    )
  }
}
