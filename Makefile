install:
	npm install

lint:
	npm run eslint ./src/

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish ./

