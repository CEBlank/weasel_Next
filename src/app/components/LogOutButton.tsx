"use client";

import Link from "next/link";

export default function LogoutButton() {
  return (
    <div
      id="profileRoute"
      className="flex">  
        <div
          className="mx-3">
          <Link 
            className="text-sm"
            href="/pages/account"
            id="userIcon">
                Account
          </Link> 
        </div>

        <div className="border-l pl-2">
          <Link 
            className="text-sm"
            id="logInOut"
            href="/auth/logout">
              Log Out
          </Link> 
        </div>
    </div>
  );
}