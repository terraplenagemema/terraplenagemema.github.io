#!/bin/bash

set -eux

git push origin src
git reset --hard origin/src

echo "==> Building"
git stash
git checkout src
git reset --hard src --
commit=`git log -n1 --format="%H"`
npm run build

echo "==> Copying build to master branch"
git checkout master
find . -maxdepth 1 \
    -not -name build \
    -not -name . \
    -not -name deploy.sh \
    -not -name node_modules \
    -not -name .git \
    -not -name .gitignore \
    -print0 | xargs -0 rm -rf --
mv build/* .
rm -rf build

echo "==> Committing release to master (if necessary)"
echo "deploy.sh" > .gitignore
echo "node_modules" >> .gitignore
echo "ematerraplenagem.com.br" > CNAME
export TZ='America/Sao_Paulo'
release=`date +"%Y%m%d_%H%M%S"`
echo "$release ($commit)" > VERSION
git add .gitignore
git add .
git reset HEAD -- .gitignore
rm -rf .gitignore
git commit -m "Release $release ($commit)"
echo "==> Pushing release $release"
git push origin master

echo "==> Restoring development environment"
sleep 5
git checkout src
git reset --hard src --
git stash pop
