import { sum } from './sum'

describe('Sum', () => {
    it('sum two numbers', () => {
        expect(sum(1, 2)).toEqual(3)
    })
})