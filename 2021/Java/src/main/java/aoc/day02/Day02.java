package aoc.day02;

import aoc.Day;

import java.util.List;

public class Day02 implements Day {

    private int positionAfterCommands(List<String> commandList) {
        int forward = 0, depth = 0;
        for (String s : commandList) {
            String[] command = s.split(" ");
            String direction = command[0];
            int size = Integer.valueOf(command[1]);
            if (direction.equals("forward")) {
                forward += size;
            } else if (direction.equals("down")) {
                depth += size;
            } else {
                depth -= size;
            }
        }
        return forward * depth;
    }

    private int positionWithAimCommands(List<String> aimCommandList) {
        int forward = 0, depth = 0, aim = 0;
        for (String s : aimCommandList) {
            String[] command = s.split(" ");
            String direction = command[0];
            int size = Integer.valueOf(command[1]);

            if (direction.equals("forward")) {
                forward += size;
                depth += (aim * size);
            } else if (direction.equals("down")) {
                aim += size;
            } else {
                aim -= size;
            }
        }
        return  forward * depth;
    }

    @Override
    public String part1(List<String> input) {
        int answer = positionAfterCommands(input);
        return Integer.toString(answer);
    }

    @Override
    public String part2(List<String> input) {


        int answer = positionWithAimCommands(input);
        return Integer.toString(answer);
    }

}
