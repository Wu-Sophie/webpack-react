// import React from 'react'
import {connect} from 'react-redux'

import List from '@/list/views/component'

// 将ui组件转换成容器组件

const mapStateToProps = (state) => {
  return {
    products: state.productList.products
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
)(List)

export default View