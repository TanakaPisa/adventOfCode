package aoc.day03;

import aoc.Day;

import java.util.ArrayList;
import java.util.List;

public class Day03 implements Day {

    private String createColumn(List<String> binaryNumbers, Integer i) {
        String column = "";
        for (int j = 0; j < binaryNumbers.size(); j++) {
            column += binaryNumbers.get(j).charAt(i);
        }
        return column;
    }

    private String CommonBit(String column) {
        Integer one = 0;
        Integer zero = 0;

        String mostLeast = "";
        for (int i = 0; i < column.length(); i++) {
            char num = column.charAt(i);
            Integer value = Integer.parseInt(String.valueOf(num));
            if (value.equals(1)) {
                one++;
            } else {
                zero++;
            }
        }

        if (one >= zero) {
            mostLeast = "10";
        } else {
            mostLeast = "01";
        }
        return mostLeast;
    }

    private int powerConsumption(List<String> binaryNumbers) {
        String gamma = "", eplison = "", mostLeast = "";
        for (int i = 0; i < binaryNumbers.get(0).length(); i++) {
            mostLeast = CommonBit(createColumn(binaryNumbers, i));
            gamma += mostLeast.charAt(0);
            eplison += mostLeast.charAt(1);

        }
        return Integer.parseInt(gamma, 2) * Integer.parseInt(eplison, 2);
    }

    private int oxygenGeneratorRating(List<String> input) {
        List<String> answer = new ArrayList<>(input);
        Integer i = 0;
        while (answer.size() > 1) {
            List<String> newInput = new ArrayList<>(answer);
            String mostLeast = CommonBit(createColumn(answer, i));
            for (String s :
                    newInput) {
                String compareString = Character.toString(s.charAt(i));
                if (compareString.equals("1") && mostLeast.equals("01")) {
                    answer.remove(s);
                } else if (compareString.equals("0") && mostLeast.equals("10")) {
                    answer.remove(s);
                } else {
                    continue;
                }
            }
            i++;
        }

        return Integer.parseInt(answer.get(0), 2);
    }

    private int CO2ScrubberRating(List<String> input) {
        List<String> answer = new ArrayList<>(input);
        Integer i = 0;
        while (answer.size() > 1) {
            List<String> newInput = new ArrayList<>(answer);
            String mostLeast = CommonBit(createColumn(answer, i));
            for (String s :
                    newInput) {
                String compareString = Character.toString(s.charAt(i));
                if (compareString.equals("1") && mostLeast.equals("10")) {
                    answer.remove(s);
                } else if (compareString.equals("0") && mostLeast.equals("01")) {
                    answer.remove(s);
                } else {
                    continue;
                }
            }
            i++;
        }

        return Integer.parseInt(answer.get(0), 2);
    }

    @Override
    public String part1(List<String> input) {
        int answer = powerConsumption(input);
        return Integer.toString(answer);
    }

    @Override
    public String part2(List<String> input) {

        int answer = oxygenGeneratorRating(input) * CO2ScrubberRating(input);
        System.out.println(answer);
        return "helloP2";
    }

}
