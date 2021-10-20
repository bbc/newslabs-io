import { assert } from 'chai';
import request from 'supertest';
import api from '../../../src/api/index';

describe('/users', () => {
  it('returns a 200 Status Code', async () => {
    await request(api)
      .get('/status')
      .expect(200);
  });

  it('returns a list of users', async () => {
    const { body } = await request(api)
      .get('/users')
    
    assert.deepEqual(body, [{ id: 1, name: 'Santa Claus' }]);
  });
});