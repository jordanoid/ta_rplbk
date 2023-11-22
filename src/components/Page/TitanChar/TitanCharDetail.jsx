// CharacterDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  const pnavigate = useNavigate();
  
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
          toast.warning("Login dulu bang Pindah-Pindah AE!!");
          pnavigate('/login');
        }
      }, []);

  const navigate =useNavigate();

  const kembali = ()=> {
    navigate('/char')
  };

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://api.attackontitanapi.com/characters/${id}`);
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      {character.img && (
        <img src={character.img.split("/revision")[0]} alt={character.name} />
      )}
      <p>Birthplace: {character.birthplace}</p>
      <p>Residence: {character.residence}</p>
      <p>Status: {character.status}</p>
      <p>Species: {character.species.join(', ')}</p>
      <button className="btn btn-danger" onClick={kembali}>Back</button>

      {/* Add more details as needed */}
    </div>
  );
};

export default CharacterDetail;
