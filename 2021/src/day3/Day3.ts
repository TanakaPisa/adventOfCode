import { Day } from "../shared/day";
import { readFileForDay, readExampleFileForDay } from "../shared/fileToArray";

function mostCommon(array, i) {
  let one = 0;
  let zero = 0;
  for (let j = 0; j < array.length; j++) {
    const element = array[j][i];
    if (parseInt(element) === 1) {
      one++;
    } else {
      zero++;
    }
  }
  if (one > zero || one === zero) {
    return "1";
  } else {
    return "0";
  } 
}

function LeastCommon(array, i) {
  let one = 0;
  let zero = 0;
  for (let j = 0; j < array.length; j++) {
    const element = array[j][i];
    if (parseInt(element) === 1) {
      one++;
    } else {
      zero++;
    }
  }
  if (one > zero || one === zero) {
    return "0";
  } else {
    return "1";
  } 
}

export default {
  solvePartOne: (input: string[]): string => {
    input = readFileForDay(3);
    let mostCom = "";
    let leastCom = "";
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
        leastCom += "1";
      } else {
        mostCom += "1";
        leastCom += "0";
      }
      zero = 0;
      one = 0;
    }
    let decimal = parseInt(mostCom, 2);
    let gamma = parseInt(leastCom, 2);
    let power = decimal * gamma;
    return power.toString();
  },
  solvePartTwo: (input: string[]): string => {
    input = readFileForDay(3);
    let CO2scrubber = [...input];
    let oxygenGenerator = [...input];
    let val = "";
    let oxCount = 0;
    let CO2Count = 0
    while (oxygenGenerator.length != 1) {
      val = mostCommon(oxygenGenerator, oxCount);
      if (val === "1") {
        oxygenGenerator = oxygenGenerator.filter((one) => one[oxCount] === "1");
      } else {
        oxygenGenerator = oxygenGenerator.filter(
          (zero) => zero[oxCount] === "0"
        );
      }
      oxCount++;
    }

    while (CO2scrubber.length != 1) {
      val = LeastCommon(CO2scrubber, CO2Count);
      if (val === "1") {
        CO2scrubber = CO2scrubber.filter((one) => one[CO2Count] === "1");
      } else {
        CO2scrubber = CO2scrubber.filter(
          (zero) => zero[CO2Count] === "0"
        );
      }
      CO2Count++;
    }
    let oxDecimal = parseInt(oxygenGenerator[0], 2);
    let CO2 = parseInt(CO2scrubber[0], 2);
    let lifeSupport = CO2 * oxDecimal;
    return lifeSupport.toString();
  },
} as Day;
