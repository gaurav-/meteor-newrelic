newrelic = Npm.require('newrelic');

// Patch the cls namespace used by the newrelics plugin for use with Meteor's fibers
var patchFibers = Npm.require('cls-fibers'),
    ns = process.namespaces && process.namespaces['__NR_tracer'];
if (ns) {
    patchFibers(ns);
}
