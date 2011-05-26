/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Fabian Jaokbs <fabian@ajax.org>
 */

var assert = require("assert");
var async = require("asyncjs");
var BitBucket = require("./index").BitBucket;
var secrets = require("./secrets");


var test = module.exports = {

    setUp: function() {
        this.bitbucket = new BitBucket(true);
        this.bitbucket.authenticatePassword(secrets.username, secrets.password);
        this.emailApi = this.bitbucket.getEmailApi();
    },

    "test: get list of all email addresses" : function(finished) {
        test.emailApi.getAll(function(err, emails) {
            console.log(emails);
            assert.equal(err, null);
            assert.ok(emails.length);
            assert.ok(emails[0].email);
            finished();
        });
    }
};

!module.parent && async.test.testcase(module.exports).exec();