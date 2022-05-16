import axios from "axios";
import Link from "next/link";
import { Card, ListGroup, ListGroupItem} from "react-bootstrap";
import SearchBar from "../../components/searchBar/SearchBar";
import {HOTELS_URL } from "../../constants/api";
import Image from 'next/image';

const Hotels = ({ hotels }) => {
  return (
    <>
    <SearchBar placeholder="Hotel name" hotels={hotels}/>


    <div className="container-hotels">
      {hotels.map((hotel, idx) => {
        const { name, image_url, price, rating } = hotel.attributes;
        const { id } = hotel;
        return ( 
        <Link key={idx} passHref href={`/hotels/${id}`}>
          <Card style={{ width: '18rem' }}>

            <Image width={250} height={180} src={image_url}></Image>

  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem className="price">Price {price} kr</ListGroupItem>
    <ListGroupItem>{rating}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Book here</Card.Link>
  </Card.Body>
</Card>
        </Link>
        )
      })}
      
    </div>
    </>
  )
}






export async function getStaticProps() {
  
  let hotels = [];

  try {
    const response = await axios.get(HOTELS_URL);
    hotels = response.data.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      hotels: hotels,
    },
  };
}

export default Hotels;