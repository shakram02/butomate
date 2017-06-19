#!/bin/bash

YELLOW='\e[0;33m'
RED='\e[0;31m'
NC='\e[0m' # No Color
BOLD='\e[1m'

SCRIPT_PATH=$( cd "$(dirname "$0")" ; pwd -P )
BUTOMATE_PATH=$(dirname "$SCRIPT_PATH")
BUILD_PATH="$BUTOMATE_PATH/bot/build"
PROGNAME=$(basename "$0")

function usage {
  echo "usage:"
  echo " $PROGNAME [-b | --build] [-c | --clean]"
  echo " $PROGNAME -x | --execute <script>"
}

function clean {
  echo "Removing old build files if they exist"
  # Execute the clean script
  "$SCRIPT_PATH/clean.sh" "$BUILD_PATH"
  # Store its exit code
  local clean_result=$?
  
  if [ $clean_result -eq 0 ];then
    echo "Removed old build files"
  else
    echo "No old build files found"
  fi
}

function build {
  local SRC_PATH="$BUTOMATE_PATH/bot/src"
  echo -e "Building to:" "$BUILD_PATH" "${NC}"
  "$SCRIPT_PATH/build.sh" "$SRC_PATH" "$BUILD_PATH"
  local build_result=$?
  
  if [ $build_result -eq 0 ];then
    echo -e "${YELLOW}${BOLD} Build succeeded ${NC}"
  else
    echo -e "${RED}${BOLD} Build failed ${NC}"
  fi
}

if [ $# -eq 0 ];then
  # No command args provided
  clean
  build
  
  echo -e "Starting project... "
  node bot/build/bot.js
else
  
  while [[ -n $1 ]]; do
    case $1 in
      -b | --build)
        shift
        build
      ;;
      -c | --clean)
        shift
        clean
      ;;
      -x | --execute)
        # TODO: Run specific script, query ls -r and find the desired script
        # clean
        # build
        
        # echo -e "Running script... "
        # node bot/build/bot.js
      ;;
      *)
        # Error, invalid command argument
        echo "Error:Invalid command argument $1"
        usage
        exit 1
      ;;
    esac
  done
fi