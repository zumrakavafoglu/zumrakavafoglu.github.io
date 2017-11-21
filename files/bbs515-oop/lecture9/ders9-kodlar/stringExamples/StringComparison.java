package stringExamples;

public class StringComparison {

	public static void main(String[] args) {
		
		String string1 = new String("Kelime1");
		String string2 = string1;
		
		if(string1 == string2)
			System.out.println("String1 is equal to string2");
		else
			System.out.println("String1 is NOT equal to string2");

		String string3 = new String("Kelime1");
		
		if(string1 == string3)
			System.out.println("String1 is equal to string3");
		else
			System.out.println("String1 is NOT equal to string3");

		if(string1.equals(string3))
			System.out.println("Content of string1 is equal to string3 ");
		else
			System.out.println("Content of string1 is NOT equal to string3");
		
		System.out.println(string1+" compared to "+ string3 + ": " +string1.compareTo(string3));
		
		String string4 = new String("abc");
		String string5 = new String("abe");
		
		System.out.println(string4+" compared to "+string5+": "+string4.compareTo(string5));
		
		String string6 = new String("cef");
		String string7 = new String("cdk");
		
		System.out.println(string6+" compared to "+string7+": "+string6.compareTo(string7));

		String string8 = "Merhaba";
		String string9 = "mERhaBA";

		if(string8.equals(string9))
			System.out.println(string8+" is equal to "+string9+" with equals method");
		else
			System.out.println(string8+" is NOT equal to "+string9+" with equals method");

		if(string8.equalsIgnoreCase(string9))
			System.out.println(string8+" is equal to "+string9+" with equalsIgnoreCase method");
		else
			System.out.println(string8+" is NOT equal to "+string9+" with equalsIgnoreCase method");

	}
}
