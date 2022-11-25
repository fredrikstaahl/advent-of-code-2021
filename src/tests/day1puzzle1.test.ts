import { reportSonar } from '../day1/puzzle1';
describe('Test problem 1', () => {
  test('test with sample input', () => {
    const puzzleInput: number[] = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const expectedNoOfDepthIncreases = 7;
    const noOfDepthIncreases = reportSonar(puzzleInput);

    expect(noOfDepthIncreases).toEqual(expectedNoOfDepthIncreases);
  });
});
