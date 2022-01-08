describe('Matchers - toBe', () => {
    // toBe não deve ser usado para objetos
    it('Basic usage - toBe', () => {
        expect(1 + 1).toBe(2)
        expect('developer').toBe('developer')
        // expect({ name: 'john' }).toBe({ name: 'john' })
    })
})