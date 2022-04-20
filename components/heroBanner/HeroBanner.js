import Image from 'next/image';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <>
    <div className="thumbnail">
    <Image width={1300} height={500} src="/hotel-stolent-1.jpg" alt="picture of the city" />              
            <div className="caption">
                <h2>Welcome to Holidaize</h2>
                <p>We got the best offers in town</p>              
                <div className="button">                  
                <Link href="/hotels">Book now</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroBanner;