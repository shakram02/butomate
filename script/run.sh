YELLOW='\033[0;33m'
NC='\033[0m' # No Color
BOLD='\033[1m'

mkdir bot/build
echo -e "${YELLOW}${BOLD}Building project..."
tsc -p ./bot/src/ --pretty --outDir "./bot/build"
echo -e "Starting project... ${NC}"
node bot/build/bot.js