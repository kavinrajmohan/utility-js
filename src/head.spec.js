const head = require('./head');

describe('Head', () => {

    it('head([1, 2, 3]) should be 1', () => {
        expect(head([1, 2, 3])).toEqual(1);
    })

    it('head([])  should be undefined', () => {
        expect(head([])).toEqual(undefined);
    })
})