"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignUp() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1>SIGNUP</h1>
      <div className="my-2 flex flex-col">
        <label htmlFor="userName">Name</label>
        <input
          className=" my-2 p-1 text-black rounded outline-none"
          id="userName"
          type="text"
          placeholder="userName"
          autoComplete="off"
          value={user.userName}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
        />
      </div>
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
      <button className="bg-gray-400 text-black my-2 px-2 py-1 rounded">
        Submit
      </button>
      <Link href="/login">login</Link>
    </div>
  );
}
