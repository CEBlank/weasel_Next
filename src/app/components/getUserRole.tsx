import { redirect } from 'next/navigation'
import { clerkClient } from '@clerk/nextjs/server'
import { checkRole } from 'app/utils/roles'
import { Roles } from '../types/globals'


export default async function AdminCheck({
  params,
}: {
  params: Promise<{ role: Roles }>
}) {
  const { role } = await params
  const adminUser = await checkRole(role)

  return <button>Admin Button</button>
}