const esbuild = require("esbuild")
const { solidPlugin } = require("esbuild-plugin-solid")

const args = process.argv.slice(2)
const watch = args.includes("--watch")
const deploy = args.includes("--deploy")
const ssr = args.includes("--ssr")

/** @type {esbuild.BuildOptions['loader']} */
const loader = {}

/** @type {esbuild.BuildOptions['plugins']} */
const plugins = [
  solidPlugin({
    solid: {
      hydratable: true,
      generate: ssr ? "ssr" : "dom",
    },
  }),
]

/** @type {esbuild.BuildOptions} */
let csrOpts = {
  entryPoints: ["js/app.jsx"],
  bundle: true,
  logLevel: "info",
  target: "es2020",
  outdir: "../priv/static/assets",
  external: ["*.css", "fonts/*", "images/*"],
  nodePaths: ["../deps"],
  loader: loader,
  plugins: plugins,
}

/** @type {esbuild.BuildOptions} */
let ssrOpts = {
  entryPoints: ["js/ssr.jsx"],
  bundle: true,
  logLevel: "info",
  target: "es2020",
  platform: "node",
  outdir: "../priv/",
  nodePaths: ["../deps"],
  loader: loader,
  plugins: plugins,
}

let opts = ssr ? ssrOpts : csrOpts

if (deploy) {
  opts = {
    ...opts,
    minify: true,
  }
}

if (watch) {
  opts = {
    ...opts,
    sourcemap: "inline",
  }
  esbuild
    .context(opts)
    .then((ctx) => {
      ctx.watch()
    })
    .catch((_error) => {
      process.exit(1)
    })
} else {
  esbuild.build(opts)
}
