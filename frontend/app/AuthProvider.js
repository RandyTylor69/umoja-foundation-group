"use client";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  const isLoggedIn = async () => {
    if (!loading && user) return;
    try {


      // Now attempt to get the user
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`,
        {
          headers: {
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest", // Tells Laravel this is an AJAX call
          },
          credentials: "include",
        },
      );

      if (res.ok) {
        const data = await res.json();
        setUser(data); // Store the actual user object instead of just 'true'
      } else {
        setUser(false);
      }
    } catch (err) {
      console.error("Auth check failed:", err);
      setUser(false);
    } finally {
      setLoading(false); // Stop the cycle
    }
  };

  useEffect(() => {
    
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
