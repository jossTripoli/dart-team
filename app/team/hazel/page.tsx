// app/about-me/page.tsx
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
//import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const hobbies = [
  { id: 1, name: "Painting " },
  { id: 2, name: "Reading " },
  { id: 3, name: "Travelling " },
  { id: 4, name: "Music " },
];

const favoriteMusic = [
  { id: 1, artist: "Coldplay", genre: "Alternative Rock" },
  { id: 2, artist: "Taylor Swift", genre: "Pop" }
];


export default function AboutMe() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Profile Section */}
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center text-center">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/images/hazel.jpeg" alt="hazel/'s Photo" />
            <AvatarFallback>YM</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold mt-2">Hi, I'm Hazel Mahajan 👋</h2>
          <p className="text-gray-600">
            I'm passionate about software development, currently I am pursuing my masters in computer science at UB !
          </p>
          <Button className="mt-4">Contact Me</Button>
        </CardContent>
      </Card>

      {/* Hobbies Section */}
      <Card>
        <CardHeader>
          <CardTitle>Hobbies</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-2 gap-4">
            {hobbies.map((hobby) => (
              <li key={hobby.id} className="p-2 border rounded-md text-center bg-gray-100">
                {hobby.name}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Favorite Music Accordion */}
      <Card>
        <CardHeader>
          <CardTitle>Favorite Music 🎶</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            {favoriteMusic.map((music) => (
              <AccordionItem key={music.id} value={`music-${music.id}`}>
                <AccordionTrigger>{music.artist}</AccordionTrigger>
                <AccordionContent>
                  Genre: {music.genre}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
