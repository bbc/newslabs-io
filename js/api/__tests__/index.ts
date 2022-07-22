import request from 'supertest';
import api from '../index';

describe('index', () => {
  describe('/status', () => {
    it('returns a 200 Status Code', async () => {
      await request(api)
        .get('/status')
        .expect(200);
    });
  });
  
  describe('/', () => {
    it('returns a 404 Status Code', async () => {
      await request(api)
        .get('/')
        .expect(404);
    });
  });
});