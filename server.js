var restify = require('restify');
var restifyRoutes = require('restify-routes');

if (process.env.NODE_ENV === 'development') {

  var server = restify.createServer({
    name: 'madServer',
    version: '1.0.0'
  });
  server.use(restify.acceptParser(server.acceptable));
  server.use(restify.queryParser());
  server.use(restify.bodyParser());
  restifyRoutes.set(server, __dirname + '/src/routes');

  server.listen(8080,function(){
    console.log('Development Server');
    console.log('%s listening at %s', server.name, server.url);
  });

}

if (process.env.NODE_ENV === 'production') {
    console.log('Production Server');
}
