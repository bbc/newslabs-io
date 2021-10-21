import { assert } from 'chai';
import sinon from 'sinon';
import request from 'supertest';
import api from '../../../src/api/index';
import * as db from '../../../src/api/db';

const sandbox = sinon.createSandbox();

describe('GET /submissions', () => {

  afterEach(() => {
    sandbox.restore();
  });

  it('returns a 200 Status Code', async () => {
    await request(api)
      .get('/submissions')
      .expect(200);
  });

  it('returns a list of submissions', async () => {
    const { body } = await request(api)
      .get('/submissions');

    assert.lengthOf(body, 3);
  });

  context('DB Failure', () => {
    it('returns a 500 Status Code', async () => {
      sandbox.stub(db, 'getSubmissionsAndUsers').rejects(new Error());

      await request(api)
        .get('/submissions')
        .expect(500);
    });

    it('logs the error', async () => {
      sandbox.stub(db, 'getSubmissionsAndUsers').rejects(new Error('A teststring'));
      const logSpy = sandbox.stub(console, 'log');

      await request(api)
        .get('/submissions');

      sinon.assert.calledWith(logSpy, 'Database Error: A teststring');
    });
  });
});

describe('GET /submissions/:id', () => {

  afterEach(() => {
    sandbox.restore();
  });

  it('returns a 200 Status Code', async () => {
    await request(api)
      .get('/submissions')
      .expect(200);
  });

  it('returns the requested submission', async () => {
    const { body } = await request(api)
      .get('/submissions/1');

    assert.strictEqual(body.id, 1);
    assert.strictEqual(body.title, 'Tree in Birmingham');
    assert.strictEqual(body.username, 'Aisha');
  });

  context('DB Failure', () => {
    it('returns a 500 Status Code', async () => {
      sandbox.stub(db, 'getSubmissionAndUser').rejects(new Error());

      await request(api)
        .get('/submissions/1')
        .expect(500);
    });

    it('logs the error', async () => {
      sandbox.stub(db, 'getSubmissionAndUser').rejects(new Error('A teststring'));
      const logSpy = sandbox.stub(console, 'log');

      await request(api)
        .get('/submissions/1');

      sinon.assert.calledWith(logSpy, 'Database Error: A teststring');
    });
  });
});