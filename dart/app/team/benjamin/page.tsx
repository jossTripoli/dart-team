
"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import Image from 'next/image';
import * as React from "react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IconButton } from "./components/IconButton";
import { CaretSortIcon } from "@radix-ui/react-icons";

 
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"
// import { Button } from "@/components/ui/button"
// import {Accordion,AccordionContent,AccordionItem,AccordionTrigger,} from "@/components/ui/accordion"
import { Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel";
export default function Benjamin() {
  const [isOpen, setIsOpen] = useState(true)
  const interests = [
    {
      title: "Favorite Movies",
      items: [
        "The Godfather",
        "Intrstellar",
        "Mission Impossible",
        "Saving Private Ryan",
      ],
    },
    {
      title: "Favorite Sports",
      items: [
        "Basketball", 
        "Baseball",
        "Hockey",
        "Footbal"
      ]
    },
    {
      title: "Favorite Sports Team",
      items: ["New York Mets"]
    },
    {
      title : "Favorite TV Shows",
      items: [
        "Breaking Bad",
        "Game of Thrones",
        "Mr. Robot", 
        "The Sopranos"
      ]
    },
    {
      title: "Favorite Musicians",
      items: [
        {
          name : "Dumbo Gets Mad",
          genre: "Alternative",
          albums: [
            "Things Are Random and Time Is Speeding Up",
            'Thank You Neil',
            'Elephants At The Door',
            'Quantum Leap'
          ],
        },
        {
          name : "Pond",
          genre: "Alternative",
          albums: [
            "Man It Feels Like Space Again",
            'The Weather',
            'Stung!',
            '9',
            'Tasmania'
          ],
        },
        {
          name : "David Bowie",
          genre: "Rock",
          albums: [
            "Let's Dance",
            'Heroes',
            'Hunky Dory',
            'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',
          ],
        },
        {
          name : "MGMT",
          genre: "Alternative",
          albums: [
            "Little Dark Age",
            'Oracular Spectacular',
            'Congradulations',
            'Loss of Life',
          ],
        },
      ]
    },
    {
      title : "Hobbies",
      items: [
        "Working Out",
        "Reading",
        "Trying New Things", 
        "Camping"
      ]
    },
  ]
  return (
    <div className="min-h-screen p-8 bg-gray-50 flex flex-col items-center">
      
      {/* <h1 className="text-4xl font-bold text-indigo-600 mb-4">Benjamin</h1> */}
    

      <Card className="max-w-2xl w-full mb-8">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-green-600">Benjamin</CardTitle>
          <CardDescription className="text-gray-500 mb-4">
            <Image
              src="/images/img_bn.jpg"
              alt="Ben"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
          </CardDescription>
        </CardHeader>
        <CardContent>
        <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2 mx-auto mb-4"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h1 className="text-3xl font-bold text-green-600">
           Learn About Me
        </h1>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <CaretSortIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
      <p className="text-lg text-gray-700 mb-4">I am currently a third year student at The University at Buffalo and pursuing a Bachlors Degree in Computer Science. I am originally from Roslyn, Long Island and I hav 2 sisters. I am passionate about web developmeent, cyber security and I am excited to join the DART team.
      </p>
      </CollapsibleContent>
    </Collapsible>
      
        <p className="text-gray-600">
            Email: <a href="mailto:bdfarhi@buffalo.edu" className="text-blue-500 underline">bdfarhi@buffalo.edu</a>
          </p>
        <IconButton  link="https://www.linkedin.com/in/benjamin-farhi1/" logo={<LinkedInLogoIcon className="h-4 w-4" />}/>
        <IconButton   link="https://github.com/bdfarhi" logo={<GitHubLogoIcon className="h-4 w-4" />}/>
        </CardContent>
      </Card>
  


<Carousel className="max-w-2xl w-full mb-8">
<CarouselContent>
  {interests.map((interest, index) => (
    <CarouselItem key={index}>
        <Card  key={index} className="max-w-2xl w-full mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-600">
              {interest.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
          {Array.isArray(interest.items) && typeof interest.items[0] === "string" ? (
              <ul className="list-disc list-inside text-gray-700">
                {interest.items.map((item, itemIndex) => (
                  typeof item === "string" ? <li key={itemIndex}>{item}</li> : null
                ))}
              </ul>
            ) : (
              <ScrollArea className="h-48 w-full rounded-md border p-4">
                <div className="space-y-4 text-gray-700">
                  {interest.items.map((musician, musicianIndex) => (
                    typeof musician === "object" && musician !== null && "name" in musician ? (
                      <div key={musicianIndex}>
                        <h3 className="font-semibold">{musician.name} ({musician.genre})</h3>
                        <p>Albums: {musician.albums.join(", ")}</p>
                      </div>
                    ) : null
                  ))}
                </div>
              </ScrollArea>
            )}
          </CardContent>
        </Card>
        </CarouselItem>
      ))}
      
      </CarouselContent>
      <CarouselPrevious className="w-12 h-12 p-2 bg-green-600 text-white rounded-full hover:bg-indigo-800 transition-all duration-300" />
      <CarouselNext className="w-12 h-12 p-2 bg-green-600 text-white rounded-full hover:bg-indigo-800 transition-all duration-300"/>
      </Carousel>
    </div>
  );
}
