import { reportSonar } from '../puzzle2';
describe('Test puzzle 2', () => {
  test('test with sample input', () => {
    const puzzleInput: number[] = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const expectedNoOfDepthIncreases = 6;
    const noOfDepthIncreases = reportSonar(puzzleInput);

    expect(noOfDepthIncreases).toEqual(expectedNoOfDepthIncreases);
  });
});
