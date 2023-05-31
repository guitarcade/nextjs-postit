"use client";

import { signOut } from "next-auth/react";

export default async function Logout({ username }: { username: string }) {
  return (
    <>
      <li>{username}</li>
      <li className="list-none">
        <button
          className="text-sm bg-gray-700 text-white py-2 px-6 disabled:opacity-25 rounded-xl"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </li>
    </>
  );
}
