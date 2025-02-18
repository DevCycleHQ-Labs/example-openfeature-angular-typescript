const fs = require('fs');
const dotenv = require('dotenv');

// Load .env file from project root
const env = dotenv.parse(fs.readFileSync('.env'));

const envScript = `
window.devcycleEnv = {
  DEVCYCLE_CLIENT_SDK_KEY: "${env.DEVCYCLE_CLIENT_SDK_KEY || process.env.DEVCYCLE_CLIENT_SDK_KEY}"
};
`;

fs.writeFileSync('src/assets/env.js', envScript);