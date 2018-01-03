import 'whatwg-fetch'
import * as actionTypes from '@/detail/actionTypes'


/**
 * 根据商品id获取商品详情
 *
 * @param  {string} url           访问地址
 * @param  {string} productId     商品id
 * @param  {string} recommend     需要推荐 0 不包含 1： 包含
 * @param  {string} catalog     需要目录 0 不包含 1： 包含
 * @return {promise-with-array}   商品详情
 */
export function getProductById (productId, recommend = 0, catalog = 0) {
  return dispatch => {
    dispatch({type: actionTypes.FETCH_PRODUCT_REQUEST})
    return fetch(`/discover-api/h5/products/${productId}`,{
      method: 'GET',
      headers: {
        'YQJ-APP-USER-SESSION-ID': 'nzjIT5TzXHj1b2hpGKb8IWgx3qhQuWm9cSoaHfvRrWM7oXa0LetBVcUZjaludhhm',
        'X-APP-KEY': 'r4k5gf8wusnd72mftq96wkchp3jzg54h',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      mode: 'cors',
      cache: 'default',
      params: {recommend, catalog}
    })
    .then(res => res.json())
    .then(res => {
      if (res.code === 0) dispatch({type: actionTypes.FETCH_PRODUCT_SUCCESS, payload: {...res.data}})
      else dispatch({type: actionTypes.FETCH_PRODUCT_FAIL})
    })
  }
}
