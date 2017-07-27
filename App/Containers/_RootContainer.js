import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import Toast from '../Components/Toast'

export default class RootContainer extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
        <Toast />
      </View>
    )
  }
}
