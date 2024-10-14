import Image from 'next/image';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"

const interests = [
  {
    title: "Favorite Anime", 
    items: [
      "One piece",
      "Full-metal Alchemist: Brother-hood", 
      "Hunter x Hunter"
    ], 
  }, 
  {
    title: "Favorite Sports",
    items: [
      "Soccer",
      "Volleyball",
      "Tennis",
      "Pickleball",
      "Badmiton"
    ],
  },
  {
    title: "Favorite Musicians",
    items: [
      "King Gnu", 
      "Kenshi Yonezu",
      "Elevation Worship", 
      "Ado",
      "Gibran Alcocer"
    ],
  }, 
  {
    title: "Hobbies",
    items: [
      "Playing Soccer", 
      "Drawing/Digital Art", 
      "Reading Manga", 
      "Playing Board Games"
    ],
  }
];

export default function Daniel() {
  return (
    <div className="min-h-screen p-8 bg-gray-50 flex flex-col items-center">
      {/* <h1 className="text-4xl font-bold text-indigo-600 mb-4">Daniel</h1> */}
      <Card className="max-w-2xl w-full mb-8 bg-indigo-500">
        <CardHeader>
          <CardTitle className="text-blue-300 font-extrabold text-4xl italic">Daniel</CardTitle>
            <CardDescription>
            <Image
              src="/images/daniel.jpg"
              alt="Daniel"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-blue-300">
            I am a Junior studying Computer Science in the University at Buffalo. I am from Nigeria. My technical interests are in Full-stack Development and Web Design and i am looking forward to working with DART.
          </p>
        </CardContent>
      </Card>


      {/* Dynamically rendering interests section */}
      {interests.map((interests, index) => (
        <Card key={index} className="max-w-2xl w-full mb-8 bg-indigo-500">

          <CardHeader>
            <CardTitle className="text-blue-300 font-extrabold text-4xl italic">{interests.title}</CardTitle>
          </CardHeader>

          <CardContent>
            {Array.isArray(interests.items) && typeof interests.items[0] === "string" ? (
              <ul className="text-blue-300 list-disc">
                {interests.items.map((item, itemIndex) => (
                  typeof item === "string" ? <li key={itemIndex}>{item}</li> : null
                ))}
              </ul>
            ) : null
           }
          </CardContent>

        </Card>
      ))}
    </div>
  );
}
