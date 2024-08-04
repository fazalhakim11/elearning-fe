import axios from "axios";

const YouTubeEmbed = (props)=>{ 

  const userId = props.userId

  const onPlayerReady = () => {
    console.log("Player is ready")
  }

  const onPlayerStateChange = async (event) => {
    if ( event.data === YT.PlayerState.ENDED){
      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/progress`, {
          userId: userId,          
          materialId: parseInt(props.id, 10)
        })
        console.log("Updating progress success..")
      } catch (err) {
        console.log(err)
      }
    }
  }

  const onYouTubeIframeAPIReady = () => {
    const player = new YT.Player(props.id, {
      width: "100%",
      videoId: props.videoId,
      playerVars: {
        controls: 1
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    })
  }
  
  onYouTubeIframeAPIReady()

  return (
    <div id={props.id} ><i>Youtube Video</i></div>
  )
};

export default YouTubeEmbed;
