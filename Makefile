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

test-coverage: # Run coverage tests
	npm test -- --coverage --coverageProvider=v8