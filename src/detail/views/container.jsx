import {connect} from 'react-redux'

import Product from '@/detail/views/component'

const mapStateToProps = (state) => {
  return {
    product: state.productDetail.product,
    catalogs: state.productDetail.catalogs
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
)(Product)

export default View

