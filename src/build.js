var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
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
  .use(layouts({ engine: 'slm', default: 'layout.slm' }))
  .use(permalinks({
    relative: false
  }))
  .build(function(err){
    if (err) throw err;
  });