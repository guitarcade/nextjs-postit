"use client";

import { signIn } from "next-auth/react";

export default async function Login() {
  return (
    <li className="list-none">
      <button
        className="text-sm bg-gray-700 text-white py-2 px-6 disabled:opacity-25 rounded-xl"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </li>
  );
}
