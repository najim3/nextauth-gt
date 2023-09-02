import React from "react";

const UserInfo = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div
        className="flex flex-col shadow-xl p-8 py-6
      gap-2 bg-zinc-300/10 "
      >
        <div>
          Name: <span className="font-bold">Najim</span>
        </div>
        <div>
          Email: <span className="font-bold">najim@gmail.com</span>
        </div>
        <button className="bg-red-500 px-6 py-2 mt-3 text-white font-bold">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
