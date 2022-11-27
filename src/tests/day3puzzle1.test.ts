import { getPowerConsumptionFromBinary, getBitsByIndex } from '../day3/puzzle1';

const sampleInput: string[] = [
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
    const powerConsumption: number = getPowerConsumptionFromBinary(sampleInput);
    expect(powerConsumption).toEqual(198);
  });

  test('test getBitsByIndex', () => {
    const binary: string[] = ['1000', '0001'];
    const bitsByIndex: number[][] = getBitsByIndex(binary);
    console.log(bitsByIndex);
    expect(bitsByIndex[0].length).toEqual(2);
    expect(bitsByIndex[1].length).toEqual(2);
    expect(bitsByIndex[0][0]).toEqual(1);
  });
});
