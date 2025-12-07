import { useAuth, UserButton } from "@clerk/nextjs"

import Account from "app/pages/account/page"

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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  )
}

const CustomPage = () => {
  return (
    <div>
      <h1>Custom page</h1>
      <p>This is the content of the custom page.</p>
    </div>
  )
}

const CustomUserButton = () => {
  const { has, isLoaded } = useAuth()

  if (!isLoaded) {
    return <span>Loading...</span>
  }

  const isAdmin = has({ permission: 'org:app:admin' })

  return (
    <>
    
      <div id="authDIV">

        <UserButton showName>

          <UserButton.MenuItems>
              <UserButton.Link
                label="Profile"
                labelIcon={<DotIcon />}
                href="./pages/account"
              />



            {isAdmin &&
            (
                <UserButton.Link
                  label="Admin Only"
                  labelIcon={<DotIcon />}
                  href="./pages/admin"
                />
            )}

          </UserButton.MenuItems>
        </UserButton>
      </div>
    </>
  )
}

export default CustomUserButton