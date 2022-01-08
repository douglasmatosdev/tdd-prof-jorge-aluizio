describe('Matchers - toMatch', () => {
    it('Basic usage with regular expression', () => {
        expect('developer').toMatch(/\w+/) // Uma ou mais letras
        expect('(21)91234-5678').toMatch(/^\(\d{2}\)\d{5}-\d{4}$/)
    })
})