import React, { useEffect, useState } from 'react';

import narutoApi from '../../services/naruto-api';

function Main() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    narutoApi
      .get('/characters')
      .then((response) => setCharacters(response.data))
      .catch();
  }, []);

  return (
    <>
      {characters.map((char) => (
        <h1 key={char.id}>{char.first_name}</h1>
      ))}
    </>
  );
}

export default Main;
