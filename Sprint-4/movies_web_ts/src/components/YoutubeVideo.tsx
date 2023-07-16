import YouTube, { YouTubeProps } from "react-youtube";

type YouTubeVideoProps = {
  VideoID: string;
};
export default ({ VideoID }: YouTubeVideoProps) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const opts: YouTubeProps["opts"] = {
    height: "195",
    width: "320",
    playerVars: {
      autoplay: 0,
    },
  };
  return <YouTube videoId={VideoID} opts={opts} onReady={onPlayerReady} />;
};
