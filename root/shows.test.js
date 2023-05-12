//const express = require ('express')
//const app = express()
//const Show = require ('../shows.json')
//const sequelize = require('sequelize')
const express = require('express');
const app = express();


const request = require('supertest');
const app = require('../routes/shows'); // make sure this path is correct

describe('GET /shows', () => {
  it('status code should be 200', async () => {
    const res = await request(app).get('/shows');
    expect(res.statusCode).toBe(200);
  });
});





module.exports = app