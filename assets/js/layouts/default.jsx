import { Link } from "inertia-adapter-solid"

export default function Layout(props) {
  return (
    <>
      <div class="flex gap-2">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/about">About</Link>
      </div>
      {props.children}
    </>
  )
}
