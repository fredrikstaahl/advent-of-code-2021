"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puzzle1_1 = require("../day3/puzzle1");
describe.only('Test day 3', () => {
    test('test puzzle 1', () => {
        const sampleInput = ['test'];
        const gemma = (0, puzzle1_1.getGemmaFromBinary)(sampleInput);
        expect(gemma).toEqual(22);
    });
});
