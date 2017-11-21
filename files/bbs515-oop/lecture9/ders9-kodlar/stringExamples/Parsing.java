package stringExamples;

public class Parsing {

	public static void main(String[] args) {
		
		String s1 = "12";
		int n1 = Integer.parseInt(s1);
		
		n1+=2;
		System.out.println(n1);
		
		double d = 4.7;
		String s = Double.toString(d);
		
		s+=" is a floating point number";
		
		System.out.println(s);
	}
}
