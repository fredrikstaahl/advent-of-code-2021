import fs from 'fs';

const runPuzzle = (): void => {
  const puzzleInput: number[] = [];
  fs.readFile('/Users/fredrikstahl/workspace/adventOfCode/2021/puzzleInput-1.txt', 'utf8', (err, data) => {
    if (err) console.log(err);

    data.split('\n').forEach((row) => {
      puzzleInput.push(parseInt(row));
    });
    const noOfDepthIncreases = reportSonar(puzzleInput);
    console.log(noOfDepthIncreases);
  });
};

export const reportSonar = (sonarReport: number[]): number => {
  let depthIncrease = 0;

  for (let i = 0; i < sonarReport.length; i++) {
    //report starts with no previous measurement
    if (i == 0) continue;

    const previousDepth = sonarReport[i - 1];
    const depth = sonarReport[i];

    if (depth > previousDepth) {
      depthIncrease++;
    }
  }
  return depthIncrease;
};

//Runs puzzle prints result.
runPuzzle();
