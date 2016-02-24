Package.describe({
    "summary": "Meteor New Relic agent (patched for fibers)",
    "name": "loftsteinn:newrelic",
    "version": "1.25.1",
    "git": "https://github.com/oskarszoon/newrelic"
});

Npm.depends({
    "newrelic": "1.25.3",
    "cls-fibers": "1.1.1"
});

Package.on_use(function (api) {
    api.versionsFrom("METEOR@0.9.0");
    if (api.export)
        api.export('newrelic', 'server');

    api.add_files('lib/server.js', 'server');
});

