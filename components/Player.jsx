"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import ReactPlayer from "react-player";

const Player = ({ videoUrls }) => {
  // Accept the videoUrls prop
  return (
    <div>
      <Card className="py-4 w-fit">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          {videoUrls.map((url, index) => (
            <div key={index}>
              <ReactPlayer
                url={url}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                  facebook: {
                    appId: "12345",
                  },
                }}
              />
            </div>
          ))}
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardBody>
      </Card>
    </div>
  );
};

export default Player;
