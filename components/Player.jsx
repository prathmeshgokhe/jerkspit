import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";

const Player = () => {
  return (
    <div>
      <Card className="py-4 w-fit">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/music.jpg"
            width={270}
            height={270}
          />
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
