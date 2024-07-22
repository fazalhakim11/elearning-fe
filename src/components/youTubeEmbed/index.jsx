import React, { useEffect, useRef, useState } from 'react'

const generateUniqueId = (() => {
    let counter = 0;
    return () => `youtube-player-${counter++}`;
  })();

const YouTubeEmbed = (props) => {
  const iframeRef = useRef(null);
  const [videoStatus, setVideoStatus] = useState('Playing')
  const playerId = generateUniqueId();

  useEffect(() => {
    const loadYouTubeAPI = () => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };

    const onYouTubeIframeAPIReady = () => {
      new window.YT.Player(playerId, {
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
    };

    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.ENDED) {
        setVideoStatus('ended');
      }
    };

    if (!window.YT) {
      loadYouTubeAPI();
    } else {
      onYouTubeIframeAPIReady();
    }

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
  }, [setVideoStatus]);

  if (props.material.tipe === "Video")

  return (
      <iframe
        ref={iframeRef}
        height="280"
        src={`${props.material.thumbnail}?enablejsapi=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
        className="rounded-lg w-[100%]"
      ></iframe>
  );
};

export default YouTubeEmbed
