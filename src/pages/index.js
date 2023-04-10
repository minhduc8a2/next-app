import Link from "next/link"

export default function Home() {
  return (
    <nav>
      <Link href={"/dictionary"}>Dictionary</Link>
    </nav>
  )
}
