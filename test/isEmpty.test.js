import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js'

describe('isEmpty.js tests', () => {

    it('should return true on empty string', () => {
        const result = isEmpty('');
        expect(result).to.be.true;
    });

    it('should return false on non-empty string', () => {
        const result = isEmpty('abc');
        expect(result).to.be.false;
    });

    it('should return true on object with no keyed properties', () => {
        const result = isEmpty({});
        expect(result).to.be.true;
    });

    it('should return false on object with keyed properties', () => {
        const result = isEmpty({'first': 1, 'second': 2});
        expect(result).to.be.false;
    });

    it('should return true on empty array', () => {
        const result = isEmpty([]);
        expect(result).to.be.true;
    });

    it('should return false on non-empty array', () => {
        const result = isEmpty([1, 2, 3]);
        expect(result).to.be.false;
    });

    it('should return true on null', () => {
        const result = isEmpty(null);
        expect(result).to.be.true;
    });

    it('should return true on number', () => {
        const result = isEmpty(1);
        expect(result).to.be.true;
    });
    it('should return true on boolean', () => {
        const result = isEmpty(true);
        expect(result).to.be.true;
    });
});