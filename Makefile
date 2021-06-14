build:
	docker build . -f Dockerfile.build -t dyne/docusaurus:reflowos
	docker run --rm -v=${PWD}/website:/app/website dyne/docusaurus:reflowos yarn build

docx:
	cd website && ./writedown/render docx

all:
	cd website && yarn build
	rsync -raX website/build/ReflowOS /tmp/
	git co gh-pages
	rsync -raX /tmp/ReflowOS/* .
	git status

