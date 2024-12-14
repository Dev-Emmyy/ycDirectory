"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" width={144} height={30} alt="Logo" />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session?.user ? (
            <>
              <Link href="/startup/create"> 
                <span>Create</span>
              </Link>

              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                <span>Logout</span>
              </button>

              <Link href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <button
              onClick={() => signIn("github")}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
