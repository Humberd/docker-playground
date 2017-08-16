@echo off

if [%1]==[] (
    echo You need to provide a tag version
    echo Terminating...
    exit /b
)

docker run --rm -d -p 8080:4321 --name foo humberd/docker-playground-image:%1