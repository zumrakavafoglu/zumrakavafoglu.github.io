
package inheritanceExamples;

public class Student extends Person {

	private String studentNumber;
	private double average;
	
	public Student(){
		super();
		studentNumber = "unknown";
		average = 0;
	}
	
	public Student(String _name, String _surname, String _studentNumber, double _average)
	{
		super(_name,_surname);
		studentNumber = _studentNumber;
		setAverage(_average);
	}
	
	public void setStudentNumber(String _studentNumber)
	{
		studentNumber = _studentNumber;
	}
	
	public void setAverage(double _average)
	{
		if(average<0)
		{
			System.out.println("Wrong input!");
			average = 0;
		}
		else
			average = _average;
	}
	
	public String getStudentNumber()
	{
		return studentNumber;
	}
	
	public double getAverage()
	{
		return average;
	}
	


	public void accessPersonName()
	{
		String s;
		s = super.name;
	}
}
