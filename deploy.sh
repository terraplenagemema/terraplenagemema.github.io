#!/bin/bash

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
git add .gitignore
git add .
git reset HEAD -- .gitignore
rm -rf .gitignore
export TZ='America/Sao_Paulo'
release=`date +"%Y%m%d_%H%M%S"`
git commit -m "Release $release ($commit)"
if [ $? == 1 ]; then
    echo "==> Nothing changed, new release is unnecessary"
else
    echo "==> Pushing release $release"
    git push origin master
fi;

echo "==> Restoring development environment"
git checkout src
git reset --hard src --
git stash pop