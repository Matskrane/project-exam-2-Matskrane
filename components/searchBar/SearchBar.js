import { useState } from "react";
import Link from "next/link";
import { MdSearch, MdSearchOff } from "react-icons/md";


function SearchBar({ placeholder, data }) {
  
  
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
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
            <MdSearch />
          ) : (
            <MdSearchOff id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.map((hotel, idx) => {
            const { name } = hotel.attributes;
            const { id } = hotel;
            return ( 
            <Link key={idx} passHref href={`/hotels/${id}`}>
              <div>
                <h2>{name}</h2>
              </div>
            </Link>
            )
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;


// <SearchBox data={results} />