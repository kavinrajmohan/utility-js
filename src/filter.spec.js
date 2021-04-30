const filter = require('./filter');

describe('Filter', () => {

    it('should return empty list when empty list is passed', () => {
        const fun = () => true;

        expect(filter([], fun)).toEqual([]);
    })

    it('should return same list when function returns true', () => {
        const fun = () => true;

        expect(filter([1,2,3], fun)).toEqual([1,2,3]);
    })

    it('should return empty list when function return false', () => {
        const fun = () => false;

        expect(filter([1,2,3], fun)).toEqual([]);
    })

    it('should return list with numbers greater than 1 when function uses greater than logic', () => {
        const fun = (value) => value > 1;
        
        expect(filter([1,2,3], fun)).toEqual([2,3]);
    })

    it('should return uppercase characters in the list when function is called', () => {
        const fun = (character) => character.toUpperCase() === character;

        expect(filter(['a', 'B', 'c', 'D'], fun)).toEqual(['B','D']);
    })

})