import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';

// For dart academy we are using Postgresql as our database with Drizzle ORM. But for this example to keep things simple we'll use an array of objects to show abillity to interpolate data dynamically into page template instead of hardcoding
const teamMembers = [
  { name: 'Joss', email: 'joss@dartcollective.net', path: '/team/joss' },
  { name: 'Daniel', email: 'dankoko100@gmail.com', path: '/team/daniel' },
  { name: 'Kriish', email: 'kriishti@buffalo.edu', path: '/team/kriish' },
  { name: 'Benjamin', email: 'bdfarhi@buffalo.edu', path: '/team/benjamin' },
  { name: 'Erick', email: 'erick.tepan124@gmail.com', path: '/team/erick' },
  { name: 'Shubham', email: 'ssoni4@buffalo.edu', path: '/team/shubham' },
];


export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <Link key={member.name} href={member.path}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{member.email}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
