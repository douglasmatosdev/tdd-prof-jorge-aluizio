const users = ['Douglas', 'Verônica']

describe('Matchers - toContain and toContainEqual', () => {
    it('Verify arrays elements', () => {
        expect(users).toContainEqual('Douglas')
        expect(users).toContain(users[0])
    })
})