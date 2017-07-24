import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class NavBarItem extends Component {
  render () {
    const { iconName, onPress } = this.props
    return this.props.user
    ? (
      <TouchableOpacity
        style={{ paddingHorizontal: 20 }}
        onPress={() => onPress()}
      >
        <Icon name={iconName} size={20} color='#fff' />
      </TouchableOpacity>
    ) : <View />
  }
}

const mapStateToProps = (state) => ({
  user: state.user.obj || null
})

export default connect(mapStateToProps)(NavBarItem)