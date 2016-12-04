var expect = require('chai').expect;
var assert = require('chai').assert;
var supertest = require('supertest');

var urlBase = 'http://example.com/master/wp-json/wp/v2/';
var request = supertest(urlBase);

var username = 'username';
var password = 'password';
var goodBasicAuth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
var badBasicAuth = 'Basic ' + new Buffer('foo:bar').toString('base64');

describe('posts', function() {
    it('should get posts', function(done) {
        request
        .get('posts')
        .expect(200)
        .end(function(err, res) {
            expect(res.body).to.be.a('array');
            done(err, res);
        });
    });
});

describe('users', function() {
    describe('GET list context=view implicit', function() {
        it('without auth should get expected fields', function(done) {
            request
            .get('users')
            .send({ 'context': 'view'})
            .expect(200)
            .end(function(err, res) {
                expect(res.body).to.be.a('array');
                res.body.forEach(function(user) {
                    expect(user.id).to.be.a('number');
                    expect(user.username).to.be.undefined;
                    expect(user.name).to.be.a('string');
                    expect(user.first_name).to.be.undefined;
                    expect(user.last_name).to.be.undefined;
                    expect(user.email).to.be.undefined;
                    expect(user.url).to.be.a('string');
                    expect(user.description).to.be.a('string');
                    expect(user.link).to.be.a('string');
                    expect(user.nickname).to.be.undefined;
                    expect(user.slug).to.be.a('string');
                    expect(user.registered_date).to.be.undefined;
                    expect(user.roles).to.be.undefined;
                    expect(user.password).to.be.undefined;
                    expect(user.capabilities).to.be.undefined;
                    expect(user.extra_capabilities).to.be.undefined;
                    expect(user.avatar_urls).to.be.a('object');
                    expect(user.meta).to.be.a('array');
                });
                done(err, res);
            });
        });

        it('with auth should get expected fields', function(done) {
            request
            .get('users')
            .set('Authorization', goodBasicAuth)
            .expect(200)
            .end(function(err, res) {
                expect(res.body).to.be.a('array');
                res.body.forEach(function(user) {
                    expect(user.id).to.be.a('number');
                    expect(user.id).to.be.a('number');
                    expect(user.username).to.be.undefined;
                    expect(user.name).to.be.a('string');
                    expect(user.first_name).to.be.undefined;
                    expect(user.last_name).to.be.undefined;
                    expect(user.email).to.be.undefined;
                    expect(user.url).to.be.a('string');
                    expect(user.description).to.be.a('string');
                    expect(user.link).to.be.a('string');
                    expect(user.nickname).to.be.undefined;
                    expect(user.slug).to.be.a('string');
                    expect(user.registered_date).to.be.undefined;
                    expect(user.roles).to.be.undefined;
                    expect(user.password).to.be.undefined;
                    expect(user.capabilities).to.be.undefined;
                    expect(user.extra_capabilities).to.be.undefined;
                    expect(user.avatar_urls).to.be.a('object');
                    expect(user.meta).to.be.a('array');
                });
                done(err, res);
            });
        });
    });

    describe('GET list context=view explicit', function() {
        it('without auth should get expected fields', function(done) {
            request
            .get('users')
            .send({ 'context': 'view' })
            .expect(200)
            .end(function(err, res) {
                expect(res.body).to.be.a('array');
                res.body.forEach(function(user) {
                    expect(user.id).to.be.a('number');
                    expect(user.username).to.be.undefined;
                    expect(user.name).to.be.a('string');
                    expect(user.first_name).to.be.undefined;
                    expect(user.last_name).to.be.undefined;
                    expect(user.email).to.be.undefined;
                    expect(user.url).to.be.a('string');
                    expect(user.description).to.be.a('string');
                    expect(user.link).to.be.a('string');
                    expect(user.nickname).to.be.undefined;
                    expect(user.slug).to.be.a('string');
                    expect(user.registered_date).to.be.undefined;
                    expect(user.roles).to.be.undefined;
                    expect(user.password).to.be.undefined;
                    expect(user.capabilities).to.be.undefined;
                    expect(user.extra_capabilities).to.be.undefined;
                    expect(user.avatar_urls).to.be.a('object');
                    expect(user.meta).to.be.a('array');                });
                done(err, res);
            });
        });

        it('with auth should get expected fields', function(done) {
            request
            .get('users')
            .send({ 'context': 'view' })
            .set('Authorization', goodBasicAuth)
            .expect(200)
            .end(function(err, res) {
                expect(res.body).to.be.a('array');
                res.body.forEach(function(user) {
                    expect(user.id).to.be.a('number');
                    expect(user.username).to.be.undefined;
                    expect(user.name).to.be.a('string');
                    expect(user.first_name).to.be.undefined;
                    expect(user.last_name).to.be.undefined;
                    expect(user.email).to.be.undefined;
                    expect(user.url).to.be.a('string');
                    expect(user.description).to.be.a('string');
                    expect(user.link).to.be.a('string');
                    expect(user.nickname).to.be.undefined;
                    expect(user.slug).to.be.a('string');
                    expect(user.registered_date).to.be.undefined;
                    expect(user.roles).to.be.undefined;
                    expect(user.password).to.be.undefined;
                    expect(user.capabilities).to.be.undefined;
                    expect(user.extra_capabilities).to.be.undefined;
                    expect(user.avatar_urls).to.be.a('object');
                    expect(user.meta).to.be.a('array');                });
                done(err, res);
            });
        });
    });

    describe('GET list context=edit explicit', function() {
        it('without auth should get error', function(done) {
            request
            .get('users')
            .send({ 'context': 'edit' })
            .expect(401)
            .end(function(err, res) {
                expect(res.body).to.be.a('object');
                expect(res.body.code).to.equal('rest_forbidden_context');
                done(err, res);
            });
        });

        it('with auth should get expected fields', function(done) {
            request
            .get('users')
            .send({ 'context': 'edit' })
            .set('Authorization', goodBasicAuth)
            .expect(200)
            .end(function(err, res) {
                expect(res.body).to.be.a('array');
                res.body.forEach(function(user) {
                    expect(user.id).to.be.a('number');
                    expect(user.username).to.be.a('string');
                    expect(user.name).to.be.a('string');
                    expect(user.first_name).to.be.a('string');
                    expect(user.last_name).to.be.a('string');
                    expect(user.email).to.be.a('string');
                    expect(user.url).to.be.a('string');
                    expect(user.description).to.be.a('string');
                    expect(user.link).to.be.a('string');
                    expect(user.nickname).to.be.a('string');
                    expect(user.slug).to.be.a('string');
                    expect(user.registered_date).to.be.a('string');
                    expect(user.roles).to.be.a('array');
                    expect(user.password).to.be.undefined;
                    expect(user.capabilities).to.be.a('object');
                    expect(user.extra_capabilities).to.be.a('object');
                    expect(user.avatar_urls).to.be.a('object');
                    expect(user.meta).to.be.a('array');
                });
                done(err, res);
            });
        });
    });

    describe('GET list context=embed explicit', function() {
        it('without auth should get error', function(done) {
            request
            .get('users')
            .send({ 'context': 'embed' })
            .expect(200)
            .end(function(err, res) {
                expect(res.body).to.be.a('array');
                res.body.forEach(function(user) {
                    expect(user.id).to.be.a('number');
                    expect(user.username).to.be.undefined;
                    expect(user.name).to.be.a('string');
                    expect(user.first_name).to.be.undefined;
                    expect(user.last_name).to.be.undefined;
                    expect(user.email).to.be.undefined;
                    expect(user.url).to.be.a('string');
                    expect(user.description).to.be.a('string');
                    expect(user.link).to.be.a('string');
                    expect(user.nickname).to.be.undefined;
                    expect(user.slug).to.be.a('string');
                    expect(user.registered_date).to.be.undefined;
                    expect(user.roles).to.be.undefined;
                    expect(user.password).to.be.undefined;
                    expect(user.capabilities).to.be.undefined;
                    expect(user.extra_capabilities).to.be.undefined;
                    expect(user.avatar_urls).to.be.a('object');
                    expect(user.meta).to.be.undefined;
                });
                done(err, res);
            });
        });

        it('with auth should get expected fields', function(done) {
            request
            .get('users')
            .send({ 'context': 'embed' })
            .set('Authorization', goodBasicAuth)
            .expect(200)
            .end(function(err, res) {
                expect(res.body).to.be.a('array');
                res.body.forEach(function(user) {
                    expect(user.id).to.be.a('number');
                    expect(user.username).to.be.undefined;
                    expect(user.name).to.be.a('string');
                    expect(user.first_name).to.be.undefined;
                    expect(user.last_name).to.be.undefined;
                    expect(user.email).to.be.undefined;
                    expect(user.url).to.be.a('string');
                    expect(user.description).to.be.a('string');
                    expect(user.link).to.be.a('string');
                    expect(user.nickname).to.be.undefined;
                    expect(user.slug).to.be.a('string');
                    expect(user.registered_date).to.be.undefined;
                    expect(user.roles).to.be.undefined;
                    expect(user.password).to.be.undefined;
                    expect(user.capabilities).to.be.undefined;
                    expect(user.extra_capabilities).to.be.undefined;
                    expect(user.avatar_urls).to.be.a('object');
                    expect(user.meta).to.be.undefined;
                });
                done(err, res);
            });
        });
    });

    var newUserRandomNumber = Math.floor(Math.random() * 1000);
    var newUserInput = {
        'slug': newUserRandomNumber + 'testuserslug',
        'roles': ['author'],
        //'id': 10000 + newUserRandomNumber,
        'username': 'testuser' + newUserRandomNumber,
        'name': 'Test User ' + newUserRandomNumber,
        'first_name': 'Test User ' + newUserRandomNumber + ' First Name',
        'last_name': 'Test User ' + newUserRandomNumber + ' Last Name',
        'email': 'julka+testuser' + newUserRandomNumber + '@addthis.com',
        'url': 'https://www.addthis.com',
        'description': 'this is a description',
        'link': 'http://example.com',
        //'locale': '',
        'nickname': 'Test User '+ newUserRandomNumber,
        'registered_date': '2016-12-04T19:22:38+00:00',
        'password': 'password',
        //'capabilities': '',
        //'extra_capabilities': '',
        'avatar_urls': {
            '24': 'http://1.gravatar.com/avatar/foo?s=24&d=mm&r=g',
            '48': 'http://1.gravatar.com/avatar/foo?s=48&d=mm&r=g',
            '96': 'http://1.gravatar.com/avatar/foo?s=96&d=mm&r=g'
        }
        //'meta': ''
    };
    var newUserOutput;

    describe('POST', function() {
        it('should fail to create without auth', function(done) {
            request
            .post('users')
            .send(newUserInput)
            .expect(401)
            .end(function(err, res) {
                expect(res.body).to.be.a('object');
                expect(res.body.code).to.equal('rest_cannot_create_user');
                done(err, res);
            });
        });

        it('should create new user', function(done) {
            request
            .post('users')
            .set('Authorization', goodBasicAuth)
            .send(newUserInput)
            .expect(201)
            .end(function(err, res) {
                expect(res.body).to.be.a('object');

                newUserOutput = res.body;
                expect(newUserOutput.password).to.be.undefined;
                expect(newUserOutput.id).to.be.a('number');
                expect(newUserOutput.id).to.not.equal(newUserInput.id);
                expect(newUserOutput.link).to.be.a('string');
                expect(newUserOutput.link).to.not.equal(newUserInput.link);
                expect(newUserOutput.registered_date).to.be.a('string');
                expect(newUserOutput.registered_date).to.not.equal(newUserInput.registered_date);
                expect(newUserOutput.avatar_urls).to.be.a('object');
                expect(newUserOutput.avatar_urls[24]).to.not.equal(newUserInput.avatar_urls[24]);
                expect(newUserOutput.avatar_urls[48]).to.not.equal(newUserInput.avatar_urls[48]);
                expect(newUserOutput.avatar_urls[96]).to.not.equal(newUserInput.avatar_urls[96]);

                expect(newUserOutput.username).to.equal(newUserInput.username);
                expect(newUserOutput.name).to.equal(newUserInput.name);
                expect(newUserOutput.first_name).to.equal(newUserInput.first_name);
                expect(newUserOutput.last_name).to.equal(newUserInput.last_name);
                expect(newUserOutput.email).to.equal(newUserInput.email);
                expect(newUserOutput.url).to.equal(newUserInput.url);
                expect(newUserOutput.description).to.equal(newUserInput.description);
                expect(newUserOutput.nickname).to.equal(newUserInput.nickname);
                expect(newUserOutput.slug).to.equal(newUserInput.slug);
                expect(newUserOutput.roles).to.be.a('array');
                expect(newUserOutput.roles[0]).to.equal(newUserInput.roles[0]);

                expect(newUserOutput.capabilities).to.be.a('object');
                expect(newUserOutput.extra_capabilities).to.be.a('object');

                done(err, res);
            });
        });

        it('should fail to create the same user again', function(done) {
            request
            .post('users')
            .set('Authorization', goodBasicAuth)
            .send(newUserInput)
            .expect(500)
            .end(function(err, res) {
                expect(res.body).to.be.a('object');
                expect(res.body.code).to.equal('existing_user_login');
                done(err, res);
            });
        });
    });

    describe('GET single context=view implicit for user who has not posted anything', function() {
        it('should not be able to retrieve user info without auth', function(done) {
            request
            .get('users/'+ newUserOutput.id)
            .send()
            .expect(401)
            .end(function(err, res) {
                expect(res.body).to.be.a('object');
                expect(res.body.code).to.equal('rest_user_cannot_view');
                done(err, res);
            });
        });

        it('should be able to retrieve user info with auth', function(done) {
            request
            .get('users/'+ newUserOutput.id)
            .set('Authorization', goodBasicAuth)
            .send()
            .expect(200)
            .end(function(err, res) {
                expect(res.body).to.be.an('object');
                var userResult = res.body;
                expect(userResult.id).to.equal(newUserOutput.id);
                expect(userResult.username).to.be.undefined;
                expect(userResult.name).to.equal(newUserOutput.name);
                expect(userResult.first_name).to.be.undefined;
                expect(userResult.last_name).to.be.undefined;
                expect(userResult.email).to.be.undefined;
                expect(userResult.url).to.equal(newUserOutput.url);
                expect(userResult.description).to.equal(newUserOutput.description);
                expect(userResult.link).to.equal(newUserOutput.link);
                expect(userResult.nickname).to.be.undefined;
                expect(userResult.slug).to.equal(newUserOutput.slug);
                expect(userResult.registered_date).to.be.undefined;
                expect(userResult.roles).to.be.undefined;
                expect(userResult.password).to.be.undefined;
                expect(userResult.capabilities).to.be.undefined;
                expect(userResult.extra_capabilities).to.be.undefined;
                expect(userResult.avatar_urls).to.be.a('object');
                expect(userResult.avatar_urls[24]).to.equal(newUserOutput.avatar_urls[24]);
                expect(userResult.avatar_urls[48]).to.equal(newUserOutput.avatar_urls[48]);
                expect(userResult.avatar_urls[96]).to.equal(newUserOutput.avatar_urls[96]);
                expect(userResult.meta).to.be.a('array');
                done(err, res);
            });
        });
    });

    describe('GET single context=view explicit for user who has not posted anything', function() {
        it('should not be able to retrieve user info without auth', function(done) {
            request
            .get('users/'+ newUserOutput.id)
            .send({ 'context': 'view' })
            .expect(401)
            .end(function(err, res) {
                expect(res.body).to.be.a('object');
                expect(res.body.code).to.equal('rest_user_cannot_view');
                done(err, res);
            });
        });

        it('should be able to retrieve user info with auth', function(done) {
            request
            .get('users/'+ newUserOutput.id)
            .set('Authorization', goodBasicAuth)
            .send({ 'context': 'view' })
            .expect(200)
            .end(function(err, res) {
                expect(res.body).to.be.an('object');
                var userResult = res.body;
                expect(userResult.id).to.equal(newUserOutput.id);
                expect(userResult.username).to.be.undefined;
                expect(userResult.name).to.equal(newUserOutput.name);
                expect(userResult.first_name).to.be.undefined;
                expect(userResult.last_name).to.be.undefined;
                expect(userResult.email).to.be.undefined;
                expect(userResult.url).to.equal(newUserOutput.url);
                expect(userResult.description).to.equal(newUserOutput.description);
                expect(userResult.link).to.equal(newUserOutput.link);
                expect(userResult.nickname).to.be.undefined;
                expect(userResult.slug).to.equal(newUserOutput.slug);
                expect(userResult.registered_date).to.be.undefined;
                expect(userResult.roles).to.be.undefined;
                expect(userResult.password).to.be.undefined;
                expect(userResult.capabilities).to.be.undefined;
                expect(userResult.extra_capabilities).to.be.undefined;
                expect(userResult.avatar_urls).to.be.a('object');
                expect(userResult.avatar_urls[24]).to.equal(newUserOutput.avatar_urls[24]);
                expect(userResult.avatar_urls[48]).to.equal(newUserOutput.avatar_urls[48]);
                expect(userResult.avatar_urls[96]).to.equal(newUserOutput.avatar_urls[96]);
                expect(userResult.meta).to.be.a('array');
                done(err, res);
            });
        });
    });

    describe('GET single context=edit explicit for user who has not posted anything', function() {
        it('should not be able to retrieve user info without auth', function(done) {
            request
            .get('users/'+ newUserOutput.id)
            .send({ 'context': 'edit' })
            .expect(401)
            .end(function(err, res) {
                expect(res.body).to.be.a('object');
                expect(res.body.code).to.equal('rest_user_cannot_view');
                done(err, res);
            });
        });

        it('should be able to retrieve user info with auth', function(done) {
            request
            .get('users/'+ newUserOutput.id)
            .set('Authorization', goodBasicAuth)
            .send({ 'context': 'edit' })
            .expect(200)
            .end(function(err, res) {
                expect(res.body).to.be.an('object');
                var userResult = res.body;
                expect(userResult.id).to.equal(newUserOutput.id);
                expect(userResult.username).to.equal(newUserOutput.username);
                expect(userResult.name).to.equal(newUserOutput.name);
                expect(userResult.first_name).to.equal(newUserOutput.first_name);
                expect(userResult.last_name).to.equal(newUserOutput.last_name);
                expect(userResult.email).to.equal(newUserOutput.email);
                expect(userResult.url).to.equal(newUserOutput.url);
                expect(userResult.description).to.equal(newUserOutput.description);
                expect(userResult.link).to.equal(newUserOutput.link);
                expect(userResult.nickname).to.equal(newUserOutput.nickname);
                expect(userResult.slug).to.equal(newUserOutput.slug);
                expect(userResult.registered_date).to.equal(newUserOutput.registered_date);
                expect(userResult.roles[0]).to.equal(newUserOutput.roles[0]);
                expect(userResult.password).to.be.undefined;
                expect(userResult.capabilities).to.be.a('object');
                expect(userResult.extra_capabilities).to.be.a('object');
                expect(userResult.avatar_urls).to.be.a('object');
                expect(userResult.avatar_urls[24]).to.equal(newUserOutput.avatar_urls[24]);
                expect(userResult.avatar_urls[48]).to.equal(newUserOutput.avatar_urls[48]);
                expect(userResult.avatar_urls[96]).to.equal(newUserOutput.avatar_urls[96]);
                expect(userResult.meta).to.be.a('array');
                done(err, res);
            });
        });
    });

    describe('GET single context=embed explicit for user who has not posted anything', function() {
        it('should not be able to retrieve user info without auth', function(done) {
            request
            .get('users/'+ newUserOutput.id)
            .send({ 'context': 'embed' })
            .expect(401)
            .end(function(err, res) {
                expect(res.body).to.be.a('object');
                expect(res.body.code).to.equal('rest_user_cannot_view');
                done(err, res);
            });
        });

        it('should be able to retrieve user info with auth', function(done) {
            request
            .get('users/'+ newUserOutput.id)
            .set('Authorization', goodBasicAuth)
            .send({ 'context': 'embed' })
            .expect(200)
            .end(function(err, res) {
                expect(res.body).to.be.a('object');
                var userResult = res.body;
                expect(userResult.id).to.equal(newUserOutput.id);
                expect(userResult.username).to.be.undefined;
                expect(userResult.name).to.equal(newUserOutput.name);
                expect(userResult.first_name).to.be.undefined;
                expect(userResult.last_name).to.be.undefined;
                expect(userResult.email).to.be.undefined;
                expect(userResult.url).to.equal(newUserOutput.url);
                expect(userResult.description).to.equal(newUserOutput.description);
                expect(userResult.link).to.equal(newUserOutput.link);
                expect(userResult.nickname).to.be.undefined;
                expect(userResult.slug).to.equal(newUserOutput.slug);
                expect(userResult.registered_date).to.be.undefined;
                expect(userResult.roles).to.be.undefined;
                expect(userResult.password).to.be.undefined;
                expect(userResult.capabilities).to.be.undefined;
                expect(userResult.extra_capabilities).to.be.undefined;
                expect(userResult.avatar_urls).to.be.a('object');
                expect(userResult.avatar_urls[24]).to.equal(newUserOutput.avatar_urls[24]);
                expect(userResult.avatar_urls[48]).to.equal(newUserOutput.avatar_urls[48]);
                expect(userResult.avatar_urls[96]).to.equal(newUserOutput.avatar_urls[96]);
                expect(userResult.meta).to.be.undefined;
                done(err, res);
            });
        });
    });

    var changeUserRandomNumber = Math.floor(Math.random() * 1000);
    var changeUserInput = {
        'slug': changeUserRandomNumber + 'testuserslug',
        'roles': ['contributor'],
        //'id': 10000 + changeUserRandomNumber,
        //'username': 'testuser' + changeUserRandomNumber,
        'name': 'Test User ' + changeUserRandomNumber,
        'first_name': 'Test User ' + changeUserRandomNumber + ' First Name',
        'last_name': 'Test User ' + changeUserRandomNumber + ' Last Name',
        'email': 'julka+testuser' + changeUserRandomNumber + '@addthis.com',
        'url': 'https://www.google.com',
        'description': 'this is a description too',
        'link': 'http://google.com',
        //'locale': '',
        'nickname': 'Test User '+ changeUserRandomNumber,
        'registered_date': '2016-12-04T19:22:38+00:00',
        'password': 'password2',
        //'capabilities': '',
        //'extra_capabilities': '',
        'avatar_urls': {
            '24': 'http://1.gravatar.com/avatar/foo?s=24&d=mm&r=g',
            '48': 'http://1.gravatar.com/avatar/foo?s=48&d=mm&r=g',
            '96': 'http://1.gravatar.com/avatar/foo?s=96&d=mm&r=g'
        }
        //'meta': ''
    };
    describe('PUT', function() {
        it('should fail to update without auth', function(done) {
            request
            .put('users/'+ newUserOutput.id)
            .send(newUserInput)
            .expect(401)
            .end(function(err, res) {
                expect(res.body).to.be.a('object');
                expect(res.body.code).to.equal('rest_cannot_edit');
                done(err, res);
            });
        });

        it('should update user', function(done) {
            request
            .put('users/'+ newUserOutput.id)
            .set('Authorization', goodBasicAuth)
            .send(changeUserInput)
            .expect(200)
            .end(function(err, res) {
                expect(res.body).to.be.a('object');

                changeUserOutput = res.body;
                expect(changeUserOutput.password).to.be.undefined;
                expect(changeUserOutput.id).to.be.a('number');
                expect(changeUserOutput.id).to.equal(newUserOutput.id);
                expect(changeUserOutput.link).to.be.a('string');
                expect(changeUserOutput.link).to.not.equal(changeUserInput.link);
                expect(changeUserOutput.registered_date).to.be.a('string');
                expect(changeUserOutput.registered_date).to.not.equal(changeUserInput.registered_date);
                expect(changeUserOutput.avatar_urls).to.be.a('object');
                expect(changeUserOutput.avatar_urls[24]).to.not.equal(changeUserInput.avatar_urls[24]);
                expect(changeUserOutput.avatar_urls[48]).to.not.equal(changeUserInput.avatar_urls[48]);
                expect(changeUserOutput.avatar_urls[96]).to.not.equal(changeUserInput.avatar_urls[96]);

                expect(changeUserOutput.username).to.equal(newUserOutput.username);
                expect(changeUserOutput.name).to.equal(changeUserInput.name);
                expect(changeUserOutput.first_name).to.equal(changeUserInput.first_name);
                expect(changeUserOutput.last_name).to.equal(changeUserInput.last_name);
                expect(changeUserOutput.email).to.equal(changeUserInput.email);
                expect(changeUserOutput.url).to.equal(changeUserInput.url);
                expect(changeUserOutput.description).to.equal(changeUserInput.description);
                expect(changeUserOutput.nickname).to.equal(changeUserInput.nickname);
                expect(changeUserOutput.slug).to.equal(changeUserInput.slug);
                expect(changeUserOutput.roles).to.be.a('array');
                expect(changeUserOutput.roles[0]).to.equal(changeUserInput.roles[0]);

                expect(changeUserOutput.capabilities).to.be.a('object');
                expect(changeUserOutput.extra_capabilities).to.be.a('object');

                done(err, res);
            });
        });
    });
});