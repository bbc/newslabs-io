import request from 'supertest';
import api from '../../../src/api/index';
import * as db from '../../../src/api/db';

describe('GET /submissions', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns a 200 Status Code', async () => {
    await request(api)
      .get('/submissions')
      .expect(200);
  });

  it('returns a list of submissions', async () => {
    const { body } = await request(api)
      .get('/submissions');

    expect(body.length).toBe(3);
  });
  
  describe('DB Failure', () => {
    beforeEach(() => {
      jest.spyOn(console, 'log').mockImplementation(() => jest.fn());
      jest.spyOn(db, 'getSubmissionsAndUsers').mockRejectedValue(new Error('A teststring'));
    });

    it('returns a 500 Status Code', async () => {
      await request(api)
        .get('/submissions')
        .expect(500);
    });
  });
});

describe('GET /submissions/:id', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns a 200 Status Code', async () => {
    await request(api)
      .get('/submissions')
      .expect(200);
  });

  it('returns the requested submission', async () => {
    const { body } = await request(api)
      .get('/submissions/1');

    expect(body.id).toBe(1);
  });

  describe('DB Failure', () => {
    beforeEach(() => {
      jest.spyOn(console, 'log').mockImplementation(() => jest.fn());
      jest.spyOn(db, 'getSubmissionAndUser').mockRejectedValue(new Error('A teststring'));
    });

    it('returns a 500 Status Code', async () => {
      await request(api)
        .get('/submissions/1')
        .expect(500);
    });
  });
});