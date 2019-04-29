import { app } from "./../src/app";
import request from 'supertest';
import express from 'express';
import { expect } from 'chai';;

it('should return book', async () => {
    const res = await request(app).get('/books');
    expect(res.status);
});