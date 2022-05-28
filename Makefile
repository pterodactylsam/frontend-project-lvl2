install:
	npm ci
	npm link
	
publish: 
	npm publish --dry-run

lint: 
	npx eslint .

test:
	npx jest

test-watch:
	npm test -s -- --watch