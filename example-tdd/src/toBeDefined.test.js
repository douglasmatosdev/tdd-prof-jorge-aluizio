const user = {
    name: 'Douglas',
    email: 'douglas@email.com'
}

describe('Mathers - toBeDefined', () => {
    it('Check if exists some property in the object', () => {
        expect(user.name).toBeDefined()
    })

    it('Check if not exists some property in the object', () => {
        expect(user.age).not.toBeDefined()
    })
})