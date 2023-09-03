"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const UserInfo = () => {
  const { data: session } = useSession();

  return (
    <div className="grid place-items-center h-screen">
      <div
        className="flex flex-col shadow-xl p-8 py-6
      gap-2 bg-zinc-300/10 "
      >
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 px-6 py-2 mt-3 text-white font-bold"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
