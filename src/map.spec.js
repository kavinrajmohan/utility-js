const map = require('./map');

describe('Map', () => {

    it('should return empty list when empty list is passed', () => {
        const cube = (number) => number ** 3;
        
        expect(map([], cube)).toEqual([]);
    })

    it('should return the same list when identity function is passed', () => {
        const identity = (number) => number;

        expect(map([1,2,3], identity)).toEqual([1,2,3]);
    })

    it('shoudl return cube valued list when cube function is passed', () => {
        const cube = (number) => number ** 3;

        expect(map([1,2,3], cube)).toEqual([1,8,27])
    })

    it('should return list values according to the function passed', () => {
        const fun = (object) => object.x + 1;

        expect(map([{x:10}], fun)).toEqual([11]);
    })
})