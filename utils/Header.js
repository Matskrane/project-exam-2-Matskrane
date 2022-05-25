

const Header = ({ header, hotelHeader }) => {
  return (
    <>
    <div className="headers">
      <h1>{header}</h1>
    </div>
    <div className="hotel-headers">
        <h1>{hotelHeader}</h1>
    </div>
    </>
  )
}

export default Header