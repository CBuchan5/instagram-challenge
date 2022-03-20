/**
 * @jest-environment jsdom
 */
//  const mongoose = require("mongoose");

//  require("../mongodb_helper");
 const test = require('./test.js')

 describe('test', () => {
 it('returns something', () => {
   test2 = new test();
   expect(test2.something()).toEqual(1)
 })
 
})