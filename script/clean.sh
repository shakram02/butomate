#!/bin/bash
# butomate directiory
build_dir=$1

if [ -d "$build_dir" ]; then
  rm -rf "$build_dir"
  exit 0
else
  exit 1
fi