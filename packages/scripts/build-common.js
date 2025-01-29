// #!/usr/bin/env node

const { execSync } = require("child_process");

const COMMON_PACKAGES= [
  "shared1",
]

COMMON_PACKAGES.forEach((packageName) => {
  execSync(`cd packages/${packageName} && pnpm build`);
});
