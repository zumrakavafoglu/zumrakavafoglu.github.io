package stringExamples;

public class AppendString {

	public static void main(String[] args) {
		
		StringBuffer strBuf = new StringBuffer();
		
		strBuf.append("Welcome");
		strBuf.append(" ");
		strBuf.append("to");
		strBuf.append(" ");
		strBuf.append("Java");

		System.out.println(strBuf);

		strBuf.insert(11, "magnificient ");
		System.out.println(strBuf);
		
		strBuf.setLength(5);
		System.out.println(strBuf);
		
		strBuf.setCharAt(2, 'p');
		System.out.println(strBuf);

		strBuf.reverse();
		System.out.println(strBuf);
	
		
	}
	
}
