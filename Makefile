r:
	rails routes

test-r:
	bundle exec rspec

test:
	yarn jest

push:
	git push -u origin master

clean:
	rake assets:clobber

lint:
	yarn lint

w:
	./bin/webpack-dev-server

.PHONY:	test
