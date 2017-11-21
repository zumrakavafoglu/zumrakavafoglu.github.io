package stringExamples;

import java.util.Scanner;

public class CheckPalindrome {
    public static void main(String[] args){

        System.out.print("Enter a string: ");

        Scanner input = new Scanner(System.in);

        String s = input.nextLine();

        if(isPalindrome(s)){
            System.out.println(s + " is a palindrome");
        }
        else{
            System.out.println(s + " is not a palindrome");
        }
    }

    public static boolean isPalindrome(String s){

        int low = 0;

        int up = s.length()-1;

        while(low < up){
            if(s.charAt(low) != s.charAt(up))
                return false;

            low++;
            up--;
        }

        return true;
    }
}
