//Hey, this is a SERVER component!

import { useAuth, UserButton } from "@clerk/nextjs"
import AdminCheck from "./getUserRole"

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
  const { isLoaded } = useAuth()


  if (!isLoaded) {
    return <span>Loading...</span>
  }

  //const isAdmin = has({ feature: 'admin' })

  return (
    <>
    
      <div id="authDIV">

        <UserButton showName>

          <UserButton.MenuItems>
              <UserButton.Link
                label="Profile"
                labelIcon={<DotIcon />}
                href="https://accounts.weaselgames.app/user"
              />
          
          </UserButton.MenuItems>
        </UserButton>
      </div>
    </>
  )
}

export default CustomUserButton