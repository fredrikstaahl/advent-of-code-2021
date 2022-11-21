"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe('Test problem 1', () => {
    test('test with sample input', () => {
        const puzzleInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
        const expectedNoOfDepthIncreases = 7;
        const noOfDepthIncreases = (0, index_1.reportSonar)(puzzleInput);
        expect(noOfDepthIncreases).toEqual(expectedNoOfDepthIncreases);
    });
});
