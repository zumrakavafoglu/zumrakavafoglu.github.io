
//Zumra Kavafoglu
//02.10.2017

/*
Program that reads two planar points from the user
and calculates the distance between them
 */

import java.util.Scanner;

public class DistanceBetweenPoints {
    public static void main(String args[]) {

        double point1X;

        double point1Y;

        double point2X;

        double point2Y;

        double distance;

        //create Scanner instance to obtain input from command window
        Scanner input = new Scanner(System.in);

        System.out.print("Enter first point coordinates seperated with comma:  ");

        point1X = input.nextDouble();

        input.next();

        point1Y = input.nextDouble();

        System.out.print("Enter second point coordinates seperated with comma: ");

        point2X = input.nextDouble();

        input.next();

        point2Y = input.nextDouble();

        distance = Math.sqrt( Math.pow( point1X - point2X, 2 ) + Math.pow( point1Y - point2Y, 2) );

        System.out.printf("Distance between (%.2f,%.2f) and (%.2f,%.2f) is %.2f \n", point1X, point1Y, point2X, point2Y, distance);

    }
}
