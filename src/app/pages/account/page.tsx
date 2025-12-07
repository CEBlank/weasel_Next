'use client'

//import { auth } from '@clerk/nextjs/'
import { useAuth, UserButton, useUser } from "@clerk/nextjs"
//import { useState } from "react";

import Toggle from "app/components/Toggle";
import JSONOutput from "app/components/JSONOutput";


import { PhotoIcon } from "@heroicons/react/24/outline";
import { UserProfile } from "@clerk/nextjs"

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function Account() {
  const { isLoaded, user } = useUser();
  //const { isLoaded } = useAuth();
  //const [jsonOutput, setJsonOutput] = useState(false); //see if we need this useState

  return (
  <div>
    {isLoaded && user ? (
      <div>
        <form 
          className="flex justify-center mt-2"
          id="profileForm">
          <div>
            <div className="border-b border-gray-400 mx-5">
              <h2 className="font-semibold border-b border-gray-400">
                Account Details
              </h2>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                  {user.emailAddresses.map((email) => (
                    <div key={email.id} className="flex gap-2 mb-1">
                      {email.emailAddress}
                      {user.primaryEmailAddressId === email.id && (
                        <span className="text-xs bg-primary-50 text-primary-700 rounded-2xl px-2 font-medium pt-[2px]">
                          Primary
                        </span>
                      )}
                    </div>
                  ))}
                    <label 
                      htmlFor="username" 
                      className="block text-sm/6 font-medium"
                      id="profileLabel">
                      {user.fullName}
                      {user.username}
                    </label>

                  </div>

                  <div className="col-span-full">
                    <label 
                      id="profileLabel"
                      htmlFor="photo" 
                      className="block text-sm/6 font-medium">
                      Profile Picture
                    </label>
                    <div className="mt-2 flex justify-start gap-x-3">

                 {/* Put the user pfp here */}

                  <img 
                    id="pfp"
                    src={user.imageUrl || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110' viewBox='0 0 110 110'%3E%3Ccircle cx='55' cy='55' r='55' fill='%2363b3ed'/%3E%3Cpath d='M55 50c8.28 0 15-6.72 15-15s-6.72-15-15-15-15 6.72-15 15 6.72 15 15 15zm0 7.5c-10 0-30 5.02-30 15v3.75c0 2.07 1.68 3.75 3.75 3.75h52.5c2.07 0 3.75-1.68 3.75-3.75V72.5c0-9.98-20-15-30-15z' fill='%23fff'/%3E%3C/svg%3E`} 
                    alt={user.username || 'User'} 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110' viewBox='0 0 110 110'%3E%3Ccircle cx='55' cy='55' r='55' fill='%2363b3ed'/%3E%3Cpath d='M55 50c8.28 0 15-6.72 15-15s-6.72-15-15-15-15 6.72-15 15 6.72 15 15 15zm0 7.5c-10 0-30 5.02-30 15v3.75c0 2.07 1.68 3.75 3.75 3.75h52.5c2.07 0 3.75-1.68 3.75-3.75V72.5c0-9.98-20-15-30-15z' fill='%23fff'/%3E%3C/svg%3E`;
                    }}
                  />

                  {/*   <UserCircleIcon 
                        aria-hidden="true" 
                        className="size-12" 
                        id="photoIcon"/> */}
                    </div>

                  </div>

                </div>
            </div>
          </div>

        </form>
    
        <div className="flex justify-center border-b border-gray-400 mx-25 mt-5">
            <h2 className="font-semibold border-gray-400">
              Order History
            </h2>
        </div>
        <div
          id="orderHistory" 
          className="flex justify-center mt-2">
            <p>You haven't ordered anything yet.</p>
          </div>

      </div>


    ) : (
      <div>Loading...</div>
    )
  }
  </div>
)
}




