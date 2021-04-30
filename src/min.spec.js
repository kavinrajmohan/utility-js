const min = require('./min');

describe("Max", () => {

    it('should return undefined when empty list is passed', () => {
        expect(min([])).toEqual(undefined);
    })

    it('should return the minimum element 1 when list is passed', () => {
        expect(min([1,2,3,4])).toEqual(1);
    })


})