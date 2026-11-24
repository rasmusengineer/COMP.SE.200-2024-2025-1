import { expect } from 'chai';
import compact from '../src/compact.js'

describe('compact.js tests', () => {

    it('should remove falsey values and keep non-falsey values', () => {
        const result = compact([1, '', false, 'a', null, 0, 'b']);
        expect(result).to.have.ordered.members([1, 'a', 'b']);
    });

    it('should return an empty array if all values are falsey', () => {
        const result = compact([0, '', false, null, NaN, undefined]);
        expect(result).to.be.empty;
    });

    it('should return an array with the same contents if all values are non-falsey', () => {
        const result = compact(['a', 2, 'b', []]);
        expect(result).to.have.ordered.members(['a', 2, 'b', []]);
    });

    it('should return an empty array if the input array is empty', () => {
        const result = compact([]);
        expect(result).to.be.empty;
    });

    it('should not modify the input array', () => {
        const x = [];
        const result = compact(x);
        expect(result).to.not.equal(x);
    });
});