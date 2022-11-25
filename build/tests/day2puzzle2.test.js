"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puzzle2_1 = require("../day2/puzzle2");
describe.only('Test day 3', () => {
    test('test puzzle 2', () => {
        const commands = [];
        commands.push({ action: 'forward', value: 5 });
        commands.push({ action: 'down', value: 5 });
        commands.push({ action: 'forward', value: 8 });
        commands.push({ action: 'up', value: 3 });
        commands.push({ action: 'down', value: 8 });
        commands.push({ action: 'forward', value: 2 });
        const finalPosition = (0, puzzle2_1.dive)(commands);
        expect(finalPosition.depth).toEqual(60);
        expect(finalPosition.horizontal).toEqual(15);
        expect(finalPosition.horizontal * finalPosition.depth).toEqual(900);
    });
});
