"use client";

import { useState } from "react";
import Link from "next/link"

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1>LOGIN</h1>
      <div className="my-2 flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          className=" my-2 p-1 text-black rounded outline-none"
          id="email"
          type="email"
          placeholder="email"
          autoComplete="off"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="my-2 flex flex-col">
        <label htmlFor="password">password</label>
        <input
          className=" my-2 p-1 text-black rounded outline-none"
          id="password"
          type="password"
          placeholder="password"
          autoComplete="off"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button className="bg-gray-400 my-2 text-black px-2 py-1 rounded">
        Submit
      </button>
      <Link href="/signup">SignUp</Link>
    </div>
  );
}
