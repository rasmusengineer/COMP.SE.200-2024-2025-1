import { expect } from 'chai';
import reduce from '../src/reduce.js'

describe('reduce.js tests', () => {

    //testcase from reduce.js JSDoc
    it('should reduce an array to a single value', () => {
        const result = reduce([1,2], (sum, n) => sum + n, 0)

        expect(result).to.equal(3)
    });

    //testcase from reduce.js JSDoc
    it('should reduce an object to an accumulated object', () => {
        const result = reduce(
            { 'a': 1, 'b': 2, 'c': 1 },
            (result, value, key) => {
                (result[value] || (result[value] = [])).push(key)
                return result}, {})

        expect(result).to.deep.equal({1: ['a', 'c'], 2: ['b']})
    });

    it('should return the accumulator for an empty array', () => {
        const result = reduce([], (sum, n) => sum + n, 2)

        expect(result).to.equal(2);
    });

    it('should reduce array with one element', () => {
        const result = reduce([3], (sum, n) => sum + n,3)

        expect(result).to.equal(6)
    });

    it('should use first element as the initial value when accumulator is not given', () => {
        const result = reduce([1,2,3], (sum, n) => sum + n)

        expect(result).to.equal(6)
    });
});
