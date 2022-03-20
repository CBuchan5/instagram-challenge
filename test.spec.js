/**
 * @jest-environment jsdom
 */

 const test = require('./test.js')

 describe('test', () => {
 it('returns something', () => {
   test2 = new test();
   expect(test2.something()).toEqual(1)
 })
 
})