var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var markdown = require('metalsmith-markdownit');
var collections = require('metalsmith-collections');

Metalsmith(__dirname)
  .metadata({
    sitename: "KarbonKitty's Deck of Many Things",
    siteurl: "https://karbonkitty.github.io",
    description: "",
    generatorname: "Metalsmith",
    generatorurl: "http://metalsmith.io"
  })
  .source('./data')
  .destination('..')
  .clean(false)
  .use(markdown())
  .use(collections({
    articles: {
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(layouts({ engine: 'pug', default: 'layout.pug' }))
  .build(function (err) {
    if (err) throw err;
  });