import { createInertiaApp } from "inertia-adapter-solid"
import { resolve } from "./resolve.js"

export function render(page) {
  return createInertiaApp({
    page,
    resolve,
  })
}
