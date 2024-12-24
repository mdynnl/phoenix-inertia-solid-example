import { createInertiaApp } from "inertia-adapter-solid"
import { hydrate } from "solid-js/web"
import { resolve } from "./resolve.js"

createInertiaApp({
  resolve,
  setup: ({ el, App, props }) => hydrate(() => <App {...props} />, el),
})
