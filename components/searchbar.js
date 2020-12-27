import { useContext, useState } from "react";
import { AmiiboContext } from "../context/amiiboContext";
import fetchAmiiboData from "../pages/api/fetchAmiiboData";

const SearchBar = () => {
  const [ term, setTerm ] = useState('');
  const { setAmiiboData } = useContext( AmiiboContext );

  const onChangeText = (e) => {
    setTerm(e.target.value);
  }

  const onSearch =  async () => {
    const amiiboData = await fetchAmiiboData(term);
    setAmiiboData(amiiboData);
  }

  return (
    <>
    <input type="text" value={term} onChange={onChangeText}/>
    <button onClick={onSearch}>Search</button>
    </>
  )
}

export default SearchBar;