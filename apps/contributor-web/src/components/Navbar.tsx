import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { options } from '@/app/api/auth/[...nextauth]/options';

const Navbar = async () => {
  const session = await getServerSession(options);

  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="flex gap-x-4">
          <li>
            <Link href="/#demoVideo" className="text-purple-600 hover:text-purple-400 transition duration-300">
              Demo
            </Link>
          </li>
          <li>
            <Link href="/#Features" className="text-purple-600 hover:text-purple-400 transition duration-300">
              Features
            </Link>
          </li>
          <li>
            <Link href="/#Community" className="text-purple-600 hover:text-purple-400 transition duration-300">
              Community
            </Link>
          </li>
        </ul>
        <div className="flex gap-x-4">
       
       {!session ? (
  <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
    <Link href="/sign-in">
      Sign In
    </Link>
  </button>
) : (
  <>
    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
      <Link href="/profile">
        Profile
      </Link>
    </button>
    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
      <Link href="/sign-out">
        Sign Out
      </Link>
    </button>
  </>
)}        </div>
      </div>
    </nav>
  );
};

export default Navbar;