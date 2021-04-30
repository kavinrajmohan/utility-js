const tail = require('./tail');

describe('Tail', () => {
    it('should return [2,3] when passed with a list [1, 2, 3]', () => {
        expect(tail([1, 2, 3])).toEqual([2,3]);
    })

    it('should return empty list when an empty list is passed', () => {
        expect(tail([])).toEqual([]);
    })


})