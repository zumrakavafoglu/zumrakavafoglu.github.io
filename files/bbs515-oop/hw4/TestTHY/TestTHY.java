import java.util.Scanner;

public class TestTHY {

    public static void main(String[] args) {

        UcakRezervasyonSistemi thyRezervasyonSistemi = new THYRezervasyonSistemi(5);

        Scanner input = new Scanner(System.in);

        String inputKey = "c";

        while(inputKey.equals("c" )|| inputKey.equals("C")){
            thyRezervasyonSistemi.rezervasyonAl();
            System.out.println("\nDevam etmek için c'ye, çıkmak için herhangi başka bir tuşa basınız ");
            inputKey = input.next();
        }

    }
}
