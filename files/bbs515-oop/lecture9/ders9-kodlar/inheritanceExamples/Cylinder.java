package inheritanceExamples;

public class Cylinder extends Circle {

	private double height;

	public Cylinder()
	{
		super();
		height =1.0;
	}

	public Cylinder(double _radius, double _height)
	{
		super(_radius);
		setHeight(_height);
	}

	public void setHeight(double _height)
	{
		if(_height<0)
		{
			System.out.println("Wrong height value");
			height=1;
		}
		else
			height=_height;
	}

	public double getHeight()
	{
		return height;
	}

	public double findArea()
	{
		return 2*super.findArea()+2*Math.PI*getRadius()*height;
	}

	public double findVolume()
	{
		return super.findArea()*height;
	}



}
