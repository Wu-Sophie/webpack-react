import * as actionTypes from '@/detail/actionTypes'
import initState from '@/detail/initState'

export default function Reducer(state = initState, action) {
  let {type, payload} = action
  switch(type) {
    case actionTypes.FETCH_PRODUCT_SUCCESS:
      return Object.assign({}, state.productDetail, {...payload})
      break
    default:
      return state
  }
}