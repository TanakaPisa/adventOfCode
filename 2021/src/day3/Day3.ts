import { Day } from "../shared/day";
import { readFileForDay, readExampleFileForDay } from "../shared/fileToArray";

export default {
  solvePartOne: (input: string[]): string => {
    input = readFileForDay(3);
    let mostCom = "";
    let leastCom = ""
    let one = 0;
    let zero = 0;
    for (let i = 0; i < input[0].length; i++) {
      for (let j = 0; j < input.length; j++) {
        const element = input[j][i];
        if (parseInt(element) === 1) {
          one++;
        } else {
          zero++;
        }
      }
      if (zero > one) {
        mostCom += "0";
        leastCom += "1"
      } else {
        mostCom += "1";
        leastCom += "0"
      }
      zero = 0
      one = 0
    }
    let decimal = parseInt(mostCom, 2);
    let gamma = parseInt(leastCom, 2);
    let power = decimal * gamma
    return power.toString();
  },
  solvePartTwo: (input: string[]): string => {
    input = readExampleFileForDay(3);
    return "two";
  },
} as Day;
