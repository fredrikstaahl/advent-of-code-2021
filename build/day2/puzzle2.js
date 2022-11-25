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
exports.dive = exports.Position = exports.getPuzzleInputFromFile = void 0;
const fs_1 = __importDefault(require("fs"));
const runPuzzle = () => {
    (0, exports.getPuzzleInputFromFile)().then((puzzleInput) => {
        const position = (0, exports.dive)(puzzleInput);
        console.log(`Position is depth:${position.depth}, horizontal:${position.horizontal}`);
        console.log(`horizontal position ${position.horizontal} x final depth (${position.depth}) = ${position.horizontal * position.depth}`);
    });
};
const getPuzzleInputFromFile = () => __awaiter(void 0, void 0, void 0, function* () {
    const puzzleInput = [];
    return new Promise((resolve, reject) => {
        fs_1.default.readFile('/Users/fredrikstahl/workspace/adventOfCode/2021/puzzleInput-day2.txt', 'utf8', (err, data) => {
            data.split('\n').forEach((row) => {
                const action = row.split(' ')[0];
                const value = row.split(' ')[1];
                puzzleInput.push({ action: action, value: parseInt(value) });
            });
            resolve(puzzleInput);
        });
    });
});
exports.getPuzzleInputFromFile = getPuzzleInputFromFile;
class Position {
    constructor() {
        this.horizontal = 0;
        this.depth = 0;
        this.aim = 0;
    }
    up(value) {
        //this.depth -= value;
        this.aim -= value;
    }
    down(value) {
        //this.depth += value;
        this.aim += value;
    }
    forward(value) {
        this.horizontal += value;
        this.depth += this.aim * value;
    }
}
exports.Position = Position;
const dive = (submarineCommands) => {
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
exports.dive = dive;
//Runs puzzle prints result.
runPuzzle();
