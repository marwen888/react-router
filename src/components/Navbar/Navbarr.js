import React from 'react'
import {Navbar,  Nav, Form, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from '../Rating/Rating';
const Navbarr = ({name, setName, setRatingSearch, ratingSearch }) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" style = {{display:"flex", justifyContent: "space-between"}}> 
               <div style = {{display:"flex"}}>
                <Navbar.Brand href="#home" style = {{color:"#b24440"}}>Films</Navbar.Brand>
                  <Nav className="me-auto">
                   <Nav.Link href="#home">Home</Nav.Link>
                   <Nav.Link href="#features">Features</Nav.Link>
                   <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
               </div>
               <div>
                 <Form inline> 
                  <FormControl  type ="text" placeholder="Search Movie" className= "mr-sm-2" value={name} onChange={(e)=>setName(e.target.value)} /> 
                  <span style = {{paddingBottom:"10px"}}> </span> <Rating  setRate={setRatingSearch} rate={ratingSearch}/>
                  </Form> 
               </div>
            </Navbar>  
        </div>
    )
}
export default Navbarr
