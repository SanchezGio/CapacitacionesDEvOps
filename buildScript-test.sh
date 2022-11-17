/usr/bin/docker pull node:16-alpine
/usr/bin/docker inspect node:16-alpine
cp package.json dist/ 
mkdir dist/deploy
cp -r package.json dist/deploy
cp -r Dockerfile dist/deploy
cp -r manifests/deployment-dev.yml dist/deploy/