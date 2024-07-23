import React, { useEffect, useRef } from 'react';

const YouTubeEmbed = (props) => {
  if (props.material === "Video")
  return (
    <iframe 
      width="100%"  
      height="auto%" 
      src={props.videoURL} 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"         referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen
    >
    </iframe>
  )
};

export default YouTubeEmbed;
