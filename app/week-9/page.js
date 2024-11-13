// week-9/page.js

"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

const HomePage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gray-900">
      {user ? (
        <div className="text-center">
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button
            onClick={firebaseSignOut}
            className="mt-4 px-4 py-2 bg-red-500 rounded"
          >
            Log Out
          </button>
          <Link href="/week-9/shopping-list" className="mt-4 block text-blue-500 underline">
            Go to Shopping List
          </Link>
        </div>
      ) : (
        <div className="text-center">
          <button
            onClick={gitHubSignIn}
            className="px-4 py-2 bg-blue-500 rounded"
          >
            Log In with GitHub
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
