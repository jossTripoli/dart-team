'use client';
import React from 'react';
import Image from 'next/image';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

import HelloButton from './_components/HelloButton';

const interests = [
  {
    title: "Favorite Video Games",
    items: [
      "Paper Mario: The Thousand Year Door",
      "Viva Pinata: Trouble In Paradise",
      "Pikmin 2",
      "Currently Playing: Psychonauts 2",
    ],
  },
  {
    title: "Pet",
    items: ["Pumpkin the Lutino cockatiel"],
  },
  {
    title: "Favorite Sports",
    items: ["Tennis", "Football - Go Birds", "Bicycling", "Swimming"],
  },
  {
    title: "Art & Craft Interests",
    items: [
      "Resin Craft",
      "Fiber Arts",
      "Pixel Art",
      "Wood Carving",
      "3D Printing",
      "Crafting",
    ],
  },
  {
    title: "Favorite Musicians",
    items: [
      {
        name: "Beyoncé",
        genre: "Pop/R&B",
        albums: [
          "Lemonade",
          "Dangerously In Love",
          "4",
          "B'Day",
          "I Am... Sasha Fierce",
          "BEYONCÉ",
          "The Lion King: The Gift",
        ],
      },
      {
        name: "Faouzia",
        genre: "Pop",
        albums: ["Citizens", "Stripped"],
      },
      {
        name: "Utada Hikaru",
        genre: "J-Pop",
        albums: ["First Love", "Deep River", "Fantôme", "Hatsukoi"],
      },
      {
        name: "Pabllo Vittar",
        genre: "Pop",
        albums: [
          "Vai Passar Mal",
          "111",
          "Não Para Não",
          "Batidão Tropical",
          "Noitada",
        ],
      },
      {
        name: "Måneskin",
        genre: "Rock",
        albums: ["Il ballo della vita", "Teatro d'ira: Vol. I", "Rush!", "Chosen"],
      },
    ],
  },
];

export default function JossPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50 flex flex-col items-center">
      {/* Card for Joss's Introduction */}
      <Card className="max-w-2xl w-full mb-8">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-indigo-600">Joss</CardTitle>
          <CardDescription className="text-gray-500 mb-4">
            <Image
              src="/images/IMG_0374.jpg"
              alt="Joss"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 mb-4">
            I graduated from Lehigh University in 2023 with a degree in Computer Science. I am originally from Bucks County, Pennsylvania and have a fraternal twin along with three brothers. I am passionate about web development and educational technology, and I am excited to be working on DART Academy.
          </p>
          <p className="text-gray-600">
            Email: <a href="mailto:joss@dartcollective.net" className="text-blue-500 underline">joss@dartcollective.net</a>
          </p>
          < HelloButton />
        </CardContent>
      </Card>

      {/* Render Interests Sections Dynamically */}
      {interests.map((interest, index) => (
        <Card key={index} className="max-w-2xl w-full mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-600">{interest.title}</CardTitle>
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
      ))}
    </div>
  );
}
