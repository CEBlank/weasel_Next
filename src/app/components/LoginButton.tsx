"use client";

//import './envConfig.ts'
import Link from "next/link";

export default function LoginButton() {

  const logUrl = process.env.AUTH0_ISSUER_BASE_UR;

  console.log(logUrl);

  return (

  <div
      id="profileRoute"
      className="flex">  
      <div
        className="mx-3">
          <Link 
            className="text-sm"
            id="logInOut"
            href="/auth/login"
            //href={logUrl}
            >
              Login
          </Link> 
      </div>
  </div>

  );
} 