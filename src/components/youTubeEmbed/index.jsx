const YouTubeEmbed = (props)=>{ 

  const onPlayerReady = () => {
    console.log("Ready")
  }

  const onPlayerStateChange = (event) => {
    if ( event.data === YT.PlayerState.ENDED){
      console.log(`VIDEO ${props.id}ENDS`)
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
