"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puzzle3_1 = require("../puzzle3");
describe('Test puzzle 3', () => {
    test('sample input', () => {
        const commands = [];
        commands.push({ action: 'forward', value: 5 });
        commands.push({ action: 'down', value: 5 });
        commands.push({ action: 'forward', value: 8 });
        commands.push({ action: 'up', value: 3 });
        commands.push({ action: 'down', value: 8 });
        commands.push({ action: 'forward', value: 2 });
        const finalPosition = (0, puzzle3_1.dive)(commands);
        expect(finalPosition.depth).toEqual(10);
        expect(finalPosition.horizontal).toEqual(15);
    });
});
