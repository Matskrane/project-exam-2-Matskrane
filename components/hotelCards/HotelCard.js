
import Image from 'next/image';

const HotelCard = ({ hotels }) => {

  const { name, image_url, price, rating, adress, description } = hotels.attributes;

  return (
    <div className='container-hotel'>
    <div className="hotel-flex">
      <div className="hotel-left-side">
        <Image src={image_url} alt="hotel image" layout="fill" objectFit="cover"/>
      </div>

      <div className="hotel-right-side">
        <h1>{name}</h1>
        <p>
          {description}
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
    </div>
  );
}

export default HotelCard