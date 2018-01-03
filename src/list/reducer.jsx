export default function Reducer (state = [], action) {
  let {type, payload} = action
  switch(type) {
    case 'FETCH_LIST_SUCCESS':
      return Object.assign(Object.assign({}, state.productList, {...payload}))
      break
    default:
      return state
  }
}