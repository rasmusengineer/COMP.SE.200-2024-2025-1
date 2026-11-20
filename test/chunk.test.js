import { expect } from 'chai';
import chunk from '../src/chunk.js'

import * as td from "testdouble"

let sliceStub,toIntegerStub, SUT

describe("chunk.js tests", () => {

    beforeEach(async function() {
        //default export, not [ export { fucntion } ]
        sliceStub = await td.replaceEsm('../src/slice.js')
        toIntegerStub = await td.replaceEsm('../src/toInteger.js')
        SUT = await import('../src/chunk.js')
    })

    afterEach(async function() {
        td.reset() //this resets the state after each test
    })

    var array = ['a', 'b', 'c', 'd']

    //testcase from chunk.js JSDoc
    it("should split the array into chunks of the size 2", () => {
        td.when(toIntegerStub.default(2)).thenReturn(2);
        td.when(sliceStub.default(array,0,2)).thenReturn( ['a', 'b'] );
        td.when(sliceStub.default(array,2,4)).thenReturn( ['c', 'd'] );

        const result = SUT.default(array, 2)

        expect(result).to.deep.equal([['a', 'b'], ['c', 'd']])
    });

    //testcase from chunk.js JSDoc
    it("should put remaining elements into the final chunk", () => {
        td.when(toIntegerStub.default(3)).thenReturn(3);
        td.when(sliceStub.default(array,0,3)).thenReturn( ['a', 'b', 'c'] );
        td.when(sliceStub.default(array,3,6)).thenReturn( ['d'] );

        const result = SUT.default(array, 3)

        expect(result).to.deep.equal([['a', 'b', 'c'], ['d']])
    });

    it("should use default size of 1, when second (size) parameter is not given", () => {
        td.when(toIntegerStub.default(1)).thenReturn(1);
        td.when(sliceStub.default(array,0,1)).thenReturn( ['a'] );
        td.when(sliceStub.default(array,1,2)).thenReturn( ['b'] );
        td.when(sliceStub.default(array,2,3)).thenReturn( ['c'] );
        td.when(sliceStub.default(array,3,4)).thenReturn( ['d'] );

        const result = SUT.default(array)

        expect(result).to.deep.equal([['a'], ['b'], ['c'], ['d']])
    });

    it("should return an empty array when given empty array", () => {
        const result = chunk([], 2)

        expect(result).to.deep.equal([])
    });

    it("should return an empty array when size of chunk is declared 0", () => {
        const result = chunk(['a', 'b', 'c'], 0)

        expect(result).to.deep.equal([])
    });

    it("should return an empty array when size is negative", () => {
        const result = chunk(['a', 'b', 'c', 'd'], -1)

        expect(result).to.deep.equal([])
    });

});
