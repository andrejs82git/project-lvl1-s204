install:
	npm install

lint:
	npm run eslint ./src/

start:
	npm run babel-node -- src/bin/brain-games.js

pstart:
	npm run babel-node -- src/bin/brain-$(p).js

publish:
	npm publish ./

