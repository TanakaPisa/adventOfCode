import { Day } from '../shared/day';
import { readFileForDay, readExampleFileForDay } from "../shared/fileToArray";

export default {
    solvePartOne: (input: string[]): string => {
        input = readFileForDay(1)
        let increase = 0
        for (let i = 1; i < input.length; i++) {
            if(parseInt(input[i])>parseInt(input[i-1])){increase++}
        }
        return increase.toString()
    },
    solvePartTwo: (input: string[]): string => {
        input = readFileForDay(1)
        let numbers = input.map(s => parseInt(s))
        let prev = 0
        let next = 0
        let increase = 0
        for (let i = 3; i < numbers.length; i++) {
            next = numbers[i] + numbers[i-1] + numbers[i-2]
            prev = numbers[i-1] + numbers[i-2] + numbers[i-3]
            if(next>prev){increase++}
        }
        return increase.toString()
    }
} as Day
