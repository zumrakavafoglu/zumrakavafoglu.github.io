public class TestKume {
    public static void main(String[] args){

        int[] kume1Elemanlari = {2, 4, 6, 7};
        Kume kume1 = new Kume(kume1Elemanlari);

        int[] kume2Elemanlari = {1, 8, 2};
        Kume kume2 = new Kume(kume2Elemanlari);

        System.out.print("Kume1: ");
        kume1.yazdir();

        System.out.print("Kume2: ");
        kume2.yazdir();

        System.out.println();
        kume2.elemanEkle(12);
        kume2.elemanEkle(8);
        kume2.elemanEkle(10);

        System.out.println();
        kume2.elemanCikar(100);
        kume2.elemanCikar(7);
        kume2.elemanCikar(8);

        System.out.println();

        System.out.print("Kume1: ");
        kume1.yazdir();

        System.out.print("Kume2: ");
        kume2.yazdir();

        System.out.println();

        System.out.print("Birlesim: ");
        kume1.birlesim(kume2).yazdir();

        System.out.print("Kesisim: ");
        kume1.kesisim(kume2).yazdir();

        System.out.print("Kume1'in tumleyeni");
        kume1.tumleyen().yazdir();

        System.out.println();
        int x = 4;
        System.out.printf("%d kume1'in elemani mi: %b \n", x, kume1.elemanMi(x));

        x = 10;
        System.out.printf("%d kume1'in elemani mi: %b \n", x, kume1.elemanMi(x));

        System.out.println();


        Kume kume3 = new Kume();
        System.out.print("Kume3: ");
        kume3.yazdir();
        System.out.printf("Kume3 bos mu: %b \n", kume3.bosMu());
        System.out.printf("Kume2 bos mu: %b \n", kume2.bosMu());



    }

}
