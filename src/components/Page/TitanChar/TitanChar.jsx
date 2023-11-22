// Characters.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavScroll from '../../Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import CharacterDetail from './TitanCharDetail';
import { toast } from "react-toastify";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const kembali =useNavigate();

  const navigate = useNavigate();
  
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
          toast.warning("Login dulu bang Pindah-Pindah AE!!");
          navigate('/login');
        }
      }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.attackontitanapi.com/characters');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavScroll />
      <div>
        <h1>Attack on Titan Characters</h1>
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <h2>{character.name}</h2>
              {/* Periksa apakah character.img ada sebelum memanggil split */}
              {character.img && (
                <img src={character.img.split("/revision")[0]} alt={character.name} />
              )}
              <p>Alias: {character.alias.join(', ')}</p>
              <p>Gender: {character.gender}</p>
              <Link to={`/characters/${character.id}`}>
                <button>Detail</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Characters;
