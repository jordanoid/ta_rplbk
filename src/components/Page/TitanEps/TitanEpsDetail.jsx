// EpisodeDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Detail.css';
import NavScroll from '../../Navbar/Navbar';
import { toast } from "react-toastify";

const EpisodeDetail = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const navigate = useNavigate();

  const pnavigate = useNavigate();
  
  useEffect(() => {
      let username = sessionStorage.getItem('username');
      if (username === '' || username === null) {
        toast.warning("Login dulu bang Pindah-Pindah AE!!");
        pnavigate('/login');
      }
    }, []);



  

  const goBack = () => {
    navigate('/episode'); // Correct the route to go back to the episodes list
  };

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const response = await axios.get(`https://api.attackontitanapi.com/episodes/${id}`);
        setEpisode(response.data);
      } catch (error) {
        console.error('Error fetching episode details:', error);
      }
    };

    fetchEpisode();
  }, [id]);

  if (!episode) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <NavScroll/>
    <div>
      <h1>{episode.name}</h1>
      {episode.img && (
        <img src={episode.img.split("/revision")[0]} alt={episode.name} />
      )}
      <p>Episode: {episode.episode}</p>
      <button className="btn btn-danger" onClick={goBack}>
        Back
      </button>

      {/* Add more details as needed */}
    </div>
    </>
  );
};

export default EpisodeDetail;
