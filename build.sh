#!/bin/bash
cd ./backend/nbafantasy-statistic-api
docker build  -f Dockerfile -t nbafantasy-statistic-api:latest .
cd ../../
docker-compose down
docker-compose up
