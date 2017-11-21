package inheritanceExamples;

public class Foo {

	int x=0; //Global variable
	int y=0;
	
	void p()
	{
		int x=1; //local variable
		System.out.println("x= "+x);
		System.out.println("y= "+y);
	}
}
