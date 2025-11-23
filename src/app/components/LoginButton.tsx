"use client";

import Link from "next/link";

export default function LoginButton() {

  return (

  <div
      id="profileRoute"
      className="flex">  
      <div
        className="mx-3">
          <Link 
            className="text-sm"
            id="logInOut"
            href="/auth/login">
              Login
          </Link> 
      </div>
  </div>

  );
} 