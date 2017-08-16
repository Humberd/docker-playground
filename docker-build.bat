@echo off

if [%1]==[] (
    echo You need to provide a tag version
    echo Terminating...
    exit /b
)

docker build -t humberd/docker-playground-image:%1 .