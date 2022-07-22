import request from 'supertest';
import api from '../../index';
import * as db from '../../src/db';

describe('GET /users', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns a 200 Status Code', async () => {
    await request(api)
      .get('/users')
      .expect(200);
  });

  it('returns a list of users', async () => {
    const { body } = await request(api)
      .get('/users');

    expect(body.length).toBe(3);
  });

  describe('DB Failure', () => {
    beforeEach(() => {
      jest.spyOn(console, 'log').mockImplementation(() => jest.fn());
      jest.spyOn(db, 'getUsersAndRoles').mockRejectedValue(new Error());
    });

    it('returns a 500 Status Code', async () => {
      await request(api)
        .get('/users')
        .expect(500);
    });
  });
});
