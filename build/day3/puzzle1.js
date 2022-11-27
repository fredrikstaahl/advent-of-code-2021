"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPowerConsumption = exports.getBitsByIndex = exports.getPowerConsumptionFromBinary = exports.getPuzzleInputFromFile = void 0;
const fs_1 = __importDefault(require("fs"));
const runPuzzle = () => {
    (0, exports.getPuzzleInputFromFile)().then((puzzleInput) => {
        const powerConsumption = (0, exports.getPowerConsumptionFromBinary)(puzzleInput);
        console.log(`Length of binary: ${puzzleInput.length}`);
        console.log(`Power consumption: ${powerConsumption}`);
    });
};
const getPuzzleInputFromFile = () => __awaiter(void 0, void 0, void 0, function* () {
    const puzzleInput = [];
    return new Promise((resolve, reject) => {
        fs_1.default.readFile('/Users/fredrikstahl/workspace/adventOfCode/2021/puzzleInput-day3.txt', 'utf8', (err, data) => {
            data.split('\n').forEach((row) => {
                puzzleInput.push(row);
            });
            resolve(puzzleInput);
        });
    });
});
exports.getPuzzleInputFromFile = getPuzzleInputFromFile;
const getPowerConsumptionFromBinary = (data) => {
    const bitsByIndex = (0, exports.getBitsByIndex)(data);
    const powerConsumption = (0, exports.getPowerConsumption)(bitsByIndex);
    return powerConsumption;
};
exports.getPowerConsumptionFromBinary = getPowerConsumptionFromBinary;
const getBitsByIndex = (data) => {
    //Get # of bits per row by checking length of first row
    const noOfBitsPerRow = data[0].length;
    const bitsByIndex = [];
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
exports.getBitsByIndex = getBitsByIndex;
const getPowerConsumption = (bitsByIndex) => {
    let gemma = '';
    let epsilon = '';
    for (let index = 0; index < bitsByIndex.length; index++) {
        let zeroCounter = 0;
        let oneCounter = 0;
        bitsByIndex[index].forEach((bit) => {
            if (bit == 0) {
                zeroCounter++;
            }
            else {
                oneCounter++;
            }
        });
        if (zeroCounter > oneCounter) {
            gemma += '0';
            epsilon += '1';
        }
        else if (zeroCounter < oneCounter) {
            gemma += '1';
            epsilon += '0';
        }
        else {
            console.log('Something is wrong..');
        }
    }
    console.log(`gemma = ${gemma}, epsilon = ${epsilon}`);
    console.log(`gemma (int) = ${parseInt(gemma, 2)}, epsilon (int) = ${parseInt(epsilon, 2)}`);
    return parseInt(gemma, 2) * parseInt(epsilon, 2);
};
exports.getPowerConsumption = getPowerConsumption;
runPuzzle();
