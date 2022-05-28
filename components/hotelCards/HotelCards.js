import Link from "next/link";
import { Card, ListGroup, ListGroupItem} from "react-bootstrap";
import Image from "next/image";

const HotelCards = ({hotels}) => {
  return (
    <div className="container-hotels">

    {hotels.map((hotel, idx) => {
      const { name, image_url, price, rating, description } = hotel.attributes;
      const { id } = hotel;

      return (
        <Link key={idx} passHref href={`/hotels/${id}`}>
          <Card style={{ width: "18rem" }}>
            <Image width={250} height={180} src={image_url} alt="hotel image" />

            <Card.Body>
              <Card.Title>{name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem className="price">
                Price {price} kr
              </ListGroupItem>
              <ListGroupItem>{rating}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <div className="button-cards">
              <button>Book here</button>
              </div>
            </Card.Body>
          </Card>
        </Link>
      );
    })}

  </div>
  )
}

export default HotelCards