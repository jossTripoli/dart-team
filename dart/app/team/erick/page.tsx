"use client"; // Add this at the top

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const interests = [
  {
    title: "Favorite Video Games",
    items: [
      "Rainworld",
      "Baldur's Gate 3",
      "Hades",
    ],
  },
  {
    title: "Favorite Films and TV",
    items: [
      "Arcane",
      "Mob Psycho 100",
      "Shameless",
    ],
  },
];
const images = [
  { src: "/images/sussy4.jpeg", alt: "sussy image 4" },
  { src: "/images/sussy1.jpg", alt: "sussy image 1" },
  { src: "/images/sussy2.jpg", alt: "sussy image 2" },
  { src: "/images/sussy3.jpg", alt: "sussy image 3" },
];
export default function Erick() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <Progress
        value={progress}
        className="fixed top-0 left-0 right-0 bg-teal-300"
      />
      <Card className="max-w-2xl w-full mb-8">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-indigo-600 text-center">
            Erick
          </CardTitle>
          <CardDescription className="text-gray-500 mb-4">
            <Image
              src="/images/erick_n_sussy.jpg"
              alt="erick"
              width={150}
              height={150}
              className="mx-auto "
            />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 mb-4">
            Recent Lehigh University graduate with a Bachelor&apos;s in Computer
            Science. I gained experience in full stack throughout college and
            currently work part-time for Dart. I come from a family of four and
            only have a younger sister. My programing interests include full stack
            development, game development, and AI.
          </p>
          <p className="text-gray-600 text-center ">Contacts</p>
          <Separator className="my-4" />
          <div className="flex h-5 items-center justify-evenly space-x-5 text-sm text-center">
            <div>New York, NY</div>
            <Separator orientation="vertical" />
            <a
              href="mailto:erick@dartcollective.net"
              className="text-blue-500 underline"
            >
              erick@dartcollective.net
            </a>
            <Separator orientation="vertical" />
            <a
              href="https://www.linkedin.com/in/erick-tepan/"
              className="text-blue-500 underline"
            >
              linkedin.com/in/erick-tepan/
            </a>
          </div>
        </CardContent>
      </Card>
      <Card className="max-w-2xl w-full mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-600">
            Pets
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Type: Cat 
          </p>
          <p>
            Name: Sussy
          </p>
        <Dialog>
        <DialogTrigger className="text-sm outline rounded outline-cyan-600 bg-cyan-600 text-white">See More</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <Popover >
                <PopoverTrigger className="underline">Sussy</PopoverTrigger>
                <PopoverContent>
                  <div>
                    Birthday: 06/28/2022
                  </div>
                  <div>
                    Nick Name: Sussy Baka
                  </div>
                  <div>
                    Breed: domestic shorthair
                  </div>
                </PopoverContent>
              </Popover>
            </DialogTitle>
            <DialogDescription>
              <Carousel>
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className={`p-${index}`}>
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={200}
                              height={200}
                              className="mx-auto "
                            />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>


        </CardContent>
      </Card>
      {/* Render Interests Sections Dynamically */}
      {interests.map((interest, index) => (
        <Card key={index} className="max-w-2xl w-full mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-600">
              {interest.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
              <ul className="list-disc list-inside text-gray-700">
                {interest.items.map((item, itemIndex) =>
                  typeof item === "string" ? (
                    <li key={itemIndex}>{item}</li>
                  ) : null
                )}
              </ul>
          
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
