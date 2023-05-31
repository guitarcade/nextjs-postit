import Link from "next/link";
import Login from "./login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Logout from "./logout";

export default async function Nav() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>
        <h1 className="font-bold text-lg">Send it</h1>
      </Link>
      <ul className="flex items-center gap-6">
        {!session ? (
          <>
            {/* @ts-expect-error Client Component */}
            <Login />
          </>
        ) : (
          <>
            {/* @ts-expect-error Client Component */}
            <Logout username={session.user.name} />
          </>
        )}
      </ul>
    </nav>
  );
}
