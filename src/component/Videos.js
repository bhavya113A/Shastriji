import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const API_KEY = 'AIzaSyBTRpr4gGBn3p5KamBlSDZuwQHx_A5GbC4'; // Replace with your actual YouTube API key
  const CHANNEL_ID = 'UCGkJjn3nxW0aI1sJ8idTpnQ'; // Yoshita Jain's channel ID

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&type=video&order=date&maxResults=5000`
        );
        console.log(response.data);
          
        setVideos(response.data.items);
        
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Latest Videos from Shastriji</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.snippet.title}
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Videos;
