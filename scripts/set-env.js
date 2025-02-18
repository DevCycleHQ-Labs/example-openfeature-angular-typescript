const fs = require('fs');
require('dotenv').config();

const envScript = `
window.devcycleEnv = {
  DEVCYCLE_CLIENT_SDK_KEY: "${process.env.DEVCYCLE_CLIENT_SDK_KEY}"
};
`;

fs.writeFileSync('src/assets/env.js', envScript); 