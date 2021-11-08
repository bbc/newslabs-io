import request from 'supertest';
import api from '../../../src/api/index';
import * as db from '../../../src/api/db';

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

describe('GET /users/:id', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns a 200 Status Code', async () => {
    await request(api)
      .get('/users')
      .expect(200);
  });

  it('returns the requested user', async () => {
    const { body } = await request(api)
      .get('/users/1');

    expect(body.id).toBe(1);
    expect(body.username).toBe('John');
  });

  describe('DB Failure', () => {
    beforeEach(() => {
      jest.spyOn(console, 'log').mockImplementation(() => jest.fn());
      jest.spyOn(db, 'getUserAndRole').mockRejectedValue(new Error());
    });

    it('returns a 500 Status Code', async () => {
      await request(api)
        .get('/users/1')
        .expect(500);
    });
  });
});