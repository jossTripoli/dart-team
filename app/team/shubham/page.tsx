"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const interests = [
    {
        title: "Favorite Video Games",
        items: ["GTA 5", "Far Cry 4"],
      },
      {
        title: "Favorite Films and TV",
        items: ["3 Idiots", "The Shawshank Redemption", "Lord of the Rings"],
      },
      {
        title: "Favorite Sports",
        items: [
          "Cricket", 
          "Badminton",
          "Swimming"
        ]
      },
      {
        title: "Favorite Artists",
        items: [
        { name: "Amit Trivedi", genre: "Bollywood" },
        { name: "Shaan", genre: "Bollywood" },
        ],
      },
];

export default function Shubham() {
  return (
    <div className="flex flex-col items-center gap-8 p-10 bg-blue-50">
      <Card className="w-8/12 h-auto p-6 bg-gradient-to-br from-indigo-300 to-blue-500 shadow-lg border border-blue-300 rounded-lg">
        <CardHeader className="flex flex-col items-center">
          <CardTitle>
            <span className="text-white font-bold text-3xl">Shubham</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center mt-4 space-y-4 leading-relaxed">
          <Avatar className="w-48 h-51 rounded-full shadow-md border-2 border-white">
            <AvatarImage src="/images/shubham.jpg" alt="Shubham's Profile Image" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
          <p className="font-medium text-white text-lg text-center">
            I am a CS Graduate Student at University at Buffalo with over two years of experience in Full stack development back in India. My hobbies include swimming, biking, and badminton.
          </p>
        </CardContent>
      </Card>
      {interests.map((interest, index) => (
        <Card
          key={index}
          className="w-8/12 h-auto p-4 bg-gradient-to-r from-orange-300 to-rose-500 shadow-xl border border-rose-400 rounded-lg"
        >
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-white text-center">
              {interest.title}
              <Separator className="bg-white mt-2" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-auto w-full rounded-md p-2">
              <ul className="list-disc p-5 text-md font-medium text-white">
                {interest.items.map((item, index) => (
                  <li key={index} className="text-white">
                    {typeof item === "string" ? item : item.name}
                    {typeof item !== "string" && item.genre && (
                      <span className="text-gray-200 font-serif text-sm ml-2">({item.genre})</span>
                    )}
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
