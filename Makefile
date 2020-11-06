all:
	cd website && yarn build
	rsync -raX website/build/ReflowOS /tmp/
	git co gh-pages
	rsync -raX /tmp/ReflowOS/* .
	git status

