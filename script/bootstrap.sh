# Setup new directory
cd bot

# Create an empty config file
touch src/config.ts
echo "import {BotConfig} from './bot_config';

export const config: BotConfig = {
  appId: 'appId',   // Microsoft app id
  appPassword: 'password',  // Microsoft app password
  pageKiteHandle: '***.pagekite.me', // Your handle
  portNumber: 0000  // Port number
};
" >> config.ts

# Install dependencies
npm install

# Reminder
YELLOW='\033[0;33m'
NC='\033[0m' # No Color
BOLD='\033[1m'
echo -e "${YELLOW} ${BOLD} DONOT forget to setup your config.ts file${NC} the tutorial in README will help"
# Return to parent directory and run the code
cd ..
./run.sh