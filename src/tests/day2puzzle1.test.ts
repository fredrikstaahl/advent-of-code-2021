import { dive, Position, SubmarineCommand } from '../day2/puzzle1';

describe.only('Test day 3', () => {
  test('test puzzle 1', () => {
    const commands: SubmarineCommand[] = [];
    commands.push({ action: 'forward', value: 5 });
    commands.push({ action: 'down', value: 5 });
    commands.push({ action: 'forward', value: 8 });
    commands.push({ action: 'up', value: 3 });
    commands.push({ action: 'down', value: 8 });
    commands.push({ action: 'forward', value: 2 });

    const finalPosition: Position = dive(commands);

    expect(finalPosition.depth).toEqual(10);
    expect(finalPosition.horizontal).toEqual(15);
  });
});
