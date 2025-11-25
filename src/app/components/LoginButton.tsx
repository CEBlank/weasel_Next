"use client";

//import Link from "next/link";
import { loadEnvConfig } from "@next/env";


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