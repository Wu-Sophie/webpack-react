import React from 'react'
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'

import GoodItme from '@/components/good-item'
import {getProducts} from '@/list/actions'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.lookDetail = this.lookDetail.bind(this)
  }

  componentDidMount () {
    const {dispatch} = this.props
    dispatch(getProducts('/discover-api', '5925305068308a727688e149', {currentPage:1, perPage:20}))
  }

  lookDetail (productId) {
    this.props.history.push(`${this.props.match.url}/${productId}`)
  }

  render () {
    let list = this.props.products.map(item => 
      <GoodItme node={item} key={item._id} onClick={this.lookDetail}/>
    )
    return (
      <div className="list-page">
        <h1 className="type">方式1</h1>
        {this.props.products.map(item =>
          <GoodItme node={item} key={item._id} onClick={this.lookDetail}/>
        )}
        <h1 className="type">方式1</h1>
        {list}
      </div>
    )
  }
}

List.propTypes = {
  products: PropTypes.array,
  page: PropTypes.shape({
    currentPage: PropTypes.number,
    perPage: PropTypes.number,
    total: PropTypes.number,
    totalPage: PropTypes.number
  })
}

export default List