import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'

import {
  AddFavoriteReducer,
  DataDetailReducer,
  searchCard,
  DataCardReducer
} from './reducers'

const reducers = combineReducers({
  listFavorites: AddFavoriteReducer,
  data: DataCardReducer,
  dataDetail: DataDetailReducer,
  search: searchCard 
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store