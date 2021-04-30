const reduce = require('./reduce');

describe('Reduce', () => {

    it('should return undefined when empty list is passed', () => {
        const fun = (x, y) => x + y;

        expect(reduce([], fun)).toEqual(undefined);
    })

    it('should return 10 when empty list is passed with value 10', () => {
        const fun = (x, y) => x + y;

        expect(reduce([], fun, 10)).toEqual(10);
    })

    it('should return abc when list of characters is passed with fun', () => {
        const fun = (x, y) => x + y;

        expect(reduce(['a', 'b', 'c'], fun)).toEqual("abc");
    })

    it('should return zabc when list of charcters is passed with fun and value z', () => {
        const fun = (x, y) => x + y;

        expect(reduce(['a', 'b', 'c'], fun, 'z')).toEqual("zabc");
    })

})