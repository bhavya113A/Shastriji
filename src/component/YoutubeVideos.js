// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const YoutubeVideos = () => {
//   const [videos, setVideos] = useState([]);
//   const API_KEY = 'AIzaSyBTRpr4gGBn3p5KamBlSDZuwQHx_A5GbC4'; // Replace with your actual YouTube API key
//   const CHANNEL_ID = 'UCH0v7T9-FlBUvCEHfKQi6kQ'; // Yoshita Jain's channel ID

//   const fetchUploadsPlaylistId = async () => {
//     try {
//       const response = await axios.get(
//         `https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
//       );
//       return response.data.items[0].contentDetails.relatedPlaylists.uploads; 
//     } catch (error) {
//       console.error('Error fetching uploads playlist ID:', error);
//     }
//   };

//   const fetchVideos = async (playlistId) => {
//     try {
//       const response = await axios.get(
//         `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCh-NN-3BCT_rVKgSN2DzMDQ&maxResults=25&key=[AIzaSyBTRpr4gGBn3p5KamBlSDZuwQHx_A5GbC4]`
//       );
//       console.log('API Response:', response.data); // Logs the full API response
//       setVideos(response.data.items);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     }
//   };

//   useEffect(() => {
//     const getVideos = async () => {
//       const playlistId = await fetchUploadsPlaylistId(); // Get the uploads playlist ID
//       if (playlistId) {
//         await fetchVideos(playlistId); // Fetch videos from the uploads playlist
//       }
//     };

//     getVideos();
//   }, []);

//   return (
//     <div>
//       <h2>Latest Videos from Yoshita Jain</h2>
//       <ul>
//         {videos.map((video) => {
//           const videoId = video.snippet.resourceId.videoId; 
//           return (
//             <li key={videoId}>
//               <h3>{video.snippet.title}</h3>
//               {videoId ? (
//                 <iframe
//                   width="560"
//                   height="315"
//                   src={`https://www.youtube.com/embed/${videoId}`}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   title={video.snippet.title}
//                 ></iframe>
//               ) : (
//                 <p>Video unavailable</p>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default YoutubeVideos;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YoutubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const API_KEY = 'AIzaSyBTRpr4gGBn3p5KamBlSDZuwQHx_A5GbC4'; // Replace with your actual YouTube API key
  const CHANNEL_ID = 'UCH0v7T9-FlBUvCEHfKQi6kQ'; // Yoshita Jain's channel ID

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Latest Videos from Yoshita Jain</h2>
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

export default YoutubeVideos;
