import React, { useEffect, useState } from "react";

function YoutubeVid(props) {
  return (
    <>
      <div style={{ width: "400px", height: "400px" }}>
        <canvas id="myChart" width="100px" height="100px"></canvas>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hdbTw4Oz45c"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </>
  );
}
//NO5XF1G1EJRASM9L
export default YoutubeVid
