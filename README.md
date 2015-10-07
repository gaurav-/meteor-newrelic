Meteor New Relic package
==========================

This package exposes the [NPM New Relic agent](https://www.npmjs.com/package/newrelic) for use in Meteor. The 
agent's tracer namespace has been patched using [cls-fibers](https://www.npmjs.com/package/cls-fibers) so the New Relic
transactions don't get confused with Meteor's use of fibers. In the future this will be implemented in the
[New Relic agent itself](https://discuss.newrelic.com/t/node-fibers-memory-leaks-conflated-transactions/13743).

This uses version 1.11.3 of the New Relic package.

#### To Install

    meteor add loftsteinn:newrelic

#### To Configure

Since meteor package APIs do not allow for changing internal configs for packages, you must use external config variables.
Set the following environment variables:

    NEW_RELIC_NO_CONFIG_FILE    TRUE
    NEW_RELIC_LICENSE_KEY       YOURKEYID
    NEW_RELIC_APP_NAME          YOURAPPNAME
    NEW_RELIC_LOG_LEVEL         ONE OF error, warn, info, debug, or trace

You can see the full list of node-newrelic options [here](https://github.com/newrelic/node-newrelic/blob/master/README.md)
