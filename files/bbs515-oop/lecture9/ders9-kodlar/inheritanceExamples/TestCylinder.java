package inheritanceExamples;

public class TestCylinder {

    public static void main(String[] args){

        Circle myCircle = new Circle(3);
        System.out.printf("Area of circle is: %.2f \n", myCircle.findArea());

        Cylinder myCylinder = new Cylinder(5,2);
        System.out.printf("Area of cylinder is: %.2f \n", myCylinder.findArea());

    }

}
