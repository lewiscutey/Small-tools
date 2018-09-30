#!/usr/bin/env node

'use strict';
const fs = require("fs");

fs.writeFile('.gitignore', 
`.DS_Store
node_modules/
/dist/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
`, (err) => {
  if (err) throw err;
  console.log('.gitignore文件已生成！');
});