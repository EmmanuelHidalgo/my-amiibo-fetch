const fetchAmiiboData =  async (term) => {
  const res = await fetch(`https://www.amiiboapi.com/api/amiibo/?character=${term}`);
  const data = await res.json();

  return data;
}

export default fetchAmiiboData;