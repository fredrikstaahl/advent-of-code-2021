"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puzzle1_1 = require("../day3/puzzle1");
const sampleInput = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
];
describe.only('Test day 3', () => {
    test('test getPowerConsumptionFromBinary', () => {
        const powerConsumption = (0, puzzle1_1.getPowerConsumptionFromBinary)(sampleInput);
        expect(powerConsumption).toEqual(198);
    });
    test('test getBitsByIndex', () => {
        const binary = ['1000', '0001'];
        const bitsByIndex = (0, puzzle1_1.getBitsByIndex)(binary);
        console.log(bitsByIndex);
        expect(bitsByIndex[0].length).toEqual(2);
        expect(bitsByIndex[1].length).toEqual(2);
        expect(bitsByIndex[0][0]).toEqual(1);
    });
});
