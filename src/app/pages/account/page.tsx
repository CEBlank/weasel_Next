
//import { auth } from '@clerk/nextjs/'
import { PhotoIcon } from "@heroicons/react/24/outline";
import { UserProfile } from "@clerk/nextjs"

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const Account = () => {


return(
  <>
    <UserProfile />
  </>

)
};

export default Account;





