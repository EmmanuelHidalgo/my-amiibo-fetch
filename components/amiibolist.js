import { useContext } from "react";
import { AmiiboContext } from "../context/amiiboContext";

const AmiiboList = () => {
  const { amiiboData } = useContext(AmiiboContext)
  console.log(amiiboData)

  if (amiiboData.length === 0) {
    return (
      <p>No amiibos to show</p>
    )
  }
  return (
    <>
      <ul>
        {amiiboData.amiibo && amiiboData.amiibo.map((currentAmiibo, key) => {
            return (
              <li key={key}>
                <img src={currentAmiibo.image}/>
              </li>
            )
        })}
      </ul>
    </>
  )
};

export default  AmiiboList;