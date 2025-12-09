//Hey, this is a SERVER component!

import { UserButton, useUser } from "@clerk/nextjs"
import { getAuth } from "@clerk/nextjs/server"
import type { NextApiRequest, NextApiResponse } from 'next'

import { checkRole } from "app/utils/roles"
import { redirect } from "next/navigation"

//import Account from "app/pages/account/page"

{/* 
  https://accounts.weaselgames.app/sign-in
  https://accounts.weaselgames.app/sign-up
  https://accounts.weaselgames.app/user
  https://accounts.weaselgames.app/unauthorized-sign-in
  https://accounts.weaselgames.app/organization - don't need
  https://accounts.weaselgames.app/create-organization - don't need
  */}

const DotIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#853A98">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  )
}


const CustomUserButton = () => {
  const { user, isLoaded } = useUser()

    //hard code it for testing only
    const adminID = 'user_36DunqSRu2Afx58qQG8cYzHZbTZ';

    console.log("checked user", user);
  
  if (isLoaded) {
    return (
    <>
  
      <div id="authDIV">

        <UserButton showName>

          <UserButton.MenuItems>
              <UserButton.Link
                label="Account"
                labelIcon={<DotIcon />}
                href="./pages/account"
              />

          {user.organizationMemberships[0].role === "org:admin" ? 

              <UserButton.Link
                label="Admin"
                labelIcon={<DotIcon />}
                href="./pages/admin"
              />
              : ""
          }

          </UserButton.MenuItems>
        </UserButton>
      </div>

    </>
  )
  }

  if (!isLoaded) {
    return <span>Loading...</span>
  }

  return (
    <>
  
      <div id="authDIV">

        <UserButton showName>

          <UserButton.MenuItems>
              <UserButton.Link
                label="Account"
                labelIcon={<DotIcon />}
                href="./pages/account"
              />
          
          </UserButton.MenuItems>
        </UserButton>
      </div>

    </>
  )
}

export default CustomUserButton