
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/user42/sous_domaine/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/user42/sous_domaine/src/pages/404.js")),
  "component---src-pages-buy-island-js": preferDefault(require("/home/user42/sous_domaine/src/pages/buy-island.js")),
  "component---src-pages-index-js": preferDefault(require("/home/user42/sous_domaine/src/pages/index.js"))
}

