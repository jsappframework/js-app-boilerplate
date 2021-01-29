#!/bin/zsh
#

npm run check && \  
  git add . && \
  git commit -m "Updated following js-app-core update" && \
  git push && \
  npm version patch && \
  npm publish