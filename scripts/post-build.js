import fs from 'fs';
import path from 'path';

// Read the built index.html
const indexPath = path.join(process.cwd(), 'dist', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Don't inject extra routing script into index.html because it already contains
// the SPA decode script used on client (repo-based /?/ format). We'll only
// generate a 404.html that redirects to the repo-based /?/ format so GitHub
// Pages will preserve the requested path in the query for the SPA to recover.

// Create 404.html for repository-based GitHub Pages (e.g., username.github.io/<repo>/)
const pathSegmentsToKeep = 1; // keep 1 segment for repo name
const html404 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Shambala Homes</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages - Repo-based pages
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname
          .split('/')
          .slice(0, 1 + ${pathSegmentsToKeep})
          .join('/') +
        '/?/' +
        l.pathname
          .slice(1)
          .split('/')
          .slice(${pathSegmentsToKeep})
          .join('/')
          .replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
  </html>`;

fs.writeFileSync(path.join(process.cwd(), 'dist', '404.html'), html404);

console.log('GitHub Pages routing setup completed for repo-based pages (pathSegmentsToKeep=' + pathSegmentsToKeep + ')');