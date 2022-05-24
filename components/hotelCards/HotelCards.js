import Link from "next/link";
import { Card, ListGroup, ListGroupItem} from "react-bootstrap";
import Image from "next/image";

const HotelCards = ({hotels}) => {
  return (
    <div className="container-hotels">

    {hotels.map((hotel, idx) => {
      const { name, image_url, price, rating } = hotel.attributes;
      const { id } = hotel;

      return (
        <Link key={idx} passHref href={`/hotels/${id}`}>
          <Card style={{ width: "18rem" }}>
            <Image width={250} height={180} src={image_url}></Image>

            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem className="price">
                Price {price} kr
              </ListGroupItem>
              <ListGroupItem>{rating}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Book here</Card.Link>
            </Card.Body>
          </Card>
        </Link>
      );
    })}

  </div>
  )
}

export default HotelCards