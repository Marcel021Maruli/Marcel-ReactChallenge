import { add_favorite, un_favorite } from '../actions/action_types'

const defaultState = {
  favorites: [],
}

const AddFavReducers = (state = defaultState, action) => {
  switch (action.type) {
    case add_favorite:
      let newFavorite = state.favorites.concat(action.payload.dataFavorite)
      return { ...state, favorites: newFavorite };
    case un_favorite:
      let unFav = state.favorites.filter((el) => {
        return el.id !== action.payload.idData
      })
      return { ...state, favorites: unFav }
    default:
      return state
  }
}


export default AddFavReducers
