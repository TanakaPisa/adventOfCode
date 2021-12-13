
import { Day } from '../shared/day';
import { readFileForDay, readExampleFileForDay } from "../shared/fileToArray";

export default {
    solvePartOne: (input: string[]): string => {
        input = readFileForDay(2)
        let numbers = input.map(s => s.split(' '))
        let horizontal = 0
        let depth = 0
        for (let i = 0; i < numbers.length; i++) {
            if(numbers[i][0]==="forward"){horizontal+=parseInt(numbers[i][1])}
            else if(numbers[i][0]==="down"){depth+=parseInt(numbers[i][1])}
            else{depth-=parseInt(numbers[i][1])}
        }
        let total = horizontal * depth
        return total.toString()
    },
    solvePartTwo: (input: string[]): string => {
        input = readFileForDay(2)
        let numbers = input.map(s => s.split(' '))
        let horizontal = 0
        let depth = 0
        let aim = 0
        for (let i = 0; i < numbers.length; i++) {
            if(numbers[i][0]==="forward"){
                horizontal+=parseInt(numbers[i][1])
                depth = depth + (aim * parseInt(numbers[i][1]))
            }
            else if(numbers[i][0]==="down"){
                aim+=parseInt(numbers[i][1])
            }
            else{
                aim-=parseInt(numbers[i][1])}
        }
        let total = horizontal * depth
        return total.toString()
    }
} as Day
