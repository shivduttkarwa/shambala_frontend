import fs from 'fs';
import path from 'path';

// Read the built index.html
const indexPath = path.join(process.cwd(), 'dist', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Add GitHub Pages routing script before </body>
const routingScript = `
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      (function(l) {
        if (l.search) {
          var q = {};
          l.search.slice(1).split('&').forEach(function(v) {
            var a = v.split('=');
            q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
          });
          if (q.p !== undefined) {
            window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + (q.p || '') +
              (q.q ? ('?' + q.q) : '') +
              l.hash
            );
          }
        }
      }(window.location))
    </script>
  </body>`;

indexContent = indexContent.replace('  </body>', routingScript);
fs.writeFileSync(indexPath, indexContent);

// Create 404.html
const html404 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Shambala Homes</title>
    <script type="text/javascript">
        // Single Page Apps for GitHub Pages
        // https://github.com/rafrex/spa-github-pages
        var pathSegmentsToKeep = 1;
        var l = window.location;
        l.replace(
            l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
            l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?p=/' +
            l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
            (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
            l.hash
        );
    </script>
</head>
<body>
</body>
</html>`;

fs.writeFileSync(path.join(process.cwd(), 'dist', '404.html'), html404);

console.log('GitHub Pages routing setup completed!');