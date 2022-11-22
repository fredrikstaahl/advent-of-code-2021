import { dive, SubmarineCommand, Position } from '../puzzle3';

describe('Test puzzle 3', () => {
  test('sample input', () => {
    const commands: SubmarineCommand[] = [];
    commands.push({ action: 'forward', value: 5 });
    commands.push({ action: 'down', value: 5 });
    commands.push({ action: 'forward', value: 8 });
    commands.push({ action: 'up', value: 3 });
    commands.push({ action: 'down', value: 8 });
    commands.push({ action: 'forward', value: 2 });

    const finalPosition = dive(commands);

    expect(finalPosition.depth).toEqual(10);
    expect(finalPosition.horizontal).toEqual(15);
  });
});
