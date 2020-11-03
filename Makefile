all:
	if ! [ -r website/build ]; then cd website && yarn build; fi
	rsync -raX website/build/ReflowOS /tmp/
	git co gh-pages
	rsync -raX /tmp/ReflowOS .
	git status

