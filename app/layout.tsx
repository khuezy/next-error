import './globals.css'
import { createClient } from '@libsql/client'

const client = createClient({
  url: 'libsql://test.turso.io',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const r = await client.execute(`select 1;`)

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{JSON.stringify(r)} {children}</body>
    </html>
  )
}
