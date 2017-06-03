# Setup new directory
cd bot

# Install dependencies
npm install

# Reminder
config_reminder

# Return to parent directory and run the code
cd ..
./run.sh


function config_reminder{
echo -e "${YELLOW} ${BOLD} DONOT forget to setup your config.ts file${NC} the tutorial in README will help"  
echo -e "${YELLOW} ${BOLD} A template is located at src/config.template.ts ${NC}"
}

function define_colors{
  YELLOW='\033[0;33m'
  NC='\033[0m' # No Color
  BOLD='\033[1m'
}
