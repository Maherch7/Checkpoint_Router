import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

const CardMovie=({el})=>{
    return(
      
        <Card style={{ width: '18rem' }}>
        <Link to={`/Trailer/${el.id}`}>
        <Card.Img variant="top" src={el.posterURL} />
        <Card.Title>{el.title}</Card.Title>
        </Link>
        <Card.Body>
          
          <br/>
          <Card.Text>
           {el.description}
          </Card.Text>
          
          <Rating name="read-only" value={el.rating} readOnly />
        </Card.Body>
      </Card>
      

    )
}

export default CardMovie