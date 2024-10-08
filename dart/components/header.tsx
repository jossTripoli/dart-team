import Link from 'next/link';

export const Header = () => {
  return (
    <header className="h-20 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-between px-6 shadow-md">
      <div className="text-3xl font-bold">
        <Link href="/">
          DART
        </Link>
      </div>
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="text-white hover:text-gray-300 transition-colors duration-200">Home</Link>
        <Link href="/team/joss" className="text-white hover:text-gray-300 transition-colors duration-200">Joss</Link>
        <Link href="/team/daniel" className="text-white hover:text-gray-300 transition-colors duration-200">Daniel</Link>
        <Link href="/team/kriish" className="text-white hover:text-gray-300 transition-colors duration-200">Kriish</Link>
        <Link href="/team/benjamin" className="text-white hover:text-gray-300 transition-colors duration-200">Benjamin</Link>
        <Link href="/team/erick" className="text-white hover:text-gray-300 transition-colors duration-200">Erick</Link>
      </nav>
    </header>
  );
};
