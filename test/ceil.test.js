import { expect } from 'chai';
import ceil from '../src/ceil.js'

describe("ceil.js tests", () => {

    //testcase from ceil.js JSDoc
    it("should round a number up to the nearest integer", () => {
       const result = ceil(4.006)

       expect(result).to.equal(5)
    });

    it("should round a number up to the equal integer", () => {
       const result = ceil(4)

       expect(result).to.equal(4)
    });

    //testcase from ceil.js JSDoc
    it("should round a number up to two decimal places", () => {
        const result = ceil(6.004, 2)

        expect(result).to.equal(6.01)
    });

    //testcase from ceil.js JSDoc
    it("should round a number up to the nearest hundred", () => {
       const result = ceil(6040, -2)

       expect(result).to.equal(6100)
    });

    it("should return the same number when it is already in the same precision", () => {
        const result = ceil(6.05,2);

        expect(result).to.equal(6.05)
    });

    it("should round a negative number up to the nearest integer", () => {
        const result = ceil(-5.361);

        expect(result).to.equal(-5)
    });

    it("should round a negative number up to two decimal places", () => {
        const result = ceil(-5.123,2);

        expect(result).to.equal(-5.12)
    });

    it("should round a negative number up to the nearest hundred", () => {
        const result = ceil(-5.123, -2);

        expect(result).to.equal(0)
    });
});
