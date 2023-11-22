// Episodes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavScroll from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Eps.css';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  
  const pnavigate = useNavigate();
  
  useEffect(() => {
      let username = sessionStorage.getItem('username');
      if (username === '' || username === null) {
        toast.warning("Login dulu bang Pindah-Pindah AE!!");
        pnavigate('/login');
      }
    }, []);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.attackontitanapi.com/episodes');
        setEpisodes(response.data.results);
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
        <h1>Attack on Titan Episodes</h1>
        <ul>
          {episodes.map((episode) => (
            <li key={episode.id}>
              <h2>{episode.name}</h2>
              <Link to={`/episodes/${episode.id}`}>
                <button>Detail</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Episodes;
