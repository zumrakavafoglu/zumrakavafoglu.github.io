
//Zumra Kavafoglu
//02.10.2017
/*
Program that splits the words of a sentence
written by the user
 */

import java.util.Scanner;

public class SplitWords {

    public static void main(String args[]) {

        String word1;

        String word2;

        //create Scanner instance to obtain input from command window
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a two-word sentence to split: ");

        word1 = input.next();
        word2 = input.next();

        System.out.printf("%s\n%s", word1, word2);
    }
}
