import { expect } from 'chai';
import toNumber from '../src/toNumber.js'

describe('toNumber.js tests', () => {

    it('should return the same number if the input is a number', () => {
        const result = toNumber(10);
        expect(result).to.equal(10);
    });

    it('should return a number if the input string represents a number and has leading/trailing whitespace characters', () => {
        const result = toNumber(" \t\r\n10 \t\r\n");
        expect(result).to.equal(10);
    });

    it('should return a number if the input string represents a positive integer', () => {
        const result = toNumber('10');
        expect(result).to.equal(10);
    });

    it('should return a number if the input string represents a negative integer', () => {
        const result = toNumber('-10');
        expect(result).to.equal(-10);
    });

    it('should return a number if the input string represents a positive decimal value', () => {
        const result = toNumber('2.5');
        expect(result).to.equal(2.5);
    });

    it('should return a number if the input string represents a negative decimal value', () => {
        const result = toNumber('-2.5');
        expect(result).to.equal(-2.5);
    });

    it('should return NaN if the input is undefined', () => {
        const result = toNumber(undefined);
        expect(result).to.be.NaN;
    });

    it('should return NaN if the input string does not represent a number', () => {
        const result = toNumber("abc123");
        expect(result).to.be.NaN;
    });

});