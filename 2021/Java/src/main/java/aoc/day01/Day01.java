package aoc.day01;

import aoc.Day;
import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

import static java.lang.System.arraycopy;

public class Day01 implements Day {

    private String biggerNum(List<Integer> intList) {
        int counter = 0;

        for (int i = 1; i < intList.size(); i++) {
            if (intList.get(i - 1) < intList.get(i)) {
                counter++;
            }
        }

        return Integer.toString(counter);
    }

    //Change String to Integer List
    private List<Integer> strToIntList(List<String> strList){

        List<Integer> intList = new ArrayList<Integer>();
        for (String s : strList) intList.add(Integer.valueOf(s));
        return intList;
    }

    @Override
    public String part1(List<String> input) {
        //Change String to Integer List
        List<Integer> intList = strToIntList(input);

        //Function to find answer and convert to String
        String answer = biggerNum(intList);
        return answer;
    }

    @Override
    public String part2(List<String> input) {
        //Change String to Integer List
        List<Integer> intList = strToIntList(input);

        int counter = 0;

        for (int i = 0; i < intList.size()-3; i++) {
            int groupOneSum = 0 , groupTwoSum = 0;
            for (int j = i; j < i + 3 ;j++){
                groupOneSum +=  intList.get(j);
                groupTwoSum +=  intList.get(j+1);
            }

            if (groupOneSum < groupTwoSum){
                counter++;
            }
        }
        return Integer.toString(counter);
    }

}
