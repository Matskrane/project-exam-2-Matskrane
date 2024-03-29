import Image from 'next/image';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <>
      <div className="thumbnail">
        <Image priority width={1300} height={750} src="/hero-stolent-3.jpg" alt="picture of the city" />
        <div className="caption">
          <h2>Welcome to Holidaze</h2>
          <p>We have the best offers in town</p>
          <div className="button">
            <Link href="/hotels">View Hotels</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;