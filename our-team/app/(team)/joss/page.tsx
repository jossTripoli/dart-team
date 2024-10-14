import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function Joss() {
  return (
    <div className="min-h-screen p-8 bg-gray-50 flex justify-center items-center">
      <Card className="max-w-lg w-full bg-white shadow-md rounded-lg p-6">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-indigo-600">Joss</CardTitle>
          <CardDescription className="text-gray-600">Full-stack Developer</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mt-4 text-gray-700">
            Joss about me bio
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
