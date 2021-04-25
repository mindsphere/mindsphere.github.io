chmod -R 777 /srv/jekyll
cd /srv/jekyll
rm -f ./index.md
cp /srv/jekyll/docs/_index.template.md ./index.md
bundle update
bundle exec jekyll build
cp search.json _site/
chown jekyll:jekyll _site/search.json
ls -la _site/
