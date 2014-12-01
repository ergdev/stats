REPORTER = spec
ISTANBUL = ./node_modules/.bin/istanbul
_MOCHA = ./node_modules/.bin/_mocha

test:
	@NODE_ENV=test $(_MOCHA) \
		--reporter $(REPORTER) ./test/unit/*.js

coverage:
	@test -d ./test/coverage || mkdir ./test/coverage
	@NODE_ENV=test $(ISTANBUL) cover --dir ./test/coverage $(_MOCHA) \
		-- --reporter $(REPORTER) ./test/unit/*.js

.PHONY: test coverage