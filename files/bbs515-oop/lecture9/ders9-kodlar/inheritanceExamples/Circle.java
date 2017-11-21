
package inheritanceExamples;

public class Circle {

	private double radius;
	
	public Circle()
	{
		radius = 1.0;
	}
		
	public Circle(double r)
	{
		setRadius(r);
	}
	
	public double getRadius()
	{
		return radius;
	}
		
	public void setRadius(double newRadius)
	{
		if(newRadius<0)
		{
			System.out.println("Wrong radius value!");
			radius=1;
		}
		else
			radius = newRadius;
	}
	
	public double findArea()
	{
		return radius*radius*Math.PI;
	}
}
