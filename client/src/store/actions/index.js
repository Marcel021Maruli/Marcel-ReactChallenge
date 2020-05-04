import {
  add_favorite, un_favorite, fetching_data, data_detail, search_card
} from './action_types'

export const addFavorite = (dataFavorite) => ({
  type: add_favorite,
  payload: {
    dataFavorite
  }
})

export const unFavorite = (idData) => ({
  type: un_favorite,
  payload: {
    idData
  }
})

export const fetchingData = (url) => {
  return async dispatch => {
    const dataCards = await fetch(url)
    // const cards = await fetch(url)
    const cards = await dataCards.json()
    // const cards = cards.
    dispatch({
      type: fetching_data,
      payload: {
        data: cards
      }
    })
  }
}

export const dataDetail = (url) => {
  return async dispatch => {
    const dataDetail = await fetch(url)
    const detail = await dataDetail.json()
    dispatch({
      type: data_detail,
      payload: {
        data: detail
      }
    })
  }
}

export const searchCard = (text) => ({
  type: search_card,
  payload: {
    text
  }
})