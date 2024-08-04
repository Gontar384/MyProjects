package base;

import java.math.BigDecimal;

public class Display {

    public static void opener(){
        System.out.println();
        System.out.println("Welcome to your favourite calculator!");
        System.out.println();
        System.out.println("==========================================");
        System.out.println();
        System.out.println("Enter number and then type:");
        System.out.println();
        System.out.println("+ to add");
        System.out.println("- to subtract");
        System.out.println("x to multiply");
        System.out.println("/ to divide");
        System.out.println("> to change symbol +/-");
        System.out.println("% to get percentage");
        System.out.println("C to clear");
        System.out.println();
        System.out.println("E to exit programme");
        System.out.println();
        System.out.println("==========================================");
        System.out.println();
    }

    public static void diplayer(Double x){
        System.out.println(" ".repeat(Display.conv(x).length())+"           |---|---|---|---|---|---|---|---|\n"+
          Display.conv(x)+ "           | + | - | X | / | > | % | C | E |\n"+
                           " ".repeat(Display.conv(x).length())+"           |---|---|---|---|---|---|---|---|");
    }

    public static String conv(double d){
        BigDecimal bd = new BigDecimal(Double.toString(d));
        return bd.stripTrailingZeros().toPlainString();
    }
}
