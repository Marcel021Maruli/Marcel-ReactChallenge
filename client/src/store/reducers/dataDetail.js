import {
  data_detail
} from '../actions/action_types'

const defaultState = {
  dataDetail: {}
}

const dataDetailReducer = (state = defaultState, action) => {
  switch (action.type) {
    case data_detail:
      let data = action.payload.data
      return { ...state, dataDetail: data }
    default:
      return state
  }
}


export default dataDetailReducer