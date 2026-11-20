import { expect } from 'chai';
import filter from '../src/filter.js'

describe('filter.js tests', () => {

    //testcase from filter.js JSDoc
    it('should filter objects based on their property', () => {
        const users = [
         { 'user': 'barney', 'active': true },
         { 'user': 'fred', 'active': false}
        ]

        const result = filter(users, ({ active }) => active)

        expect(result).to.deep.equal([{ 'user': 'barney', 'active': true }])
    });

    it('should return all elements if predicate always true', () => {
        const result = filter([1,2,3,4,5], (value) => value > 0)

        expect(result).to.deep.equal([1,2,3,4,5])
    });

    it('should return empty array if predicate always false', () => {
       const result = filter([1,2,3,4,5], (value) => value > 5)

       expect(result).to.deep.equal([])
    });

    it('should return empty array for an empty array', () => {
        const result = filter([], (value) => value > 0)

        expect(result).to.deep.equal([])
    });

    it('should filter array based on type of elements', () => {
        const result = filter([1, 'a', NaN, true, 'hello'], (value) => typeof value === 'boolean')

        expect(result).to.deep.equal([true])
    });

    it('should pass the value, index and array to predicate', () => {
       const result = filter([3,2,1,0], (value, index, array) => array[index] === value)

       expect(result).to.deep.equal([3,2,1,0])
    });

});
