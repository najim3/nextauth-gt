"use client";
import Link from "next/link";
import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name | !email | !password) {
      setError("All fields are necessary.");
      return;
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg rounded-lg p-5 border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button
            className="bg-green-600 text-white font-bold px-6 py-2
      cursor-pointer"
          >
            Register
          </button>

          {error && (
            <div
              className="bg-red-500 text-white w-fit
      text-sm py-1 px-3 rounded-md mt-2"
            >
              {error}
            </div>
          )}
          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
