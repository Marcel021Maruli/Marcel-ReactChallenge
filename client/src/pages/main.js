import React, { useState, useEffect } from 'react'
import Card from '../components/card'
import Navbar from '../components/Navbar'
// import getCard from '../hooks/useFetch'
import { Route, Switch } from 'react-router-dom'
import Details from '../components/details'
import { useSelector, useDispatch } from 'react-redux'
import { fetchingData } from '../store/actions'

function HomePage() {
  const dispatch = useDispatch()

  // THIS IS IF WANT TO USE HOOKS
  // const { cardData } = getCard('https://db.ygoprodeck.com/api/v6/cardinfo.php?level=4&attribute=fire')

  // THIS IS IF WANT TO USE STORE REDUX
  useEffect(() => {
    const getCard = async () => {
      dispatch(fetchingData('https://db.ygoprodeck.com/api/v6/cardinfo.php?level=4&attribute=fire'))
    }
    getCard()
  });
  const cardData1 = useSelector((state) => state.data.data)
  const [name, setName] = useState('')
  const favorites1 = useSelector((state) => state.listFavorites.favorites)


  // SEARCH FEATURE
  const searchQuery = useSelector((state) => state.search.text)
  let cardData = cardData1.filter((card) =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.race.toLowerCase().includes(searchQuery.toLowerCase())
  )

  let favorites = favorites1.filter((card) =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.race.toLowerCase().includes(searchQuery.toLowerCase())
  )


  return (
    < >
      <Navbar onChangeName={(e) => { setName(e.target.value) }} name={name}></Navbar>
      <Switch>
        {/* cardData */}
        {/* <div data-testid="header-title" style={{ marginTop: '10vh' }}>
          <div className="container-fluid">
            <div className='row justify-content-center'> */}
        
        <Route
          path='/'
          exact
        >
          {
            cardData.length > 0 ? cardData.map((el) => {
              return (
                <Card key={el.id} data={el} favorites={favorites} />
              )
            }) :
              < img src="https://gifimage.net/wp-content/uploads/2018/04/loading-please-wait-gif-3.gif" alt=""></img>

          }
        </Route>
        {/* </div> */}
        {/* <div className='row justify-content-center'> */}
        <Route
          path="/favorites"
          exact
        >
          {
            favorites.length > 0 ? favorites.map((el) => {
              return (
                <Card key={el.id} data={el} ></Card>
              )
            }) :
              <div className='m-5'>
                <h2> No Favorite!</h2>
              </div>

          }
        </Route>
        {/* </div> */}
        {/* <Route
              path="/favorites"
              exact
            ></Route> */}
        <Route
          path="/details/:id"
          exact
          render={(params) => <Details data={params} allData />}
        // component={Details}
        ></Route>
        {/* </div>
        </div> */}
      </Switch>
    </>
  )
}

export default HomePage