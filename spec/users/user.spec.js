/**
 * @jest-environment jsdom
 */
 const mongoose = require("mongoose");

//  require("../mongodb_helper");
 const user = require('../../models/users/user.js')
 describe("User model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });
})

//  describe('test', () => {
//  it('returns something', () => {
//    test2 = new test();
//    expect(test2.something()).toEqual(1)
//  })
 
// })