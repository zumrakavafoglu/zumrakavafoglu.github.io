import java.util.Scanner;

public class TestPegasus {

    public static void main(String[] args) {

        UcakRezervasyonSistemi pegasusRezervasyonSistemi = new PegasusRezervasyonSistemi(7);

        Scanner input = new Scanner(System.in);

        String inputKey = "c";

        while(inputKey.equals("c" )|| inputKey.equals("C")){
            pegasusRezervasyonSistemi.rezervasyonAl();
            System.out.println("\nDevam etmek için c'ye, çıkmak için herhangi başka bir tuşa basınız ");
            inputKey = input.next();
        }

    }
}
