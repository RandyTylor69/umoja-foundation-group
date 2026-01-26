"use client";
import { useState, useContext } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/layout";

export default function () {
  const context = useContext(AuthContext);
  const { user, setUser } = context;
  const router = useRouter();
  const [authType, setAuthType] = useState("login"); // login or signup
  const logIn = async (input) => {
    /* 1. Pin the server to get a security token in order to log in,
          this "csrf" token ensures Laravel that the next request 
          comes from the React app, not some weird randomware.
    */
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`, {
      credentials: "include",
    });

    // 2. Post the login data to MySQL.
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-XSRF-TOKEN": decodeURIComponent(
            document.cookie
              .split("; ")
              .find((row) => row.startsWith("XSRF-TOKEN="))
              ?.split("=")[1],
          ),
        },
        body: JSON.stringify(input),
        credentials: "include",
      });
      if (!res.ok) {
        alert("Please create a new account first!");
        throw new Error("Login failed. Response status:", response.status);
      }
      setUser(true);
      alert("Successful Login!")
      router.push("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  const signUp = async (input) => {
    /* 1. Pin the server to get a security token in order to log in,
          this "csrf" token ensures Laravel that the next request 
          comes from the React app, not some weird randomware.
    */
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`, {
      credentials: "include",
    });

    // 2. Post the login data to MySQL.
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-XSRF-TOKEN": decodeURIComponent(
              document.cookie
                .split("; ")
                .find((row) => row.startsWith("XSRF-TOKEN="))
                ?.split("=")[1],
            ),
          },
          body: JSON.stringify({
            name: input.name,
            email: input.email,
            password: input.password,
            password_confirmation: input.password_confirmation,
          }),
          credentials: "include",
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
    } else signUp(input);
  };

  return (
    <div
      className="w-screen h-screen
        flex justify-center items-center"
    >
      <form
        action={handleSubmit}
        className={`${authType == "login" ? "h-100" : "h-180"} w-80 rounded-2xl bg-secondary relative
        flex flex-col justify-center items-center gap-4`}
      >
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute top-2 left-2 !bg-secondary !text-black !border-secondary"
        >
          <IoMdArrowBack />
        </button>
        {authType == "signup" && (
          <>
            {" "}
            <label>Name</label>
            <input name="name" required placeholder="John Doe" />
          </>
        )}

        <label>Email</label>
        <input
          name="email"
          type="email"
          required
          placeholder="johndoe@gmail.com"
        />
        <label>Password</label>
        <input name="password" type="password" required />

        {authType == "signup" && (
          <>
            <label>Confirm Password</label>
            <input name="password_confirmation" type="password" required />
          </>
        )}

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
