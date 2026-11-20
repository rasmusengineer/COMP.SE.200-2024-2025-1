import { expect } from 'chai';
import get from '../src/get.js'

describe('get.js tests', () => {

    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    const empty = {}

    //testcase from get.js JSDoc
    it('should return the resolver value if path is described as string', () => {
        const result = get(object, 'a[0].b.c')

        expect(result).to.equal(3)
    });

    //testcase from get.js JSDoc
    it('should return the resolved value if path is described as array', () => {
        const result = get(object, ['a', '0', 'b', 'c'])

        expect(result).to.equal(3)
    });

    //testcase from get.js JSDoc
    it('should return the defaultValue if resolved value is undefined', () => {
        const result = get(object, 'a.b.c', 'default')

        expect(result).to.equal('default')
    });

    it('should return undefined if path does not exist and default value is not provided', () => {
        const result = get(object, 'a.b.c.d')

        expect(result).to.be.undefined
    });

    it('should return default value if path does not exist and default value is provided', () => {
        const result = get(object, 'a.b.c.d', 10)

        expect(result).to.equal(10)
    });

    it('should return undefined if path is empty', () => {
        const result = get(object, [])

        expect(result).to.be.undefined
    });

    it('should return undefined for empty obect when default value is not provided', () => {
        const result = get(empty, [])

        expect(result).to.be.undefined
    });

    it('should return default value for empty obect if default value is provided', () => {
        const result = get(empty, [], 1)

        expect(result).to.equal(1)
    });

    it('should return undefined if object is undefined', () => {
        const result = get(undefined, [])

        expect(result).to.be.undefined
    });

});
