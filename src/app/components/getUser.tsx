"use client"

import { NextResponse, NextRequest } from 'next/server'
import { auth } from '@clerk/nextjs/server'

export default async function Page() {
  await auth.protect();

  return <h1>Protected</h1>;
}