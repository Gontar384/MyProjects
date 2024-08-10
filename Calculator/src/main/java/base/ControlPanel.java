package base;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ControlPanel {
//test
    public static void calculator() {

        Scanner sc = new Scanner(System.in);

        char userChoice;
        double x = 0;
        double y;

        Display.opener();

        while (true) {

            try {
                x = sc.nextDouble();
                Display.diplayer(x);
            } catch (InputMismatchException e) {
                if (sc.next().equalsIgnoreCase("E")) {
                    System.exit(0);
                }
                System.out.println("If you want to leave, press E");
            }

            while (true) {
                if (x == 0) {
                    System.out.println(Display.conv(x));
                    break;
                }

                try {
                    userChoice = sc.next().toUpperCase().charAt(0);
                    switch (userChoice) {
                        case '+' -> {
                            y = sc.nextDouble();
                            x = x + y;
                            Display.diplayer(x);
                        }
                        case '-' -> {
                            y = sc.nextDouble();
                            x = x - y;
                            Display.diplayer(x);
                        }
                        case 'X' -> {
                            y = sc.nextDouble();
                            x = x * y;
                            Display.diplayer(x);
                        }
                        case '/' -> {
                            y = sc.nextDouble();
                            if (y == 0){
                                System.out.println("You cannot divide by zero!");
                                Display.diplayer(x);
                                break;
                            }
                            x = x / y;
                            Display.diplayer(x);
                        }
                        case '>' -> {
                            x = x * (-1);
                            Display.diplayer(x);
                        }
                        case '%' -> {
                            double z = x * 100;
                            Display.diplayer(z);
                        }
                        case 'C' -> x = 0;
                        case 'E' -> {
                            System.out.println("Leaving..");
                            sc.close();
                            System.exit(0);
                        }
                    }
                } catch (InputMismatchException e) {
                    System.out.println("Use numbers!");
                    Display.diplayer(x);
                }
            }
        }
    }
}
