import Layout from "./layouts/default.jsx"

export async function resolve(name) {
  const { default: page } = await import(`./pages/${name}.jsx`)
  page.layout ??= Layout
  return page
}
