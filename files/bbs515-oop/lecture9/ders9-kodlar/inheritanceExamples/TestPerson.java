
package inheritanceExamples;

public class TestPerson {

	public static void main(String[] args) {
		Person p = new Person("Ahmet","Demir");
		System.out.println(p.getName());

		Student s = new Student("Mehmet","Demir","20217898",70);
		System.out.println(s.getName());
		System.out.println(s.getStudentNumber());

		UnderGradStudent u = new UnderGradStudent("Ali","Demir","2098767",80,10);
		System.out.println(u.getSurname());
		System.out.println(u.getAbsentDays());

	}
}


