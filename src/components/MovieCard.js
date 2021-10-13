import React from 'react'
import Rating from './Rating/Rating'
import {Card} from "react-bootstrap"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link , BrowserRouter as Router} from 'react-router-dom'


const MovieCard = ({el}) => {
        return (
<Card style={{ width:"200px", reight:"200px" }}>
  <Card.Img  style={{ width:"200px", reight:"200px"}} variant="top" src ={el.url} />
  <Card.Body>
    <Card.Title><Link to ={`Info/${el.name}`}>  {el.name} </Link></Card.Title>
    
    <Card.Text style={{color:"black", fontSize:"18px",fontFamily:"arial"}}>{el.description}</Card.Text>
    <Card.Text>{el.date}</Card.Text>
    <Card.Text>{el.type}</Card.Text>
    <span class="minutes"><Rating rate={el.rate} /></span>

  </Card.Body>
</Card>
            
        )
    }
    export default MovieCard