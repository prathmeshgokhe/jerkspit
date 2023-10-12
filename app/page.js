"use client";
import styles from "@/styles/main.module.scss";
import Header from "@/components/Header";
import Player from "@/components/Player";
import ReactPlayer from "react-player";

export default function Home() {
  const videoSets = [
    ["https://www.youtube.com/watch?v=KqD9ph4mhQk"],
    ["https://www.youtube.com/watch?v=a5YDECRVk5s"],
    // Add more sets of video URLs as needed
  ];

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        {videoSets.map((videoUrls, index) => (
          <Player key={index} videoUrls={videoUrls} />
        ))}
        <ReactPlayer
          light={
            <img src="https://example.com/thumbnail.png" alt="Thumbnail" />
          }
        />
      </div>
    </div>
  );
}
