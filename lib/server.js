/* global WebApp, Npm, Package, Inject */

newrelic = Npm.require('newrelic');

// Patch the cls namespace used by the newrelics plugin for use with Meteor's fibers
var patchFibers = Npm.require('cls-fibers'),
    ns = process.namespaces && process.namespaces['__NR_tracer'];
if (ns) {
    patchFibers(ns);
}


// Real User Monitoring support
// https://github.com/newrelic/node-newrelic#browser-timings-rum--real-user-monitoring
// using https://github.com/meteorhacks/meteor-inject-initial to inject
if (!Package.appcache) {
    WebApp.connectHandlers.use(function(req, res, next) {
        if(Inject.appUrl(req.url)) {
            Inject.rawHead('newrelic-rum', newrelic.getBrowserTimingHeader(), res);
        }
        next();
    });
}