import axios from "axios";

const YouTubeEmbed = (props)=>{ 

  const userId = props.userId

  const onPlayerReady = () => {
    console.log("Ready")
  }

  const onPlayerStateChange = async (event) => {
    if ( event.data === YT.PlayerState.ENDED){
      try {
        await axios.post("http://localhost:9000/api/progress", {
          userId: userId,          
          materialId: parseInt(props.id, 10)
        })
        console.log("Success")
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

    console.log(player)
  }
  
  onYouTubeIframeAPIReady()

  return (
    <div id={props.id} >Tes</div>
  )
};

export default YouTubeEmbed;
