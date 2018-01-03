import React from 'react'
import {getProductById} from '@/detail/actions'
import {getProducts} from '@/list/actions'

class Product extends React.Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    let {dispatch} = this.props
    dispatch(getProductById('5a3772142849827bd2fe61d5', 0, 1))
  }

  render () {
    let {product, catalogs} = this.props
    return (
      <div className="product-detail">
        <div className="container">
          {
            product && 
            <div className='base-info'>
              <div className="cover-box">
                <img  className="cover" src={product.basicInfo.coverUrl} alt=""/>
                {
                  product.categoryType === 2 &&
                  <img  className="audio-icon" src="./assets/imgs/icon play 2x_72x72.png"/>
                }
              </div>
              <div className='info'>
                <h1 className="title">{product.basicInfo.title}</h1>
                {
                  product.basicInfo.year && product.basicInfo.season &&
                  <p className="release-time">发行时间：<span>{product.basicInfo.year}{product.basicInfo.season}</span></p>
                }
                { 
                  product.hasAnalysis &&
                  <img className='icon' src="./assets/imgs/hasAnalysis@120x44.png"/>
                }
                
                { 
                  product.hasAudio &&
                  <img className='icon' src="./assets/imgs/hasAudio@120x44.png"/>
                }
                
                { 
                  product.recentUpdate.length > 0 &&
                  <p className="progress">更新至：<span>在四大发生的</span></p>
                }
              </div>
            </div>
          }
          <div className="content-intro">
            <h2 className="title">内容介绍</h2>
            {
              product && product.basicInfo.brief &&
              <div className="box" >
                <h3 className="box-title">简介</h3>
                <div className="inner">
                  <p className="summary">{product.basicInfo.brief}</p>
                </div>
              </div>
            }
            {
              catalogs.length > 0 &&
              <div className="box" >
                <h3 className="box-title">简介</h3>
                <div className="inner">
                  {
                    catalogs.map(item => {
                      <p className="summary" key={item._id}>{item.name}</p>
                    })
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Product