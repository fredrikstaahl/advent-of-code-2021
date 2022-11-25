import fs from 'fs';

const runPuzzle = (): void => {
  const puzzleInput: number[] = [];
  fs.readFile('/Users/fredrikstahl/workspace/adventOfCode/2021/puzzleInput-day1.txt', 'utf8', (err, data) => {
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
  let previousSum = 0;
  for (let i = 0; i < sonarReport.length - 2; i++) {
    let slidingWindowSum = 0;

    for (let y = i; y < i + 3; y++) {
      slidingWindowSum += sonarReport[y];
    }

    //report starts with no previous measurement
    if (i == 0) {
      previousSum = slidingWindowSum;
      continue;
    }
    if (slidingWindowSum > previousSum) {
      depthIncrease++;
    }
    previousSum = slidingWindowSum;
  }
  return depthIncrease;
};

runPuzzle();
