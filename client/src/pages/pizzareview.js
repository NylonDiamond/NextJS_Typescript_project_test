import Head from "next/head";

import YouTubePlayer from "youtube-player";
import { Row } from "react-bootstrap";
import apiHelper from "../utils/api";
let player;
import { useState, useEffect } from "react";
import PizzaMouse from "../components/pizzamouse";
// player = YouTubePlayer("video-player");

// 'loadVideoById' is queued until the player is ready to receive API calls.
// player.loadVideoById('M7lc1UVf-VE');

// 'playVideo' is queue until the player is ready to received API calls and after 'loadVideoById' has been called.
// player.playVideo();

// 'stopVideo' is queued after 'playVideo'.
// player
//     .stopVideo()
//     .then(() => {
//         // Every function returns a promise that is resolved after the target function has been executed.
//     });

export default function Index() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const videosHtml = await apiHelper.getVideos();
    return videosHtml;
    // var parser = new DOMParser();
    // var doc = parser.parseFromString(videosHtml, "text/html");
    // const arrayVideos = doc.querySelectorAll(".yt-simple-endpoint[href]");
    // console.log(arrayVideos);
    // return videos.map(video => {});
  };
  return (
    <>
      {/* <PizzaMouse /> */}
      <Row className="justify-content-md-center">
        {/* <p>It's Pizza Time BABY!</p> */}
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src="https://www.youtube.com/embed?listType=playlist&list=PLx00VbyG3uL8GpxpExmdKTM7maCSXGdSm"
          frameBorder="0"></iframe>
        {/* <iframe>{player.loadVideoById('M7lc1UVf-VE')}</iframe> */}{" "}
        {/* <PizzaMouse /> */}
      </Row>
    </>
  );
}
