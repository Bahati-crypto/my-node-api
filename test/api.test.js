const request = require('supertest');
const app = require('../index');

describe('Node API Tests', () => {

    test('GET / should return API message', async () => {
        const response = await request(app)
            .get('/');

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe(
            'API inafanya kazi vizuri kupitia Jenkins!'
        );
    });

    test('POST /api/login should login with correct credentials', async () => {
        const response = await request(app)
            .post('/api/login')
            .send({
                username: 'admin',
                password: 'password123'
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toContain('Login successful');
        expect(response.body.token).toBe('new-jwt-token-v2');
    });

    test('POST /api/login should reject wrong credentials', async () => {
        const response = await request(app)
            .post('/api/login')
            .send({
                username: 'admin',
                password: 'wrongpassword'
            });

        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe('Invalid credentials');
    });

});