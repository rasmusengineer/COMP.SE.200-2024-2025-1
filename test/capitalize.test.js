import { expect } from 'chai';
import capitalize from '../src/capitalize.js'

describe('capitalize.js tests', () => {

    it('should turn all characters except the first to lowercase', () => {
        const result = capitalize('TEST STRING');
        expect(result).to.equal('Test string');
    });

    it('should turn the first character to uppercase', () => {
        const result = capitalize('test string');
        expect(result).to.equal('Test string');
    });

    it('should not affect characters that have no lowercase/uppercase counterparts', () => {
        const result = capitalize('12+-!?');
        expect(result).to.equal('12+-!?');
    });

    it('should not affect an empty string', () => {
        const result = capitalize('');
        expect(result).to.equal('');
    });
});