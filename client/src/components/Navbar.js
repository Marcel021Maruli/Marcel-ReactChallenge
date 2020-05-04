import React from 'react'
import { Navbar, Nav, FormControl, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchCard } from '../store/actions'

function NavbarComponent(props) {
  const dispatch = useDispatch()
  const searchQuery = useSelector(state => state.search.text)
  return (
    <>
      <Navbar bg="dark" variant="dark" data-testid="navBar" fixed='top' >
        <img src="https://cdn3.iconfinder.com/data/icons/7-millennium-items/512/Milennium_Puzzle_Icon-128.png" alt="" style={{ width: "3em" }}></img>
        <Navbar.Brand href="#home" data-testid="navBrand">Yu-Gi Oh</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to='/' className="nav-link">
            Home
          </Link>
          <Link to='/favorites' className="nav-link">
            Favorite
          </Link>
        </Nav>
        <Form inline onSubmit={props.onSubmit}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => dispatch(searchCard(e.target.value))} value={searchQuery} />
          {/* <Button variant="outline-info" onClick={props.onClick}>Search</Button> */}
        </Form>
      </Navbar>
    </>
  )
}


export default NavbarComponent