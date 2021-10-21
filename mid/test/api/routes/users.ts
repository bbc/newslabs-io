import { assert } from 'chai';
import sinon from 'sinon';
import request from 'supertest';
import api from '../../../src/api/index';
import * as db from '../../../src/api/db';

const sandbox = sinon.createSandbox();

describe('GET /users', () => {

  afterEach(() => {
    sandbox.restore();
  });

  it('returns a 200 Status Code', async () => {
    await request(api)
      .get('/users')
      .expect(200);
  });

  it('returns a list of users', async () => {
    const { body } = await request(api)
      .get('/users');

    assert.lengthOf(body, 3);
  });

  context('DB Failure', () => {
    it('returns a 500 Status Code', async () => {
      sandbox.stub(db, 'getUsersAndRoles').rejects(new Error());

      await request(api)
        .get('/users')
        .expect(500);
    });

    it('logs the error', async () => {
      sandbox.stub(db, 'getUsersAndRoles').rejects(new Error('A teststring'));
      const logSpy = sandbox.stub(console, 'log');

      await request(api)
        .get('/users');

      sinon.assert.calledWith(logSpy, 'Database Error: A teststring');
    });
  });
});

describe('GET /users/:id', () => {

  afterEach(() => {
    sandbox.restore();
  });

  it('returns a 200 Status Code', async () => {
    await request(api)
      .get('/users')
      .expect(200);
  });

  it('returns the requested user', async () => {
    const { body } = await request(api)
      .get('/users/1');

    assert.strictEqual(body.id, 1);
    assert.strictEqual(body.username, 'John');
  });

  context('DB Failure', () => {
    it('returns a 500 Status Code', async () => {
      sandbox.stub(db, 'getUserAndRole').rejects(new Error());

      await request(api)
        .get('/users/1')
        .expect(500);
    });

    it('logs the error', async () => {
      sandbox.stub(db, 'getUserAndRole').rejects(new Error('A teststring'));
      const logSpy = sandbox.stub(console, 'log');

      await request(api)
        .get('/users/1');

      sinon.assert.calledWith(logSpy, 'Database Error: A teststring');
    });
  });
});