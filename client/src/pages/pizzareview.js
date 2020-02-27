import Head from "next/head";
import MyLayout from "../components/MyLayout.js";
import YouTubePlayer from "youtube-player";

let player;

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
  return (
    <div className="container">
      <Head></Head>
      <header>
        <MyLayout />
      </header>
      <main>
        <p>It's Pizza Time BABY!</p>
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src="https://www.youtube.com/embed?listType=playlist&list=PLx00VbyG3uL8GpxpExmdKTM7maCSXGdSm"
          frameBorder="0"
        ></iframe>
        {/* <iframe>{player.loadVideoById('M7lc1UVf-VE')}</iframe> */}
      </main>
      <footer></footer>
    </div>
  );
}
