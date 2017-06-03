#!/bin/bash

YELLOW='\e[0;33m'
RED='\e[0;31m'
NC='\e[0m' # No Color
BOLD='\e[1m'

SCRIPT_PATH=$( cd $(dirname $0) ; pwd -P )
BUTOMATE_PATH=$(dirname $SCRIPT_PATH)
BUILD_PATH="$BUTOMATE_PATH/bot/build"
# set -x

function clean {
    echo "Removing old build files if they exist"
    # Execute the clean script
    $SCRIPT_PATH/clean.sh $BUILD_PATH
    # Store its exit code
    local clean_result=$?

    if [ $clean_result -eq 0 ];then
        echo "Removed old build files"
    else
        echo "No old build files found"
    fi
}

function build {
    #set -x
    local SRC_PATH="$BUTOMATE_PATH/bot/src"
    echo -e "${YELLOW}Building to:" $BUILD_PATH "${NC}"
    $SCRIPT_PATH/build.sh $SRC_PATH $BUILD_PATH
    local build_result=$?

    if [ $build_result -eq 0 ];then
        echo -e "${YELLOW}${BOLD} Build succeeded ${NC}"
    else
        echo -e "${RED}${BOLD} Build failed ${NC}"
    fi
}

clean
build
# (./build.sh)
# echo -e "Starting project... "
#node bot/src/build/bot.js
