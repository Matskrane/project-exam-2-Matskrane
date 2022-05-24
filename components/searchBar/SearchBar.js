import { useState } from "react";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';


function SearchBar({ placeholder, hotels }) {
  
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = hotels.filter((value) => {
      return value.attributes.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <>
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <SearchOffIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult-centered">
        <div className="dataResult">
          {filteredData.map((hotel, idx) => {
            const { name, adress } = hotel.attributes;
            const { id } = hotel;
            return ( 
            <Link  key={idx} passHref href={`/hotels/${id}`}>
              <div className="dataItem">
                <h2>{name}</h2>
                <p>{adress}</p>
              </div>
            </Link>
            )
          })}
        </div>
        </div>
      )}
    </div>
    </>
  );
}


export default SearchBar;

