import fs from 'fs';

const runPuzzle = (): void => {
  getPuzzleInputFromFile().then((puzzleInput) => {
    const position = dive(puzzleInput);
    console.log(`Position is depth:${position.depth}, horizontal:${position.horizontal}`);
    console.log(
      `horizontal position ${position.horizontal} x final depth (${position.depth}) = ${
        position.horizontal * position.depth
      }`
    );
  });
};

export const getPuzzleInputFromFile = async (): Promise<SubmarineCommand[]> => {
  const puzzleInput: SubmarineCommand[] = [];
  return new Promise((resolve, reject) => {
    fs.readFile('/Users/fredrikstahl/workspace/adventOfCode/2021/puzzleInput-day2.txt', 'utf8', (err, data) => {
      data.split('\n').forEach((row) => {
        const action = row.split(' ')[0];
        const value = row.split(' ')[1];
        puzzleInput.push({ action: action, value: parseInt(value) });
      });
      resolve(puzzleInput);
    });
  });
};

export type SubmarineCommand = {
  action: string;
  value: number;
};

export class Position {
  horizontal: number = 0;
  depth: number = 0;

  up(value: number): void {
    this.depth -= value;
  }

  down(value: number): void {
    this.depth += value;
  }

  forward(value: number): void {
    this.horizontal += value;
  }
}

export const dive = (submarineCommands: SubmarineCommand[]): Position => {
  const position = new Position();

  for (let i = 0; i < submarineCommands.length; i++) {
    const command = submarineCommands[i];
    switch (command.action) {
      case 'forward':
        position.forward(command.value);
        break;
      case 'down':
        position.down(command.value);
        break;
      case 'up':
        position.up(command.value);
      default:
        break;
    }
  }
  return position;
};

//Runs puzzle prints result.
runPuzzle();
