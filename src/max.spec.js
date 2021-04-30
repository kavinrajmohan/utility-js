const max = require('./max');

describe("Max", () => {

    it('should return undefined when empty list is passed', () => {
        expect(max([])).toEqual(undefined);
    })

    it('should return the maximum element 4 when list is passed', () => {
        expect(max([1,2,3,4])).toEqual(4);
    })


})