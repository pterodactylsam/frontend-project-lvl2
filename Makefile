install:
	npm ci
	npm link
	
publish: 
	npm publish --dry-run

lint: 
	npx eslint .

test:
	npx -n --experimental-vm-modules jest

test-watch:
	npm test -s -- --watch

test-coverage: # Run coverage tests
	npm test -- --coverage --coverageProvider=v8