var request = require('request'),
    assert  = require('chai').assert,
    setup   = require('./setup.js');

describe('GET /communities', function () {
    before(function (done) {
        setup.init(done);
    });

    it('should not be empty', function (done) {
        request.get(setup.testUrl + '/communities', function (err, response, body) {
            body = JSON.parse(body);
            assert.ok(body.response.length > 0);
            done();
        });
    });
});

describe('GET /communities/:id', function () {
    before(function (done) {
        setup.init(done);
    });

    it('should return a community or a not_found error', function (done) {
        request.get(setup.testUrl + '/communities/public', function (err, response, body) {
            body = JSON.parse(body);
            assert.ok(body.response.length > 0 || body.response.error == "not_found");
            done();
        });
    });
});
