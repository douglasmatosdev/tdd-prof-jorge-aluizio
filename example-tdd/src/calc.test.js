var sum = require('./calc');

describe('calculator', () => {
    it('sum two numbers', () => {
        expect(sum(1, 2)).toEqual(4)
    })
})