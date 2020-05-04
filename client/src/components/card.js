import React from 'react'
import { Link } from 'react-router-dom'
import { Card, ListGroup, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addFavorite, unFavorite } from '../store/actions';
import { useSelector } from 'react-redux'

function CardComponent(props) {
  let favorites = useSelector((state) => state.listFavorites.favorites)
  const dispatch = useDispatch()
  let favorited = null
  favorites.forEach(favorite => {
    if (props.data.id === favorite.id) {
      favorited = "yes"
    }
  })

  return (
    <Card data-testid="cardsComponent" style={{ width: '15rem', borderRadius: '20px', margin: '5px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <Card.Img variant="top" src={props.data.card_images[0].image_url} height={300} />
      <div style={{ filter: "alpha()" }}>
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <ListGroup className="list-group-flush">
            <Card.Text className="d-flex justify-content-between">
              <em>
                Attack: {props.data.atk}
              </em>
              <em>
                Def: {props.data.def}
              </em>
            </Card.Text>
            <Card.Text>
              Race: {props.data.race}
            </Card.Text>
          </ListGroup>
          <div className="m-2">
            <Button variant="primary"><Link style={{ color: "white", textDecoration: "none" }} to=
              {{
                pathname: `/details/${props.data.id}`,
                render:() => {}
              }}>
              Detail</Link></Button>
          </div>
          {
            !favorited ?
              <div className="m-2">
                <Button variant="primary" onChange={props.onGetData} value={props.data} onClick={() => dispatch(addFavorite(props.data))} >
                  Add To Favorite
                <svg className="bi bi-heart" width="2em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z" clipRule="evenodd" />
                  </svg>
                </Button>
              </div>
              :
              <div className="m-2">
                <Button variant="danger" onChange={props.onGetData} value={props.data} onClick={() => dispatch(unFavorite(props.data.id))} >
                  Un-Favorite?
               <svg className="bi bi-heart-half" width="2em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 1.314C3.562-3.248-7.534 4.735 8 15V1.314z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z" clipRule="evenodd" />
                  </svg>
                </Button>
              </div>

          }
        </Card.Body>
      </div>
    </Card>
  )
}

export default CardComponent