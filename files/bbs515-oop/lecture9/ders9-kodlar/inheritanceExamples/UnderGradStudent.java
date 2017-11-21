package inheritanceExamples;

public class UnderGradStudent extends Student{

	private int absentDays;

	public UnderGradStudent()
	{
		super();
		absentDays = 0;
	}
	
	public UnderGradStudent(String _name, String _surname,String _studentNumber, double _average, int _absentDays)
	{
		super(_name,_surname,_studentNumber,_average);
		setAbsentDays(_absentDays);
	}

	public int getAbsentDays() {
		return absentDays;
	}

	public void setAbsentDays(int _absentDays){
		if(_absentDays < 0){
			System.out.println("Wrong input!");
			absentDays = 0;
		}else{
			absentDays = _absentDays;
		}
	}
}

