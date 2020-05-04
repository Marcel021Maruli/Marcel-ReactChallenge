import React from 'react'
import getData from '../hooks/useFetch'
import { Card, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function DetailCard(props) {

  const { id } = useParams()
  const { cardData } = getData(`https://db.ygoprodeck.com/api/v6/cardinfo.php?id=${id}`)

  return (
    <>
      <div className="container p-4 my-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", borderRadius: '20px' }} data-testid="DetailComponent">
        {
          cardData ?
            cardData.map((el) => {
              return (
                <div key={el} className="d-flex justify-content-center align-items-center">
                  <div className='col-4 p-0' style={{ width: "25%" }}>
                    <img variant="top" src={el.card_images[0].image_url} alt="" style={{ height: '70vh' }} />
                  </div>
                  {/* detailCard */}
                  <div className='col-8 p-0 m-0'>
                    {/* Title Card */}
                    <div>
                      <Card.Subtitle className="mb-2" style={{ fontSize: "3vw", color: 'white', opacity: "0.8" }}>{el.name}</Card.Subtitle>
                    </div>
                    {/* Table */}
                    <Table hover variant="dark" className="mt-2" style={{ borderRadius: '20px', opacity: '0.85' }}>
                      <tbody>
                        <tr>
                          <td>Name: </td>
                          <td>{el.name} </td>
                        </tr>
                        <tr>
                          <td>Description: </td>
                          <td className="text-justify">{el.desc} </td>
                        </tr>
                        <tr>
                          <td>Type: </td>
                          <td>{el.type} </td>
                        </tr>
                        <tr>
                          <td>Level: </td>
                          <td>{el.level} </td>
                        </tr>
                        <tr>
                          <td>Attack: </td>
                          <td>{el.atk} </td>
                        </tr>
                        <tr>
                          <td>Def: </td>
                          <td>{el.def} </td>
                        </tr>
                        <tr>
                          <td>Race: </td>
                          <td>{el.race} </td>
                        </tr>
                        <tr>
                          <td>Attribute: </td>
                          <td>{el.attribute} </td>
                        </tr>

                      </tbody>
                    </Table>
                  </div>

                </div>
              )
            }) : < img src="https://gifimage.net/wp-content/uploads/2018/04/loading-please-wait-gif-3.gif" alt=""></img>

        }
      </div>
    </>

  )
}


export default DetailCard