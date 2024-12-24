export default function About(props) {
  return (
    <div class="bg-red-300">
      About
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
