import { HiWifi } from "react-icons/hi";
import { MdOutlineStar, MdQuickreply } from "react-icons/md";
import HeroBanner from "../components/heroBanner/HeroBanner";




export default function Home() {
  return (
    <>
      <HeroBanner />
      
      <div className="section-one">
        <div className="container-one">
          <h2>Why should you book with us  ?</h2>
          <div className="flexbox-one">
            <div className="section-icons">
              <HiWifi />
            <p>Free Wi-Fi at all of our hotels</p>
            </div>
            <div className="section-icons">
              <MdOutlineStar />
            <p>Great reviews!</p>
            </div>
            <div className="section-icons">
              <MdQuickreply /> 
            <p>Quick and easy ff15</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
