//Install express server
const express   = require('express');
const path      = require('path');
const app       = express();
var httpProxy   = require('http-proxy');

// Remote url
const remoteUrl = 'https://spring-boot-app-boumaza-adel.cfapps.io';
var apiProxy    = httpProxy.createProxyServer({ https: true, changeOrigin: true, secure: false, headers: { host: remoteUrl } });

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/tuto2'));

// Use proxy
app.all('/oauth/**', function(req, res) {
    console.log('redirecting proxy to server');
    apiProxy.web(req, res, { target: remoteUrl });
});

app.all('/API/SQLI/**', function(req, res) {
    console.log('redirecting proxy to server');
    apiProxy.web(req, res, { target: remoteUrl });
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/dist/tuto2/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
