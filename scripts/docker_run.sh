#!/usr/bin/env bash
CUR_DIR=$(pwd)
docker run -it \
  -v $CUR_DIR:/usr/src/app/my-app \
  -p 5000:5000 \
  node-dev \
  bash
