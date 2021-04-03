
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/user42/website_03_04/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/user42/website_03_04/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/user42/website_03_04/src/pages/index.js"))
}

