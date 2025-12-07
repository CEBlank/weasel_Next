import type { PropsWithChildren } from 'react'
import { Protect } from '@clerk/nextjs'

export default function Admin() {
  return (
    <Protect
      feature='org:admin'
      fallback={<p>Only an Admin or Billing Manager can access this content.</p>}
    >
      <p>The settings page.</p>
    </Protect>
  )
}