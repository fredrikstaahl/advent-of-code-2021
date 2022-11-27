import fs from 'fs';

const runPuzzle = (): void => {
  getPuzzleInputFromFile().then((puzzleInput) => {
    const powerConsumption = getPowerConsumptionFromBinary(puzzleInput);
    console.log(`Length of binary: ${puzzleInput.length}`);
    console.log(`Power consumption: ${powerConsumption}`);
  });
};

export const getPuzzleInputFromFile = async (): Promise<string[]> => {
  const puzzleInput: string[] = [];
  return new Promise((resolve, reject) => {
    fs.readFile('/Users/fredrikstahl/workspace/adventOfCode/2021/puzzleInput-day3.txt', 'utf8', (err, data) => {
      data.split('\n').forEach((row) => {
        puzzleInput.push(row);
      });
      resolve(puzzleInput);
    });
  });
};

export const getPowerConsumptionFromBinary = (data: string[]): number => {
  const bitsByIndex: number[][] = getBitsByIndex(data);
  const powerConsumption: number = getPowerConsumption(bitsByIndex);
  return powerConsumption;
};

export const getBitsByIndex = (data: string[]): number[][] => {
  //Get # of bits per row by checking length of first row
  const noOfBitsPerRow = data[0].length;

  const bitsByIndex: number[][] = [];

  for (let index = 0; index < noOfBitsPerRow; index++) {
    bitsByIndex.push([]);
  }

  for (let rowNum = 0; rowNum < data.length; rowNum++) {
    console.log(`going through row ${data[rowNum]}`);
    for (let charNum = 0; charNum < data[rowNum].length; charNum++) {
      console.log(`get bit from ${data[rowNum]} using charNum ${charNum}`);
      //Add bit to corresponding row.
      const bit = parseInt(data[rowNum].charAt(charNum));
      bitsByIndex[charNum].push(bit);
    }
  }
  return bitsByIndex;
};

export const getPowerConsumption = (bitsByIndex: number[][]): number => {
  let gemma: string = '';
  let epsilon: string = '';

  for (let index = 0; index < bitsByIndex.length; index++) {
    let zeroCounter = 0;
    let oneCounter = 0;

    bitsByIndex[index].forEach((bit) => {
      if (bit == 0) {
        zeroCounter++;
      } else {
        oneCounter++;
      }
    });
    if (zeroCounter > oneCounter) {
      gemma += '0';
      epsilon += '1';
    } else if (zeroCounter < oneCounter) {
      gemma += '1';
      epsilon += '0';
    } else {
      console.log('Something is wrong..');
    }
  }
  console.log(`gemma = ${gemma}, epsilon = ${epsilon}`);
  console.log(`gemma (int) = ${parseInt(gemma, 2)}, epsilon (int) = ${parseInt(epsilon, 2)}`);
  return parseInt(gemma, 2) * parseInt(epsilon, 2);
};

runPuzzle();
