var fs = require('fs');
var Comb = require('csscomb');
var config = require('./.csscomb.json');
var specificityGraph = require('specificity-graph');
var concat = require('concat-files');

var comb = new Comb(config);

comb.processPath('./bem-css');
comb.processPath('./bem-flexboxgrid');
comb.processPath('./bem-platform/pages/index');
comb.processPath('./bem-sass');
comb.processPath('./css-modules/build');
comb.processPath('./oocss');
comb.processPath('./organic');
comb.processPath('./raw');
comb.processPath('./smacss');

console.log('csscomb finished work successfully');


fs.readFile('./atomic/style.css', 'utf8', function(err, data) {
  specificityGraph('./atomic/specificity-graph', data, function(directory) {
    console.log('specificity-graph files created in ' + directory);
  });
});

fs.readFile('./bem-bootstrap-4/style.css', 'utf8', function(err, data){
  specificityGraph('./bem-bootstrap-4/specificity-graph', data, function(directory){
    console.log('specificity-graph files created in ' + directory);
  });
});

fs.readFile('./bem-css/style.css', 'utf8', function(err, data){
  specificityGraph('./bem-css/specificity-graph', data, function(directory){
    console.log('specificity-graph files created in ' + directory);
  });
});

fs.readFile('./bem-flexboxgrid/style.css', 'utf8', function(err, data){
  specificityGraph('./bem-flexboxgrid/specificity-graph', data, function(directory){
    console.log('specificity-graph files created in ' + directory);
  });
});

fs.readFile('./bem-platform/pages/index/index.css', 'utf8', function(err, data){
  specificityGraph('./bem-platform/specificity-graph', data, function(directory){
    console.log('specificity-graph files created in ' + directory);
  });
});

fs.readFile('./bem-sass/style.css', 'utf8', function(err, data){
    specificityGraph('./bem-sass/specificity-graph', data, function(directory){
        console.log('specificity-graph files created in ' + directory);
    });
});

fs.readFile('./css-modules/build/style.css', 'utf8', function(err, data){
  specificityGraph('./css-modules/specificity-graph', data, function(directory){
    console.log('specificity-graph files created in ' + directory);
  });
});

fs.readFile('./oocss/style.css', 'utf8', function(err, data){
  specificityGraph('./oocss/specificity-graph', data, function(directory){
    console.log('specificity-graph files created in ' + directory);
  });
});

fs.readFile('./organic/style.css', 'utf8', function(err, data){
  specificityGraph('./organic/specificity-graph', data, function(directory){
    console.log('specificity-graph files created in ' + directory);
  });
});

fs.readFile('./raw/style.css', 'utf8', function(err, data){
  specificityGraph('./raw/specificity-graph', data, function(directory){
    console.log('specificity-graph files created in ' + directory);
  });
});

concat([
  './smacss/basic.css',
  './smacss/layouts.css',
  './smacss/modules.css',
  './smacss/themes.css',
  './smacss/states.css'
], './smacss/build.css', function(err) {
  fs.readFile('./smacss/build.css', 'utf8', function(err, data){
    specificityGraph('./smacss/specificity-graph', data, function(directory){
      console.log('specificity-graph files created in ' + directory);
    });
  });
});
