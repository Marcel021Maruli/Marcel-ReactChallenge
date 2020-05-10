import { fetching_data } from '../actions/action_types'

const defaultState = {
  data: []
}

const FetchingDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case fetching_data:
      let data = action.payload.data
      return { ...state, data: data }
    default:
      return state
  }
}


export default FetchingDataReducer
