import { expect } from 'chai';
import clamp from '../src/clamp.js'

describe('clamp.js tests', () => {

    it('should return the same number if it is within bounds', () => {
        const result = clamp(2, -5, 5);
        expect(result).to.equal(2);
    });

    it('should return the upper bound value for a number greater than it', () => {
        const result = clamp(6, -5, 5);
        expect(result).to.equal(5);
    });

    it('should return the lower bound value for a number less than it', () => {
        const result = clamp(-6, -5, 5);
        expect(result).to.equal(-5);
    });

    it('should return the upper bound value for a number equal to it', () => {
        const result = clamp(5, -5, 5);
        expect(result).to.equal(5);
    });

    it('should return the lower bound value for a number equal to it', () => {
        const result = clamp(-5, -5, 5);
        expect(result).to.equal(-5);
    });

    it('should return the boundary value when lower and upper bounds are equal', () => {
        const result = clamp(5, 0, 0);
        expect(result).to.equal(0);
    });
});