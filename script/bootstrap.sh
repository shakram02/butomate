# Setup new directory
cd bot

# Create an empty config file
create_config

# Install dependencies
npm install

# Reminder
config_reminder

# Return to parent directory and run the code
cd ..
./run.sh

function create_config{
touch src/config.ts
echo "import {BotConfig} from './bot_config';

export const config: BotConfig = {
  appId: 'appId',   // Microsoft app id
  appPassword: 'password',  // Microsoft app password
  pageKiteHandle: '***.pagekite.me', // Your handle
  portNumber: 0000  // Port number
};
" >> config.ts
}

function config_reminder{
YELLOW='\033[0;33m'
NC='\033[0m' # No Color
BOLD='\033[1m'
echo -e "${YELLOW} ${BOLD} DONOT forget to setup your config.ts file${NC} the tutorial in README will help"  
}
