import {
  search_card
} from '../actions/action_types'

const defaultState = {
  text: ''
}

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case search_card:
      let text = action.payload.text
      return { ...state, text }
    default:
      return state
  }
}

export default searchReducer