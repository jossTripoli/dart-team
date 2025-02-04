import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const interests = [
  {
    title: "Favorite Video Games",
    items: ["Rocket League", "GTA V"],
  },
  {
    title: "Favorite Sports",
    items: ["Cricket", "Swimming"],
  },
  {
    title: "Art & Craft Interests",
    items: ["Clothing and Footwear Design", "Hip Hop"],
  },
  {
    title: "Favorite Musicians",
    items: [
      {
        name: "Travis Scott",
        genre: "Rap/Hip Hop",
        albums: ["Days Before Rodeo", "Rodeo", "Astroworld"],
      },
      {
        name: "Future",
        genre: "Rap/Hip Hop",
        albums: ["DS2", "We Don't Trust You", "FUTURE"],
      },
      {
        name: "Kendrick Lamar",
        genre: "Rap/Hip Hop",
        albums: ["DAMN", "TPAB", "good kid m.A.A.d city"],
      },
    ],
  },
];

export default function Kriish() {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-4/12 h-96 m-6 bg-gradient-to-br from-violet-400 via-fuchsia-500 to-pink-600">
        <CardHeader className="flex flex-col items-center">
          <CardTitle>
            <span className="text-transparent bg-gradient-to-r from-slate-700 via-gray-800 to-zinc-900 bg-clip-text font-semibold text-3xl">
              Kriish
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center mt-6 space-x-6  leading-relaxed ">
          <Avatar className="w-5/12 h-1/4 rounded-lg shadow-lg">
            <AvatarImage
              src="/images/KriishImg.jpeg"
              alt="Kriish's Profile Image"
            />
            <AvatarFallback>KT</AvatarFallback>
          </Avatar>
          <p className=" font-semibold font-mono text-neutral-900 text-xl">
            I am a sophomore at University at Buffalo. I am originally from
            Mumbai, India and love to learn more about the subject of computer
            science.
          </p>
        </CardContent>
      </Card>
      {interests.map((interest, index) => (
        <Card
          key={index}
          className="m-16 w-4/12 h-64 bg-gradient-to-br from-violet-400 via-fuchsia-500 to-pink-600"
        >
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {interest.title}
              <Separator className="bg-slate-900" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[150px] w-full rounded-md p-1 overflow-y-auto">
              <ul className="list-disc p-5 text-2xl font-semibold">
                {interest.items.map((item, index) => (
                  <li key={index} className="text-black ">
                    {typeof item === "string" ? item : item.name}
                    {typeof item !== "string" && item.albums && (
                      <ul className="list-disc pl-5 ">
                        {item.albums.map((album, albumIndex) => (
                          <li
                            key={albumIndex}
                            className="text-black font-mono text-xl"
                          >
                            {album}
                          </li>
                        ))}
                      </ul>
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
