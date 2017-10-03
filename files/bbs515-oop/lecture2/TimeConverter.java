
//Zumra Kavafoglu
//02.10.2017

/*
Program that converts time in seconds
to hours, minutes and seconds
 */

import java.util.Scanner;

public class TimeConverter {

    public static void main(String args[]) {

        int timeInSeconds;

        int hours;

        int minutes;

        int seconds;

        int remainderFromHours;

        //create Scanner instance to obtain input from command window
        Scanner input = new Scanner(System.in);

        System.out.print("Enter time in seconds: ");

        timeInSeconds = input.nextInt();

        hours = timeInSeconds / 3600;

        remainderFromHours = timeInSeconds % 3600;

        minutes = remainderFromHours / 60;

        seconds = remainderFromHours % 60;

        System.out.printf("H:%d M:%d S:%d \n", hours, minutes, seconds);
    }
}
