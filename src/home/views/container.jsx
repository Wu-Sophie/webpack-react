import React from 'react'
import {connect} from 'react-redux'
import Home from '@/home/views/component'

const mapStateToProps = (state) => {
  return {
    home: state.home
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch
  }
}

const View = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default View

