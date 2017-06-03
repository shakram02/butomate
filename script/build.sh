#!/bin/bash
SRC_PATH=$1
OUT_DIR=$2
tsc -p "$SRC_PATH" --pretty --outDir "$OUT_DIR"
exit $?