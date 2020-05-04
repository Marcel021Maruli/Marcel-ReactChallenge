import {
  data_detail
} from '../actions/action_types'

const defaultState = {
  dataDetail: {}
}

const dataDetailReducer = (state = defaultState, action) => {
  switch (action.type) {
    case data_detail:
      // console.log(action.payload.data, 'cekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
      let data = action.payload.data
      return { ...state, dataDetail: data }
    default:
      return state
  }
}


export default dataDetailReducer