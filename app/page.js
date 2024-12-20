import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto p-4 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      
      <ul className="mt-4">
        <li>
          <Link href="/week-2" className="text-white hover:text-green-500 hover:underline">
            Week 2 Assignment
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/week-3" className="text-white hover:text-green-500 hover:underline">
            Week 3 Assignment
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/week-4" className="text-white hover:text-green-500 hover:underline">
            Week 4 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-5" className="text-white hover:text-green-500 hover:underline">
            Week 5 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-6" className="text-white hover:text-green-500 hover:underline">
            Week 6 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-7" className="text-white hover:text-green-500 hover:underline">
            Week 7 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-8" className="text-white hover:text-green-500 hover:underline">
            Week 8 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-9" className="text-white hover:text-green-500 hover:underline">
            Week 9 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-10" className="text-white hover:text-green-500 hover:underline">
            Week 10 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}
