import Link from 'next/link'

export default function Home() {
  return (
    <main>
      Home Page
      <br />
      <br />
      <Link href="/users">Users</Link>
    </main>
  )
}
