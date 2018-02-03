import java.util.StringTokenizer;

public class Main {

    public static void main(String[] args){

        Sifreci sifreci1 = new Sifreci();

        String harita ="fyazdblnuvcspogwthjximekqr";

        Sifreci sifreci2 = new Sifreci(harita);

        KompleksSifreci kompleksSifreci1 = new KompleksSifreci(2);

        KompleksSifreci kompleksSifreci2 = new KompleksSifreci(harita, 4);

        System.out.println("\nsifreci1 : " + sifreci1);
        System.out.println("sifreci2 : " + sifreci2);
        System.out.println("kompleksSifreci1 : " + kompleksSifreci1);
        System.out.println("kompleksSifreci2 : " + kompleksSifreci2);

        String yanlisHarita = "hjklasdfgfdsalkjbgrgbnj";

        int yanlisAnahtar = -2;

        KompleksSifreci yanlisSifreci = new KompleksSifreci(yanlisHarita, yanlisAnahtar);

        System.out.println("yanlisSifreci : " + yanlisSifreci);

        String cumle = "the quick brown fox jumps over the lazy dog";

        //sifreci1 ile sifrelenmiş cümle
        String sifrelenmisCumle1 = "";

        //sifreci2 ile sifrelenmis cumle
        String sifrelenmisCumle2 = "";

        //kompleksSifreci1 ile sifrelenmiş cümle
        String kompleksSifrelenmisCumle1 = "";

        //kompleksSifreci2  ile sifrelenmis cumle
        String kompleksSifrelenmisCumle2 = "";

        StringTokenizer cumleTokenizer = new StringTokenizer(cumle);


        /*

        Burada, cumleTokenizer'ı kullanarak cumle'yi kelimelerine ayırın ve
         her bir kelimeyi sifreleyerek şifrelenmiş yeni cümleyi oluşturun.

         */

        System.out.println("Sifrelenecek cumle: " + cumle);

        System.out.println("\nsifreci1 ile sifrelenmis cumle: " + sifrelenmisCumle1);
        System.out.println("\nsifreci2 ile sifrelenmis cumle: " + sifrelenmisCumle2);

        System.out.println("\nkompleksSifreci1 ile sifrelenmis cumle: " + kompleksSifrelenmisCumle1);
        System.out.println("\nkompleksSifreci2 ile sifrelenmis cumle: " + kompleksSifrelenmisCumle2);

    }
}
