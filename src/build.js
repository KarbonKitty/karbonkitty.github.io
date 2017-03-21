var Metalsmith = require('metalsmith');
var pug = require('metalsmith-pug/lib/node6');
var markdown = require('metalsmith-markdownit');
var permalinks = require('metalsmith-permalinks');

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
  .use(pug({}))
  .use(permalinks({
    relative: false
  }))
  .build(function(err){
    if (err) throw err;
  });