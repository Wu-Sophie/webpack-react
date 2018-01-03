import 'whatwg-fetch'
import * as LIST_ACTIONS from '@/list/actionTypes'


export function getProducts(url, categoryId, params) {
    return dispatch => {
      dispatch({type: LIST_ACTIONS.FETCH_LIST_REQUEST})
      return fetch(`${url}h5/products/category/${categoryId}`, {
        method: 'GET',
        headers: {
          'YQJ-APP-USER-SESSION-ID': 'nzjIT5TzXHj1b2hpGKb8IWgx3qhQuWm9cSoaHfvRrWM7oXa0LetBVcUZjaludhhm',
          'X-APP-KEY': 'r4k5gf8wusnd72mftq96wkchp3jzg54h',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        mode: 'cors',
        cache: 'default',
        params
      })
      .then(res => res.json())
      .then(res => {
        if (res.code === 0) {
          dispatch({type: LIST_ACTIONS.FETCH_LIST_SUCCESS, payload: {...res.data}})
        } else {
          dispatch({type: LIST_ACTIONS.FETCH_LIST_FAIL})
        }
      })
      .catch(err => {
        dispatch({type: LIST_ACTIONS.FETCH_LIST_FAIL})
      })
    }
  }