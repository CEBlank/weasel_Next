"use client";


import { auth0 } from "../lib/auth0"
import { redirect } from "next/navigation";
//import Link from "next/link";


export default function LoginButton() {

  return (

  <div
      id="profileRoute"
      className="flex">  
      <div
        className="mx-3">
          <a
            className="text-sm"
            id="logInOut"
            href="auth/login"
            >
              Login
          </a> 
      </div>
  </div>

  );
} 