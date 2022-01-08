describe('Matchers - toEqual', () => {
    it('Basic usage - toEqual', () => {
        expect(1 + 1).toEqual(2)
        expect(1 + 1).not.toEqual(3)
        expect('developer').toEqual('developer')
        expect({ name: 'john' }).toEqual({ name: 'john' })
    })

})