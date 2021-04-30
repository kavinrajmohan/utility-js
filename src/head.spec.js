const head = require('./head');

describe('Head', () => {

    it('should return the first element 1 when passed a list', () => {
        expect(head([1, 2, 3])).toEqual(1);
    })

    it('should return undefined when an empty list is passed', () => {
        expect(head([])).toEqual(undefined);
    })
})