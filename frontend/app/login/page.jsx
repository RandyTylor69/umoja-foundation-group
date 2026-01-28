"use client";
import { useState, useContext } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/AuthProvider";

export default function () {
  const context = useContext(AuthContext);
  const { user, setUser } = context;
  const router = useRouter();
  const [authType, setAuthType] = useState("login"); // login or signup

  const logIn = async (input) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      if (!res.ok) {
        alert("Please create a new account first!");
        throw new Error("Login failed. Response status:", response.status);
      }
      const data = await res.json();

      console.log(data);

      // If user enters wrong password
      if (data.message == "Password / username incorrect") {
        
        alert(data.message);
        return;
      }

      setUser(true);

      alert("Successful Login!");
      router.push("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  const register = async (input) => {
    // 2. Post the login data to MySQL.
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: input.username,
            password: input.password,
          }),
        },
      );
      if (!res.ok) {
        alert(res.message);
        throw new Error("Sign up failed. Response status:", response.status);
      }
      alert("Account created!");
      setUser(true);
      router.push("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSubmit = (formData) => {
    const input = Object.fromEntries(formData.entries());

    if (authType == "login") {
      logIn(input);
    } else register(input);
  };

  return (
    <div
      className="w-screen h-screen
        flex justify-center items-center"
    >
      <form
        action={handleSubmit}
        className={`h-100 w-80 rounded-2xl bg-secondary relative
        flex flex-col justify-center items-center gap-4`}
      >
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute top-2 left-2 !bg-secondary !text-black !border-secondary"
        >
          <IoMdArrowBack />
        </button>

        <label>Name</label>
        <input name="username" required placeholder="John Doe" />

        <label>Password</label>
        <input name="password" type="password" required />

        <button type="submit" className="mt-4">
          {authType == "login" ? "Log In" : "Sign Up"}
        </button>
        <span
          className="text-black/40 text-sm underline cursor-pointer"
          onClick={() =>
            setAuthType((prev) => (prev == "login" ? "signup" : "login"))
          }
        >
          {authType == "login"
            ? "New user? Sign up here"
            : "Log in with existing account"}
        </span>
      </form>
    </div>
  );
}
