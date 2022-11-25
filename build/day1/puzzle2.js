"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportSonar = void 0;
const fs_1 = __importDefault(require("fs"));
const runPuzzle = () => {
    const puzzleInput = [];
    fs_1.default.readFile('/Users/fredrikstahl/workspace/adventOfCode/2021/puzzleInput-day1.txt', 'utf8', (err, data) => {
        if (err)
            console.log(err);
        data.split('\n').forEach((row) => {
            puzzleInput.push(parseInt(row));
        });
        const noOfDepthIncreases = (0, exports.reportSonar)(puzzleInput);
        console.log(noOfDepthIncreases);
    });
};
const reportSonar = (sonarReport) => {
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
exports.reportSonar = reportSonar;
runPuzzle();
