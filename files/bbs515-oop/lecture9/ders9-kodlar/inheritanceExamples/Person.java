package inheritanceExamples;

public class Person {

	protected String name, surname;
	
	public Person()
	{
		name=surname="unknown";
	}
	
	public Person(String _name, String _surname)
	{
		name = _name;
		surname = _surname;
	}
	
	public void setName(String _name)
	{
		name = _name;
	}
	
	public void setSurname(String _surname)
	{
		surname = _surname;
	}
	
	public String getName()
	{
		return name;
	}
	
	public String getSurname()
	{
		return surname;
	}
}
