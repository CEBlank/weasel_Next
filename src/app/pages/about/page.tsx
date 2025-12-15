import { teamMembers } from "app/lib/products";

const About = () => {

  const team = teamMembers;

  return (
    <>
  <div className="mx-auto max-w-2xl px-4 sm:px-6 py-5 sm:py-5 lg:max-w-7xl lg:px-8 bg-white">
    <div 
      className="mx-20 mb-3 text-center border rounded shadow-md shadow-fuchsia-950">
      <h1
        className="mb-3">About Weasel Games</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <br />
      <div>

      </div>

    </div>
    


    <div className="mx-10 py-14 sm:py-15 border rounded shadow-md shadow-fuchsia-950">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
            Meet our Team
          </h2>
          <p className="mt-6 text-lg/8">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <ul role="list" className="grid gap-x-5 gap-y-10 sm:grid-cols-2 sm:gap-y-10 xl:col-span-2">
          {team.map((person) => (
            <li
              className="border rounded shadow-fuchsia-950 shadow-sm p-4" 
              key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.image}
                  className="size-20 rounded-full outline-1 -outline-offset-1 outline-white/10"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight">{person.name}</h3>
                  <p className="text-sm/6 font-semibold">{person.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
    </div>
    </>
  )
}

export default About;