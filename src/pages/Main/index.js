import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Card } from './styles';

import narutoApi from '../../services/naruto-api';

function Main() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    narutoApi
      .get(`/characters?name=${query}`)
      .then((response) => setCharacters(response.data))
      .catch();
  }, [query]);

  return (
    <>
      <input type="text" value={query} onChange={handleQuery} />
      <Container>
        {characters.map((char) => (
          <Card key={char.id} rank={char.ninja_rank}>
            <img src={char.img} alt={char.name} />
            <div>
              <h1 key={char.id}>{char.name}</h1>
              <span>{char.ninja_rank}</span>
              <p>{char.Village.name}</p>
              <Link to="/">Learn more</Link>
            </div>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default Main;
