import type { PropsWithChildren } from 'react'
import { Protect } from '@clerk/nextjs'

export default function Admin() {

//role org:admin works, permissions org:admin did not... Progress!

  return (
    <Protect
      role='org:admin'
      fallback={<p>Only an Admin or Billing Manager can access this content.</p>}
    >
      <p>The settings page.</p>
    </Protect>
  )
}