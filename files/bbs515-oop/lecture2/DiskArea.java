
//Zumra Kavafoglu
//02.10.2017

/*
Program that reads a radius from the user
 and calculates the disk area with that radius
  */

import java.util.Scanner;

public class DiskArea {

    public static void main(String args[]) {

        //radius of the disk
        double radius;

        //area of the disk
        double area;

        //constant pi value
        final double  PI = 3.14;

        //create Scanner instance to obtain input from command window
        Scanner input = new Scanner(System.in);

        System.out.print("Enter the radius: ");

        //read radius from user
        radius = input.nextDouble();

        //calculate disk area
        area = PI * radius * radius;

        //Print radius and area to the command window
        System.out.printf("\n Area of the disk with radius %.2f is %.2f ",radius,area);

    }

}
