export default function Dashboard(props) {
  return (
    <div class="bg-red-300">
      Dashboard
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
