SRC_PATH=$1
OUT_DIR=$2
echo "Sources:$SRC_PATH , $OUT_DIR"
tsc -p "$SRC_PATH" --pretty --outDir "$OUT_DIR"
exit $?