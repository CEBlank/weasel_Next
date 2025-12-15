import type { PropsWithChildren } from 'react'
import { Protect } from '@clerk/nextjs'

export default function Admin() {

//role org:admin works, permissions org:admin did not... Progress!

  return (
    <Protect
      role='org:admin'
      fallback={<p>Only an Admin can access this content.</p>}
    >
  <div className="mx-auto max-w-2xl px-4 py-20 sm:px-20 sm:py-5 lg:max-w-7xl lg:px-8 bg-white">
        <form 
          className="flex border rounded shadow-fuchsia-950 shadow-md justify-center my-20 py-10"
          id="profileForm">
          <div>
            <div className="border-b border-gray-400 mx-5">
              <h2 className="font-semibold border-b border-gray-400">
                Admin Portal
              </h2>
                  <a 
                    href="#">
                    Manage Inventory
                  </a>
                  <br />
                  <a 
                    href="#">
                    Manage Orders
                  </a>
                  <br />
                  <a 
                    href="#">
                    Manage Events
                  </a>
                  <br />
                    
                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-5">
                  <div className="sm:col-span-4">
                  <h2>
                    Past Special Event Schedule
                  </h2>
                    <br />
                    <a
                      href="#">
                      - Yu-Gi-Oh Tournament
                    </a>
                    <br />
                    <a
                      className='mb-3'
                      href="#">
                      - Magic:The Gathering Tournament
                    </a>
                    <br />
                  </div>

                </div>
            </div>
          </div>

        </form>
      </div>
    </Protect>
  )
}