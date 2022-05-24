import Image from 'next/image';

const HotelCard = ({ hotels }) => {

  const { name, image_url, price, rating, adress } = hotels.attributes;

  return (
    <div className="hotel-flex">

      <div className="hotel-left-side">
        <Image width={500} height={450} src={image_url} />
      </div>

      <div className="hotel-right-side">
        <h1>{name}</h1>
        <p>
          Hotel Norge by Scandic is located in central Bergen, just next to
          Byparken city park. Guests will find 3 floors of bars, lounge areas
          and restaurants.
        </p>
        <div className="hotel-price">
          <span>Price starting at {price} Kr</span>
        </div>
        <div className="hotel-rating">
          <span>{rating}</span>
        </div>
        <div className="hotel-adress">
          <span>{adress}</span>
        </div>
      </div>
      
    </div>
  );
}

export default HotelCard