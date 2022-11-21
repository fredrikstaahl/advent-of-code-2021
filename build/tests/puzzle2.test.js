"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puzzle2_1 = require("../puzzle2");
describe('Test puzzle 2', () => {
    test('test with sample input', () => {
        const puzzleInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
        const expectedNoOfDepthIncreases = 6;
        const noOfDepthIncreases = (0, puzzle2_1.reportSonar)(puzzleInput);
        expect(noOfDepthIncreases).toEqual(expectedNoOfDepthIncreases);
    });
});
